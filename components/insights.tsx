import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const cases = [
  {
    title: "AI and Deepfakes in Elections: A New Crisis or Opportunity for Indian Democracy?",
    writer: "Rishi Dalvi",
    description: "",
  },
  {
    title: "Voter Turnout Forecast",
    writer: "Rishi Dalvi",
    description: "Modeled turnout to optimize resource allocation across districts. Full description for Voter Turnout Forecast goes here.",
  },
  {
    title: "Message Resonance Map",
    writer: "Rishi Dalvi",
    description: "Identified themes with highest cross-demographic resonance. Full description for Message Resonance Map goes here.",
  },
]

export function Insights() {
  return (
    <section aria-label="Insights" className="px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-balance">Insights & Case Studies</h2>
        <p className="mt-3 text-muted-foreground">
          {"Selected highlights from our research and strategy engagements."}
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {cases.map((c) => (
            <Card key={c.title} className="text-center">
              <CardHeader>
                <CardTitle className="text-balance">{c.title}</CardTitle>
                <div className="text-xs text-muted-foreground mt-1">By: {c.writer}</div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {c.description.split('. ')[0] + (c.description.includes('.') ? '.' : '')}
                </p>
              </CardContent>
            </Card>
        ))}
      </div>
    </section>
  )
}
