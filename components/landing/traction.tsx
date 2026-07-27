const pilotStats = [
  { value: 50, suffix: "+", label: "SMEs onboarded in four weeks" },
  { value: 2500, suffix: "+", label: "AI-generated posts created" },
  { value: 70, suffix: "%", label: "connected a social account in 24 hours" },
  { value: 45, suffix: "%", label: "used automated scheduling" },
]

export default function Traction() {
  return (
    <section className="rx-proof" aria-labelledby="proof-title">
      <div className="rx-proof-label">
        <p className="rx-eyebrow">Early pilot signal</p>
        <h2 id="proof-title">Built with real business routines in mind.</h2>
      </div>
      <dl className="rx-stat-strip">
        {pilotStats.map((stat) => (
          <div key={stat.value + stat.label}>
            <dt data-count-value={stat.value} data-count-suffix={stat.suffix}>
              {new Intl.NumberFormat("en-NG").format(stat.value)}{stat.suffix}
            </dt>
            <dd>{stat.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
