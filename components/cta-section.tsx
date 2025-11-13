import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section aria-labelledby="cta-title" className="container mx-auto px-4 py-12">
      <div className="rounded-lg border border-border p-6 md:p-8 bg-muted">
        <h3 id="cta-title" className="text-xl md:text-2xl font-light">
          Ready to make data-driven decisions?
        </h3>
        <p className="text-muted-foreground mt-2">
          Partner with Politix Matrix for precise research, AI-enabled insights, and winning strategies.
        </p>
        <div className="mt-4">
          <Button asChild>
            <Link href="/#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
