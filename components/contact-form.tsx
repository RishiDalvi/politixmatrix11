"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle")

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Minimal client-side submission placeholder
    setStatus("sent")
  }

  return (
    <section id="contact" aria-label="Contact" className="px-6 py-16">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-balance">Contact Us</h2>
        <p className="mt-3 text-muted-foreground">{"Let’s connect. Essential details only — we’ll be in touch."}</p>
      </div>

  <form action="https://formspree.io/f/xnnggwzy" method="POST" className="max-w-xl mx-auto mt-8 grid gap-4 text-left" aria-describedby="contact-help">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required placeholder="Your full name" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="you@example.com" />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" placeholder="Your phone number" />
        </div>
        <div>
          <Label htmlFor="organisation">Organisation</Label>
          <Input id="organisation" name="organisation" placeholder="Your organisation" />
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" required placeholder="How can we help?" />
        </div>
        <div className="flex items-center justify-center">
          <Button type="submit" size="lg" className="px-6">
            {status === "sent" ? "Sent ✓" : "Send Message"}
          </Button>
        </div>
        <p id="contact-help" className="sr-only">
          {"All fields are required."}
        </p>
      </form>

      <div className="max-w-xl mx-auto mt-6 text-center text-sm text-muted-foreground">
        <p>
          Email: <strong>hello@politixmatrix.com</strong> ·
          Phone: <strong>+91 7397889638</strong> ·
          Location: <strong>Pune City, India</strong>
        </p>
      </div>
    </section>
  )
}
