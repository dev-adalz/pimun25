import Navigation from "@/components/Navigation";

export default function Payment() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 px-6">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-serif font-semibold mb-2">Payment Confirmation</h1>
          <p className="text-muted-foreground mb-8">Submit your details to confirm your registration.</p>

          <div className="glass thin-border rounded-xl p-4">
            <div className="aspect-[16/9] w-full rounded-md thin-border bg-black/20 flex items-center justify-center text-sm text-muted-foreground">
              Embed Google Form here
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
