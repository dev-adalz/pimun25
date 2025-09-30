import Navigation from "@/components/Navigation";
import { useMemo, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const tiers = [
  { name: "Executive Board", desc: "Chairs and Co-chairs" },
  { name: "Secretariat", desc: "Leadership of PIMUN25" },
  { name: "Campus Ambassador", desc: "Outreach and promotions" },
];

const team = [
  // Secretariat
  { name: "Name 1", role: "Secretariat", img: "https://placehold.co/600x600" },
  { name: "Name 2", role: "Secretariat", img: "https://placehold.co/600x600" },
  { name: "Name 3", role: "Secretariat", img: "https://placehold.co/600x600" },
  { name: "Name 4", role: "Secretariat", img: "https://placehold.co/600x600" },
  { name: "Name 5", role: "Secretariat", img: "https://placehold.co/600x600" },
  { name: "Name 6", role: "Secretariat", img: "https://placehold.co/600x600" },
  
  // Executive Board
  { name: "Name 7", role: "Executive Board", img: "https://placehold.co/600x600" },
  { name: "Name 8", role: "Executive Board", img: "https://placehold.co/600x600" },
  { name: "Name 9", role: "Executive Board", img: "https://placehold.co/600x600" },
  { name: "Name 10", role: "Executive Board", img: "https://placehold.co/600x600" },
  { name: "Name 11", role: "Executive Board", img: "https://placehold.co/600x600" },
  { name: "Name 12", role: "Executive Board", img: "https://placehold.co/600x600" },
  { name: "Name 13", role: "Executive Board", img: "https://placehold.co/600x600" },
  { name: "Name 14", role: "Executive Board", img: "https://placehold.co/600x600" },

  // Campus Ambassador
  { name: "Name 15", role: "Campus Ambassador", img: "https://placehold.co/600x600" },
  { name: "Name 16", role: "Campus Ambassador", img: "https://placehold.co/600x600" },
  { name: "Name 17", role: "Campus Ambassador", img: "https://placehold.co/600x600" },
];

export default function Team() {
  const [activeTier, setActiveTier] = useState<string>("Secretariat");
  const [query, setQuery] = useState<string>("");

  const filtered = useMemo(() => {
    const byTier = team.filter((m) => m.role === activeTier);
    const byQuery = query.trim().toLowerCase();
    if (!byQuery) return byTier;
    return byTier.filter((m) => m.name.toLowerCase().includes(byQuery) || m.role.toLowerCase().includes(byQuery));
  }, [activeTier, query]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 sm:pt-24 px-4 sm:px-6">
        <section className="max-w-6xl mx-auto">
          <div className="glass thin-border rounded-xl p-4 sm:p-6 lgold-glow mb-6">
            <h1 className="text-2xl sm:text-3xl font-serif font-semibold">Meet the Team</h1>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">The minds behind excellence.</p>
            <div className="mt-4 space-y-3 sm:space-y-0 sm:grid sm:grid-cols-1 md:grid-cols-3 gap-3">
              <div className="md:col-span-2">
                <Tabs value={activeTier} onValueChange={setActiveTier}>
                  <TabsList className="w-full justify-start overflow-x-auto">
                    {tiers.map((t) => (
                      <TabsTrigger key={t.name} value={t.name} className="whitespace-nowrap text-xs sm:text-sm px-2 sm:px-3">
                        {t.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
              <div>
                <Input
                  placeholder="Search by name or role"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full text-xs sm:text-sm"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
            {filtered.map((m) => (
              <Card key={m.name} className="group overflow-hidden hover-elevate thin-border">
                <CardContent className="p-0">
                  <div className="relative">
                    <Avatar className="w-full h-auto">
                      <AvatarImage src={m.img} alt={m.name} className="w-full h-auto aspect-square object-cover" />
                      <AvatarFallback className="w-full aspect-square text-xs">{m.name.split(" ").map(s=>s[0]).join("").slice(0,3)}</AvatarFallback>
                    </Avatar>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-2 sm:p-3">
                    <div className="font-medium text-xs sm:text-sm lg:text-base truncate">{m.name}</div>
                    <div className="text-xs text-muted-foreground truncate">{m.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
