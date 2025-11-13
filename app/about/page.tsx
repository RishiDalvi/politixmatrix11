import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/reveal"
import { Target, Eye, Users, Award, Zap, Shield, TrendingUp, Globe, Mail, Phone } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto px-4 py-10 max-w-4xl">
        <Reveal as="section" variant="fade-in" className="mb-12">
          <h1 className="text-3xl font-light mb-6 text-center">About Politix Matrix</h1>
          <div className="bg-card border rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:rotate-y-2 hover:scale-105 transform-gpu perspective-1000">
            <p className="leading-relaxed text-center">
              India&apos;s premier political research and consulting firm, dedicated to Empoweringaa political leaders, parties, and organizations with data-driven strategies and insights that drive electoral success and strengthen democratic processes.
            </p>
          </div>
        </Reveal>

        <Reveal as="section" variant="slide-up" className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Target className="w-8 h-8" />
            <h2 className="text-2xl font-bold">Our Mission</h2>
          </div>
          <div className="bg-card border rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:rotate-y-2 hover:scale-105 transform-gpu perspective-1000">
            <p className="leading-relaxed mb-4">
              At Politix Matrix, we believe in the transformative power of informed political decision-making. Our mission is to provide candidates and political entities with precise, ethical, and actionable insights to win elections and foster transparent, people-centric leadership.
            </p>
            <p className="leading-relaxed">
              We are committed to maintaining the highest standards of integrity while delivering innovative consulting solutions tailored to the unique challenges of Indian politics.
            </p>
          </div>
        </Reveal>

        <Reveal as="section" variant="slide-up" className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Eye className="w-8 h-8" />
            <h2 className="text-2xl font-bold">Our Vision</h2>
          </div>
          <div className="bg-card border rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:rotate-y-2 hover:scale-105 transform-gpu perspective-1000">
            <p className="leading-relaxed">
              To be the most trusted political consulting partner in India, known for shaping ethical leadership, fostering democratic values, and delivering measurable results that truly resonate with voters.
            </p>
          </div>
        </Reveal>

        <Reveal as="section" variant="slide-up" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">What We Do</h2>
          <p className="leading-relaxed mb-6 text-center">
            Our specialized services include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Deep Voter Insights & Research",
                description: "Utilizing advanced AI and ML techniques to analyze voter behavior, demographics, and sentiments, helping our clients understand their electorate at a granular level."
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Strategic Campaign Planning",
                description: "Developing comprehensive campaign strategies tailored to the ground realities of different regions and voter segments."
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Social Media & Digital Campaigns",
                description: "Strengthening candidates' digital presence through targeted social media strategies and content that connect with voters."
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Candidate Profiling & Personal Branding",
                description: "Crafting powerful political images that articulate the candidate's vision and connect emotionally with the electorate."
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "On-Ground Intelligence & Surveys",
                description: "Conducting thorough surveys and field research to inform campaign strategies and improve outreach effectiveness."
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: "Consultation & Training",
                description: "Equipping campaign teams and volunteers with the skills, knowledge, and tools necessary for electoral success."
              }
            ].map((service, index) => (
              <Reveal key={index} variant="scale-in" delayMs={index * 100} className="group">
                <div className="bg-card border rounded-xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 hover:rotate-y-2 transform-gpu perspective-1000 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 border rounded-lg">
                      {service.icon}
                    </div>
                    <h3 className="font-semibold text-lg">{service.title}</h3>
                  </div>
                  <p className="leading-relaxed">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" variant="slide-up" className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Users className="w-8 h-8" />
            <h2 className="text-2xl font-bold">Our Team</h2>
          </div>
          <div className="bg-card border rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:rotate-y-2 hover:scale-105 transform-gpu perspective-1000">
            <p className="leading-relaxed mb-4">
              Led by Rushi Dalvi, an AI/ML researcher and seasoned political consultant, our team comprises experienced professionals across India—including journalists, data scientists, survey experts, strategists, and social media specialists.
            </p>
            <p className="leading-relaxed">
              Most team members hail from Maharashtra and other regions, bringing diverse regional insights combined with technical expertise.
            </p>
          </div>
        </Reveal>

        <Reveal as="section" variant="slide-up" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Politix Matrix</h2>
          <p className="leading-relaxed mb-6 text-center">
            What sets us apart:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Cutting-Edge Technology",
                description: "Leveraging the latest AI and ML research to achieve precise, reliable, and ethical political consulting."
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: "Experienced Leadership",
                description: "A committed team with deep understanding of Indian politics, election dynamics, and voter behavior."
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Client-Centric Approach",
                description: "Personalized strategies designed to meet the specific needs of each client."
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Proven Track Record",
                description: "Extensive experience in delivering winning campaigns across India."
              }
            ].map((reason, index) => (
              <Reveal key={index} variant="scale-in" delayMs={index * 100} className="group">
                <div className="bg-card border rounded-xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 hover:rotate-y-2 transform-gpu perspective-1000 text-center h-full">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 border rounded-full">
                      {reason.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
                  <p className="leading-relaxed">{reason.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" variant="slide-up" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Connect With Us</h2>
          <div className="bg-card border rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:rotate-y-2 hover:scale-105 transform-gpu perspective-1000">
            <p className="leading-relaxed mb-6 text-center">
              We are passionately dedicated to shaping the future of Indian politics through innovative research and strategic consulting. Get in touch with us and follow our social media channels for updates, insights, and success stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105">
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
              <a href="tel:7397889638" className="flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105">
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </div>
          </div>
        </Reveal>
      </main>
      <SiteFooter />
    </>
  )
}
