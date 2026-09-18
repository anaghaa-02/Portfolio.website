import { Code2, Database, Boxes, Bug, type LucideIcon } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { skillGroups } from '@/lib/site-data'

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Database,
  Boxes,
  Bug,
}

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Tools & technologies I work with"
          description="A growing toolkit spanning programming languages, databases, and core software engineering fundamentals."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon]
            return (
              <Reveal
                key={group.title}
                delay={i * 80}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card/50 p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-card hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary ring-1 ring-inset ring-border transition-transform group-hover:scale-105">
                  {Icon ? <Icon className="size-5" /> : null}
                </div>
                <h3 className="mt-4 text-base font-semibold">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-border bg-background/50 px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
