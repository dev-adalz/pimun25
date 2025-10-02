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
  { name: "Yet to be released", role: "Secretariat", img: "" },
  { name: "Yet to be released", role: "Secretariat", img: "" },
  { name: "Yet to be released", role: "Secretariat", img: "" },
  { name: "Yet to be released", role: "Secretariat", img: "" },
  { name: "Yet to be released", role: "Secretariat", img: "" },
  
  // Executive Board
  { name: "Yet to be released", role: "Executive Board", img: "" },
  { name: "Yet to be released", role: "Executive Board", img: "" },
  { name: "Yet to be released", role: "Executive Board", img: "" },
  { name: "Yet to be released", role: "Executive Board", img: "" },
  { name: "Yet to be released", role: "Executive Board", img: "" },
  { name: "Yet to be released", role: "Executive Board", img: "" },
  { name: "Yet to be released", role: "Executive Board", img: "" },

  // Campus Ambassador
  { name: "Yet to be released", role: "Campus Ambassador", img: "" },
  { name: "Yet to be released", role: "Campus Ambassador", img: "" },
  { name: "Yet to be released", role: "Campus Ambassador", img: "" },
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
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">Yet to be released</p>
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

         
        </section>
      </main>
    </div>
  );
}
