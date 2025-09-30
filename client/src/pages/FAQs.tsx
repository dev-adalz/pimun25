import Navigation from "@/components/Navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQs() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 px-6">
        <section className="max-w-3xl mx-auto">
          <div className="glass thin-border rounded-xl p-6 lgold-glow mb-8">
            <h1 className="text-3xl font-serif font-semibold">FAQs</h1>
            <p className="text-muted-foreground mt-2">Answers to common questions. More details will be added soon.</p>
          </div>

          <Accordion type="single" collapsible>
            <AccordionItem value="fees">
              <AccordionTrigger>What are the registration fees?</AccordionTrigger>
              <AccordionContent>
                Fees vary by role and are shared upon shortlisting.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="payment">
              <AccordionTrigger>How do I pay?</AccordionTrigger>
              <AccordionContent>
                You will receive a secure payment link via email.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="eligibility">
              <AccordionTrigger>Who can apply?</AccordionTrigger>
              <AccordionContent>
                High school and undergraduate students are welcome. See role descriptions for specifics.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
    </div>
  );
}


