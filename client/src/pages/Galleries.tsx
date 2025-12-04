import Navigation from "@/components/Navigation";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  url: string;
  thumb: string;
  caption?: string;
}

interface Gallery {
  id: string;
  title: string;
  description: string;
  date: string;
  coverImage: string;
  images: GalleryImage[];
}

// Gallery configuration - Add your image URLs here
const GALLERIES: Gallery[] = [
  {
    id: "Day-1",
    title: "Day 1",
    description: "Inaugural event highlights,presentation and MUN conference",
    date: "2025-11-28",
    coverImage: "https://i.postimg.cc/DyXvCgG7/Whats-App-Image-2025-11-28-at-21-23-38-37150602.jpg",
    images: [
      {
        url: "https://i.postimg.cc/Yq7VZ8KC/Whats-App-Image-2025-11-28-at-21-23-19-be99ea5a.jpg?w=1200",
        thumb: "https://i.postimg.cc/Yq7VZ8KC/Whats-App-Image-2025-11-28-at-21-23-19-be99ea5a.jpg?w=400",
        caption: "Sponsors of PIMUN 2025"
      },
      {
        url: "https://i.postimg.cc/85VBcKb5/Whats-App-Image-2025-11-28-at-21-23-20-af71bb50.jpg?w=1200",
        thumb: "https://i.postimg.cc/85VBcKb5/Whats-App-Image-2025-11-28-at-21-23-20-af71bb50.jpg?w=400",
        caption: "Delegate Registration Booth - 01"
      },
      {
        url: "https://i.postimg.cc/B6qLRdgk/Whats-App-Image-2025-11-28-at-21-23-20-d550b292.jpg?w=1200",
        thumb: "https://i.postimg.cc/B6qLRdgk/Whats-App-Image-2025-11-28-at-21-23-20-d550b292.jpg?w=400",
        caption: "Delegate Registration Booth - 02"
      },
      {
        url: "https://i.postimg.cc/4dLdqnnK/Whats-App-Image-2025-11-28-at-21-23-20-76070926.jpg?w=1200",
        thumb: "https://i.postimg.cc/4dLdqnnK/Whats-App-Image-2025-11-28-at-21-23-20-76070926.jpg?w=400",
        caption: "Delegate Registration Booth - 03"
      },
      {
        url: "https://i.postimg.cc/pXD9XW6g/Whats-App-Image-2025-11-28-at-21-23-21-8d8ab389.jpg?w=1200",
        thumb: "https://i.postimg.cc/pXD9XW6g/Whats-App-Image-2025-11-28-at-21-23-21-8d8ab389.jpg?w=400",
        caption: "Delegate Registration Booth - 04"
      },
      {
        url: "https://i.postimg.cc/m2GDqxgM/Whats-App-Image-2025-11-28-at-21-23-21-4b5120fd.jpg?w=1200",
        thumb: "https://i.postimg.cc/m2GDqxgM/Whats-App-Image-2025-11-28-at-21-23-21-4b5120fd.jpg?w=400",
        caption: "Delegate Registration Booth - 05"
      },
      {
        url: "https://i.postimg.cc/kGPnk8qR/Whats-App-Image-2025-11-28-at-21-23-22-58c826af.jpg?w=1200",
        thumb: "https://i.postimg.cc/kGPnk8qR/Whats-App-Image-2025-11-28-at-21-23-22-58c826af.jpg?w=400",
        caption: "Delegate Registration Booth - 06"
      },
      {
        url: "https://i.postimg.cc/cJ8G0HDs/Whats-App-Image-2025-11-28-at-21-23-22-ca72eb89.jpg?w=1200",
        thumb: "https://i.postimg.cc/cJ8G0HDs/Whats-App-Image-2025-11-28-at-21-23-22-ca72eb89.jpg?w=400",
        caption: "Chief Guest at the Opening Ceremony, joined by the Directors and Vice Principal of Presidency International School."
      },
      {
        url: "https://i.postimg.cc/26cQGkDK/Whats-App-Image-2025-11-28-at-21-23-22-dd4c6503.jpg?w=1200",
        thumb: "https://i.postimg.cc/26cQGkDK/Whats-App-Image-2025-11-28-at-21-23-22-dd4c6503.jpg?w=400",
        caption: "Opening Ceremony - 01"
      },
      {
        url: "https://i.postimg.cc/x13tHScm/Whats-App-Image-2025-11-28-at-21-23-23-5beea460.jpg?w=1200",
        thumb: "https://i.postimg.cc/x13tHScm/Whats-App-Image-2025-11-28-at-21-23-23-5beea460.jpg?w=400",
        caption: "Opening Ceremony - 02"
      },
      {
        url: "https://i.postimg.cc/s229hQkb/Whats-App-Image-2025-11-28-at-21-23-23-de30db66.jpg?w=1200",
        thumb: "https://i.postimg.cc/s229hQkb/Whats-App-Image-2025-11-28-at-21-23-23-de30db66.jpg?w=400",
        caption: "Opening Ceremony Drone Shot - 01"
      },
      {
        url: "https://i.postimg.cc/ZRxbznR8/Whats-App-Image-2025-11-28-at-21-23-24-b7e1135d.jpg?w=1200",
        thumb: "https://i.postimg.cc/ZRxbznR8/Whats-App-Image-2025-11-28-at-21-23-24-b7e1135d.jpg?w=400",
        caption: "Opening Ceremony Drone Shot - 02"
      },  
      {
        url: "https://i.postimg.cc/cJVgLvdN/Whats-App-Image-2025-11-28-at-21-23-24-2eb0139b.jpg?w=1200",
        thumb: "https://i.postimg.cc/cJVgLvdN/Whats-App-Image-2025-11-28-at-21-23-24-2eb0139b.jpg?w=400",
        caption: "Opening Ceremony Live Screen"
      }, 
      {
        url: "https://i.postimg.cc/8CBQj3Vt/Whats-App-Image-2025-11-28-at-21-23-25-440fc8c8.jpg?w=1200",
        thumb: "https://i.postimg.cc/8CBQj3Vt/Whats-App-Image-2025-11-28-at-21-23-25-440fc8c8.jpg?w=400",
        caption: "Guests at Opening Ceremony"
      }, 
      {
        url: "https://i.postimg.cc/sXNnX91k/Whats-App-Image-2025-11-28-at-21-23-25-d8f7b92c.jpg?w=1200",
        thumb: "https://i.postimg.cc/sXNnX91k/Whats-App-Image-2025-11-28-at-21-23-25-d8f7b92c.jpg?w=400",
        caption: "National Anthem"
      }, 
      {
        url: "https://i.postimg.cc/Gp70FDHJ/Whats-App-Image-2025-11-28-at-21-23-26-55ac89f1.jpg?w=1200",
        thumb: "https://i.postimg.cc/Gp70FDHJ/Whats-App-Image-2025-11-28-at-21-23-26-55ac89f1.jpg?w=400",
        caption: "Vice Principal of Presidency International School, Mohammad Jashim Uddin"
      }, 
      {
        url: "https://i.postimg.cc/2539fKSv/Whats-App-Image-2025-11-28-at-21-23-26-54b30a78.jpg?w=1200",
        thumb: "https://i.postimg.cc/2539fKSv/Whats-App-Image-2025-11-28-at-21-23-26-54b30a78.jpg?w=400",
        caption: "Guests at opening ceremony."
      },
      {
        url: "https://i.postimg.cc/c4nsdF65/Whats-App-Image-2025-11-28-at-21-23-27-cb1f201d.jpg?w=1200",
        thumb: "https://i.postimg.cc/c4nsdF65/Whats-App-Image-2025-11-28-at-21-23-27-cb1f201d.jpg?w=400",
        caption: "Mazuma Morshed, Managing Partner at Mentors' Chittagong."
      },
      {
        url: "https://i.postimg.cc/wvNp9vjm/Whats-App-Image-2025-11-28-at-21-23-27-afa9b08e.jpg?w=1200",
        thumb: "https://i.postimg.cc/wvNp9vjm/Whats-App-Image-2025-11-28-at-21-23-27-afa9b08e.jpg?w=400",
        caption: "Delegates."
      },
      {
        url: "https://i.postimg.cc/2Sygz6Hc/Whats-App-Image-2025-11-28-at-21-23-27-f1d88166.jpg?w=1200",
        thumb: "https://i.postimg.cc/2Sygz6Hc/Whats-App-Image-2025-11-28-at-21-23-27-f1d88166.jpg?w=400",
        caption: "Saiba Sobhan, Secretary General of PIMUN 2025"
      },      
      {
        url: "https://i.postimg.cc/YCvD5P9W/Whats-App-Image-2025-11-28-at-21-23-28-2ae446e1.jpg?w=1200",
        thumb: "https://i.postimg.cc/YCvD5P9W/Whats-App-Image-2025-11-28-at-21-23-28-2ae446e1.jpg?w=400",
        caption: "Vice Principal of Presidency International School, Mohammed Jashim Uddin."
      },      
      {
        url: "https://i.postimg.cc/L6tjnBWh/Whats-App-Image-2025-11-28-at-21-23-28-b5685beb.jpg?w=1200",
        thumb: "https://i.postimg.cc/L6tjnBWh/Whats-App-Image-2025-11-28-at-21-23-28-b5685beb.jpg?w=400",
        caption: "Delegates at opening ceremony - 01."
      },      
      {
        url: "https://i.postimg.cc/bNhtcSwL/Whats-App-Image-2025-11-28-at-21-23-28-b205c5c2.jpg?w=1200",
        thumb: "https://i.postimg.cc/bNhtcSwL/Whats-App-Image-2025-11-28-at-21-23-28-b205c5c2.jpg?w=400",
        caption: "Delegates at opening ceremony - 02."
      },              
      {
        url: "https://i.postimg.cc/tRtg6SXQ/Whats-App-Image-2025-11-28-at-21-23-29-dae86b00.jpg?w=1200",
        thumb: "https://i.postimg.cc/tRtg6SXQ/Whats-App-Image-2025-11-28-at-21-23-29-dae86b00.jpg?w=400",
        caption: "Teachers of Presidency International School."
      },      
      {
        url: "https://i.postimg.cc/25Rp2YwB/Whats-App-Image-2025-11-28-at-21-23-29-9adb03bd.jpg?w=1200",
        thumb: "https://i.postimg.cc/25Rp2YwB/Whats-App-Image-2025-11-28-at-21-23-29-9adb03bd.jpg?w=400",
        caption: "Chief Guest of PIMUN 2025, Mohammed Mizanur Rahman."
      }, 
      {
        url: "https://i.postimg.cc/LsXytbdL/Whats-App-Image-2025-11-28-at-21-23-30-ab4df05c.jpg?w=1200",
        thumb: "https://i.postimg.cc/LsXytbdL/Whats-App-Image-2025-11-28-at-21-23-30-ab4df05c.jpg?w=400",
        caption: "Chief Guest of PIMUN 2025 giving his speech."
      },      
      {
        url: "https://i.postimg.cc/G3JkpxV0/Whats-App-Image-2025-11-28-at-21-23-30-de55a497.jpg?w=1200",
        thumb: "https://i.postimg.cc/G3JkpxV0/Whats-App-Image-2025-11-28-at-21-23-30-de55a497.jpg?w=400",
        caption: "International Press Corps committee in session."
      },      
      {
        url: "https://i.postimg.cc/HnBz8wSM/Whats-App-Image-2025-11-28-at-21-23-31-31cf4683.jpg?w=1200",
        thumb: "https://i.postimg.cc/HnBz8wSM/Whats-App-Image-2025-11-28-at-21-23-31-31cf4683.jpg?w=400",
        caption: "Chief Guest of PIMUN 2025 giving his speech."
      },      
      {
        url: "https://i.postimg.cc/jdTCDVNf/Whats-App-Image-2025-11-28-at-21-23-31-0092b1ed.jpg?w=1200",
        thumb: "https://i.postimg.cc/jdTCDVNf/Whats-App-Image-2025-11-28-at-21-23-31-0092b1ed.jpg?w=400",
        caption: "Vice Principal of Presidency International School, E.U.M Intekhab."
      },           
      {
        url: "https://i.postimg.cc/VLHy3nYN/Whats-App-Image-2025-11-28-at-21-23-32-905e8bd6.jpg?w=1200",
        thumb: "https://i.postimg.cc/VLHy3nYN/Whats-App-Image-2025-11-28-at-21-23-32-905e8bd6.jpg?w=400",
        caption: "ECOSOC committee in session."
      },      
      {
        url: "https://i.postimg.cc/g0F7WK1v/Whats-App-Image-2025-11-28-at-21-23-32-d2cf684c.jpg?w=1200",
        thumb: "https://i.postimg.cc/g0F7WK1v/Whats-App-Image-2025-11-28-at-21-23-32-d2cf684c.jpg?w=400",
        caption: "CBD committee in session - 01."
      },  
      {
        url: "https://i.postimg.cc/FsPNTBWP/Whats-App-Image-2025-11-28-at-21-23-33-c0f17fd7.jpg?w=1200",
        thumb: "https://i.postimg.cc/FsPNTBWP/Whats-App-Image-2025-11-28-at-21-23-33-c0f17fd7.jpg?w=400",
        caption: "CBD committee in session - 02."
      }, 
      {
        url: "https://i.postimg.cc/C5xL1TrV/Whats-App-Image-2025-11-28-at-21-23-35-35211ff3.jpg?w=1200",
        thumb: "https://i.postimg.cc/C5xL1TrV/Whats-App-Image-2025-11-28-at-21-23-35-35211ff3.jpg?w=400",
        caption: "CBD committee in session - 03."
      },     
      {
        url: "https://i.postimg.cc/HnsF5pgV/Whats-App-Image-2025-11-28-at-21-23-33-5790f751.jpg?w=1200",
        thumb: "https://i.postimg.cc/HnsF5pgV/Whats-App-Image-2025-11-28-at-21-23-33-5790f751.jpg?w=400",
        caption: "UNDP committee in session - 01."
      }, 
      {
        url: "https://i.postimg.cc/mD08ZBg9/Whats-App-Image-2025-11-28-at-21-23-34-7e5c687e.jpg?w=1200",
        thumb: "https://i.postimg.cc/mD08ZBg9/Whats-App-Image-2025-11-28-at-21-23-34-7e5c687e.jpg?w=400",
        caption: "UNDP committee in session - 02."
      },  
      {
        url: "https://i.postimg.cc/d05fYbdM/Whats-App-Image-2025-11-28-at-21-23-34-bc9707f1.jpg?w=1200",
        thumb: "https://i.postimg.cc/d05fYbdM/Whats-App-Image-2025-11-28-at-21-23-34-bc9707f1.jpg?w=400",
        caption: "UNSC committee in session - 01."
      },   
      {
        url: "https://i.postimg.cc/C57BPsXk/Whats-App-Image-2025-11-28-at-21-23-34-7bcd897b.jpg?w=1200",
        thumb: "https://i.postimg.cc/C57BPsXk/Whats-App-Image-2025-11-28-at-21-23-34-7bcd897b.jpg?w=400",
        caption: "Opening Ceremony."
      },
      {
        url: "https://i.postimg.cc/wMn8dSCx/Whats-App-Image-2025-11-28-at-21-23-35-ab3fe562.jpg?w=1200",
        thumb: "https://i.postimg.cc/wMn8dSCx/Whats-App-Image-2025-11-28-at-21-23-35-ab3fe562.jpg?w=400",
        caption: "UNHRC in committee session - 01."
      },
      {
        url: "https://i.postimg.cc/jdTBy4RL/Whats-App-Image-2025-11-28-at-21-23-35-56866bef.jpg?w=1200",
        thumb: "https://i.postimg.cc/jdTBy4RL/Whats-App-Image-2025-11-28-at-21-23-35-56866bef.jpg?w=400",
        caption: "CBD in committee session - 01."
      },
      {
        url: "https://i.postimg.cc/bwD0J44H/Whats-App-Image-2025-11-28-at-21-23-36-11d9990e.jpg?w=1200",
        thumb: "https://i.postimg.cc/bwD0J44H/Whats-App-Image-2025-11-28-at-21-23-36-11d9990e.jpg?w=400",
        caption: "DISEC in committee session - 01."
      },
      {
        url: "https://i.postimg.cc/Sj0SG2NK/Whats-App-Image-2025-11-28-at-21-23-37-080e7f3d.jpg?w=1200",
        thumb: "https://i.postimg.cc/Sj0SG2NK/Whats-App-Image-2025-11-28-at-21-23-37-080e7f3d.jpg?w=400",
        caption: "DISEC in committee session - 02."
      },
      {
        url: "https://i.postimg.cc/hPLFz3xz/Whats-App-Image-2025-11-28-at-21-23-37-236aa305.jpg?w=1200",
        thumb: "https://i.postimg.cc/hPLFz3xz/Whats-App-Image-2025-11-28-at-21-23-37-236aa305.jpg?w=400",
        caption: "DISEC in committee session - 03."
      },
      {
        url: "https://i.postimg.cc/8Cd6fG49/Whats-App-Image-2025-11-28-at-21-23-36-f8046af9.jpg?w=1200",
        thumb: "https://i.postimg.cc/8Cd6fG49/Whats-App-Image-2025-11-28-at-21-23-36-f8046af9.jpg?w=400",
        caption: "ECOSOC in committee session - 01."
      },
      {
        url: "https://i.postimg.cc/hPLFz3xz/Whats-App-Image-2025-11-28-at-21-23-37-236aa305.jpg?w=1200",
        thumb: "https://i.postimg.cc/hPLFz3xz/Whats-App-Image-2025-11-28-at-21-23-37-236aa305.jpg?w=400",
        caption: "DISEC in committee session - 01."
      },
      {
        url: "https://i.postimg.cc/65y2BnvN/Whats-App-Image-2025-11-28-at-21-23-38-4dfcde14.jpg?w=1200",
        thumb: "https://i.postimg.cc/65y2BnvN/Whats-App-Image-2025-11-28-at-21-23-38-4dfcde14.jpg?w=400",
        caption: "UNSC in committee session - 01."
      },
      {
        url: "https://i.postimg.cc/LXx5p846/Whats-App-Image-2025-11-28-at-21-23-38-1273b2f9.jpg?w=1200",
        thumb: "https://i.postimg.cc/LXx5p846/Whats-App-Image-2025-11-28-at-21-23-38-1273b2f9.jpg?w=400",
        caption: "Opening ceremony."
      },
      {
        url: "https://i.postimg.cc/DyXvCgG7/Whats-App-Image-2025-11-28-at-21-23-38-37150602.jpg?w=1200",
        thumb: "https://i.postimg.cc/DyXvCgG7/Whats-App-Image-2025-11-28-at-21-23-38-37150602.jpg?w=400",
        caption: "PIMUN 2025 Group Photograph (Everyone)."
      },
      {
        url: "https://i.postimg.cc/DyXvCgG7/Whats-App-Image-2025-11-28-at-21-23-38-37150602.jpg?w=1200",
        thumb: "https://i.postimg.cc/DyXvCgG7/Whats-App-Image-2025-11-28-at-21-23-38-37150602.jpg?w=400",
        caption: "PIMUN 2025."
      },
      {
        url: "https://i.postimg.cc/vHFTwkbX/Whats-App-Image-2025-11-28-at-21-23-39-84720732.jpg?w=1200",
        thumb: "https://i.postimg.cc/vHFTwkbX/Whats-App-Image-2025-11-28-at-21-23-39-84720732.jpg?w=400",
        caption: "The Secretary General and Deputy Secretary General receiving and welcoming the Chief Guest."
      },
    ]
  },
  {
    id: "Day-2",
    title: "Day-2",
    description: "Debates and discussions",
    date: "2025-11-29",
    coverImage: "https://i.postimg.cc/ydMk8Y3Z/Whats-App-Image-2025-11-29-at-19-07-56-36dea2a4.jpg?w=1200",
    images: [
      {
        url: "https://i.postimg.cc/28MwYz39/Whats-App-Image-2025-11-29-at-19-07-54-5632c5f2.jpg?w=1200",
        thumb: "https://i.postimg.cc/28MwYz39/Whats-App-Image-2025-11-29-at-19-07-54-5632c5f2.jpg?w=400",
        caption: "ECOSOC Committee in session - 01."
      },
      {
        url: "https://i.postimg.cc/L8yZSDxW/Whats-App-Image-2025-11-29-at-19-07-54-23906c59.jpg?w=1200",
        thumb: "https://i.postimg.cc/L8yZSDxW/Whats-App-Image-2025-11-29-at-19-07-54-23906c59.jpg?w=400",
        caption: "ECOSOC Committee in session - 02."
      },
      {
        url: "https://i.postimg.cc/Wb8dmSc8/Whats-App-Image-2025-11-29-at-19-07-54-a410abab.jpg?w=1200",
        thumb: "https://i.postimg.cc/Wb8dmSc8/Whats-App-Image-2025-11-29-at-19-07-54-a410abab.jpg?w=400",
        caption: "ECOSOC Committee in session - 03."
      },
      {
        url: "https://i.postimg.cc/7PMhDXhk/Whats-App-Image-2025-11-29-at-19-07-54-d10f6f17.jpg?w=1200",
        thumb: "https://i.postimg.cc/7PMhDXhk/Whats-App-Image-2025-11-29-at-19-07-54-d10f6f17.jpg?w=400",
        caption: "UNDP Committee in session - 01."
      },
      {
        url: "https://i.postimg.cc/J4FLWBb2/Whats-App-Image-2025-11-29-at-19-07-54-a5aacfa3.jpg?w=1200",
        thumb: "hhttps://i.postimg.cc/J4FLWBb2/Whats-App-Image-2025-11-29-at-19-07-54-a5aacfa3.jpg?w=400",
        caption: "UNDP Committee in session - 02."
      },
      {
        url: "https://i.postimg.cc/qvr9rXtk/Whats-App-Image-2025-11-29-at-19-07-54-441c266f.jpg?w=1200",
        thumb: "https://i.postimg.cc/qvr9rXtk/Whats-App-Image-2025-11-29-at-19-07-54-441c266f.jpg?w=400",
        caption: "UNDP Committee in session - 03."
      },
      {
        url: "https://i.postimg.cc/cLXZ55FP/Whats-App-Image-2025-11-29-at-19-07-55-9951a5a0.jpg?w=1200",
        thumb: "https://i.postimg.cc/cLXZ55FP/Whats-App-Image-2025-11-29-at-19-07-55-9951a5a0.jpg?w=400",
        caption: "IAEA Committee in session - 01."
      },
      {
        url: "https://i.postimg.cc/HksV6NQN/Whats-App-Image-2025-11-29-at-19-07-55-bab07b24.jpg?w=1200",
        thumb: "https://i.postimg.cc/HksV6NQN/Whats-App-Image-2025-11-29-at-19-07-55-bab07b24.jpg?w=400",
        caption: "IAEA Committee in session - 02."
      },
      {
        url: "https://i.postimg.cc/wBRxPY7z/Whats-App-Image-2025-11-29-at-19-07-55-194c0fa5.jpg?w=1200",
        thumb: "https://i.postimg.cc/wBRxPY7z/Whats-App-Image-2025-11-29-at-19-07-55-194c0fa5.jpg?w=400",
        caption: "CBD Committee in session - 01."
      },
      {
        url: "https://i.postimg.cc/HksV6NQN/Whats-App-Image-2025-11-29-at-19-07-55-bab07b24.jpg?w=1200",
        thumb: "https://i.postimg.cc/HksV6NQN/Whats-App-Image-2025-11-29-at-19-07-55-bab07b24.jpg?w=400",
        caption: "CBD Committee in session - 02."
      },
      {
        url: "https://i.postimg.cc/mk56KJcL/Whats-App-Image-2025-11-29-at-19-07-55-2a54a641.jpg?w=1200",
        thumb: "https://i.postimg.cc/mk56KJcL/Whats-App-Image-2025-11-29-at-19-07-55-2a54a641.jpg?w=400",
        caption: "CBD Committee in session - 03."
      },
      {
        url: "https://i.postimg.cc/qvf1n8yC/Whats-App-Image-2025-11-29-at-19-07-55-06989586.jpg?w=1200",
        thumb: "https://i.postimg.cc/qvf1n8yC/Whats-App-Image-2025-11-29-at-19-07-55-06989586.jpg?w=400",
        caption: "UNCSW Committee in session - 01."
      },
      {
        url: "https://i.postimg.cc/zXh99Dk4/Whats-App-Image-2025-11-29-at-19-07-56-54a5f017.jpg?w=1200",
        thumb: "https://i.postimg.cc/zXh99Dk4/Whats-App-Image-2025-11-29-at-19-07-56-54a5f017.jpg?w=400",
        caption: "UNCSW Committee in session - 02."
      },
      {
        url: "https://i.postimg.cc/zXh99Dk4/Whats-App-Image-2025-11-29-at-19-07-56-54a5f017.jpg?w=1200",
        thumb: "https://i.postimg.cc/zXh99Dk4/Whats-App-Image-2025-11-29-at-19-07-56-54a5f017.jpg?w=400",
        caption: "UNCSW Committee in session - 02."
      },
      {
        url: "https://i.postimg.cc/6qPtzHtd/Whats-App-Image-2025-11-29-at-19-07-56-65a03da8.jpg?w=1200",
        thumb: "https://i.postimg.cc/6qPtzHtd/Whats-App-Image-2025-11-29-at-19-07-56-65a03da8.jpg?w=400",
        caption: "UNCSW Committee in session - 03."
      },
      {
        url: "https://i.postimg.cc/x8N1rrsf/Whats-App-Image-2025-11-29-at-19-07-56-4c957066.jpg?w=1200",
        thumb: "https://i.postimg.cc/x8N1rrsf/Whats-App-Image-2025-11-29-at-19-07-56-4c957066.jpg?w=400",
        caption: "UNCSW Committee in session - 04."
      },
      {
        url: "https://i.postimg.cc/ydMk8Y3Z/Whats-App-Image-2025-11-29-at-19-07-56-36dea2a4.jpg?w=1200",
        thumb: "https://i.postimg.cc/x8N1rrsf/Whats-App-Image-2025-11-29-at-19-07-56-4c957066.jpg?w=400",
        caption: "UNCSW Committee in session - 04."
      },
      {
        url: "https://i.postimg.cc/ydMk8Y3Z/Whats-App-Image-2025-11-29-at-19-07-56-36dea2a4.jpg?w=1200",
        thumb: "https://i.postimg.cc/ydMk8Y3Z/Whats-App-Image-2025-11-29-at-19-07-56-36dea2a4.jpg?w=400",
        caption: "UNCSW Committee in session - 05."
      },
      {
        url: "https://i.postimg.cc/8PKgRXwX/Whats-App-Image-2025-11-29-at-19-07-56-6eebe264.jpg?w=1200",
        thumb: "https://i.postimg.cc/8PKgRXwX/Whats-App-Image-2025-11-29-at-19-07-56-6eebe264.jpg?w=400",
        caption: "UNCSW Committee in session - 06."
      },
      {
        url: "https://i.postimg.cc/2SbM4k1H/Whats-App-Image-2025-11-29-at-19-07-57-6fa2d073.jpg?w=1200",
        thumb: "https://i.postimg.cc/2SbM4k1H/Whats-App-Image-2025-11-29-at-19-07-57-6fa2d073.jpg?w=400",
        caption: "UNCSW Committee in session - 07."
      },
      {
        url: "https://i.postimg.cc/yxppZtBn/Whats-App-Image-2025-11-29-at-19-07-57-00246bd3.jpg?w=1200",
        thumb: "https://i.postimg.cc/yxppZtBn/Whats-App-Image-2025-11-29-at-19-07-57-00246bd3.jpg?w=400",
        caption: "UNCSW Committee in session - 07."
      },
      {
        url: "https://i.postimg.cc/NMSpGTxW/Whats-App-Image-2025-11-29-at-19-07-57-8603836b.jpg?w=1200",
        thumb: "https://i.postimg.cc/NMSpGTxW/Whats-App-Image-2025-11-29-at-19-07-57-8603836b.jpg?w=400",
        caption: "FAO Committee in session - 01."
      },
      {
        url: "https://i.postimg.cc/ZYPd5pjB/Whats-App-Image-2025-11-29-at-19-07-57-5d58f8ac.jpg?w=1200",
        thumb: "https://i.postimg.cc/ZYPd5pjB/Whats-App-Image-2025-11-29-at-19-07-57-5d58f8ac.jpg?w=400",
        caption: "UNSC Committee in session - 01."
      },
      {
        url: "https://i.postimg.cc/RFBZkbr5/Whats-App-Image-2025-11-29-at-19-07-57-ee7919c3.jpg?w=1200",
        thumb: "https://i.postimg.cc/RFBZkbr5/Whats-App-Image-2025-11-29-at-19-07-57-ee7919c3.jpg?w=400",
        caption: "UNSC Committee in session - 02."
      },
    ]
  },
  {
    id: "Day-3",
    title: "Day-3",
    description: "Networking, entertainment and rewards distributions",
    date: "2024-01-17",
    coverImage: "https://i.postimg.cc/q7nSBjLm/Whats-App-Image-2025-12-02-at-14-23-09-793032a5.jpg?w=1200",
    images: [
      {
        url: "https://i.postimg.cc/qRf2xG2Q/Whats-App-Image-2025-12-02-at-14-23-08-d2e1648a.jpg?w=1200",
        thumb: "https://i.postimg.cc/qRf2xG2Q/Whats-App-Image-2025-12-02-at-14-23-08-d2e1648a.jpg?w=400",
        caption: "Evening social"
      },
      {
        url: "https://i.postimg.cc/BQcsSZhZ/Whats-App-Image-2025-12-02-at-14-23-09-ce4685be.jpg?w=1200",
        thumb: "https://i.postimg.cc/BQcsSZhZ/Whats-App-Image-2025-12-02-at-14-23-09-ce4685be.jpg?w=400",
        caption: "Evening social"
      },
      {
        url: "https://i.postimg.cc/cHpgS1Fg/Whats-App-Image-2025-12-02-at-14-23-09-ed47f8ac.jpg?w=1200",
        thumb: "https://i.postimg.cc/cHpgS1Fg/Whats-App-Image-2025-12-02-at-14-23-09-ed47f8ac.jpg?w=400",
        caption: "Vice Principal of Presidency International School, EUM Intekhab"
      },
      {
        url: "https://i.postimg.cc/prQTMf9s/Whats-App-Image-2025-12-02-at-14-23-09-85b8c5ef.jpg?w=1200",
        thumb: "https://i.postimg.cc/prQTMf9s/Whats-App-Image-2025-12-02-at-14-23-09-85b8c5ef.jpg?w=400",
        caption: "Vice Principal & Guidance Counsellor of Presidency International School, Mohammad Jashim Uddin"
      },
      {
        url: "https://i.postimg.cc/ZYw2V9DY/Whats-App-Image-2025-12-02-at-14-23-09-277756ad.jpg?w=1200",
        thumb: "https://i.postimg.cc/ZYw2V9DY/Whats-App-Image-2025-12-02-at-14-23-09-277756ad.jpg?w=400",
        caption: ""
      },
      {
        url: "https://i.postimg.cc/xdg3nmmb/Whats-App-Image-2025-12-02-at-14-23-09-c785ec69.jpg?w=1200",
        thumb: "https://i.postimg.cc/xdg3nmmb/Whats-App-Image-2025-12-02-at-14-23-09-c785ec69.jpg?w=400",
        caption: "Crest Handover"
      },
      {
        url: "https://i.postimg.cc/9Mr8kbkH/Whats-App-Image-2025-12-02-at-14-23-09-92524ad2.jpg?w=1200",
        thumb: "https://i.postimg.cc/9Mr8kbkH/Whats-App-Image-2025-12-02-at-14-23-09-92524ad2.jpg?w=400",
        caption: "Crest Handover 2"
      },
      {
        url: "https://i.postimg.cc/ydgjjdJd/Whats-App-Image-2025-12-02-at-14-23-09-5e065f16.jpg?w=1200",
        thumb: "https://i.postimg.cc/ydgjjdJd/Whats-App-Image-2025-12-02-at-14-23-09-5e065f16.jpg?w=400",
        caption: "Manzuma Mazumder, Guest of Honour - 01"
      },
      {
        url: "https://i.postimg.cc/598q2DLT/Whats-App-Image-2025-12-02-at-14-23-09-c22d1388.jpg?w=1200",
        thumb: "https://i.postimg.cc/598q2DLT/Whats-App-Image-2025-12-02-at-14-23-09-c22d1388.jpg?w=400",
        caption: "Manzuma Mazumder, Guest of Honour - 02"
      },
      {
        url: "https://i.postimg.cc/s2t7VJXY/Whats-App-Image-2025-12-02-at-14-23-09-8d323436.jpg?w=1200",
        thumb: "https://i.postimg.cc/s2t7VJXY/Whats-App-Image-2025-12-02-at-14-23-09-8d323436.jpg?w=400",
        caption: "Pasha Sarwar receiving his crest"
      },
      {
        url: "https://i.postimg.cc/65m3JpT3/Whats-App-Image-2025-12-02-at-14-23-09-0d292a10.jpg?w=1200",
        thumb: "https://i.postimg.cc/65m3JpT3/Whats-App-Image-2025-12-02-at-14-23-09-0d292a10.jpg?w=400",
        caption: "Samin Yasar, Department of Finance recieving his crest"
      },
      {
        url: "https://i.postimg.cc/3rb7WbhF/Whats-App-Image-2025-12-02-at-14-23-09-6ba1bc4f.jpg?w=1200",
        thumb: "https://i.postimg.cc/3rb7WbhF/Whats-App-Image-2025-12-02-at-14-23-09-6ba1bc4f.jpg?w=400",
        caption: "Secretary General, Saiba Sobhan receiving her crest"
      },
      {
        url: "https://i.postimg.cc/qMXPybHv/Whats-App-Image-2025-12-02-at-14-23-09-eaf96217.jpg?w=1200",
        thumb: "https://i.postimg.cc/qMXPybHv/Whats-App-Image-2025-12-02-at-14-23-09-eaf96217.jpg?w=400",
        caption: "Delegates - 01"
      },
      {
        url: "https://i.postimg.cc/fTKPJVYX/Whats-App-Image-2025-12-02-at-14-23-09-22fb299e.jpg?w=1200",
        thumb: "https://i.postimg.cc/fTKPJVYX/Whats-App-Image-2025-12-02-at-14-23-09-22fb299e.jpg?w=400",
        caption: "Delegates - 02"
      },
      {
        url: "https://i.postimg.cc/kXn137Lq/Whats-App-Image-2025-12-02-at-14-23-09-83d1b118.jpg?w=1200",
        thumb: "https://i.postimg.cc/kXn137Lq/Whats-App-Image-2025-12-02-at-14-23-09-83d1b118.jpg?w=400",
        caption: "Delegates - 03"
      },
      {
        url: "https://i.postimg.cc/VvzR8FG4/Whats-App-Image-2025-12-02-at-14-23-09-83ff611d.jpg?w=1200",
        thumb: "https://i.postimg.cc/VvzR8FG4/Whats-App-Image-2025-12-02-at-14-23-09-83ff611d.jpg?w=400",
        caption: "Delegates - 04"
      },
      {
        url: "https://i.postimg.cc/4NSzLZgv/Whats-App-Image-2025-12-02-at-14-23-09-bd04d3b1.jpg?w=1200",
        thumb: "https://i.postimg.cc/4NSzLZgv/Whats-App-Image-2025-12-02-at-14-23-09-bd04d3b1.jpg?w=400",
        caption: "Delegates - 05"
      },
      {
        url: "https://i.postimg.cc/BnF1mKN9/Whats-App-Image-2025-12-02-at-14-23-09-e307a31f.jpg?w=1200",
        thumb: "https://i.postimg.cc/BnF1mKN9/Whats-App-Image-2025-12-02-at-14-23-09-e307a31f.jpg?w=400",
        caption: "Delegates - 06"
      },
      {
        url: "https://i.postimg.cc/vZ7Z1L37/Whats-App-Image-2025-12-02-at-14-23-09-e8f3a038.jpg?w=1200",
        thumb: "https://i.postimg.cc/vZ7Z1L37/Whats-App-Image-2025-12-02-at-14-23-09-e8f3a038.jpg?w=400",
        caption: "Delegates - 07"
      },
      {
        url: "https://i.postimg.cc/02DwfSct/Whats-App-Image-2025-12-02-at-14-23-09-5679819e.jpg?w=1200",
        thumb: "https://i.postimg.cc/02DwfSct/Whats-App-Image-2025-12-02-at-14-23-09-5679819e.jpg?w=400",
        caption: "Delegates - 08"
      },
      {
        url: "https://i.postimg.cc/MTncjfnY/Whats-App-Image-2025-12-02-at-14-23-09-2d901daa.jpg?w=1200",
        thumb: "https://i.postimg.cc/MTncjfnY/Whats-App-Image-2025-12-02-at-14-23-09-2d901daa.jpg?w=400",
        caption: "Delegates - 09"
      },
      {
        url: "https://i.postimg.cc/7Y357kLr/Whats-App-Image-2025-12-02-at-14-23-09-1c9d91a1.jpg?w=1200",
        thumb: "https://i.postimg.cc/7Y357kLr/Whats-App-Image-2025-12-02-at-14-23-09-1c9d91a1.jpg?w=400",
        caption: "Delegates - 10"
      },
      {
        url: "https://i.postimg.cc/xT2C943F/Whats-App-Image-2025-12-02-at-14-23-09-aeaca3d2.jpg?w=1200",
        thumb: "https://i.postimg.cc/xT2C943F/Whats-App-Image-2025-12-02-at-14-23-09-aeaca3d2.jpg?w=400",
        caption: "Delegates - 11"
      },
      {
        url: "https://i.postimg.cc/ncg3sqCr/Whats-App-Image-2025-12-02-at-14-23-09-8ff047c4.jpg?w=1200",
        thumb: "https://i.postimg.cc/ncg3sqCr/Whats-App-Image-2025-12-02-at-14-23-09-8ff047c4.jpg?w=400",
        caption: "Delegates - 12"
      },
      {
        url: "https://i.postimg.cc/v8WY2vw0/Whats-App-Image-2025-12-02-at-14-23-09-ad121e08.jpg?w=1200",
        thumb: "https://i.postimg.cc/v8WY2vw0/Whats-App-Image-2025-12-02-at-14-23-09-ad121e08.jpg?w=400",
        caption: "Farishta Hoq performing recitation from the Holy Quran"
      },
      {
        url: "https://i.postimg.cc/q7nSBjLm/Whats-App-Image-2025-12-02-at-14-23-09-793032a5.jpg?w=1200",
        thumb: "https://i.postimg.cc/q7nSBjLm/Whats-App-Image-2025-12-02-at-14-23-09-793032a5.jpg?w=400",
        caption: "Delegates Award"
      },
      {
        url: "https://i.postimg.cc/5NCwRTND/Whats-App-Image-2025-12-02-at-14-23-09-3ce00e3a.jpg?w=1200",
        thumb: "https://i.postimg.cc/5NCwRTND/Whats-App-Image-2025-12-02-at-14-23-09-3ce00e3a.jpg?w=400",
        caption: "Academics & Documentation Team receiving the crests"
      },
      {
        url: "https://i.postimg.cc/BQTCvR9F/Whats-App-Image-2025-12-02-at-14-23-10-45966de5.jpg?w=1200",
        thumb: "https://i.postimg.cc/BQTCvR9F/Whats-App-Image-2025-12-02-at-14-23-10-45966de5.jpg?w=400",
        caption: "Conference Management & Security receiving their crests"
      },
      {
        url: "https://i.postimg.cc/BQTCvR9F/Whats-App-Image-2025-12-02-at-14-23-10-45966de5.jpg?w=1200",
        thumb: "https://i.postimg.cc/BQTCvR9F/Whats-App-Image-2025-12-02-at-14-23-10-45966de5.jpg?w=400",
        caption: "IT, Conference Management & Security recieving their crests "
      },
      {
        url: "https://i.postimg.cc/RhFz0wqC/Whats-App-Image-2025-12-02-at-14-23-10-d6369c08.jpg?w=1200",
        thumb: "https://i.postimg.cc/RhFz0wqC/Whats-App-Image-2025-12-02-at-14-23-10-d6369c08.jpg?w=400",
        caption: "Secretariat Board Group Photograph - 01"
      },
      {
        url: "https://i.postimg.cc/d3XgtXz4/Whats-App-Image-2025-12-02-at-14-23-10-27e3bd4e.jpg?w=1200",
        thumb: "https://i.postimg.cc/d3XgtXz4/Whats-App-Image-2025-12-02-at-14-23-10-27e3bd4e.jpg?w=400",
        caption: "Secretariat Board Group Photograph - 02"
      },
      {
        url: "https://i.postimg.cc/wj8F9JWb/Whats-App-Image-2025-12-02-at-14-23-10-074d0163.jpg?w=1200",
        thumb: "https://i.postimg.cc/wj8F9JWb/Whats-App-Image-2025-12-02-at-14-23-10-074d0163.jpg?w=400",
        caption: "Secretariat Board Group Photograph - 03"
      },
      {
        url: "https://i.postimg.cc/y6gH2yqG/Whats-App-Image-2025-12-02-at-14-23-10-8607363d.jpg?w=1200",
        thumb: "https://i.postimg.cc/y6gH2yqG/Whats-App-Image-2025-12-02-at-14-23-10-8607363d.jpg?w=400",
        caption: "Guests"
      },
      {
        url: "https://i.postimg.cc/jqJpMqPS/Whats-App-Image-2025-12-02-at-14-23-10-40b2309a.jpg?w=1200",
        thumb: "https://i.postimg.cc/jqJpMqPS/Whats-App-Image-2025-12-02-at-14-23-10-40b2309a.jpg?w=400",
        caption: "Closing Plenary"
      },
      {
        url: "https://i.postimg.cc/L6WZ2Thv/Whats-App-Image-2025-12-02-at-14-23-10-7e8724c4.jpg?w=1200",
        thumb: "https://i.postimg.cc/L6WZ2Thv/Whats-App-Image-2025-12-02-at-14-23-10-7e8724c4.jpg?w=400",
        caption: "Samin Yasar giving his speech"
      },
      {
        url: "https://i.postimg.cc/Qt5rKjq8/Whats-App-Image-2025-12-02-at-14-23-10-d2f53142.jpg?w=1200",
        thumb: "https://i.postimg.cc/Qt5rKjq8/Whats-App-Image-2025-12-02-at-14-23-10-d2f53142.jpg?w=400",
        caption: "Translation of the Holy Quran"
      },
      {
        url: "https://i.postimg.cc/W1KKGQz1/Whats-App-Image-2025-12-02-at-14-23-10-e8f8b806.jpg?w=1200",
        thumb: "https://i.postimg.cc/W1KKGQz1/Whats-App-Image-2025-12-02-at-14-23-10-e8f8b806.jpg?w=400",
        caption: "Guests accompanied by Mohammad Jashim Uddin"
      },
      {
        url: "https://i.postimg.cc/59TCMgXS/Whats-App-Image-2025-12-02-at-14-23-10-399136b2.jpg?w=1200",
        thumb: "https://i.postimg.cc/59TCMgXS/Whats-App-Image-2025-12-02-at-14-23-10-399136b2.jpg?w=400",
        caption: "Showing honor to the National Anthem"
      },
      {
        url: "https://i.postimg.cc/GhDXyzVF/Whats-App-Image-2025-12-02-at-14-23-10-2fd08291.jpg?w=1200",
        thumb: "https://i.postimg.cc/GhDXyzVF/Whats-App-Image-2025-12-02-at-14-23-10-2fd08291.jpg?w=400",
        caption: "Guest giving Speech"
      },
      {
        url: "https://i.postimg.cc/28nx6yBp/Whats-App-Image-2025-12-02-at-14-23-10-73a14d05.jpg?w=1200",
        thumb: "https://i.postimg.cc/28nx6yBp/Whats-App-Image-2025-12-02-at-14-23-10-73a14d05.jpg?w=400",
        caption: "Vice Principal of Presidency International School, EUM Intekhab"
      },
      {
        url: "https://i.postimg.cc/26BZK9QD/Whats-App-Image-2025-12-02-at-14-23-10-8af08160.jpg?w=1200",
        thumb: "https://i.postimg.cc/26BZK9QD/Whats-App-Image-2025-12-02-at-14-23-10-8af08160.jpg?w=400",
        caption: "Guests receiving award"
      },
      {
        url: "https://i.postimg.cc/Nfb5pv3F/Whats-App-Image-2025-12-02-at-14-23-10-1859c313.jpg?w=1200",
        thumb: "https://i.postimg.cc/Nfb5pv3F/Whats-App-Image-2025-12-02-at-14-23-10-1859c313.jpg?w=400",
        caption: "Iftekhar Ali Siam,Editor of IP receiving his crest"
      },
      {
        url: "https://i.postimg.cc/SRsw48x1/Whats-App-Image-2025-12-02-at-14-23-10-9a79056c.jpg?w=1200",
        thumb: "https://i.postimg.cc/SRsw48x1/Whats-App-Image-2025-12-02-at-14-23-10-9a79056c.jpg?w=400",
        caption: "Guests receiving award"
      },
      {
        url: "https://i.postimg.cc/W1MYQS7R/Whats-App-Image-2025-12-02-at-14-23-10-8fcf1e64.jpg?w=1200",
        thumb: "https://i.postimg.cc/W1MYQS7R/Whats-App-Image-2025-12-02-at-14-23-10-8fcf1e64.jpg?w=400",
        caption: ""
      },
      {
        url: "https://i.postimg.cc/Y2TH7nQW/Whats-App-Image-2025-12-02-at-14-23-10-a509f5e2.jpg?w=1200",
        thumb: "https://i.postimg.cc/Y2TH7nQW/Whats-App-Image-2025-12-02-at-14-23-10-a509f5e2.jpg?w=400",
        caption: ""
      },
      {
        url: "https://i.postimg.cc/PxNgsYxF/Whats-App-Image-2025-12-02-at-14-23-10-06f31d83.jpg?w=1200",
        thumb: "https://i.postimg.cc/PxNgsYxF/Whats-App-Image-2025-12-02-at-14-23-10-06f31d83.jpg?w=400",
        caption: "Deputy Secretary General, Gyan Dipta Ghosh receiving his crest"
      },
      {
        url: "https://i.postimg.cc/fRwgQmq0/Whats-App-Image-2025-12-02-at-14-23-10-2227993e.jpg?w=1200",
        thumb: "https://i.postimg.cc/fRwgQmq0/Whats-App-Image-2025-12-02-at-14-23-10-2227993e.jpg?w=400",
        caption: "Secretariat Board group photograph"
      },
      {
        url: "https://i.postimg.cc/7L59qV3Y/Whats-App-Image-2025-12-02-at-14-23-10-6ca1e44f.jpg?w=1200",
        thumb: "https://i.postimg.cc/7L59qV3Y/Whats-App-Image-2025-12-02-at-14-23-10-6ca1e44f.jpg?w=400",
        caption: ""
      },
      {
        url: "https://i.postimg.cc/vZN72VJg/Whats-App-Image-2025-12-02-at-14-23-10-3b68bc80.jpg?w=1200",
        thumb: "https://i.postimg.cc/vZN72VJg/Whats-App-Image-2025-12-02-at-14-23-10-3b68bc80.jpg?w=400",
        caption: ""
      },
      {
        url: "https://i.postimg.cc/W4ZZ9fm9/Whats-App-Image-2025-12-02-at-14-23-10-3aedd957.jpg?w=1200",
        thumb: "https://i.postimg.cc/W4ZZ9fm9/Whats-App-Image-2025-12-02-at-14-23-10-3aedd957.jpg?w=400",
        caption: ""
      },
      {
        url: "https://i.postimg.cc/kgmDJXWk/Whats-App-Image-2025-12-02-at-14-23-10-9b82c272.jpg?w=1200",
        thumb: "https://i.postimg.cc/kgmDJXWk/Whats-App-Image-2025-12-02-at-14-23-10-9b82c272.jpg?w=400",
        caption: ""
      },
      {
        url: "https://i.postimg.cc/C13ScmNd/Whats-App-Image-2025-12-02-at-14-23-10-54dbab23.jpg?w=1200",
        thumb: "https://i.postimg.cc/C13ScmNd/Whats-App-Image-2025-12-02-at-14-23-10-54dbab23.jpg?w=400",
        caption: ""
      },
      {
        url: "https://i.postimg.cc/PxhM1jG1/Whats-App-Image-2025-12-02-at-14-23-10-9086581d.jpg?w=1200",
        thumb: "https://i.postimg.cc/PxhM1jG1/Whats-App-Image-2025-12-02-at-14-23-10-9086581d.jpg?w=400",
        caption: ""
      },
      {
        url: "https://i.postimg.cc/9MF7WF5s/Whats-App-Image-2025-12-02-at-14-23-10-5ec47c5b.jpg?w=1200",
        thumb: "https://i.postimg.cc/9MF7WF5s/Whats-App-Image-2025-12-02-at-14-23-10-5ec47c5b.jpg?w=400",
        caption: ""
      },
      {
        url: "https://i.postimg.cc/RZYS3Stx/Whats-App-Image-2025-12-02-at-14-23-10-05ebf2ea.jpg?w=1200",
        thumb: "https://i.postimg.cc/RZYS3Stx/Whats-App-Image-2025-12-02-at-14-23-10-05ebf2ea.jpg?w=400",
        caption: ""
      },
      {
        url: "https://i.postimg.cc/g0RWnvd3/Whats-App-Image-2025-12-02-at-14-23-10-518c5cbd.jpg?w=1200",
        thumb: "https://i.postimg.cc/g0RWnvd3/Whats-App-Image-2025-12-02-at-14-23-10-518c5cbd.jpg?w=400",
        caption: ""
      },
      {
        url: "https://i.postimg.cc/rwR6PSDJ/Whats-App-Image-2025-12-02-at-14-23-10-2bb062f3.jpg?w=1200",
        thumb: "https://i.postimg.cc/rwR6PSDJ/Whats-App-Image-2025-12-02-at-14-23-10-2bb062f3.jpg?w=400",
        caption: ""
      },
      {
        url: "https://i.postimg.cc/sD1bMp4Z/Whats-App-Image-2025-12-02-at-14-23-10-adff2f83.jpg?w=1200",
        thumb: "https://i.postimg.cc/sD1bMp4Z/Whats-App-Image-2025-12-02-at-14-23-10-adff2f83.jpg?w=400",
        caption: ""
      },
      {
        url: "https://i.postimg.cc/5yyKFVvv/Whats-App-Image-2025-12-02-at-14-23-10-eeae17f1.jpg?w=1200",
        thumb: "https://i.postimg.cc/5yyKFVvv/Whats-App-Image-2025-12-02-at-14-23-10-eeae17f1.jpg?w=400",
        caption: ""
      },
      {
        url: "https://i.postimg.cc/RFVXjBPq/Whats-App-Image-2025-12-02-at-14-23-10-0f30f8ab.jpg?w=1200",
        thumb: "https://i.postimg.cc/RFVXjBPq/Whats-App-Image-2025-12-02-at-14-23-10-0f30f8ab.jpg?w=400",
        caption: ""
      },
      {
        url: "https://i.postimg.cc/4340TVdq/Whats-App-Image-2025-12-02-at-14-23-10-9fe8168e.jpg?w=1200",
        thumb: "https://i.postimg.cc/4340TVdq/Whats-App-Image-2025-12-02-at-14-23-10-9fe8168e.jpg?w=400",
        caption: ""
      },
      {
        url: "https://i.postimg.cc/PfvRhtX5/Whats-App-Image-2025-12-02-at-14-23-10-a91cd5da.jpg?w=1200",
        thumb: "https://i.postimg.cc/PfvRhtX5/Whats-App-Image-2025-12-02-at-14-23-10-a91cd5da.jpg?w=400",
        caption: ""
      },
      {
        url: "https://i.postimg.cc/qRhjkLdF/Whats-App-Image-2025-12-02-at-14-23-10-dd853840.jpg?w=1200",
        thumb: "https://i.postimg.cc/qRhjkLdF/Whats-App-Image-2025-12-02-at-14-23-10-dd853840.jpg?w=400",
        caption: "Featuring Rayshot"
      },
    ]
  }
];

