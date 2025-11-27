import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  MapPin, 
  Calendar,
  Globe,
  Facebook,
  Instagram
} from "lucide-react";
import { useLocation } from "wouter";
import logoUrl from "@assets/logo.png";

// Helper function to convert Google Drive URLs
const convertGoogleDriveUrl = (url: string): string => {
  if (!url) return "";
  
  if (url.includes("lh3.googleusercontent.com") || url.includes("drive.google.com/thumbnail") || url.includes("drive.google.com/uc")) {
    return url;
  }
  
  if (!url.includes("/") && !url.includes("http")) {
    return `https://drive.google.com/uc?export=view&id=${url}`;
  }
  
  const patterns = [
    /\/file\/d\/([^\/]+)\//,
    /\/d\/([^\/]+)\//,
    /id=([^&]+)/,
    /folders\/([^?]+)/,
    /open\?id=([^&]+)/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return `https://drive.google.com/uc?export=view&id=${match[1]}`;
    }
  }
  
  return url;
};

const sponsors = [
  { name: "KDS", logo: "12P5PJl8hN8fWtk1w8QTvH9N7fvC5t5l6", tier: "", link: "http://www.kdsgroup.net/" },
  { name: "Chattogram City Corporation", logo: "1KBFspIIP1lfiAKaLpkbQ3M9aJsvKg4Pj", tier: "", link: "" },
  { name: "Pushti", logo: "1LzisyMkE03G382GMFYoDFeF2i8cuPWn-", tier: "Silver", link: "" },
  { name: "P2p Wecon", logo: "1EcBcv9jKK9jOcTC8YJ06rPfHLKFigO7C", tier: "", link: "" },
  { name: "Mentors", logo: "1v2rPlot-kqzm5IVhaPTXW84BA-hh8HxR", tier: "", link: "" },
  { name: "United Nations Bangladesh", logo: "1m0cqEJLXQz6XYUiocmO9oU-13NGREYow", tier: "Strategic Partner", link: "" }
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/events/3972249322926374/?acontext=%7B%22event_action_history%22%3A[%7B%22surface%22%3A%22search%22%7D%2C%7B%22mechanism%22%3A%22attachment%22%2C%22surface%22%3A%22newsfeed%22%7D]%2C%22ref_notif_type%22%3Anull%7D", label: "Events Page" },
  { icon: Facebook, href: "https://www.facebook.com/PresidencyMUNClub", label: "Club Page" },
  { icon: Instagram, href: "https://www.instagram.com/presidency.munclub/", label: "Instagram Page" },
  { icon: Mail, href: "mailto:presidencymun2025@gmail.com", label: "Email" }
];

