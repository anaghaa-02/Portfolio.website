'use client'

import { useEffect, useState } from 'react'

const CODE = `const developer = {
  name: "Anagha M S",
  role: "Software Engineer",
  skills: ["Java", "Python", "SQL"],
  passion: "Building reliable software"
};`

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const handler = () => setReduced(mq.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return reduced
}

export function TerminalCard() {
  const reduced = usePrefersReducedMotion()
  const [typed, setTyped] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (reduced) {
      setTyped(CODE)
      setDone(true)
      return
    }

    setTyped('')
    setDone(false)
    let i = 0
    let timer: ReturnType<typeof setTimeout>
    const tick = () => {
      i += 1
      setTyped(CODE.slice(0, i))
      if (i < CODE.length) {
        timer = setTimeout(tick, CODE[i - 1] === '\n' ? 90 : 22)
      } else {
        setDone(true)
      }
    }
    timer = setTimeout(tick, 400)
    return () => clearTimeout(timer)
  }, [reduced])

  return (
    <div className="reveal is-visible relative">
      <div
        aria-hidden
        className="absolute -inset-2 -z-10 rounded-2xl bg-gradient-to-br from-primary/25 via-accent/15 to-transparent blur-xl"
      />
      <div className="overflow-hidden rounded-2xl border border-border bg-card/80 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <div className="flex items-center gap-2 border-b border-border/70 bg-background/40 px-4 py-3">
          <span className="size-3 rounded-full bg-red-400/80" />
          <span className="size-3 rounded-full bg-yellow-400/80" />
          <span className="size-3 rounded-full bg-green-400/80" />
          <span className="ml-2 font-mono text-xs text-muted-foreground">developer.ts</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[0.82rem] leading-relaxed sm:text-sm">
          <code aria-label="Developer profile code snippet">
            {highlight(typed)}
            {!done ? (
              <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-[3px] bg-primary align-middle [animation:blink-cursor_1s_step-end_infinite]" />
            ) : null}
          </code>
        </pre>
      </div>
    </div>
  )
}

// Lightweight token highlighter for the fixed snippet.
function highlight(text: string) {
  const lines = text.split('\n')
  return lines.map((line, li) => (
    <span key={li} className="block">
      {tokenize(line)}
      {li < lines.length - 1 ? '\n' : ''}
    </span>
  ))
}

function tokenize(line: string) {
  // Split on strings first, then color keywords/keys within non-string parts.
  const parts = line.split(/("[^"]*")/g)
  return parts.map((part, i) => {
    if (part.startsWith('"')) {
      return (
        <span key={i} className="text-emerald-300">
          {part}
        </span>
      )
    }
    const withKeywords = part.split(/(\bconst\b)/g)
    return withKeywords.map((seg, j) => {
      if (seg === 'const') {
        return (
          <span key={`${i}-${j}`} className="text-violet-300">
            {seg}
          </span>
        )
      }
      // property keys before a colon
      const keyMatch = seg.match(/^(\s*)([A-Za-z]+)(:)/)
      if (keyMatch) {
        return (
          <span key={`${i}-${j}`}>
            {keyMatch[1]}
            <span className="text-sky-300">{keyMatch[2]}</span>
            <span className="text-muted-foreground">{keyMatch[3]}</span>
            {seg.slice(keyMatch[0].length)}
          </span>
        )
      }
      if (seg === 'developer') {
        return (
          <span key={`${i}-${j}`} className="text-sky-200">
            {seg}
          </span>
        )
      }
      return <span key={`${i}-${j}`}>{seg}</span>
    })
  })
}
