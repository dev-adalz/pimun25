import Navigation from "@/components/Navigation";
import { useMemo, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Helper function to convert Google Drive URLs to direct image links
const convertGoogleDriveUrl = (url: string): string => {
  if (!url) return "";
  
  // Check if it's already in a working format
  if (url.includes("lh3.googleusercontent.com") || url.includes("drive.google.com/thumbnail") || url.includes("drive.google.com/uc")) {
    return url;
  }
  
  // If it's just a FILE_ID (no slashes or domain), convert it
  if (!url.includes("/") && !url.includes("http")) {
    // Try the uc format first (most reliable according to Stack Overflow)
    return `https://drive.google.com/uc?export=view&id=${url}`;
  }
  
  // Extract FILE_ID from various Google Drive URL formats
  const patterns = [
    /\/file\/d\/([^\/]+)\//,           // /file/d/FILE_ID/
    /\/d\/([^\/]+)\//,                 // /d/FILE_ID/
    /id=([^&]+)/,                       // id=FILE_ID
    /folders\/([^?]+)/,                 // /folders/FILE_ID
    /open\?id=([^&]+)/                  // open?id=FILE_ID
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return `https://drive.google.com/uc?export=view&id=${match[1]}`;
    }
  }
  
  // If no pattern matches, return original URL
  return url;
};

const tiers = [
  { name: "Executive Board", desc: "Chairs and Co-chairs" },
  { name: "Secretariat", desc: "Leadership of PIMUN25" },
  { name: "Campus Ambassador", desc: "Outreach and promotions" },
];

const secretariatDepartments = [
  "Leadership",
  "IT",
  "Academics & Documentation",
  "Media & Marketing",
  "Logistics",
  "Finance",
  "Delegate Affairs",
  "Hospitality",
  "Conference Management & Security",
];

