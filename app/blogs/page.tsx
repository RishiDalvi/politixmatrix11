import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CTASection } from "@/components/cta-section"
import { Blogs } from "@/components/blogs"

export default function BlogsPage() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto px-4 py-10">
        <Blogs />
      </main>
      <CTASection />
      <SiteFooter />
    </>
  )
}
