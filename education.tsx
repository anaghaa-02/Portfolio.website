import { GraduationCap, CalendarDays, Building2, BadgeCheck } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { education } from '@/lib/site-data'

export function Education() {
  return (
    <section id="education" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          description="Currently pursuing my undergraduate degree in Computer Science and Engineering."
        />

        <Reveal className="relative mt-12">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 sm:p-8">
            <div
              aria-hidden
              className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary to-accent"
            />
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary ring-1 ring-inset ring-border">
                <GraduationCap className="size-7" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold leading-snug">{education.degree}</h3>
                <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                  <p className="flex items-center gap-2 text-muted-foreground">
                    <Building2 className="size-4 text-primary" />
                    {education.institution}
                  </p>
                  <p className="flex items-center gap-2 text-muted-foreground">
                    <CalendarDays className="size-4 text-primary" />
                    {education.duration}
                  </p>
                  <p className="flex items-center gap-2 text-muted-foreground sm:col-span-2">
                    <BadgeCheck className="size-4 text-primary" />
                    Affiliated to {education.affiliation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
