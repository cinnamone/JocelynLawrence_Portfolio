"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Projects } from "@/components/sections/projects"
import { Skills } from "@/components/sections/skills"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/footer"
import { site } from "@/components/site-config"

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero data={site.hero} />
      <About data={site.about} />
      <Projects data={site.projects} />
      <Skills data={site.skills} />
      <Contact data={site.contact} />
      <Footer />
    </main>
  )
}
