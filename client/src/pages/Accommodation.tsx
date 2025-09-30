import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FileDown, ExternalLink } from "lucide-react";

export default function Accommodation() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 px-6">
        <section className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="glass thin-border rounded-2xl p-8 lg:p-12 lgold-glow mb-10 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight">Accommodation</h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Explore partner hotels, exclusive conference rates, proximity to the venue, and booking
              instructions in our official prospectus.
            </p>

            <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
              <Button asChild size="lg" className="lgold-glow">
                <a href="/attached_assets/accommodation_prospectus.pdf" target="_blank" rel="noopener noreferrer">
                  <FileDown className="w-4 h-4" /> Download Prospectus (PDF)
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/attached_assets/accommodation_prospectus.pdf" target="_blank" rel="noopener noreferrer">
                  Open in new tab <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-3">~2 MB PDF • Updated for PIMUN25</p>
          </motion.div>
        </section>
      </main>
    </div>
  );
}


