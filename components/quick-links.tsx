import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const links = [
  { href: "/services", title: "Services", desc: "Polling, strategy, and more" },
  { href: "/expertise", title: "Expertise", desc: "Why choose us" },
  { href: "/technology", title: "Technology", desc: "ML, stats, and real-time" },
  { href: "/insights", title: "Insights", desc: "Trends and behavior" },
  { href: "/blogs", title: "Blogs", desc: "Perspectives and analysis" },
  { href: "/case-studies", title: "Case Studies", desc: "Success stories" },
]

export function QuickLinks() {
  return (
    <section aria-labelledby="quick-links-title" className="container mx-auto px-4 py-10 md:py-14">
      <h2 id="quick-links-title" className="text-2xl md:text-3xl font-light mb-6">
        Explore Politix Matrix
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="group">
            <Card className="h-full hover:border-primary">
              <CardHeader>
                <CardTitle className="font-medium group-hover:text-primary">{l.title}</CardTitle>
                <CardDescription>{l.desc}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
