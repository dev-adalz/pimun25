import { ExternalLink } from "lucide-react";
import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";


const groups = [
  {
    title: "Quick Links",
    items: [
      { 
        title: "Registration", 
        desc: "Register Here", 
        href: "/registration", 
        type: "route" 
      },
      { 
        title: "Committees & Agendas", 
        desc: "Discover Available Committees and Agendas", 
        href: "/", 
        hash: "committees", 
        type: "hash" 
      },
    ],
  },
  {
    title: "Committee Allocations",
    items: [
      { 
        title: "Committee Allocation List - DISEC", 
        desc: "look through to find your name in the allocation", 
        href: "https://drive.google.com/file/d/1sqi6iKrGr_-Yr19JCFpeO_0psUv6a11L/view?usp=sharing", 
        type: "external" 
      },
      { 
        title: "Committee Allocation List - UNSC", 
        desc: "look through to find your name in the allocation", 
        href: "https://drive.google.com/file/d/1NT7C6nBHna1FXJC7vWTbqIU4LTozqsgn/view?usp=sharing", 
        type: "external" 
      },
      { 
        title: "Committee Allocation List - UNDP", 
        desc: "look through to find your name in the allocation", 
        href: "https://drive.google.com/file/d/1O8RqIPN_-HUYCA6tn7KUfVb0XiVDruj4/view?usp=sharing", 
        type: "external" 
      },
      { 
        title: "Committee Allocation List - UNHRC", 
        desc: "look through to find your name in the allocation", 
        href: "https://drive.google.com/file/d/1z87kj4bu-Q426R6g4ayT9Q_DULpUfvhF/view?usp=sharing", 
        type: "external" 
      },
      { 
        title: "Committee Allocation List - CBD", 
        desc: "look through to find your name in the allocation", 
        href: "https://drive.google.com/file/d/1oqH-EfR1cwhH1liA_Lr0-qUFVW8wGwr2/view?usp=sharing", 
        type: "external" 
      },
      { 
        title: "Committee Allocation List - ECOSOC", 
        desc: "look through to find your name in the allocation", 
        href: "https://drive.google.com/file/d/1XibaidcXx3WB-OfvuDK-SifY_HTM6L3c/view?usp=sharing", 
        type: "external" 
      },
      { 
        title: "Committee Allocation List - UNCSW", 
        desc: "look through to find your name in the allocation", 
        href: "https://drive.google.com/file/d/13q4oVSXzN3-tAUeKGDCQy3z8Cv6x6A5u/view?usp=sharing", 
        type: "external" 
      },
      { 
        title: "Committee Allocation List - FAO", 
        desc: "look through to find your name in the allocation", 
        href: "https://drive.google.com/file/d/1ASAtUYQ_uuM622v7H-EVxCIyym1gxdS2/view?usp=sharing", 
        type: "external" 
      },
      { 
        title: "Committee Allocation List - IPC", 
        desc: "look through to find your name in the allocation", 
        href: "https://drive.google.com/file/d/19ajDYhY25ndXJ4IWWPRV8CobykC5SSY8/view?usp=sharing", 
        type: "external" 
      },
      { 
        title: "Committee Allocation List - IAEA", 
        desc: "look through to find your name in the allocation", 
        href: "https://drive.google.com/file/d/1zo2hbM5xDgMMh8Teg-7gcg_KmNOYJLTM/view?usp=sharing", 
        type: "external" 
      },

      
    ],
  },
   {
    title: "Study Guides",
    items: [
      { 
        title: "Study Guide - CBD", 
        desc: "Use the study guides to research and prepare your committee agenda.", 
        href: "https://drive.google.com/file/d/1KcFVVb7ET5gOaxZ9EMJgGQCnN9LYaBQN/view?usp=sharing", 
        type: "external" 
      },
      { 
        title: "Study Guide - ECOSOC", 
        desc: "Use the study guides to research and prepare your committee agenda.", 
        href:"https://docs.google.com/document/d/1jLM9UtTGxPJBSsPcWEPpzHUI0puQ1L0j/edit?usp=sharing&ouid=116704944256234737368&rtpof=true&sd=true", 
        type: "external" 
      },
      { 
        title: "Study Guide - FAO", 
        desc: "Use the study guides to research and prepare your committee agenda.", 
        href: "https://docs.google.com/document/d/1lQ5CHR6d1-pdiVXRmR9rMsoN-jUa7GNd/edit?usp=sharing&ouid=116704944256234737368&rtpof=true&sd=true", 
        type: "external" 
      },
      { 
        title: "Study Guide - IAEA", 
        desc: "Use the study guides to research and prepare your committee agenda.", 
        href: "https://drive.google.com/file/d/1M2x3X_LXd64hxYqKxj78qGvqmYDCBcJF/view?usp=sharing", 
        type: "external" 
      },
      { 
        title: "Study Guide - UNDP", 
        desc: "Use the study guides to research and prepare your committee agenda.", 
        href: "https://docs.google.com/document/d/14g9gYgMEyvaVNy35DHzx2iBGst5qMHiv/edit?usp=sharing&ouid=116704944256234737368&rtpof=true&sd=true", 
        type: "external" 
      },
      { 
        title: "Study Guide - ECOSOC", 
        desc: "look through to find your name in the allocation", 
        href: "https://docs.google.com/document/d/1LVnVMPPG-cwCBiKNUGSRI7PtvgacRBEZ/edit?usp=sharing&ouid=116704944256234737368&rtpof=true&sd=true", 
        type: "external" 
      },
      { 
        title: "Study Guide - UNCSW", 
        desc: "Use the study guides to research and prepare your committee agenda.", 
        href: "https://drive.google.com/file/d/13q4oVSXzN3-tAUeKGDCQy3z8Cv6x6A5u/view?usp=sharing", 
        type: "external" 
      }
    ],
  },
];

export default function Resources() {
  
  const [, navigate] = useLocation();
  
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, item: any) => {
    if (item.type === "disabled") {
      e.preventDefault();
      return;
    }
    
    if (item.type === "external") {
      // Let the default behavior happen (opens in new tab)
      return;
    }
    
    e.preventDefault();
    
    if (item.type === "route") {
      navigate(item.href);
    } else if (item.type === "hash") {
      navigate(item.href);
      setTimeout(() => {
        const element = document.getElementById(item.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 px-6">
        <section className="max-w-6xl mx-auto">
          <div className="glass thin-border rounded-xl p-6 lgold-glow mb-8">
            <h1 className="text-3xl font-serif font-semibold">Resources</h1>
            <p className="text-muted-foreground mt-2">Prepare for success at PIMUN25.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {groups.map((g) => (
              <div key={g.title} className="glass thin-border rounded-xl p-5 lgold-glow">
                <h2 className="font-medium mb-3">{g.title}</h2>
                <div className="space-y-3">
                  {g.items.map((r) => (
                    <a 
                      key={r.title} 
                      href={r.type === "hash" ? `${r.href}#${r.hash}` : r.href}
                      onClick={(e) => handleNavigation(e, r)}
                      target={r.type === "external" ? "_blank" : undefined}
                      rel={r.type === "external" ? "noopener noreferrer" : undefined}
                      className={`block p-4 rounded-md thin-border hover-elevate bg-primary/5 border-primary/30 transition-all ${
                        r.type !== "disabled" 
                          ? "cursor-pointer hover:bg-primary/10" 
                          : "cursor-not-allowed opacity-50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{r.title}</div>
                          <div className="text-sm text-muted-foreground">{r.desc}</div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-primary" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
