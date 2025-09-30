import { images } from "./images";
export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  body: string;
  image?: string;
};

export const blogPosts: Record<string, BlogPost> = {
  "united-addressing-cybersecurity": {
    slug: "united-addressing-cybersecurity",
    title: "UNSC: Cybersecurity Threats to International Peace and Security",
    description: "Exploring state and non-state cyber operations, deterrence, and legal frameworks.",
    body: `
The United Nations Security Council (UNSC) convenes to address the growing global threat of cyberattacks and their implications for international peace and security. As the world becomes more interconnected, cyber threats now rival traditional military challenges.  

Delegates will explore:
- The roles of state and non‑state actors in cyber conflict.
- Norms of responsible state behavior in cyberspace.
- Confidence‑building measures and collective cyber defense.

Discussions will also address:
- Mechanisms for attribution and accountability.
- How to strengthen the resilience of critical infrastructure.
- The role of regional organizations in cybersecurity governance.

The committee will be tasked with drafting robust resolutions that safeguard cyberspace without undermining the rights and freedoms of states and individuals.`,
    image: images[1]
  },
  "disarmament-nuclear-non": {
    slug: "disarmament-nuclear-non",
    title: "DISEC: Nuclear Non‑Proliferation & Emerging Technologies",
    description: "Arms control, strategic stability, and dual-use innovation in a multipolar era.",
    body: `
The Disarmament and International Security Committee (DISEC) faces a complex mission: reconciling the peaceful use of nuclear technology with non‑proliferation commitments. In an era of rapid technological change, delegates must address the dual-use nature of emerging innovations and their implications for global security.  

Key discussion points:
- Strengthening existing non-proliferation treaties.
- Balancing civilian nuclear energy needs with security concerns.
- Managing the risks of dual-use technologies, including artificial intelligence and quantum computing.

Delegates will also debate verification mechanisms, export controls, and confidence-building measures. The outcome of this committee will shape global strategies for preventing nuclear conflict while fostering technological innovation.`,
    image: images[2]
  },
  "united-sustainable-recovery": {
    slug: "united-sustainable-recovery",
    title: "UNDP: Sustainable Recovery & Post‑Crisis Development",
    description: "Resilient development, financing mechanisms, and inclusive governance.",
    body: `
The United Nations Development Programme (UNDP) addresses the vital challenge of post-crisis recovery. Delegates will explore how to build resilience in communities that have experienced conflict, natural disasters, or economic collapse.  

Key discussion topics:
- Innovative financing models for recovery.
- Inclusive governance in post-crisis scenarios.
- Building local capacity and empowering affected communities.

This committee will examine case studies, develop frameworks for equitable recovery, and propose solutions that ensure no community is left behind. The debate will stress the importance of integrating sustainability into all recovery processes to safeguard long-term development.`,
    image: images[3]
  },
  "human-digital-rights": {
    slug: "human-digital-rights",
    title: "UNHRC: Digital Rights and Privacy in the Modern Age",
    description: "Balancing digital innovation with fundamental human rights.",
    body: `
The United Nations Human Rights Council (UNHRC) examines the challenges of protecting digital rights in an era of rapid technological advancement. Delegates will explore how states, corporations, and civil society can collaborate to uphold privacy, freedom of expression, and equality online.  

Key agenda points:
- Ensuring universal access to the internet as a human right.
- Strengthening data protection frameworks.
- Addressing surveillance, censorship, and misinformation.

This committee will explore the intersection of human rights and emerging technologies, seeking solutions that protect privacy without hindering innovation. Delegates must produce a framework that safeguards the dignity of individuals while fostering a secure and open digital environment.`,
    image: images[4]
  },
  "international-climate-change": {
    slug: "international-climate-change",
    title: "ICJ: Climate Change Litigation and International Law",
    description: "How the international legal system responds to the climate crisis.",
    body: `
The International Court of Justice (ICJ) addresses one of the defining challenges of our time: climate change. Delegates will examine how international law can be used to address environmental degradation, hold states accountable, and ensure global cooperation.  

Key issues:
- Legal obligations of states under climate agreements.
- Precedents in climate change litigation.
- Enforcement mechanisms in international law.

Delegates will examine landmark cases, debate emerging norms, and consider how the ICJ can act as a forum for climate justice. The committee aims to produce guidelines that reinforce the role of law in shaping sustainable policies.`,
    image: images[5]
  },
  "historical-cuban-missile": {
    slug: "historical-cuban-missile",
    title: "Historical Security Council: The Cuban Missile Crisis – October 1962",
    description: "A historical reenactment of the Cold War’s defining moment.",
    body: `
The Historical Security Council reenacts one of the most intense moments of the Cold War: the Cuban Missile Crisis. Delegates will assume the roles of world leaders and negotiators from October 1962, navigating a perilous crisis that brought humanity to the brink of nuclear war.  

Key discussion points:
- Crisis management under extreme pressure.
- Strategic communication between rival powers.
- Lessons for contemporary diplomacy.

This session will challenge delegates to apply historical knowledge, negotiation skills, and strategic thinking to find peaceful resolutions. It is a unique opportunity to experience history in action.`,
    image: "/images/historical-cuban-missile.jpg"
  },
  "food-ensuring-global": {
    slug: "food-ensuring-global",
    title: "FAO: Global Food Security in the Age of Climate Change",
    description: "Ensuring equitable food systems for a sustainable future.",
    body: `
The Food and Agriculture Organization (FAO) tackles the urgent issue of food security in a world facing climate change and growing inequality. Delegates will debate strategies to ensure sustainable production, fair distribution, and access to nutritious food.  

Key topics:
- Climate-resilient agriculture.
- Reducing food waste and losses.
- Strengthening local food systems.

This committee will seek innovative, sustainable policies that secure food supply for all while protecting natural resources for future generations.`,
    image: images[6]
  },
  "convention-biodiversity-loss": {
    slug: "convention-biodiversity-loss",
    title: "CBD: Biodiversity Conservation & Sustainable Use",
    description: "Protecting ecosystems and biodiversity for future generations.",
    body: `
The Convention on Biological Diversity (CBD) focuses on conserving biodiversity while promoting sustainable development. Delegates will explore global strategies to protect species and ecosystems against growing threats.  

Key issues:
- Preserving endangered species.
- Sustainable resource use.
- International cooperation on biodiversity.

The committee will draft comprehensive policies that balance human development with environmental stewardship, safeguarding the planet for generations to come.`,
    image: images[7]
  },
  "economic-global-supply": {
    slug: "economic-global-supply",
    title: "ECOSOC: Advancing Global Sustainable Development Goals",
    description: "Bridging policy, finance, and partnerships for sustainable growth.",
    body: `
The Economic and Social Council (ECOSOC) focuses on implementing and accelerating the Sustainable Development Goals. Delegates will explore mechanisms to mobilize resources, foster partnerships, and translate policy into impact.  

Key discussion points:
- Financing sustainable development.
- Multi-stakeholder partnerships.
- Monitoring and accountability mechanisms.

Delegates will be tasked with proposing innovative solutions to achieve the SDGs within the global policy framework.`,
    image: images[8]
  },
  "international-nuclear-safety": {
    slug: "international-nuclear-safety",
    title: "IAEA: Nuclear Safety & Security in a Changing World",
    description: "Ensuring safe and secure use of nuclear technology.",
    body: `
The International Atomic Energy Agency (IAEA) examines challenges to nuclear safety in a world of evolving technology and geopolitical tensions. Delegates will discuss safety standards, emergency preparedness, and safeguards against nuclear proliferation.  

Key topics:
- Strengthening nuclear safety frameworks.
- International cooperation on nuclear security.
- Emergency response preparedness.

This committee will produce frameworks that ensure nuclear technology is used safely, securely, and peacefully for all nations.`,
    image: images[9]
  },
  "association-regional-governance": {
    slug: "association-regional-governance",
    title: "ASEAN: Strengthening Regional Cooperation in Southeast Asia",
    description: "Fostering economic growth, security, and cultural exchange.",
    body: `
The Association of Southeast Asian Nations (ASEAN) debates regional cooperation in an era of geopolitical competition and rapid change. Delegates will examine strategies for enhancing political stability, economic integration, and cultural understanding.  

Key topics:
- Trade and economic integration.
- Regional security cooperation.
- Cultural diplomacy and mutual understanding.

The outcome will influence ASEAN’s role as a regional leader in sustainable development and peace.`,
    image: images[10]
  },
  "integrated-assessing-global": {
    slug: "integrated-assessing-global",
    title: "IPC: International Peacebuilding & Conflict Resolution",
    description: "Forging sustainable peace in a complex global environment.",
    body: `
The International Peacebuilding Council (IPC) addresses the challenge of sustainable peace in conflict‑affected areas. Delegates will explore effective mediation, reconstruction, and reconciliation strategies.  

Key issues:
- Peacebuilding frameworks.
- Conflict prevention mechanisms.
- Post‑conflict reconstruction.

Delegates will create strategies that address root causes of conflict and promote lasting peace in diverse regions.`,
    image: images[11]
  },
  "interim-transition-governance": {
    slug: "interim-transition-governance",
    title: "Interim Government: Managing Transitional Governance",
    description: "Ensuring stability and legitimacy during periods of transition.",
    body: `
The Interim Government Committee examines transitional governance in post‑conflict and post‑crisis situations. Delegates will debate mechanisms to ensure stability, uphold the rule of law, and build democratic institutions.  

Key discussion points:
- Designing transitional governance frameworks.
- Ensuring fair representation.
- Building public trust and legitimacy.

This committee will draft guidelines to ensure that transitional governments maintain stability while preparing the ground for long-term democratic governance.`,
    image: images[12]
  },
  "moving-rapid-escalation": {
    slug: "moving-rapid-escalation",
    title: "MCC: Responding to Moving Crisis Scenarios",
    description: "Rapid response and strategic management of unfolding crises.",
    body: `
The Moving Crisis Committee (MCC) provides an adaptive forum for delegates to respond to fast‑moving global crises. This committee operates in real‑time, requiring delegates to develop swift, effective, and coordinated responses.  

Key elements:
- Crisis assessment and decision-making.
- Rapid policy development.
- Coordination across multiple agencies.

Delegates will experience the challenges of crisis diplomacy and decision-making under pressure, preparing them for real-world global challenges.`,
    image: images[13]
  }
};

export function toSlug(name: string, agenda: string): string {
  return name
    .toLowerCase()
    .replace(/\(.*?\)/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 1)
    .join("-")
    .concat("-", agenda.toLowerCase().split(/[^a-z0-9]+/g).filter(Boolean).slice(0, 2).join("-"));
}
