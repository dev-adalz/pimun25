import Navigation from "@/components/Navigation";
import { ImageOff } from "lucide-react";

export default function Galleries() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 px-6">
        <section className="max-w-6xl mx-auto">
          <div className="glass thin-border rounded-xl p-6 lgold-glow mb-6">
            <h1 className="text-3xl font-serif font-semibold">Galleries</h1>
            <p className="text-muted-foreground mt-2">Event photography and highlights</p>
          </div>

          <div className="max-w-3xl mx-auto text-center glass thin-border rounded-2xl p-10 lgold-glow">
            <div className="mx-auto mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center lgold-glow">
              <ImageOff className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Event Photos Coming Soon</h2>
            <p className="text-muted-foreground mt-3">
              Our official galleries will be published after the event concludes. Check back soon for
              curated highlights from ceremonies, committees, and socials.
            </p>
            <p className="text-xs text-muted-foreground mt-4">Estimated release: within 2 weeks post-event.</p>
          </div>
        </section>
      </main>
    </div>
  );
}


