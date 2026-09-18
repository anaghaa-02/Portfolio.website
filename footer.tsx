import { Mail, ArrowUp } from 'lucide-react'
import { LinkedinIcon } from './brand-icons'
import { profile } from '@/lib/site-data'

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-mono text-sm">
          <span className="flex size-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-xs font-bold text-primary-foreground">
            A
          </span>
          <span className="font-semibold">{profile.name}</span>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          © 2026 {profile.name}. Built with passion and code.
        </p>

        <div className="flex items-center gap-2">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <LinkedinIcon className="size-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send an email"
            className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Mail className="size-4" />
          </a>
          <a
            href="#top"
            aria-label="Back to top"
            className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <ArrowUp className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
