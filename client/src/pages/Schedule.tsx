import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";

const schedule = [
  { day: "Nov 28, 2025", items: [
    { time: "09:00", title: "Registration & Check-in" },
    { time: "10:30", title: "Opening Ceremony" },
    { time: "12:30", title: "Lunch" },
    { time: "14:00", title: "Committee Session 1" },
  ]},
  { day: "Nov 29, 2025", items: [
    { time: "09:30", title: "Committee Session 2" },
    { time: "13:00", title: "Lunch" },
    { time: "14:00", title: "Committee Session 3" },
    { time: "19:00", title: "Social Night" },
  ]},
  { day: "Nov 30, 2025", items: [
    { time: "10:00", title: "Committee Session 4" },
    { time: "13:00", title: "Lunch" },
    { time: "15:00", title: "Closing Ceremony" },
  ]},
];

export default function Schedule() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 px-6">
        <section className="max-w-6xl mx-auto">
          <div className="glass thin-border rounded-xl p-6 lgold-glow mb-8">
            <h1 className="text-3xl font-serif font-semibold">Schedule</h1>
            <p className="text-muted-foreground mt-2">Indicative conference schedule. Subject to updates.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {schedule.map((d) => (
              <Card key={d.day} className="thin-border hover-elevate">
                <CardContent className="p-5">
                  <div className="font-medium mb-3">{d.day}</div>
                  <div className="space-y-3">
                    {d.items.map((i) => (
                      <div key={i.time} className="flex items-center justify-between text-sm">
                        <div className="text-muted-foreground">{i.time}</div>
                        <div className="text-foreground">{i.title}</div>
                      </div>
                    ))}
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


