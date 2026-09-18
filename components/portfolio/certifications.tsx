import { Award } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { certifications } from '@/lib/site-data'

export function Certifications() {
  return (
    <section id="certifications" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Certifications"
          title="Certifications & training"
          description="Hands-on programs that strengthened my programming and software development foundation."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal
              key={cert.title}
              delay={i * 80}
              className="group flex items-start gap-4 rounded-2xl border border-border bg-card/50 p-5 transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary ring-1 ring-inset ring-border">
                <Award className="size-5" />
              </div>
              <div>
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                  {cert.type}
                </span>
                <h3 className="mt-1 text-sm font-semibold leading-snug">{cert.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
