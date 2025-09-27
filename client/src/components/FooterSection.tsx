import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Mail, 
  MapPin, 
  Calendar,
  Globe,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react";

// todo: replace with real sponsor data
const sponsors = [
  { name: "United Nations", logo: "UN", tier: "Platinum" },
  { name: "World Bank", logo: "WB", tier: "Gold" },
  { name: "European Union", logo: "EU", tier: "Gold" },
  { name: "UNICEF", logo: "UC", tier: "Silver" },
  { name: "Red Cross", logo: "RC", tier: "Silver" },
  { name: "Amnesty International", logo: "AI", tier: "Bronze" }
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Mail, href: "#", label: "Email" }
];

export default function FooterSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
            <p className="text-muted-foreground max-w-xl mx-auto">
              PIMUN25 is made possible by the generous support of leading international organizations.
            </p>
          </motion.div>

          {/* Sponsors Grid */}
          <div className="flex flex-wrap justify-center items-center gap-8">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="relative group cursor-pointer"
                data-testid={`sponsor-${index}`}
              >
                <div className="flex flex-col items-center gap-2">
                  {/* Logo Placeholder */}
                  <div className={`
                    w-16 h-16 rounded-lg border-2 flex items-center justify-center
                    font-bold text-lg transition-all duration-300 group-hover:scale-110
                    ${getTierColor(sponsor.tier)}
                    grayscale group-hover:grayscale-0
                  `}>
                    {sponsor.logo}
                  </div>
                  
                  {/* Sponsor Info */}
                  <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-xs text-muted-foreground">{sponsor.name}</div>
                    <Badge variant="outline" className="text-xs mt-1">
                      {sponsor.tier}
                    </Badge>
                  </div>
                </div>
              </motion.div>
            ))}
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
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
            Shape the Future of Diplomacy
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us at PIMUN25 and become part of a global community committed to 
            international understanding, cooperation, and peace.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover-elevate text-lg px-8 py-6"
              onClick={() => console.log('Final register clicked')}
              data-testid="button-final-register"
            >
              Register Now for PIMUN25
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 hover-elevate text-lg px-8 py-6"
              onClick={() => console.log('Learn more clicked')}
              data-testid="button-learn-more"
            >
              <Globe className="w-5 h-5 mr-2" />
              Learn More
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
                  <span>April 15-17, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>International Convention Center</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-primary" />
                  <span>50+ Countries Participating</span>
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
                {['Registration', 'Committees', 'Schedule', 'Accommodation', 'FAQs'].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`footer-link-${link.toLowerCase()}`}
                  >
                    {link}
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
                  <span>info@pimun25.org</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>New York, United States</span>
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
                <Globe className="w-4 h-4 text-primary" />
                <span className="font-serif font-semibold text-primary">PIMUN25</span>
                <span>© 2025 Premier International Model United Nations. All rights reserved.</span>
              </div>
              <div className="flex gap-6">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}