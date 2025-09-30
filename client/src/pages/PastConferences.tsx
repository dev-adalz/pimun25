import Navigation from "@/components/Navigation";

const past = [
  { year: 2023, stats: "420 delegates · 6 committees", img: "https://placehold.co/800x450", desc: "Regional cooperation and economic resilience." },
  { year: 2019, stats: "300 delegates · 5 committees", img: "https://placehold.co/800x450", desc: "Building a tradition of diplomacy and leadership." },
];

export default function PastConferences() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 px-6">
        <section className="max-w-5xl mx-auto">
          <div className="glass thin-border rounded-xl p-6 lgold-glow mb-8">
            <h1 className="text-3xl font-serif font-semibold">Past Conferences</h1>
            <p className="text-muted-foreground mt-2">Our legacy through the years.</p>
          </div>

          <div className="relative">
            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-card-border/60" />
            <div className="space-y-10">
              {past.map((c, i) => (
                <div key={c.year} className={`flex ${i % 2 ? 'md:flex-row-reverse' : ''} items-start gap-6`}>
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary/15 thin-border flex items-center justify-center text-sm font-semibold lgold-glow">{c.year}</div>
                  <div className="flex-1">
                    <div className="glass thin-border rounded-xl overflow-hidden lgold-glow">
                      <img src={c.img} className="w-full aspect-video object-cover" />
                      <div className="p-4">
                        <div className="text-sm text-muted-foreground">{c.stats}</div>
                        <div className="text-sm text-foreground mt-1">{c.desc}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
