import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto px-4 py-10 max-w-4xl">
        <h1 className="text-3xl font-light mb-6">Terms & Conditions</h1>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h2 className="font-bold">Introduction</h2>
          <p className="leading-relaxed">
            Welcome to the Politix Matrix. We operates under Techmate Labs, providing political research consultancy and related technology solutions in India. By accessing or using our Site and services, you agree to be bound by these Terms & Conditions.
          </p>

          <h2 className="font-bold">Services</h2>
          <p className="leading-relaxed">
            Politix Matrix offers professional research, data analytics, campaign strategy, and technology-enabled solutions for political organizations and related clients. All services are provided under contract terms stated at engagement and may change at our discretion.
          </p>

          <h2 className="font-bold">Use of Website</h2>
          <p className="leading-relaxed">
            The information, resources, and materials on this Site are intended for general informational purposes only.
          </p>
          <p className="leading-relaxed">
            You may not use this Site or its content for unlawful, fraudulent, or harmful activities.
          </p>
          <p className="leading-relaxed">
            Unauthorized copying, distribution, or reproduction of website content is prohibited.
          </p>

          <h2 className="font-bold">Intellectual Property</h2>
          <p className="leading-relaxed">
            All designs, content, branding, and technology on this Site are property of Techmate Labs/Politix Matrix, unless otherwise stated. Any use, reproduction, or distribution requires prior written permission.
          </p>

          <h2 className="font-bold">Confidentiality</h2>
          <p className="leading-relaxed">
            Any data, client information, and sensitive materials exchanged during service engagement remain strictly confidential and will not be disclosed to third parties, except where required by law.
          </p>

          <h2 className="font-bold">Limitation of Liability</h2>
          <p className="leading-relaxed">
            Politix Matrix and Techmate Labs are not liable for indirect, incidental, or consequential damages arising from use of this Site or our services.
          </p>

          <h2 className="font-bold">Changes to Terms</h2>
          <p className="leading-relaxed">
            We reserve the right to modify these Terms & Conditions at any time. Updated versions will be posted on the Site. Continued use constitutes your acceptance of the revised terms.
          </p>

          <h2 className="font-bold">Governing Law</h2>
          <p className="leading-relaxed">
            These Terms & Conditions are governed by the laws of India. All disputes are subject to Pune city jurisdiction.
          </p>

          <h2 className="font-bold">Contact Us</h2>
          <p className="leading-relaxed">
            If you have any questions or concerns about these Terms & Conditions or our practices, please contact:
          </p>
          <p className="leading-relaxed">
            Email: techmatelabs@gmail.com<br />
            Location: Pune City, India
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
