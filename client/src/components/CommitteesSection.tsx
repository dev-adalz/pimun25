import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Users, FileText, Clock } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

// todo: replace with real committee data
type Committee = {
  name: string;
  agenda: string;
  type: string;
  difficulty: string;
  delegates: number;
  duration: string;
  description?: string;
};

const committees: Committee[] = [
  {
    name: "United Nations Security Council (UNSC)",
    agenda: "Addressing Cybersecurity Threats to International Peace and Security",
    type: "Crisis / Security Committee",
    difficulty: "Advanced",
    delegates: 15,
    duration: "2 Days",
    description: "UNSC addresses threats to international peace and security. This council will examine state and non-state cyber operations, deterrence, and international legal frameworks.",
  },
  {
    name: "Disarmament and International Security (DISEC)",
    agenda: "Nuclear Non-Proliferation and Emerging Technologies",
    type: "General Committee",
    difficulty: "Intermediate",
    delegates: 50,
    duration: "3 Days",
    description: "DISEC focuses on disarmament and global security, tackling strategic stability, arms control regimes, and the impact of dual-use innovations.",
  },
  {
    name: "United Nations Development Programme (UNDP)",
    agenda: "Sustainable Recovery and Post-Crisis Development",
    type: "Specialized Committee / Programme",
    difficulty: "Intermediate",
    delegates: 35,
    duration: "2 Days",
    description: "UNDP explores resilient development pathways, financing mechanisms, and inclusive governance for post-crisis recovery.",
  },
  {
    name: "Human Rights Council (UNHRC)",
    agenda: "Digital Rights, Privacy, and Freedom of Expression in the Information Age",
    type: "Specialized Committee",
    difficulty: "Intermediate",
    delegates: 25,
    duration: "2 Days"
  },
  {
    name: "International Court of Justice (ICJ)",
    agenda: "Climate Change Litigation and the Application of International Law",
    type: "Legal / Judicial Committee",
    difficulty: "Advanced",
    delegates: 12,
    duration: "3 Days"
  },
  {
    name: "Food and Agriculture Organization (FAO)",
    agenda: "Ensuring Global Food Security Amidst Climate Shocks",
    type: "Specialized Committee / Agency",
    difficulty: "Intermediate",
    delegates: 40,
    duration: "2 Days"
  },
  {
    name: "Convention on Biological Diversity (CBD)",
    agenda: "Biodiversity Loss, Ecosystem Restoration, and International Cooperation",
    type: "Specialized Treaty Committee",
    difficulty: "Intermediate",
    delegates: 30,
    duration: "2 Days"
  },
  {
    name: "Economic and Social Council (ECOSOC)",
    agenda: "Global Supply Chain Resilience in the Post-Pandemic Era",
    type: "Specialized / Functional Committee",
    difficulty: "Intermediate",
    delegates: 30,
    duration: "2 Days"
  },
  {
    name: "International Atomic Energy Agency (IAEA)",
    agenda: "Nuclear Safety, Security, and Peaceful Uses of Nuclear Technology",
    type: "Specialized / Technical Committee",
    difficulty: "Advanced",
    delegates: 25,
    duration: "3 Days"
  },
  {
    name: "Association of Southeast Asian Nations (ASEAN)",
    agenda: "Regional Governance, Security, and Climate Adaptation in Southeast Asia",
    type: "Regional Committee",
    difficulty: "Intermediate",
    delegates: 10,
    duration: "2 Days"
  },
  {
    name: "International Press Corps (IPC)",
    agenda: "Assessing Global Food Crises and Early Warning Systems",
    type: "Technical / Analytical Committee",
    difficulty: "Intermediate",
    delegates: 20,
    duration: "2 Days"
  },
  {
    name: "Bangladesh Interim Government",
    agenda: "Transition Governance, Security, and Constitutional Reform",
    type: "Crisis Committee",
    difficulty: "Advanced",
    delegates: 20,
    duration: "2 Days"
  },
  {
    name: "Moving Crisis Committee (MCC)",
    agenda: "Rapid Escalation of Conflict / Humanitarian Crisis Response",
    type: "Crisis Committee",
    difficulty: "Advanced",
    delegates: 18,
    duration: "2 Days"
  }
];

export default function CommitteesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [, navigate] = useLocation();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'advanced': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-primary/20 text-primary border-primary/30';
    }
  };

  return (
    <section id="committees" ref={ref} className="py-24 px-6 bg-gradient-to-b from-muted/20 to-background">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="p-6 h-full bg-card/50 backdrop-blur-sm border-card-border hover-elevate transition-all duration-300 group lgold-border overflow-hidden"
                data-testid={`card-committee-${index}`}
              >
                <div className="mb-4">
                  {/* Committee Type & Difficulty */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="outline" className="text-xs shrink-0">
                      {committee.type}
                    </Badge>
                    <Badge className={`text-xs shrink-0 ${getDifficultyColor(committee.difficulty)}`}>
                      {committee.difficulty}
                    </Badge>
                  </div>

                  {/* Committee Name */}
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors lgold-underline">
                    {committee.name}
                  </h3>

                  {/* Agenda */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {committee.agenda}
                  </p>

                  
                  
                {/* Action Button */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group/btn hover:bg-primary hover:text-primary-foreground lgold-glow"
                    onClick={() => {
                      const nameSlug = encodeURIComponent(
                        committee.name
                          .toLowerCase()
                          .split(/[^a-z0-9]+/g)
                          .filter(Boolean)
                          .slice(0, 1)
                          .join('-')
                      );

                      const agendaSlug = encodeURIComponent(
                        committee.agenda
                          .toLowerCase()
                          .split(/[^a-z0-9]+/g)
                          .filter(Boolean)
                          .slice(0, 2)
                          .join('-')
                      );

                      navigate(`/blog/${nameSlug}-${agendaSlug}`);
                    }}
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
      </div>
    </section>
  );
}