import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Users, FileText, Clock } from "lucide-react";

// todo: replace with real committee data
const committees = [
  {
    name: "UN Security Council",
    agenda: "Addressing Cybersecurity Threats to International Peace",
    type: "Crisis Committee",
    difficulty: "Advanced",
    delegates: 15,
    duration: "3 Days"
  },
  {
    name: "General Assembly",
    agenda: "Sustainable Development Goals: Progress and Future Directions",
    type: "General Committee",
    difficulty: "Beginner",
    delegates: 50,
    duration: "3 Days"
  },
  {
    name: "Economic & Social Council",
    agenda: "Global Supply Chain Resilience in Post-Pandemic Era",
    type: "Specialized Committee",
    difficulty: "Intermediate",
    delegates: 30,
    duration: "2 Days"
  },
  {
    name: "Human Rights Council",
    agenda: "Digital Rights and Privacy in the Modern Age",
    type: "Specialized Committee",
    difficulty: "Intermediate",
    delegates: 25,
    duration: "2 Days"
  },
  {
    name: "International Court of Justice",
    agenda: "Climate Change Litigation and International Law",
    type: "Legal Committee",
    difficulty: "Advanced",
    delegates: 12,
    duration: "3 Days"
  },
  {
    name: "Historical Security Council",
    agenda: "The Cuban Missile Crisis - October 1962",
    type: "Historical Committee",
    difficulty: "Advanced",
    delegates: 15,
    duration: "2 Days"
  }
];

const registrationSteps = [
  {
    step: 1,
    title: "Choose Your Role",
    description: "Select from Delegate, Executive Board, or Campus Ambassador positions"
  },
  {
    step: 2,
    title: "Complete Registration",
    description: "Fill out the registration form with your details and preferences"
  },
  {
    step: 3,
    title: "Payment & Confirmation",
    description: "Secure your spot with payment and receive confirmation details"
  }
];

export default function CommitteesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'advanced': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-primary/20 text-primary border-primary/30';
    }
  };

  return (
    <section ref={ref} className="py-24 px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Committees Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Committees & Agendas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of committees designed to challenge and inspire 
            delegates at every level of experience.
          </p>
        </motion.div>

        {/* Committees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {committees.map((committee, index) => (
            <motion.div
              key={committee.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <Card 
                className="p-6 h-full bg-card/50 backdrop-blur-sm border-card-border hover-elevate transition-all duration-300 group"
                data-testid={`card-committee-${index}`}
              >
                <div className="mb-4">
                  {/* Committee Type & Difficulty */}
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="outline" className="text-xs">
                      {committee.type}
                    </Badge>
                    <Badge className={`text-xs ${getDifficultyColor(committee.difficulty)}`}>
                      {committee.difficulty}
                    </Badge>
                  </div>

                  {/* Committee Name */}
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {committee.name}
                  </h3>

                  {/* Agenda */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {committee.agenda}
                  </p>

                  {/* Committee Stats */}
                  <div className="flex justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{committee.delegates} delegates</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{committee.duration}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group/btn hover:bg-primary hover:text-primary-foreground"
                    onClick={() => console.log(`View details for ${committee.name}`)}
                    data-testid={`button-committee-details-${index}`}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    View Details
                    <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Registration Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-card/20 backdrop-blur-sm border border-card-border rounded-xl p-8"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
              Ready to Join PIMUN25?
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Follow these simple steps to secure your place at the most prestigious 
              MUN conference of 2025.
            </p>
          </div>

          {/* Registration Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {registrationSteps.map((stepInfo, index) => (
              <motion.div
                key={stepInfo.step}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mx-auto mb-3">
                    {stepInfo.step}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {stepInfo.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {stepInfo.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Registration Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover-elevate"
              onClick={() => console.log('Delegate registration clicked')}
              data-testid="button-register-delegate"
            >
              Register as Delegate
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 hover-elevate"
              onClick={() => console.log('Executive Board registration clicked')}
              data-testid="button-register-executive"
            >
              Apply for Executive Board
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-muted text-muted-foreground hover:bg-muted/10 hover-elevate"
              onClick={() => console.log('Campus Ambassador registration clicked')}
              data-testid="button-register-ambassador"
            >
              Become Campus Ambassador
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}