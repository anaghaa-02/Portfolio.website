import { Navbar } from '@/components/portfolio/navbar'
import { Hero } from '@/components/portfolio/hero'
import { About } from '@/components/portfolio/about'
import { Education } from '@/components/portfolio/education'
import { Skills } from '@/components/portfolio/skills'
import { Experience } from '@/components/portfolio/experience'
import { Projects } from '@/components/portfolio/projects'
import { Certifications } from '@/components/portfolio/certifications'
import { Contact } from '@/components/portfolio/contact'
import { Footer } from '@/components/portfolio/footer'
import { Chatbot } from '@/components/portfolio/chatbot'

export default function Page() {
  return (
    <div className="min-h-dvh bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}
