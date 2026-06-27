// components/blog/BlogHero.tsx
// Server Component — blog listing page header.

interface BlogHeroProps {
  postCount: number;
}

export function BlogHero({ postCount }: BlogHeroProps) {
  return (
    <section className="relative pt-32 md:pt-40 px-margin-mobile md:px-margin-desktop overflow-hidden bg-background">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(232,82,26,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-container-max mx-auto relative">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <span className="inline-flex items-center rounded-full border border-glass-border bg-surface px-4 py-1.5 text-xs font-semibold text-brand-coral tracking-widest uppercase mb-6">
            TicketFlow Insights
          </span>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-on-background leading-[1.1] tracking-tight mb-4">
            Event Ticketing{" "}
            <span className="text-brand-coral">Guides</span>
            <br />
            for Sri Lanka
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-xl">
            Practical how-tos, honest comparisons, and expert advice for event
            organizers running events in Sri Lanka.
          </p>

          {/* Stats row */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-on-background">
                {postCount}
              </span>
              <span className="text-sm text-text-secondary">
                articles
              </span>
            </div>
            <div className="w-px h-6 bg-glass-border" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-on-background">
                5
              </span>
              <span className="text-sm text-text-secondary">
                topic clusters
              </span>
            </div>
            <div className="w-px h-6 bg-glass-border" />
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-coral animate-pulse" />
              <span className="text-sm text-text-secondary">
                Updated monthly
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