export default function Galleries() {
  const [selectedGallery, setSelectedGallery] = useState<Gallery | null>(null);
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openGallery = (gallery: Gallery) => {
    setSelectedGallery(gallery);
  };

  const closeGallery = () => {
    setSelectedGallery(null);
  };

  const openLightbox = (image: GalleryImage, index: number, gallery: Gallery) => {
    setLightboxImage(image);
    setLightboxIndex(index);
    setSelectedGallery(gallery);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    if (selectedGallery && lightboxIndex < selectedGallery.images.length - 1) {
      const newIndex = lightboxIndex + 1;
      setLightboxIndex(newIndex);
      setLightboxImage(selectedGallery.images[newIndex]);
    }
  };

  const prevImage = () => {
    if (selectedGallery && lightboxIndex > 0) {
      const newIndex = lightboxIndex - 1;
      setLightboxIndex(newIndex);
      setLightboxImage(selectedGallery.images[newIndex]);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 px-6">
        <section className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="glass thin-border rounded-xl p-6 lgold-glow mb-8">
            <h1 className="text-3xl font-serif font-semibold">Galleries</h1>
            <p className="text-muted-foreground mt-2">Event photography and highlights</p>
          </div>

          {/* Gallery Grid or Individual Gallery */}
          {!selectedGallery || lightboxImage ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {GALLERIES.map((gallery) => (
                <div
                  key={gallery.id}
                  onClick={() => openGallery(gallery)}
                  className="glass thin-border rounded-xl overflow-hidden cursor-pointer lgold-glow hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={gallery.coverImage}
                      alt={gallery.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-serif font-semibold">{gallery.title}</h3>
                      <span className="text-sm text-primary">{gallery.images.length} photos</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{gallery.description}</p>
                    <p className="text-xs text-muted-foreground">{new Date(gallery.date).toLocaleDateString()}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              {/* Back Button */}
              <button
                onClick={closeGallery}
                className="flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                Back to Galleries
              </button>

              {/* Gallery Header */}
              <div className="glass thin-border rounded-xl p-6 lgold-glow mb-8">
                <h2 className="text-2xl font-serif font-semibold mb-2">{selectedGallery.title}</h2>
                <p className="text-muted-foreground">{selectedGallery.description}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {new Date(selectedGallery.date).toLocaleDateString()} • {selectedGallery.images.length} photos
                </p>
              </div>

              {/* Photo Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {selectedGallery.images.map((image: GalleryImage, index: number) => (
                  <div
                    key={index}
                    onClick={() => openLightbox(image, index, selectedGallery)}
                    className="group relative aspect-square glass thin-border rounded-lg overflow-hidden cursor-pointer lgold-glow hover:shadow-lg transition-all duration-300"
                  >
                    <img
                      src={image.thumb}
                      alt={image.caption || `Photo ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                      {image.caption && (
                        <p className="text-sm font-medium text-foreground">{image.caption}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </main>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 glass thin-border rounded-full lgold-glow transition-colors z-10 hover:bg-primary/20"
          >
            <X className="w-6 h-6 text-primary" />
          </button>

          {/* Navigation Arrows */}
          {lightboxIndex > 0 && (
            <button
              onClick={prevImage}
              className="absolute left-4 p-3 glass thin-border rounded-full lgold-glow transition-colors z-10 hover:bg-primary/20"
            >
              <ChevronLeft className="w-8 h-8 text-primary" />
            </button>
          )}
          {selectedGallery && lightboxIndex < selectedGallery.images.length - 1 && (
            <button
              onClick={nextImage}
              className="absolute right-4 p-3 glass thin-border rounded-full lgold-glow transition-colors z-10 hover:bg-primary/20"
            >
              <ChevronRight className="w-8 h-8 text-primary" />
            </button>
          )}

          {/* Image */}
          <div className="max-w-7xl max-h-[90vh] px-4">
            <img
              src={lightboxImage.url}
              alt={lightboxImage.caption}
              className="max-w-full max-h-[80vh] object-contain mx-auto thin-border rounded-lg"
            />
            {lightboxImage.caption && (
              <p className="text-center mt-4 text-muted-foreground">{lightboxImage.caption}</p>
            )}
            <p className="text-center text-sm text-muted-foreground mt-2">
              {lightboxIndex + 1} / {selectedGallery?.images.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
