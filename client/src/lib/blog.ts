import { images } from "./images";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  body: string;
  image?: string;
};

export const blogPosts: Record<string, BlogPost> = {
  "unsc-to-be": {
    slug: "unsc-to-be",
    title: "United Nations Security Council (UNSC)",
    description: `AGENDA:
To be released soon`,
    body: `The United Nations Security Council is one of the principal organs of the United Nations and is responsible for maintaining international peace and security.
 
The Council is in charge of addressing many urgent global concerns, including armed conflicts, humanitarian crises, nuclear proliferation, and terrorism. Decisions often determine the course from war to peace, therefore giving the committee unrivaled importance.
 
The UNSC is composed of fifteen members. Among them are five permanent members (Russia, the United Kingdom, France, China, and the United States) and ten non-permanent. These members hold special authority, i.e., the power to vote on critical resolutions. The observer states without a current seat in the UNSC may participate in discussions but will lack any voting rights. The prominent works of the UNSC aren't exactly specific projects but rather are based on broader areas that include the maintenance of international security and peace, women's security, peacebuilding, and sustaining peace.

Discover more at:
https://main.un.org/securitycouncil/en
https://www.cfr.org/backgrounder/un-security-council
https://www.globalr2p.org`,
    image: images[1]
  },
  "disec-to-be": {
    slug: "disec-to-be",
    title: "Disarmament and International Security (DISEC)",
    description: `AGENDA:  
To be released soon`,
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
To be released soon`,
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
To be released soon`,
    body: `The United Nations Human Rights Council(UNHRC) is a key part of the United Nations whose mission is to promote and protect human rights from around the world.
    
The UNHRC was established for the strengthening, promotion and protection of human rights worldwide. It has 47 member states, that play a prominent role in addressing human rights violations and country situations
 
Established in 2006, the United Nations Human Rights Council(UNHRC) replaced the United Nations Commission on Human Rights(UNCHR), which had existed since 1946, and its creation was a response to the weakness and politicization of the previous UNCHR. The UNHRC operates from the UN office in Geneva and is supported by the Office of the High Commissioner for Human Rights(OHCHR).Notable UNHRC projects include the system of Universal Periodic Review(UPR), human rights education and training programme,  prevention of torture and arbitrary detention efforts, etc.

Discover more on:
https://www.ohchr.org/en/hrbodies/hrc/home
https://www.ohchr.org/en/publications`,
    image: images[4]
  },
  "icj-to-be": {
    slug: "icj-to-be",
    title: "International Court of Justice (ICJ)",
    description: `AGENDA:  
To be released soon`,
    body: `The International Court of Justice (ICJ) is the main judicial body of the United Nations. It is often called the “World Court” as countries come here to resolve their disputes through international law instead of resorting to conflict or force.

The ICJ fosters global trust. Nations depend on independent judges to make fair and balanced decisions that help maintain peace, justice, and stability around the world.

Established in 1945, the Court has 15 judges elected by the UN General Assembly and the Security Council. Its cases cover a wide range of issues, from border disputes to human rights violations, and its rulings are binding on the involved countries. Over the years, the ICJ has played an important role in shaping international law. It settled the Somalia vs. Kenya maritime boundary case in 2021, is currently hearing South Africa vs. Israel under the Genocide Convention, and issued a landmark advisory opinion on climate change in 2025. This opinion highlighted the growing connection between environmental protection and global justice.
Learn More:

https://icj-cij.org/case/161
https://media.un.org/unifeed/en/asset/d320/d3208555
https://www.icj-cij.org/en-basic-toolkit`,
    image: images[5]
  },
  "fao-to-be": {
    slug: "fao-to-be",
    title: "Food and Agriculture Organization (FAO)",
    description: `AGENDA:  
To be released soon`,
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
To be released soon`,
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
To be released soon`,
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
To be released soon`,
    body: `The International Atomic Energy Agency (IAEA) is a self-governing United Nations intergovernmental organization founded in 1957 that plays a central role in monitoring nuclear weapons production and nonproliferation.
    
In a world where nuclear technology can power food growth, energize urban society, and treat diseases, but whose abuse can threaten global security. The IAEA's task is to avoid global threats, promote cooperation, and assist nations in deriving gains from nuclear technology in a beneficial manner.

The IAEA enforces international safety standards and regulations and ensures that nations abide by the Nuclear Non-Proliferation Treaty (NPT). It also provides assistance in areas of energy, medicine, agriculture and acts as a "nuclear inspector" for the world at large. The Agency is perhaps most famous for its role in confirming Iran's nuclear agreement in 2015 and in furthering cancer treatment globally with its Programme of Action for Cancer Therapy (PACT). The IAEA keeps nuclear technology a force for good by striking a balance of safety and innovation.

Learn more on:
https://www.iaea.org
https://www.iaea.org/publications`,
    image: images[9]
  },
  "asean-to-be": {
    slug: "asean-to-be",
    title: "Association of Southeast Asian Nations (ASEAN)",
    description: `AGENDA:  
To be released soon`,
    body: `The Association of Southeast Asian Nations (ASEAN) is a regional group that brings together ten countries in Southeast Asia to collaborate on peace, stability, and shared growth. It serves as a platform where nations work together on trade, education, security, and climate action, making the region stronger.

ASEAN emerged from a need for unity during a time of uncertainty and tension in the 1960s. Its founders aimed to ensure that Southeast Asia could depend on cooperation rather than conflict. Over the years, it has become an important player in global diplomacy, linking Asia with the rest of the world through partnerships and discussions in forums like the East Asia Summit and the ASEAN Regional Forum.

Established on August 8, 1967, with the signing of the Bangkok Declaration by Indonesia, Malaysia, the Philippines, Singapore, and Thailand, ASEAN now includes ten member states. The organization operates on principles of consensus and mutual respect, meaning decisions are made together. From creating the ASEAN Free Trade Area to pursuing the ASEAN Community Vision 2025 and coordinating regional disaster relief, ASEAN continues to foster a more connected, resilient, and peaceful Southeast Asia.

Learn more:
https://asean.org
https://asean.org/publications`,
    image: images[10]
  },
  "ipc-to-be": {
    slug: "ipc-to-be",
    title: "International Press Corps (IPC)",
    description: `AGENDA:  
To be released soon`,
    body: `The International Press Corps (IPC) includes journalists and media professionals who are authorized to cover the United Nations. They serve as a crucial connection between the UN and the world. They ensure that the organization’s work, from peacekeeping missions and humanitarian aid to global diplomacy, reaches people accurately, quickly, and widely.
    
The IPC exists because decisions made at the UN impact millions of lives. However, their effects depend on people understanding these decisions. By reporting on debates, resolutions, and conferences, IPC journalists keep the public informed. They hold leaders accountable and encourage discussions about important international issues.

With UN authorization, IPC members have access to briefings, press conferences, and high-level meetings. Their stories, analyses, and coverage promote transparency, raise awareness of key issues, and make sure that the actions of nations and global leaders are visible and understandable around the world.

Discover more on:
https://www.munum.org/ipc`,
    image: images[11]
  },
  "big-to-be": {
    slug: "big-to-be",
    title: "Bangladesh Interim Government",
    description: `AGENDA:  
To be released soon`,
    body: `Beyond the wide-ranging policies lies this advanced committee of the interim government, which aims to implement high-level strategies. This committee drafts the precise schematics for a refined state.

An interim government arrives with the hope of a political renewal, with the purpose of engineering the core infrastructure. It addresses everything from fiscal administration to law and order. It exists to preempt challenges and construct a seamless functional blueprint, ensuring the interim period is defined by competence and order, not chaos.

Bangladesh’s interim government system was created to solve a crisis of trust in elections. The landmark 1996 constitutional amendment established a neutral, non-partisan Caretaker Government (NCG), typically led by a retired Chief Justice, to supervise national polls for 90 days. This secured smooth power transfers for over a decade. However, the system was banned in 2011 as a consequence of a controversial martial law. This agreement is rejected by the opposition as a conflict of interest, causing them to boycott polls and creating an ongoing political crisis.

Discover more about the Interim Government at:
https://blogs.loc.gov/law/2024/08/interim-government-and-the-constitution-of-bangladesh/`,
    image: images[12]
  },
  "mcc-to-be": {
    slug: "mcc-to-be",
    title: "Moving Crisis Committee (MCC)",
    description: `AGENDA:  
To be released soon`,
    body: `The Moving Crisis Committee (MCC) is a specific group within the United Nations that focuses on urgent and rapidly changing global crises. It acts as a central platform for nations and experts to come together, respond quickly, coordinate actions, and lessen the effects of conflicts, natural disasters, and humanitarian emergencies.

The MCC exists because crises can escalate quickly, impacting millions of lives if not handled well. By uniting member states, humanitarian organizations, and technical experts, the committee makes sure decisions are informed, timely, and practical. Its work helps governments and agencies act decisively while ensuring international cooperation and accountability.

The MCC follows structured procedures, including situation assessments, emergency briefings, and coordination meetings. It creates action plans, gathers resources, and monitors responses to ongoing crises. Through its efforts, the MCC boosts global preparedness, promotes collaboration, and ensures urgent crises are handled efficiently and effectively.

Learn more on:
https://munuc.org/crisis/`,
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
