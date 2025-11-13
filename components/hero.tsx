import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section
      aria-label="Hero"
      className="flex flex-col items-center justify-center text-center gap-8 px-6 py-20 bg-background"
    >
      <div className="max-w-3xl mx-auto">
        {/* Logo */}
        <div className="mb-4 flex justify-center">
          <Image
            src="/logo.png"
            alt="Politix Matrix logo"
            width={660}
            height={156}
            className="mx-auto block h-20 w-auto md:h-24"
            priority
          />
        </div>

        {/* Headline */}
        <h1 className="text-2xl md:text-4xl font-bold text-pretty text-foreground">
          Empoweringaa Leadership with Data-Driven Insights
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Your trusted partner in political research and consulting. We help
          candidates and organizations achieve their goals.
        </p>

        {/* CTA + Highlight */}
        <div className="mt-8 flex flex-col items-center">
          {/* CTA Button */}
          <Button size="lg" className="px-6" asChild>
            <Link href="#contact">Get Started</Link>
          </Button>

          {/* Announcement */}
          <div className="mt-8 inline-block bg-black text-white font-bold text-base md:text-2xl px-10 py-5 rounded-lg shadow-lg border border-white uppercase tracking-wider animate-pulse">
            🗳️ Bihar Election Exit Poll Results Coming Soon
          </div>
        </div>
      </div>
    </section>
  )
}
