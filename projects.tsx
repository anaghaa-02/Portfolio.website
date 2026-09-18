import {
  ExternalLink,
  ShieldCheck,
  ListChecks,
  Plug,
  Database,
  MousePointerClick,
  Sparkles,
} from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { GithubIcon } from './brand-icons'

// Replace the placeholder URLs below with the real project and repository links.
const PROJECT_URL = '#'
const GITHUB_URL = '#'

const features = [
  { icon: ShieldCheck, text: 'Secure user authentication' },
  { icon: ListChecks, text: 'Attendance record management' },
  { icon: Plug, text: 'JDBC database connectivity' },
  { icon: Database, text: 'Structured MySQL database' },
  { icon: MousePointerClick, text: 'User-friendly interface' },
]

const techBadges = ['Java Swing', 'JDBC', 'MySQL']

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="Selected work that reflects how I approach problem solving, database design, and application development."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.6fr_1fr]">
          {/* Featured project */}
          <Reveal className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40 sm:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-primary/10 blur-3xl transition-opacity group-hover:opacity-100"
            />
            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                  Featured Project
                </span>
                <div className="flex flex-wrap gap-2">
                  {techBadges.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-border bg-background/60 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="mt-4 text-2xl font-bold">Attendance Tracker</h3>
              <p className="mt-2 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
                Desktop-based attendance management application designed to simplify attendance
                tracking and record management.
              </p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {features.map((feature) => (
                  <li key={feature.text} className="flex items-center gap-2.5 text-sm">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary ring-1 ring-inset ring-border">
                      <feature.icon className="size-3.5" />
                    </span>
                    <span className="text-muted-foreground">{feature.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={PROJECT_URL}
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  View Project
                  <ExternalLink className="size-4" />
                </a>
                <a
                  href={GITHUB_URL}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  GitHub
                  <GithubIcon className="size-4" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Coming soon */}
          <Reveal
            delay={120}
            className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-dashed border-border bg-gradient-to-br from-card/40 to-transparent p-8 text-center"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 50% 30%, color-mix(in oklch, var(--primary) 18%, transparent), transparent 60%)',
              }}
            />
            <div className="relative flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary ring-1 ring-inset ring-border">
              <Sparkles className="size-6" />
            </div>
            <h3 className="relative mt-5 text-lg font-semibold">More projects coming soon</h3>
            <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
              I&apos;m actively learning and building. New projects exploring databases, algorithms,
              and application development will land here.
            </p>
            <span className="relative mt-5 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span className="size-1.5 animate-pulse rounded-full bg-primary" />
              In progress
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
