import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Vision } from "@/components/vision"
import { Technology } from "@/components/technology"
import { Blogs } from "@/components/blogs"
import { ContactForm } from "@/components/contact-form"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Reveal } from "@/components/reveal"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Reveal as="section" variant="fade-in">
          <Hero />
        </Reveal>
        <Reveal as="section" variant="fade-up">
          <Services />
        </Reveal>
        <Reveal as="section" variant="fade-up">
          <Vision />
        </Reveal>
        <Reveal as="section" variant="fade-up">
          <Technology />
        </Reveal>
        <Reveal as="section" variant="fade-up">
          <Blogs />
        </Reveal>
        <Reveal as="section" variant="fade-up">
          <ContactForm />
        </Reveal>
      </main>
      <SiteFooter />
    </>
  )
}