export default function FooterSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [, navigate] = useLocation();

  const getTierColor = (tier: string) => {
    switch (tier.toLowerCase()) {
      case 'platinum': return 'border-gray-300 text-gray-300 bg-gray-300/10';
      case 'gold': return 'border-primary text-primary bg-primary/10';
      case 'silver': return 'border-gray-400 text-gray-400 bg-gray-400/10';
      case 'bronze': return 'border-orange-400 text-orange-400 bg-orange-400/10';
      default: return 'border-muted text-muted-foreground bg-muted/10';
    }
  };

  return (
    <footer ref={ref} className="bg-gradient-to-t from-background via-card/20 to-muted/20 border-t border-card-border">
      {/* Sponsors Section */}
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Our Partners & Sponsors
            </h3>
          </motion.div>

          {/* Sponsors Sliding Carousel */}
          <div className="relative overflow-hidden">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
            
            <motion.div
              className="flex gap-12"
              animate={{
                x: [0, -100 * sponsors.length]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear"
                }
              }}
            >
              {/* Render sponsors twice for seamless loop */}
              {[...sponsors, ...sponsors].map((sponsor, index) => (
                <div
                  key={`${sponsor.name}-${index}`}
                  className="relative group flex-shrink-0"
                  data-testid={`sponsor-${index}`}
                >
                  <a 
                    href={sponsor.link || undefined}
                    className={`block ${sponsor.link ? 'cursor-pointer' : 'cursor-default'}`}
                    onClick={(e) => {
                      if (!sponsor.link) e.preventDefault();
                    }}
                    target={sponsor.link ? "_blank" : undefined}
                    rel={sponsor.link ? "noopener noreferrer" : undefined}
                  >
                    <div className="flex flex-col items-center gap-2">
                      {/* Logo Container */}
                      <div className="w-32 h-32 rounded-lg border-2 overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:scale-110 relative">
                        {/* White background layer */}
                        <div className="absolute inset-0 bg-white z-0"></div>
                        
                        {sponsor.logo ? (
                          <iframe
                            src={`https://drive.google.com/file/d/${sponsor.logo}/preview`}
                            className="absolute border-0 pointer-events-none z-10"
                            style={{ 
                              width: '200%',
                              height: '200%',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%) scale(0.8)',
                              objectFit: 'contain'
                            }}
                            title={sponsor.name}
                          />
                        ) : (
                          <div className="text-2xl font-bold opacity-30">
                            {sponsor.name.substring(0, 2).toUpperCase()}
                          </div>
                        )}
                      </div>
                      
                      {/* Sponsor Info */}
                      <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-xs text-muted-foreground">{sponsor.name}</div>
                        {sponsor.tier && (
                          <Badge variant="outline" className="text-xs mt-1">
                            {sponsor.tier}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="py-16 px-6 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 border-y border-primary/20"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
          Join Us At PIMUN 2025!
          </h3>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
            Follow these simple steps to secure your place at the most prestigious MUN conference of 2025.
          </p>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { n: '1', title: 'Choose Your Role', desc: 'Select from Delegate, Executive Board, or Campus Ambassador positions' },
              { n: '2', title: 'Complete Registration', desc: 'Fill out the registration form with your details and preferences' },
              { n: '3', title: 'Payment & Confirmation', desc: 'Secure your spot with payment and receive confirmation details' },
            ].map((s) => (
              <div key={s.n} className="glass thin-border rounded-xl p-5 text-left">
                <div className="w-8 h-8 rounded-md bg-primary/15 thin-border flex items-center justify-center font-semibold text-sm mb-3">{s.n}</div>
                <div className="font-medium mb-1">{s.title}</div>
                <div className="text-sm text-muted-foreground">{s.desc}</div>
              </div>
            ))}
          </div>

          {/* Role Buttons */}
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover-elevate text-lg px-8 py-6"
              onClick={() => navigate('/registration')}
              data-testid="footer-register-now"
            >
              Register Now
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Footer Information */}
      <div className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Conference Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h4 className="font-serif font-semibold text-foreground mb-4">Conference Details</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>November 28-30, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Presidency International School, Chattogram, Bangladesh</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-primary" />
                  <span>30+ schools Participating</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <h4 className="font-serif font-semibold text-foreground mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                {[
                  { label: 'Registration', href: '/registration' },
                  { label: 'Committees', href: '/#committees' },
                  { label: 'Schedule', href: '/schedule' },
                  { label: 'Accommodation', href: '/accommodation' },
                  { label: 'FAQs', href: '/faqs' },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                    onClick={(e) => { 
                      e.preventDefault(); 
                      if (link.href.startsWith('/#')) { 
                        navigate('/'); 
                        setTimeout(() => {
                          const el = document.getElementById(link.href.replace('/#',''));
                          el?.scrollIntoView({ behavior: 'smooth' });
                        }, 50);
                      } else {
                        navigate(link.href); 
                      }
                    }}
                    data-testid={`footer-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <h4 className="font-serif font-semibold text-foreground mb-4">Contact Us</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>presidencymun2025@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-10 h-10 text-primary" />
                  <span>Presidency International School, House # 51, Panchlaish R/A, Road # 2 ,Chittagong, Bangladesh.</span>
                </div>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <h4 className="font-serif font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-8 h-8 rounded-lg bg-card/50 border border-card-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover-elevate transition-all"
                    data-testid={`social-${social.label.toLowerCase()}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="border-t border-card-border pt-8 text-center"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <img src={logoUrl} alt="PIMUN25" className="w-6 h-6 rounded-md thin-border object-cover" />
                <span className="font-serif font-semibold text-primary">PIMUN25</span>
                <span>© 2025 Presidency International MUN. All rights reserved to Nebucoders</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
