import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Crown, BadgeCheck, Megaphone, CheckCircle2, ExternalLink } from "lucide-react";
import { useState } from "react";

const roles = [
  {
    key: "eb",
    title: "Executive Board",
    icon: Crown,
    blurb: "Lead with experience and guide committees.",
    form: "https://forms.gle/",
    paymentForm: "https://forms.gle/",
    deadline: "Nov 10, 2025",
    faqs: [
      { q: "Who is eligible?", a: "Experienced MUN chairs and past EB preferred; strong debating background required." },
      { q: "How are selections made?", a: "Profile review followed by brief interview for shortlisted candidates." },
    ],
  },
  {
    key: "delegate",
    title: "Delegate",
    icon: BadgeCheck,
    blurb: "Compete, collaborate, and represent your nation.",
    form: "https://forms.gle/",
    paymentForm: "https://forms.gle/",
    deadline: "Nov 18, 2025",
    faqs: [
      { q: "Do I need prior experience?", a: "Beginners welcome. Committees have mixed experience levels." },
      { q: "Can I request a country?", a: "Yes. Preferences collected in the form; assignments are merit-based." },
    ],
  },
  {
    key: "ca",
    title: "Campus Ambassador",
    icon: Megaphone,
    blurb: "Become a voice of PIMUN25 at your campus.",
    form: "https://forms.gle/",
    paymentForm: "https://forms.gle/",
    deadline: "Nov 22, 2025",
    faqs: [
      { q: "What is the commitment?", a: "2–3 hrs/week for outreach and onboarding until conference week." },
      { q: "Are there incentives?", a: "Certificates, recognition, and performance-based perks." },
    ],
  },
];

export default function Registration() {
  const [active, setActive] = useState<string>(roles[1].key);
  const activeRole = roles.find(r => r.key === active)!;
  

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 px-6">
        {/* Sub-hero */}
        <section className="max-w-6xl mx-auto mb-8">
          <div className="glass thin-border rounded-xl p-6 lgold-glow">
            <h1 className="text-3xl font-serif font-semibold">Registration</h1>
            <p className="text-muted-foreground mt-2">Choose your role and complete your registration. Links open official Google Forms in a new tab.</p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
              {roles.map(r => (
                <div key={r.key} className="rounded-md thin-border p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <r.icon className="w-4 h-4 text-primary" />
                    <span className="font-medium">{r.title}</span>
                  </div>
                  <span className="text-muted-foreground">Deadline: {r.deadline}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Role Tabs */}
        <section className="max-w-6xl mx-auto">
          <Tabs value={active} onValueChange={setActive}>
            <TabsList className="mb-6 overflow-x-auto">
              {roles.map((r) => (
                <TabsTrigger key={r.key} value={r.key} className="whitespace-nowrap">
                  <span className="inline-flex items-center gap-2">
                    <r.icon className="w-4 h-4" /> {r.title}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Active Role Card */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: Info */}
            <Card className="lg:col-span-1 thin-border lgold-glow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <activeRole.icon className="w-5 h-5 text-primary" />
                  <h2 className="font-medium">{activeRole.title}</h2>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{activeRole.blurb}</p>
                <ul className="text-xs text-muted-foreground space-y-2">
                  <li className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Limited seats — apply early</li>
                  {activeRole.key === 'delegate' && (
                    <>
                      <li className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Confirmation within 5–7 days</li>
                      <li className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Payment link after shortlisting</li>
                    </>
                  )}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <Button className="w-full bg-primary/90 hover:bg-primary lgold-glow" onClick={() => window.open(activeRole.form, "_blank")}>
                  Registration Form <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
                {activeRole.key === 'delegate' && (
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10" onClick={() => window.open(activeRole.paymentForm || activeRole.form, "_blank")}>
                    Open Payment Confirmation Form <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </CardFooter>
            </Card>
            
            {/* Right: Role-specific FAQs */}
            <Card className="lg:col-span-2 thin-border">
              <CardHeader>
                <h3 className="font-serif font-semibold">FAQs for {activeRole.title}</h3>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  {activeRole.faqs.map((f, idx) => (
                    <AccordionItem key={idx} value={`faq-${idx}`}>
                      <AccordionTrigger>{f.q}</AccordionTrigger>
                      <AccordionContent>{f.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* How it works */}
          <div className="mt-10 glass thin-border rounded-xl p-6">
            <h3 className="font-serif font-semibold mb-3">How registration works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div className="rounded-lg thin-border p-4">
                <div className="font-medium text-foreground mb-1">1) Choose role</div>
                Pick the role that best matches your interest and experience.
              </div>
              <div className="rounded-lg thin-border p-4">
                <div className="font-medium text-foreground mb-1">2) Fill the form</div>
                Complete the Google Form with accurate details and preferences.
              </div>
              <div className="rounded-lg thin-border p-4">
                <div className="font-medium text-foreground mb-1">3) Get confirmation</div>
                Shortlisted candidates receive confirmation and payment instructions.
              </div>
            </div>
          </div>

          {/* Removed: quick links, interest form, and global FAQ per request */}
        </section>
      </main>
    </div>
  );
}