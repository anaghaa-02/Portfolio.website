import { GraduationCap, Database, Bug, Cpu } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { stats } from '@/lib/site-data'

const highlights = [
  {
    icon: GraduationCap,
    title: 'Strong CS Foundation',
    text: 'Third-year B.Tech Computer Science and Engineering student with a solid grounding in Java, Python, SQL, and MySQL.',
  },
  {
    icon: Cpu,
    title: 'Object-Oriented Development',
    text: 'Hands-on software development experience applying object-oriented programming and clean, structured design.',
  },
  {
    icon: Database,
    title: 'Desktop & Databases',
    text: 'Built Java Swing and JDBC desktop applications backed by well-designed, structured MySQL databases.',
  },
  {
    icon: Bug,
    title: 'Debugging & Problem Solving',
    text: 'Focused on debugging, logical thinking, and delivering reliable software solutions that work.',
  },
]

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Turning curiosity into reliable software."
          description="I'm an aspiring Software Engineer who enjoys learning by building. From desktop applications to database-driven tools, I care about writing clean code, solving problems methodically, and shipping software that people can depend on."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {highlights.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 80}
              className="group rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40 hover:bg-card"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary ring-1 ring-inset ring-border">
                <item.icon className="size-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-gradient-to-br from-card/70 to-card/30 p-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="bg-gradient-to-r from-primary to-accent bg-clip-text text-xl font-bold text-transparent sm:text-2xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
