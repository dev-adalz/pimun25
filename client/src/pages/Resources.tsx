import Navigation from "@/components/Navigation";
import { ExternalLink } from "lucide-react";
import { useLocation } from "wouter";

const groups = [
  {
    title: "Quick Links",
    items: [
      { title: "Registration", desc: "Register Here", href: "/registration" },
      { title: "Committees & Agendas", desc: "Discover Available Committees and Agendas", href: "/#committees" },
    ],
  },
  {
    title: "Docs",
    items: [
      { title: "To Be Released Soon", desc: "Doc1", href: "#" },
      { title: "To Be Released Soon", desc: "Doc2", href: "#" },
    ],
  },
];

export default function Resources() {
  const [, navigate] = useLocation();
  const quickLinks = [
    { label: 'Registration', href: '/registration' },
    { label: 'Committees & Agendas', href: '/#committees' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 px-6">
        <section className="max-w-6xl mx-auto">
          <div className="glass thin-border rounded-xl p-6 lgold-glow mb-8">
            <h1 className="text-3xl font-serif font-semibold">Resources</h1>
            <p className="text-muted-foreground mt-2">Prepare for success at PIMUN25.</p>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {groups.map((g) => (
              <div key={g.title} className="glass thin-border rounded-xl p-5 lgold-glow">
                <h2 className="font-medium mb-3">{g.title}</h2>
                <div className="space-y-3">
                  {g.items.map((r) => (
                    <a key={r.title} href={r.href} className="block p-4 rounded-md thin-border hover-elevate bg-primary/5 border-primary/30">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{r.title}</div>
                          <div className="text-sm text-muted-foreground">{r.desc}</div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-primary" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
