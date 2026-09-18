'use client'

import { FormEvent, useState } from 'react'
import { Bot, MessageCircle, Send, Sparkles, X } from 'lucide-react'

type Message = { role: 'user' | 'model'; text: string }

const suggestions = ['Who is Anagha?', 'What are her skills?', 'Tell me about her projects.']

export function Chatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi! I'm Anagha's AI Portfolio Assistant. Ask me about her skills, projects, education, experience, or certifications." },
  ])

  async function sendMessage(event?: FormEvent, suggested?: string) {
    event?.preventDefault()
    const text = (suggested ?? input).trim()
    if (!text || loading) return

    const nextMessages = [...messages, { role: 'user' as const, text }]
    setMessages(nextMessages)
    setInput('')
    setLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history: messages.slice(-10) }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data?.error || 'Request failed')
      setMessages([...nextMessages, { role: 'model', text: data.reply }])
    } catch (error) {
      setMessages([...nextMessages, { role: 'model', text: error instanceof Error ? error.message : 'Sorry, something went wrong. Please try again.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-4 z-50 flex h-[min(620px,calc(100vh-7rem))] w-[min(390px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-foreground text-background"><Bot className="size-5" /></div>
              <div><p className="font-semibold">AI Portfolio Assistant</p><p className="text-xs text-muted-foreground">Ask about Anagha</p></div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="rounded-full p-2 text-muted-foreground hover:bg-muted"><X className="size-5" /></button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm ${message.role === 'user' ? 'rounded-br-md bg-foreground text-background' : 'rounded-bl-md bg-muted'}`}>{message.text}</div>
              </div>
            ))}
            {messages.length === 1 && !loading && (
              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-1 text-xs text-muted-foreground"><Sparkles className="size-3" /> Try asking</div>
                {suggestions.map((suggestion) => <button key={suggestion} onClick={() => sendMessage(undefined, suggestion)} className="mr-1 rounded-full border border-border px-3 py-1.5 text-xs hover:bg-muted">{suggestion}</button>)}
              </div>
            )}
            {loading && <div className="flex justify-start"><div className="rounded-2xl rounded-bl-md bg-muted px-4 py-3 text-sm text-muted-foreground">Thinking…</div></div>}
          </div>

          <form onSubmit={sendMessage} className="border-t border-border p-3">
            <div className="flex items-center gap-2 rounded-xl border border-border bg-muted/40 p-1.5 focus-within:ring-2 focus-within:ring-ring">
              <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask me anything…" disabled={loading} className="min-w-0 flex-1 bg-transparent px-2 text-sm outline-none" />
              <button type="submit" disabled={loading || !input.trim()} aria-label="Send message" className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-foreground text-background disabled:opacity-40"><Send className="size-4" /></button>
            </div>
          </form>
        </div>
      )}

      <button onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close AI chatbot' : 'Open AI chatbot'} className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-foreground text-background shadow-xl transition-transform hover:scale-105">
        {open ? <X className="size-6" /> : <MessageCircle className="size-6" />}
      </button>
    </>
  )
}
