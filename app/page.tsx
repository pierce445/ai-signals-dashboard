export default function Home() {
  const signals = [
    {
      title: "Hyperscaler Capex",
      description: "Track Microsoft, Amazon, Alphabet, and Meta capital spending trends.",
      status: "Coming soon",
    },
    {
      title: "NVIDIA Data Center Revenue",
      description: "Watch the clearest real-time proxy for AI infrastructure demand.",
      status: "Coming soon",
    },
    {
      title: "Power Demand",
      description: "Monitor whether grid, cooling, and electrical equipment are becoming bottlenecks.",
      status: "Coming soon",
    },
    {
      title: "AI Networking",
      description: "Track 400G to 800G upgrades and AI cluster networking demand.",
      status: "Coming soon",
    },
    {
      title: "Enterprise AI Adoption",
      description: "See whether AI is becoming real revenue and workflow adoption, not just experimentation.",
      status: "Coming soon",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-400">
            AI Infrastructure Investing
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            AI Signals Dashboard
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-neutral-300">
            A live dashboard for tracking the five signals that matter most in the AI
            infrastructure cycle: capex, NVIDIA data center growth, power constraints,
            networking upgrades, and enterprise AI adoption.
          </p>
        </div>

        <div className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
            <p className="text-sm text-neutral-400">Project Status</p>
            <p className="mt-2 text-2xl font-semibold">Phase 1</p>
            <p className="mt-2 text-sm text-neutral-300">
              Dashboard shell deployed successfully.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
            <p className="text-sm text-neutral-400">Next Build Step</p>
            <p className="mt-2 text-2xl font-semibold">Data Layer</p>
            <p className="mt-2 text-sm text-neutral-300">
              Connect Neon Postgres and begin storing signal history.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
            <p className="text-sm text-neutral-400">Update Frequency</p>
            <p className="mt-2 text-2xl font-semibold">Daily</p>
            <p className="mt-2 text-sm text-neutral-300">
              Signals will eventually refresh automatically every day.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {signals.map((signal) => (
            <div
              key={signal.title}
              className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-lg shadow-black/20"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-xl font-semibold">{signal.title}</h2>
                <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300">
                  {signal.status}
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-neutral-300">
                {signal.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
