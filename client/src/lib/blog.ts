import { images } from "./images";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  body: string;
  image?: string;
};

export const blogPosts: Record<string, BlogPost> = {
"disec-to-be": {
    slug: "disec-to-be",
    title: "Disarmament and International Security (DISEC)",
    description: `AGENDA:  
Regulation of the Development and Deployment of Artificial Intelligence and Autonomous Weapons Systems`,
    body: `The Disarmament and International Security Committee, or DISEC, was among the first major entities created after the United Nations was established after World War II to work for global peace, demilitarization and addressing emerging threats

DISEC functions at the international level with old as well as new challenges. It has been conventionally engaged in controlling and limiting weapons of mass destruction, like nuclear, chemical, and biological weapons. It has now expanded its interests for new challenges like cybersecurity and artificial intelligence weapons, in tune with the dynamics of the ever-evolving global security situation.

The uniqueness of DISEC is the fact that it carries an equal vote for all 193 UN Member States. In its promotion of collective cooperation and action for peace globally, DISEC empowers Member States in building confidence-building measures, drafting measures of disarmament, regulating perilous weapons, and jointly confronting newer threats. That moto of collective cooperation enhances the global trust and ensures global security. To fulfill its agenda, DISEC works closely with United Nations Disarmament Commission and the Geneva-organized Conference on Disarmament.

More info:
 https://www.un.org/en/ga/first/
 https://www.reachingcriticalwill.org/disarmament-fora/un`,
    image: images[2]
  },
  "undp-to-be": {
    slug: "undp-to-be",
    title: "United Nations Development Programme (UNDP)",
    description: `AGENDA:  
Strengthening Resilience and Adaptive Capacity Against Climate Change in Line with SDG Goal 13`,
    body: `The United Nations Development Programme (UNDP) is the United Nations' global development network, actively operating in about 170 nations to tackle the world’s most pressing challenges.

Think of being tasked with coming to a solution to poverty, inequality, and exclusion simultaneously. The UNDP’s mandate is precisely this: serving as the bridge that connects global expertise with local demands. It is the UNDP that has been the strategic engine for planning the sustainable structural change in the developing world.

The UNDP focuses on three main principles: sustainable development, democratic governance and peacebuilding, and climate and disaster relief. Worldwide initiatives by UNDP include service hubs in Ukraine that offer vital assistance, electric transport in Samoa (CAP-IT), and Brazil’s sustainable coffee growing to combat deforestation. The UNDP aims to help communities create more inclusive and resilient futures by providing practical expertise and innovative solutions, helping millions escape poverty. The UNDP envisions nations strengthening their own capacities to achieve the Sustainable Development Goals by 2030.

Discover more about UNDP at:
https://www.undp.org/
https://www.undp.org/publications`,
    image: images[3]
  },
  
  "unhrc-to-be": {
    slug: "unhrc-to-be",
    title: "Human Rights Council (UNHRC)",
    description: `AGENDA:  
Combating the Human Rights Implications of Terrorism on Marginalized Populations`,
    body: `The United Nations Human Rights Council(UNHRC) is a key part of the United Nations whose mission is to promote and protect human rights from around the world.
    
The UNHRC was established for the strengthening, promotion and protection of human rights worldwide. It has 47 member states, that play a prominent role in addressing human rights violations and country situations
 
Established in 2006, the United Nations Human Rights Council(UNHRC) replaced the United Nations Commission on Human Rights(UNCHR), which had existed since 1946, and its creation was a response to the weakness and politicization of the previous UNCHR. The UNHRC operates from the UN office in Geneva and is supported by the Office of the High Commissioner for Human Rights(OHCHR).Notable UNHRC projects include the system of Universal Periodic Review(UPR), human rights education and training programme,  prevention of torture and arbitrary detention efforts, etc.

Discover more on:
https://www.ohchr.org/en/hrbodies/hrc/home
https://www.ohchr.org/en/publications`,
    image: images[4]
  },
  "fao-to-be": {
    slug: "fao-to-be",
    title: "Food and Agriculture Organization (FAO)",
    description: `AGENDA:  
Strengthening Global Food Security and Nutritional Resilience Amidst Global Instability`,
    body: `The Food and Agriculture Organization (FAO) is a United Nations agency dedicated to ending hunger, improving food security, and promoting sustainable farming.
    
Since its founding in 1945, right after World War II, the FAO has brought nations together to rebuild food systems, support farmers, and ensure that everyone has access to safe and nutritious food. It serves as a global platform for countries to share knowledge, set international standards, and take collective action toward a world where no one goes to bed hungry.

Today, the FAO continues to play a vital role in shaping a more sustainable future. From helping farmers build climate resilience in Iraq, to improving fisheries management in Southern Africa through PROFISHBLUE, and expanding aquaculture under the Blue Growth Initiative in Eastern Africa, its work touches millions of lives around the world.

Learn more:
https://www.fao.org/sustainable-development-goals-helpdesk/transform/good-practices
https://www.fao.org/nobel-for-foodsecurity-peace/country-projects/en`,
    image: images[6]
  },
  "cbd-to-be": {
    slug: "cbd-to-be",
    title: "Convention on Biological Diversity (CBD)",
    description: `AGENDA:  
Upholding Marine Ecosystem Resilience and Fisheries Sustainability through control of pollution and conservation of biodiversity`,
    body: `The Convention on Biological Diversity (CBD) is a global pact signed at the 1992 Earth Summit that happened in Rio de Janeiro with the goals of protecting and sustainably using the world’s biodiversity.
    
The main focus of CBD is to conserve biodiversity, ensure that natural resources are being used sustainably so that an adequate amount is left behind for future generations, and to share the benefits of genetic natural resources equally with the countries they originally come from.

The Convention on Biological Diversity functions using legally binding protocols like the Cartagena Protocol on Biosafety and the Nagoya Protocol on Access and Benefit-Sharing. By using these protocols and international cooperation, the CBD ensures that the member countries are implementing the Convention’s goals. The Kunming-Montreal Global Biodiversity Framework is one of the major outcomes of the CBD adopted in December 2022 to stop and restore global biodiversity by 2030.

Learn more about CBD at:
https://www.cbd.int/`,
    image: images[7]
  },
  "ecosoc-to-be": {
    slug: "ecosoc-to-be",
    title: "Economic and Social Council (ECOSOC)",
    description: `AGENDA:  
Implementation and Role of a Circular Economy in Achieving Sustainable Development`,
    body: `The Economic and Social Council (ECOSOC) is one of the main six organs of the United Nations and is responsible for managing the United Nation’s economic, social, and environmental operations

It operates 15 United Nations expert agencies and a collection of working commissions, fostering to fight present global issues such as poverty, sustainable development, and human needs emergencies.

ECOSOC has been a foreshadow on the Millennium Development Goals (MDGs) which helped to achieve them and is now orchestrating efforts of action on the 2030 Agenda for Sustainable Development (SDGs). Moreover, ECOSOC played a key role in the establishment of UNAIDS and also supported cross-border agribusiness investments in both Madagascar and Mauritius Bridging policy and practice, it offers a framework where governments, civil society, and experts unite to deliver solutions with global impacts.

For additional information:
https://ecosoc.un.org/en
https://sdgs.un.org/goals`,
    image: images[8]
  },
  "iaea-to-be": {
    slug: "iaea-to-be",
    title: "International Atomic Energy Agency (IAEA)",
    description: `AGENDA:  
Regulations Concerning Nuclear Technology and Its Emerging Applications`,
    body: `The International Atomic Energy Agency (IAEA) is a self-governing United Nations intergovernmental organization founded in 1957 that plays a central role in monitoring nuclear weapons production and nonproliferation.
    
In a world where nuclear technology can power food growth, energize urban society, and treat diseases, but whose abuse can threaten global security. The IAEA's task is to avoid global threats, promote cooperation, and assist nations in deriving gains from nuclear technology in a beneficial manner.

The IAEA enforces international safety standards and regulations and ensures that nations abide by the Nuclear Non-Proliferation Treaty (NPT). It also provides assistance in areas of energy, medicine, agriculture and acts as a "nuclear inspector" for the world at large. The Agency is perhaps most famous for its role in confirming Iran's nuclear agreement in 2015 and in furthering cancer treatment globally with its Programme of Action for Cancer Therapy (PACT). The IAEA keeps nuclear technology a force for good by striking a balance of safety and innovation.

Learn more on:
https://www.iaea.org
https://www.iaea.org/publications`,
    image: images[9]
  },
  "uncsw-to-be": {
    slug: "uncsw-to-be",
    title: "United Nations Commission on the Status of Women (UNCSW)",
    description: `AGENDA:  
Ensuring and Strengthening Access to Justice for All Women and Girls in Regards to Gender-Based Violence`,
    body: `The UNCSW, or United Nations Commission on the Status of Women, a functional body of the Economic and Social Council (ECOSOC), the United Nations body on the Status of Women (UNCSW) was founded in 1946.  It was established to support worldwide women's growth and gender equality.

UNCSW first concentrated on ensuring women's equal participation in public life and political rights.  Its mandate grew over time to cover topics including reproductive rights, economic development, and violence against women.  UNCSW now takes the lead in assessing the state of gender equality across the world, establishing international standards, and keeping an eye on how the Beijing Declaration and Platform for Action are being implemented.  For governments and civil society to advance women's rights globally, it continues to be an essential platform.`,
    image: images[16]},
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
