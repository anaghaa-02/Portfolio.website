import { Briefcase, MapPin, CalendarDays } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { experiences } from '@/lib/site-data'

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've been learning"
          description="Practical internship experience applying programming and software development skills to real projects."
        />

        <div className="relative mt-12">
          <div
            aria-hidden
            className="absolute left-4 top-2 bottom-2 hidden w-px bg-gradient-to-b from-primary via-accent to-transparent sm:block"
          />
          <div className="flex flex-col gap-6">
            {experiences.map((exp, i) => (
              <Reveal key={exp.role} delay={i * 100} className="relative sm:pl-14">
                <span
                  aria-hidden
                  className="absolute left-[9px] top-6 hidden size-3 rounded-full border-2 border-background bg-gradient-to-br from-primary to-accent shadow-[0_0_12px] shadow-primary/60 sm:block"
                />
                <div className="rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40 hover:bg-card sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary ring-1 ring-inset ring-border sm:hidden">
                        <Briefcase className="size-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{exp.role}</h3>
                        <p className="text-sm font-medium text-primary">{exp.company}</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/50 px-3 py-1 font-mono text-xs text-muted-foreground">
                      <CalendarDays className="size-3.5" />
                      {exp.date}
                    </span>
                  </div>
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="size-3.5" />
                    {exp.location}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {exp.points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm text-muted-foreground">
                        <span
                          aria-hidden
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-gradient-to-r from-primary to-accent"
                        />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
