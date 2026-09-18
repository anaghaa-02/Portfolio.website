'use client'

import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Mail, Phone, Send, CheckCircle2, X } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { LinkedinIcon } from './brand-icons'
import { profile } from '@/lib/site-data'
import { cn } from '@/lib/utils'

type Errors = { name?: string; email?: string; message?: string }

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, '')}`,
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: '/in/anaghhaa',
    href: profile.linkedin,
  },
]

export function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [toast, setToast] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const validate = (): Errors => {
    const next: Errors = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!values.email.trim()) {
      next.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = 'Please enter a valid email address.'
    }
    if (!values.message.trim()) {
      next.message = 'Please enter a message.'
    } else if (values.message.trim().length < 10) {
      next.message = 'Message should be at least 10 characters.'
    }
    return next
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return

    setValues({ name: '', email: '', message: '' })
    setToast(true)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setToast(false), 4500)
  }

  const update = (field: keyof typeof values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [field]: e.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together."
          description="I'm always interested in learning, building, and exploring new opportunities in software development."
          align="center"
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-3">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === 'LinkedIn' ? '_blank' : undefined}
                rel={item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/40 hover:bg-card"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary ring-1 ring-inset ring-border transition-transform group-hover:scale-105">
                  <item.icon className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {item.label}
                  </span>
                  <span className="block truncate text-sm font-medium text-foreground">
                    {item.value}
                  </span>
                </span>
              </a>
            ))}
          </Reveal>

          <Reveal delay={100}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card/50 p-6"
            >
              <Field
                id="name"
                label="Name"
                value={values.name}
                onChange={update('name')}
                error={errors.name}
                placeholder="Your name"
                autoComplete="name"
              />
              <Field
                id="email"
                label="Email"
                type="email"
                value={values.email}
                onChange={update('email')}
                error={errors.email}
                placeholder="you@example.com"
                autoComplete="email"
              />
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={values.message}
                  onChange={update('message')}
                  placeholder="Tell me a little about what you have in mind..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={cn(
                    'w-full resize-none rounded-lg border bg-background/60 px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/30',
                    errors.message ? 'border-destructive' : 'border-border',
                  )}
                />
                {errors.message ? (
                  <p id="message-error" className="text-xs text-destructive">
                    {errors.message}
                  </p>
                ) : null}
              </div>
              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Send Message
                <Send className="size-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>

      {/* Toast */}
      <div
        aria-live="polite"
        className="pointer-events-none fixed inset-x-0 bottom-6 z-[60] flex justify-center px-4"
      >
        <div
          className={cn(
            'pointer-events-auto flex items-center gap-3 rounded-xl border border-border bg-card/95 px-4 py-3 shadow-2xl shadow-black/40 backdrop-blur-xl transition-all duration-300',
            toast ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
          )}
          role="status"
        >
          <CheckCircle2 className="size-5 text-primary" />
          <div className="text-sm">
            <p className="font-semibold">Message sent!</p>
            <p className="text-muted-foreground">Thanks for reaching out — I&apos;ll reply soon.</p>
          </div>
          <button
            type="button"
            onClick={() => setToast(false)}
            aria-label="Dismiss notification"
            className="ml-2 rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

type FieldProps = {
  id: string
  label: string
  value: string
  onChange: (e: { target: { value: string } }) => void
  error?: string
  placeholder?: string
  type?: string
  autoComplete?: string
}

function Field({ id, label, value, onChange, error, placeholder, type = 'text', autoComplete }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          'w-full rounded-lg border bg-background/60 px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/30',
          error ? 'border-destructive' : 'border-border',
        )}
      />
      {error ? (
        <p id={`${id}-error`} className="text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  )
}
