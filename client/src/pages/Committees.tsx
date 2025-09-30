import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";

const committees = [
  { name: "UNGA", desc: "United Nations General Assembly — Global policy debates." },
  { name: "UNSC", desc: "United Nations Security Council — Crisis response and security." },
  { name: "UNHRC", desc: "UN Human Rights Council — Rights, freedoms, and justice." },
  { name: "ECOSOC", desc: "Economic & Social Council — Development and cooperation." },
];

export default function Committees() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 px-6">
        <section className="max-w-6xl mx-auto">
          <div className="glass thin-border rounded-xl p-6 lgold-glow mb-8">
            <h1 className="text-3xl font-serif font-semibold">Committees</h1>
            <p className="text-muted-foreground mt-2">Explore the councils featured at PIMUN25.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {committees.map((c) => (
              <Card key={c.name} className="thin-border hover-elevate">
                <CardContent className="p-5">
                  <div className="font-medium mb-1">{c.name}</div>
                  <div className="text-sm text-muted-foreground">{c.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}


