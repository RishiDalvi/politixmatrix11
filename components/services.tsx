import type React from "react"
function IconBarChart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect x="3" y="10" width="3" height="10" rx="1" fill="currentColor" />
      <rect x="10.5" y="6" width="3" height="14" rx="1" fill="currentColor" />
      <rect x="18" y="3" width="3" height="17" rx="1" fill="currentColor" />
    </svg>
  )
}

function IconUsers(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="16" cy="9" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M3 19c0-3 3-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M14 19c0-2 2-3 4-3s4 1 4 3" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  )
}

function IconTarget(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  )
}

function IconSpark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 2l1.5 5H19l-4 3 1.5 5L12 13l-4.5 2 1.5-5-4-3h5.5L12 2z" fill="currentColor" />
    </svg>
  )
}

function IconPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 2a6 6 0 0 0-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 0 0-6-6zm0 8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" fill="currentColor"/>
    </svg>
  )
}

function IconMegaphone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M3 10v4l10 3V7L3 10z" fill="currentColor" />
      <path d="M16 8a4 4 0 0 1 0 8" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M6 14v3a2 2 0 0 0 2 2h1" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  )
}

const items = [
  {
    title: "Opinion Polling",
    icon: IconBarChart,
    desc: "Robust sampling and analysis for accurate sentiment.",
  },
  {
    title: "Voter Analysis",
    icon: IconUsers,
    desc: "Understand demographics, issues, and turnout behavior.",
  },
  {
    title: "Campaign Strategy",
    icon: IconTarget,
    desc: "Evidence-based planning for winning outcomes.",
  },
  {
    title: "AI-Enabled Research",
    icon: IconSpark,
    desc: "Machine learning for pattern discovery and forecasts.",
  },
  {
    title: "Constituency Profiling",
    icon: IconPin,
    desc: "Granular insights down to booth-level granularity.",
  },
  {
    title: "Digital Campaign Consultation",
    icon: IconMegaphone,
    desc: "Optimize messaging and channel performance.",
  },
]

export function Services() {
  return (
    <section id="services" aria-label="Services" className="px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-balance">Services</h2>
        <p className="mt-3 text-muted-foreground">
          {"Center-aligned, polished, and precise — the essentials you need."}
        </p>
      </div>

      <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((s) => (
          <div
            key={s.title}
            className="group border rounded-lg p-6 flex flex-col items-center text-center bg-card transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <s.icon className="text-primary mb-3 transition-transform duration-300 group-hover:scale-110" />
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
