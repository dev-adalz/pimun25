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
    body: `To be published soon`,
    image: images[1]
  },
  "disec-to-be": {
    slug: "disec-to-be",
    title: "Disarmament and International Security (DISEC)",
    description: `AGENDA:  
To be released soon`,
    body: `To be published soon`,
    image: images[2]
  },
  "undp-to-be": {
    slug: "undp-to-be",
    title: "United Nations Development Programme (UNDP)",
    description: `AGENDA:  
To be released soon`,
    body: `To be published soon`,
    image: images[3]
  },
  "unhrc-to-be": {
    slug: "unhrc-to-be",
    title: "Human Rights Council (UNHRC)",
    description: `AGENDA:  
To be released soon`,
    body: `To be published soon`,
    image: images[4]
  },
  "icj-to-be": {
    slug: "icj-to-be",
    title: "International Court of Justice (ICJ)",
    description: `AGENDA:  
To be released soon`,
    body: `To be published soon`,
    image: images[5]
  },
  "fao-to-be": {
    slug: "fao-to-be",
    title: "Food and Agriculture Organization (FAO)",
    description: `AGENDA:  
To be released soon`,
    body: `To be published soon`,
    image: images[6]
  },
  "cbd-to-be": {
    slug: "cbd-to-be",
    title: "Convention on Biological Diversity (CBD)",
    description: `AGENDA:  
To be released soon`,
    body: `To be published soon`,
    image: images[7]
  },
  "ecosoc-to-be": {
    slug: "ecosoc-to-be",
    title: "Economic and Social Council (ECOSOC)",
    description: `AGENDA:  
To be released soon`,
    body: `To be published soon`,
    image: images[8]
  },
  "iaea-to-be": {
    slug: "iaea-to-be",
    title: "International Atomic Energy Agency (IAEA)",
    description: `AGENDA:  
To be released soon`,
    body: `To be published soon`,
    image: images[9]
  },
  "asean-to-be": {
    slug: "asean-to-be",
    title: "Association of Southeast Asian Nations (ASEAN)",
    description: `AGENDA:  
To be released soon`,
    body: `To be published soon`,
    image: images[10]
  },
  "ipc-to-be": {
    slug: "ipc-to-be",
    title: "International Press Corps (IPC)",
    description: `AGENDA:  
To be released soon`,
    body: `To be published soon`,
    image: images[11]
  },
  "big-to-be": {
    slug: "big-to-be",
    title: "Bangladesh Interim Government",
    description: `AGENDA:  
To be released soon`,
    body: `To be published soon`,
    image: images[12]
  },
  "mcc-to-be": {
    slug: "mcc-to-be",
    title: "Moving Crisis Committee (MCC)",
    description: `AGENDA:  
To be released soon`,
    body: `To be published soon`,
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