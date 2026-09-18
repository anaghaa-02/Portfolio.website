import { NextResponse } from 'next/server'
import { certifications, education, experiences, profile, skillGroups, stats } from '@/lib/site-data'

const portfolioContext = JSON.stringify({ profile, stats, education, skills: skillGroups, experience: experiences, certifications })

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) return NextResponse.json({ error: 'Gemini API key is not configured on the server.' }, { status: 500 })

    const body = await request.json()
    const message = typeof body?.message === 'string' ? body.message.trim() : ''
    const history = Array.isArray(body?.history) ? body.history : []
    if (!message) return NextResponse.json({ error: 'Please enter a message.' }, { status: 400 })

    const contents = [
      ...history
        .filter((item: unknown): item is { role: 'user' | 'model'; text: string } =>
          typeof item === 'object' && item !== null && 'role' in item && 'text' in item &&
          (item.role === 'user' || item.role === 'model') && typeof item.text === 'string')
        .slice(-10)
        .map((item) => ({ role: item.role, parts: [{ text: item.text }] })),
      { role: 'user', parts: [{ text: message }] },
    ]

    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: `You are the AI assistant for Anagha M S's portfolio website. Answer using only the portfolio information below. Be friendly, concise, professional, and helpful. If something is not provided, say you don't have that information instead of inventing it.\n\nPORTFOLIO DATA:\n${portfolioContext}` }] },
        contents,
        generationConfig: { temperature: 0.4, maxOutputTokens: 500 },
      }),
    })

    if (!response.ok) {
      console.error('Gemini API error:', await response.text())
      return NextResponse.json({ error: 'The AI service could not respond right now. Please try again.' }, { status: 502 })
    }

    const data = await response.json()
    const text = data?.candidates?.[0]?.content?.parts?.map((part: { text?: string }) => part.text ?? '').join('').trim()
    if (!text) return NextResponse.json({ error: 'The AI returned an empty response.' }, { status: 502 })
    return NextResponse.json({ reply: text })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
