import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Users, Award, MapPin, Network } from "lucide-react";

const highlights = [
  {
    icon: Users,
    title: "International Committees",
    description: "Engage with diverse committees representing real-world global challenges and diplomatic scenarios.",
    color: "from-primary/20 to-transparent"
  },
  {
    icon: Award,
    title: "Experienced Executive Board",
    description: "Learn from seasoned diplomats and award-winning MUN veterans who guide every session.",
    color: "from-chart-2/20 to-transparent"
  },
  {
    icon: MapPin,
    title: "Prestigious Venue",
    description: "Experience diplomacy in world-class facilities designed to inspire excellence and collaboration.",
    color: "from-chart-3/20 to-transparent"
  },
  {
    icon: Network,
    title: "Networking & Diplomacy",
    description: "Build lasting connections with future leaders and enhance your diplomatic communication skills.",
    color: "from-chart-1/20 to-transparent"
  }
];

export default function HighlightsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-24 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 lgold-underline">
            Why Choose PIMUN25?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the pinnacle of Model United Nations conferences with world-class features 
            designed to elevate your diplomatic journey.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <Card 
                className="relative p-6 h-full bg-card/50 backdrop-blur-sm border-card-border hover-elevate transition-all duration-300 group overflow-hidden lgold-border"
                data-testid={`card-highlight-${index}`}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors lgold-glow">
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors lgold-underline">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br from-primary/20 via-transparent to-transparent lgold-glow" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <span>Join 500+ Delegates from 50+ Countries</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}