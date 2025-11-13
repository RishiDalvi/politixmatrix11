import type React from "react"
function IconBrain(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M9 3a3 3 0 0 0-3 3v.5A2.5 2.5 0 0 0 3.5 9c0 .47.13.9.36 1.28A3 3 0 0 0 4 12a3 3 0 0 0 3 3v1a3 3 0 0 0 3 3h.5A2.5 2.5 0 0 0 13 21.5c0-.47-.13-.9-.36-1.28A3 3 0 0 0 14 18a3 3 0 0 0 3-3v-1a3 3 0 0 0 3-3c0-1.1-.6-2.06-1.5-2.58.32-.42.5-.95.5-1.52A3 3 0 0 0 16 3c-.88 0-1.67.38-2.22.99A2.99 2.99 0 0 0 12 3c-.88 0-1.67.38-2.22.99A2.99 2.99 0 0 0 9 3Z"
        fill="currentColor"
      />
    </svg>
  )
}

function IconData(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  )
}

export function Technology() {
  return (
    <section aria-label="Technology" className="px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-balance">Technology</h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          {
            "We combine AI and data science to surface predictive signals and unlock strategic clarity. Our stack powers rapid, responsible insights."
          }
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
          <div className="flex flex-col items-center transition-transform duration-300 hover:-translate-y-1">
            <IconBrain className="text-primary" />
            <span className="mt-2 text-sm">AI Modeling</span>
          </div>
          <div className="flex flex-col items-center transition-transform duration-300 hover:-translate-y-1">
            <IconData className="text-primary" />
            <span className="mt-2 text-sm">Data Science</span>
          </div>
          <div className="flex flex-col items-center transition-transform duration-300 hover:-translate-y-1">
            {/* You can replace this SVG with a marketing icon if available */}
            <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden="true" className="text-primary">
              <path d="M4 17v2a1 1 0 0 0 1 1h2m13-9V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="16" cy="8" r="1" fill="currentColor" />
            </svg>
            <span className="mt-2 text-sm">Digital Marketing</span>
          </div>
          {/* Added items */}
          <div className="flex flex-col items-center transition-transform duration-300 hover:-translate-y-1">
            {/* Statistical Analysis */}
            <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden="true" className="text-primary">
              <path d="M3 17l4-6 4 4 4-8 6 12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="mt-2 text-sm">Statistical Analysis</span>
          </div>
          <div className="flex flex-col items-center transition-transform duration-300 hover:-translate-y-1">
            {/* Machine Learning */}
            <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden="true" className="text-primary">
              <circle cx="6" cy="8" r="2" fill="currentColor" />
              <circle cx="12" cy="5" r="2" fill="currentColor" />
              <circle cx="18" cy="8" r="2" fill="currentColor" />
              <circle cx="8" cy="16" r="2" fill="currentColor" />
              <circle cx="16" cy="16" r="2" fill="currentColor" />
              <path d="M8 16l-2-6M8 16l4-11M16 16l2-6M6 8l6-3m6 3l-6-3M8 16l8 0" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
            <span className="mt-2 text-sm">Machine Learning</span>
          </div>
          <div className="flex flex-col items-center transition-transform duration-300 hover:-translate-y-1">
            {/* Real-time Monitoring */}
            <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden="true" className="text-primary">
              <path d="M2 13h3l2-4 3 8 3-7 2 3h5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="mt-2 text-sm">Real-time Monitoring</span>
          </div>
        </div>
      </div>
    </section>
  )
}
