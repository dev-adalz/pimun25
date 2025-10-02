import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Users, FileText, Clock } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

type Committee = {
  name: string;
  agenda: string;
  type: string;
  difficulty: string;
  delegates: number;
  duration: string;
  description?: string;
};

// Mapping committee names to blog post slugs
const committeeSlugMap: Record<string, string> = {
  "United Nations Security Council (UNSC)": "unsc-to-be",
  "Disarmament and International Security (DISEC)": "disec-to-be",
  "United Nations Development Programme (UNDP)": "undp-to-be",
  "Human Rights Council (UNHRC)": "unhrc-to-be",
  "International Court of Justice (ICJ)": "icj-to-be",
  "Food and Agriculture Organization (FAO)": "fao-to-be",
  "Convention on Biological Diversity (CBD)": "cbd-to-be",
  "Economic and Social Council (ECOSOC)": "ecosoc-to-be",
  "International Atomic Energy Agency (IAEA)": "iaea-to-be",
  "Association of Southeast Asian Nations (ASEAN)": "asean-to-be",
  "International Press Corps (IPC)": "ipc-to-be",
  "Bangladesh Interim Government": "big-to-be",
  "Moving Crisis Committee (MCC)": "mcc-to-be"
};

const committees: Committee[] = [
  {
    name: "United Nations Security Council (UNSC)",
    agenda: "Agenda: To Be Released Soon",
    type: "UN Principle Organization",
    difficulty: "Advanced",
    delegates: 50,
    duration: "3 Days",
  },
  {
    name: "Disarmament and International Security (DISEC)",
    agenda: "Agenda: To Be Released Soon",
    type: "UN General Assembly",
    difficulty: "Intermediate",
    delegates: 50,
    duration: "3 Days",
    description: "DISEC focuses on disarmament and global security, tackling strategic stability, arms control regimes, and the impact of dual-use innovations.",
  },
  {
    name: "United Nations Development Programme (UNDP)",
    agenda: "Agenda: To Be Released Soon",
    type: "UN Specialised Agency",
    difficulty: "Beginner",
    delegates: 35,
    duration: "2 Days",
    description: "UNDP explores resilient development pathways, financing mechanisms, and inclusive governance for post-crisis recovery.",
  },
  {
    name: "United Nations Human Rights Council (UNHRC)",
    agenda: "Agenda: To Be Released Soon",
    type: "UN Body",
    difficulty: "Intermediate",
    delegates: 25,
    duration: "2 Days"
  },
  {
    name: "International Court of Justice (ICJ)",
    agenda: "Agenda: To Be Released Soon",
    type: "UN Principle Organization",
    difficulty: "Advanced",
    delegates: 12,
    duration: "3 Days"
  },
  {
    name: "Food and Agriculture Organization (FAO)",
    agenda: "Agenda: To Be Released Soon",
    type: "Specialized Agency",
    difficulty: "Beginner",
    delegates: 40,
    duration: "2 Days"
  },
  {
    name: "Convention on Biological Diversity (CBD)",
    agenda: "Agenda: To Be Released Soon",
    type: "Treaty Body",
    difficulty: "Beginner",
    delegates: 30,
    duration: "2 Days"
  },
  {
    name: "Economic and Social Council (ECOSOC)",
    agenda: "Agenda: To Be Released Soon",
    type: "UN Principle Organization",
    difficulty: "Beginner",
    delegates: 30,
    duration: "2 Days"
  },
  {
    name: "International Atomic Energy Agency (IAEA)",
    agenda: "Agenda: To Be Released Soon",
    type: "Specialised Agency",
    difficulty: "Intermediate",
    delegates: 25,
    duration: "3 Days"
  },
  {
    name: "Association of Southeast Asian Nations (ASEAN)",
    agenda: "Agenda: To Be Released Soon",
    type: "Regional Body",
    difficulty: "Beginner",
    delegates: 10,
    duration: "2 Days"
  },
  {
    name: "International Press Corps (IPC)",
    agenda: "Agenda: To Be Released Soon",
    type: "Specialised committee",
    difficulty: "Intermediate",
    delegates: 20,
    duration: "2 Days"
  },
  {
    name: "Interim Government of Bangladesh(GOB)",
    agenda: "Agenda: To Be Released Soon",
    type: "Specialised Committee",
    difficulty: "Advanced",
    delegates: 20,
    duration: "2 Days"
  },
  {
    name: "Moving Crisis Committee (MCC)",
    agenda: "Agenda: To Be Released Soon",
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
            Explore our range of committees designed to challenge and engage in meaningful debates at every level.
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
                      const slug = committeeSlugMap[committee.name];
                      if (slug) {
                        navigate(`/blog/${slug}`);
                      }
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