const team = [
  // Secretariat - Leadership
  { role: "Secretariat", department: "Leadership", img: "https://drive.google.com/file/d/1Wjj3FltOkEsUUpOEjNTNpm0PbSFVXMCN/view?usp=drive_link" },
  { role: "Secretariat", department: "Leadership", img: "https://drive.google.com/file/d/1ke0yWw2bFLHSYYUGVJbc71_bgmUMk2W8/view?usp=drive_link" },
  
  // Secretariat - IT
  { role: "Secretariat", department: "IT", img: "https://drive.google.com/file/d/18DJ2ZQ1gJjJiju0Vc0UfG0SK-SznsPcv/view?usp=drive_link", groupImg: "https://drive.google.com/file/d/1fPOaI_pCZ_Mjp-sNL5Evnkq6wXvr_4V1/view?usp=drive_link" },
  { role: "Secretariat", department: "IT", img: "https://drive.google.com/file/d/1eJiubbbrMAXCu27pnIin_988ITYFKugk/view?usp=drive_link" },
  
  // Secretariat - Academics & Documentation
  { role: "Secretariat", department: "Academics & Documentation", img: "https://drive.google.com/file/d/1BQrRhj9N1YrMjPbUwkiOuEaieNMWRpXC/view?usp=drive_link", groupImg: "https://drive.google.com/file/d/1heCX-qo12vQVSMlP0HZ46vdBFdT4VpMu/view?usp=drive_link" },
  { role: "Secretariat", department: "Academics & Documentation", img: "https://drive.google.com/file/d/1TdI9nSN0j--kLbtwWDL2pQhhdDbyOrPz/view?usp=drive_link" },
  { role: "Secretariat", department: "Academics & Documentation", img: "https://drive.google.com/file/d/1szqznX22Atw4Iz6cSOZLUVzxmxo343Ie/view?usp=drive_link" },
  { role: "Secretariat", department: "Academics & Documentation", img: "https://drive.google.com/file/d/1xz-wQMidFNDisChACurhH0fl0aHuHlx6/view?usp=drive_link" },
  { role: "Secretariat", department: "Academics & Documentation", img: "https://drive.google.com/file/d/14x5vtpJ8zIbyTysfdbIb6blrU9WBLJqD/view?usp=drive_link" },
  { role: "Secretariat", department: "Academics & Documentation", img: "https://drive.google.com/file/d/1xAY2tjWW_gXOdtUYDYRRhgnugnRI0NMA/view?usp=drive_link" },
  { role: "Secretariat", department: "Academics & Documentation", img: "https://drive.google.com/file/d/1SPvwRRM-wte6czOkXNdQmF8a6fQ4VQ0R/view?usp=drive_link" },
  { role: "Secretariat", department: "Academics & Documentation", img: "https://drive.google.com/file/d/1jG4KBZy244xX2FGjkirBYl7s7VbJWlI7/view?usp=drive_link" },
  
  // Secretariat - Media & Marketing
  { role: "Secretariat", department: "Media & Marketing", img: "https://drive.google.com/file/d/1vCfiNSTPXG5eWSQNOcLWRPUgT0RjsSBN/view?usp=drive_link", groupImg: "https://drive.google.com/file/d/1k6ik1MLxK6vxB-EWxkISCianDmNgcEZR/view?usp=drive_link" },
  { role: "Secretariat", department: "Media & Marketing", img: "https://drive.google.com/file/d/18AZsvGqvKN23S60Mn3uAqrvfTkoCrs3s/view?usp=drive_link" },
  { role: "Secretariat", department: "Media & Marketing", img: "https://drive.google.com/file/d/1Sz00_qscfQt8XN8cEbqx34CQOxhNb-9O/view?usp=drive_link" },
  { role: "Secretariat", department: "Media & Marketing", img: "https://drive.google.com/file/d/1jNqrWMlH6cZlF65wN7JBPfjf_2bPyL88/view?usp=drive_link" },
  { role: "Secretariat", department: "Media & Marketing", img: "https://drive.google.com/file/d/1n46CtpfjaLT3qyNLSf_2JspoPIV416yW/view?usp=drive_link" },
  { role: "Secretariat", department: "Media & Marketing", img: "https://drive.google.com/file/d/1Oe2vN3YzrzaxCAl70URRtnGMLNfLC2Lo/view?usp=drive_link" },
  { role: "Secretariat", department: "Media & Marketing", img: "https://drive.google.com/file/d/1MeqUDYAfabB7tQ5q31MDDepHxnjlgLTX/view?usp=drive_link" },
  { role: "Secretariat", department: "Media & Marketing", img: "https://drive.google.com/file/d/13HP6R0sRImWRAY9KJy1szGPYoAQaNLNg/view?usp=drive_link" },
  
  // Secretariat - Logistics
  { role: "Secretariat", department: "Logistics", img: "https://drive.google.com/file/d/10yv8ysvKSk6grDtrf46cM2Ikl-YTOP6s/view?usp=drive_link", groupImg: "https://drive.google.com/file/d/1Rnx0n-lnmbrCWj-pe1ZfwJn1TuxSLdWZ/view?usp=drive_link" },
  { role: "Secretariat", department: "Logistics", img: "https://drive.google.com/file/d/1qXy-hcjJRwmao8Pu2yrVflotgZkFp9mY/view?usp=drive_link" },
  { role: "Secretariat", department: "Logistics", img: "https://drive.google.com/file/d/1rqfPxVvP9FgDha57ExOcYJD8oj5G8CIe/view?usp=drive_link" },
  { role: "Secretariat", department: "Logistics", img: "https://drive.google.com/file/d/1ggDw42kMcpRnpleN5aoJ7LwqroiU0Sk9/view?usp=drive_link" },
  
  // Secretariat - Finance
  { role: "Secretariat", department: "Finance", img: "https://drive.google.com/file/d/1SKHeciHkjWp-gzv2rMwDkfzQrEcvyVP8/view?usp=drive_link", groupImg: "https://drive.google.com/file/d/1el6FcGnqejSDMG8yVWkDYn-Ymrj4-NgY/view?usp=drive_link" },
  { role: "Secretariat", department: "Finance", img: "https://drive.google.com/file/d/1oSXtgLv7kzDSDFYxt2Ru8XmQev5pxR2u/view?usp=drive_link" },
  { role: "Secretariat", department: "Finance", img: "https://drive.google.com/file/d/10jjUvgpqgYv9qw1KfdDCporBQLk8zk-B/view?usp=drive_link" },
  { role: "Secretariat", department: "Finance", img: "https://drive.google.com/file/d/1DKaPd2wEDOjsLpvqn2Pnsj01u20lc1QE/view?usp=drive_link" },

  // Secretariat - Delegate Affairs
  { role: "Secretariat", department: "Delegate Affairs", img: "https://drive.google.com/file/d/1UaXtB9ipWT6zn565AJkOYnoZE8krAoia/view?usp=drive_link", groupImg: "https://drive.google.com/file/d/1lHsGAi0y3FdEbZCUaHvhVu9-ASfozyrK/view?usp=drive_link" },
  { role: "Secretariat", department: "Delegate Affairs", img: "https://drive.google.com/file/d/1fpBKkEGBWumQlHbrH4z-RdMZ0d5om0qq/view?usp=drive_link" },
  { role: "Secretariat", department: "Delegate Affairs", img: "https://drive.google.com/file/d/1rvHTczCf2FODjnqMykHIizf_tOoxipTO/view?usp=drive_link" },
  { role: "Secretariat", department: "Delegate Affairs", img: "https://drive.google.com/file/d/1YosaoXjLzF1g3uzK_DoFxoenQ4mhDz46/view?usp=drive_link" },  
  // Secretariat - Hospitality
  { role: "Secretariat", department: "Hospitality", img: "https://drive.google.com/file/d/1gEBCCim5xhb9rnYel7Kf9S-WGcx7cAXX/view?usp=drive_link", groupImg: "https://drive.google.com/file/d/1_2wvy-BuVqy2qqXS-Vn8JsKVwSDtY3Zg/view?usp=drive_link" },
  { role: "Secretariat", department: "Hospitality", img: "https://drive.google.com/file/d/1ncFGedTUqWDm1PmsegR6j40OsHObr6Ig/view?usp=drive_link" },
  { role: "Secretariat", department: "Hospitality", img: "https://drive.google.com/file/d/17AKY5K4tZm-WbilYU-DUQykADYOan3oP/view?usp=drive_link" },
  { role: "Secretariat", department: "Hospitality", img: "https://drive.google.com/file/d/1hu0aMlCzvx43cMJIiTCxV5l_IHUQ_IdR/view?usp=drive_link" },
  { role: "Secretariat", department: "Hospitality", img: "https://drive.google.com/file/d/1RQBxuYiNWbznG8NnMYKWGeKp1qxKXlLB/view?usp=drive_link" },
  { role: "Secretariat", department: "Hospitality", img: "https://drive.google.com/file/d/1tTYbV_U80Nmi9B4NV9CcjdCMtr1Qxm95/view?usp=drive_link" },
  { role: "Secretariat", department: "Hospitality", img: "https://drive.google.com/file/d/1hxtL_eqeeWhmPa2bif1zUxFEu1TdSOQx/view?usp=drive_link" },
  { role: "Secretariat", department: "Hospitality", img: "https://drive.google.com/file/d/1-sv9XPKBYgy6O-Irk4-AU7W5BLCE9RUP/view?usp=drive_link" },
  
  // Secretariat - Conference Management & Security
  { role: "Secretariat", department: "Conference Management & Security", img: "https://drive.google.com/file/d/1Rf_jIFmYRnbNNgdR-ZGxDxZpGLNwU7KQ/view?usp=drive_link", groupImg: "https://drive.google.com/file/d/13BrvcBmPbkp5OoJbnZzlINHNA6MSwy_9/view?usp=drive_link" },
  { role: "Secretariat", department: "Conference Management & Security", img: "https://drive.google.com/file/d/1q4_WDXTK3pBEafjjYX_F9G1W22jzYfJS/view?usp=drive_link" },
  { role: "Secretariat", department: "Conference Management & Security", img: "https://drive.google.com/file/d/1ItewS39DyRiWo7qwB7tJzdV8sqgiVTzW/view?usp=drive_link" },
  { role: "Secretariat", department: "Conference Management & Security", img: "https://drive.google.com/file/d/1bCkYzrCSjX8eCPk-ja4FZM5Gf_7j21xu/view?usp=drive_link" },
  { role: "Secretariat", department: "Conference Management & Security", img: "https://drive.google.com/file/d/1SfifwoGFBTgHvyFwc85qYkYrtFbmniIX/view?usp=drive_link" },
  { role: "Secretariat", department: "Conference Management & Security", img: "https://drive.google.com/file/d/1iNz51fAzrV7Rz0N4nZ3hfCz91xReaQHN/view?usp=sharing" },
  { role: "Secretariat", department: "Conference Management & Security", img: "https://drive.google.com/file/d/1iadj8Jm5cxpY7vpBcGsAfCRW2L4utug3/view?usp=drive_link" },  
  // Executive Board
  { role: "Executive Board", img: "https://placehold.co/400x400/e2e8f0/64748b?text=Member+1" },
  { role: "Executive Board", img: "https://placehold.co/400x400/e2e8f0/64748b?text=Member+2" },
  { role: "Executive Board", img: "https://placehold.co/400x400/e2e8f0/64748b?text=Member+3" },
  { role: "Executive Board", img: "https://placehold.co/400x400/e2e8f0/64748b?text=Member+4" },
  { role: "Executive Board", img: "https://placehold.co/400x400/e2e8f0/64748b?text=Member+5" },
  { role: "Executive Board", img: "https://placehold.co/400x400/e2e8f0/64748b?text=Member+6" },
  { role: "Executive Board", img: "https://placehold.co/400x400/e2e8f0/64748b?text=Member+7" },
  { role: "Executive Board", img: "https://placehold.co/400x400/e2e8f0/64748b?text=Member+8" },
  
  // Campus Ambassador
  { role: "Campus Ambassador", img: "https://placehold.co/400x400/e2e8f0/64748b?text=Member+1" },
  { role: "Campus Ambassador", img: "https://placehold.co/400x400/e2e8f0/64748b?text=Member+2" },
  { role: "Campus Ambassador", img: "https://placehold.co/400x400/e2e8f0/64748b?text=Member+3" },
];

