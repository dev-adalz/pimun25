import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, MapPin, Phone, Mail } from "lucide-react";

const hosts = [
  { name: "Gyan Dipta Ghosh - Director General", phone: "+8801811546564" },
  { name: "Sunehra Islam -  Team Delegate Affairs", phone: "+8801323933719" },
  { name: "Mumtasin Fuaad - Team Delegate Afairs", phone: "+8801979293739" },
];

export default function Contact() {
  const openWhatsApp = (phone: string) => {
    const url = `https://wa.me/${phone.replace(/[^\d]/g, "")}?text=${encodeURIComponent("Hello, I have an enquiry about PIMUN25.")}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 sm:pt-24 px-4 sm:px-6">
        <section className="max-w-5xl mx-auto">
          <div className="glass thin-border rounded-xl p-4 sm:p-6 lgold-glow mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-serif font-semibold">Contact Us</h1>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">Chat with a host member on WhatsApp for quick enquiries.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6">
            {/* WhatsApp Contacts */}
            <Card className="md:col-span-3 thin-border">
              <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                {hosts.map((h) => (
                  <div key={h.phone} className="flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-md thin-border p-3 sm:p-4 gap-3">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-primary" />
                      <div>
                        <div className="text-sm font-medium">{h.name}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">{h.phone}</div>
                      </div>
                    </div>
                    <Button className="bg-primary/90 hover:bg-primary thin-border text-xs sm:text-sm w-full sm:w-auto" onClick={() => openWhatsApp(h.phone)}>
                      <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2" /> Chat on WhatsApp
                    </Button>
                  </div>
                ))}
                <div className="text-xs text-muted-foreground">Prefer email? Reach us at <span className="text-foreground inline-flex items-center gap-1"><Mail className="w-3 h-3" /> presidencymun2025@gmail.com</span></div>
              </CardContent>
            </Card>

            {/* Map / Address */}
            <div className="md:col-span-2 space-y-4 sm:space-y-6">
              <Card className="thin-border">
                <CardContent className="p-4 sm:p-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 mt-1 text-primary" />
                    <div>
                      <div className="text-sm font-medium">Address</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Presidency International School, Chattogram, Bangladesh</div>
                      <div className="text-xs sm:text-sm text-muted-foreground mt-2 flex items-center gap-2">
                        <Mail className="w-3 h-3" />
                        presidencymun2025@gmail.com
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="thin-border">
                <CardContent className="p-0">
                  <div className="aspect-video w-full rounded-md overflow-hidden">
                    <iframe
                      title="Map"
                      className="w-full h-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.8070194494267!2d91.83111587604445!3d22.36091444069413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd88496b3c78d%3A0xd3285fe97e157e1b!2sPresidency%20International%20School!5e0!3m2!1sen!2sbd!4v1759396595129!5m2!1sen!2sbd"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
