import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CTASection } from "@/components/cta-section"
import CaseStudySection from "@/components/case-study-section"

export default function CaseStudiesPage() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto px-4 py-10">
        <CaseStudySection />
      </main>
      <CTASection />
      <SiteFooter />
    </>
  )
}