export default function Team() {
  const [activeTier, setActiveTier] = useState<string>("Secretariat");
  const [activeDepartment, setActiveDepartment] = useState<string>("Leadership");
  const [query, setQuery] = useState<string>("");

  const filtered = useMemo(() => {
    if (activeTier === "Secretariat") {
      const deptMembers = team.filter(
        (m) => m.role === "Secretariat" && m.department === activeDepartment
      );
      const byQuery = query.trim().toLowerCase();
      if (!byQuery) return deptMembers;
      return deptMembers.filter((m) => m.department?.toLowerCase().includes(byQuery));
    } else {
      const byTier = team.filter((m) => m.role === activeTier);
      return byTier;
    }
  }, [activeTier, activeDepartment, query]);

  const groupPhoto = useMemo(() => {
    if (activeTier === "Secretariat") {
      const member = team.find(
        (m) => m.role === "Secretariat" && m.department === activeDepartment && m.groupImg
      );
      return member?.groupImg;
    }
    return null;
  }, [activeTier, activeDepartment]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 sm:pt-24 px-4 sm:px-6">
        <section className="max-w-6xl mx-auto">
          <div className="glass thin-border rounded-xl p-4 sm:p-6 lgold-glow mb-6">
            <h1 className="text-2xl sm:text-3xl font-serif font-semibold">Meet the Team</h1>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              The dedicated individuals behind PIMUN25
            </p>
            
            <div className="mt-4 space-y-3">
              {/* Main Tier Tabs */}
              <div>
                <Tabs value={activeTier} onValueChange={(v) => {
                  setActiveTier(v);
                  if (v === "Secretariat") setActiveDepartment("Leadership");
                }}>
                  <TabsList className="w-full justify-start overflow-x-auto">
                    {tiers.map((t) => (
                      <TabsTrigger 
                        key={t.name} 
                        value={t.name} 
                        className="whitespace-nowrap text-xs sm:text-sm px-2 sm:px-3"
                      >
                        {t.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>

              {/* Department Tabs (only for Secretariat) */}
              {activeTier === "Secretariat" && (
                <div className="glass thin-border rounded-lg p-2">
                  <Tabs value={activeDepartment} onValueChange={setActiveDepartment}>
                    <TabsList className="w-full justify-start overflow-x-auto flex-wrap h-auto gap-1">
                      {secretariatDepartments.map((dept) => (
                        <TabsTrigger 
                          key={dept} 
                          value={dept} 
                          className="whitespace-nowrap text-xs px-2 py-1.5"
                        >
                          {dept}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </Tabs>
                </div>
              )}

              {/* Search */}
              <div>
                <Input
                  placeholder={activeTier === "Secretariat" ? "Search departments..." : "Search..."}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full text-xs sm:text-sm"
                />
              </div>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="glass thin-border rounded-xl p-4 sm:p-6">
            {activeTier === "Secretariat" && (
              <h2 className="text-xl font-semibold mb-4">{activeDepartment}</h2>
            )}
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {filtered.map((member, idx) => (
                <Card 
                  key={`${member.department}-${idx}`} 
                  className="overflow-hidden hover:shadow-lg transition-all hover:scale-105"
                >
                  <CardContent className="p-0">
                    <div className="aspect-square relative overflow-hidden bg-muted">
                      {member.img ? (
                        <iframe
                          src={`https://drive.google.com/file/d/${member.img.includes('/') ? convertGoogleDriveUrl(member.img).split('id=')[1] : member.img}/preview`}
                          className="absolute border-0 z-10 pointer-events-none"
                          style={{ 
                            width: '200%',
                            height: '200%',
                            top: '-10%',
                            left: '50%',
                            transform: 'translateX(-50%)'
                          }}
                          allow="autoplay"
                          onLoad={(e) => {
                            const fallback = e.currentTarget.nextElementSibling;
                            if (fallback) {
                              (fallback as HTMLElement).style.display = 'none';
                            }
                          }}
                          onError={(e) => {
                            console.error('Image failed to load:', member.img);
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      ) : null}
                      <div className="absolute inset-0 w-full h-full bg-muted flex items-center justify-center z-0">
                        <Avatar className="w-16 h-16 sm:w-20 sm:h-20">
                          <AvatarFallback className="text-lg">
                            {idx + 1}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Group Photo */}
            {groupPhoto && (
              <div className="mt-6 pt-6 border-t">
                <h3 className="text-sm font-medium text-muted-foreground mb-3 text-center">Team Photo</h3>
                <div className="flex justify-center">
                  <Card className="overflow-hidden max-w-sm w-full">
                    <CardContent className="p-0">
                      <div className="aspect-video relative overflow-hidden bg-muted">
                        {groupPhoto.includes('placehold.co') ? (
                          <img 
                            src={groupPhoto} 
                            alt="Team photo"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <iframe
                            src={`https://drive.google.com/file/d/${groupPhoto.includes('/') ? convertGoogleDriveUrl(groupPhoto).split('id=')[1] : groupPhoto}/preview`}
                            className="absolute inset-0 w-full h-full border-0 pointer-events-none"
                            style={{
                              width: '110%',
                              height: '150%',
                              top: '55%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)'
                            }}
                            allow="autoplay"
                          />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
