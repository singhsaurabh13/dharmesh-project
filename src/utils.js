import { Bolt } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { BellDot } from "lucide-react";
import { BookOpenText } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { TriangleAlert } from "lucide-react";
import { Users } from "lucide-react";
import { Lock } from "lucide-react";
import { Dessert } from "lucide-react";
import { ShieldPlus } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Images } from "lucide-react";
import { Figma } from "lucide-react";
import { Play } from "lucide-react";
import { MapPin } from "lucide-react";
import { Database } from "lucide-react";
import { PanelsTopLeft } from "lucide-react";
import { PanelTop } from "lucide-react";

export const Menus = [
    {

      path: "",
        name:"Home"

    },

  {
    name: "About",
   
    // subMenuHeading: ["Design", "Scale"], 
    subMenu: [
      {
        name: "Guru",
        path: "/about",
        desc: "Responsive design",
        icon: PanelsTopLeft,
      },
      {
        name: "Guru Sankalpa",
        path: "/about",
        desc: "Site control",
        icon: Bolt,
      },
      {
        name: "Associated centres",
        path: "/about",
        desc: "Link pages",
        icon: PanelTop,
      },
      {
        name: "Upcoming projects",
        path: "/about",
        desc: "Management content",
        icon: Database,
      },
    
      {
        name: "Bhargava Upasana",
        path: "/about",
        desc: "Management content",
        icon: Database,
      },
    ],
    gridCols: 2,
  },
  {
    name: "Rituals",
    // subMenuHeading: ["OFFLINE", "ONLINE", "Homam"],
    subMenu: [
      {
        name: "Abhisekam",
        desc: "Online",
        path: "/abhi",
        icon: ShoppingBag,
      },
      {
        name: "Abhisekam",
        desc: "Offline",
        path: "/abhi",
        icon: MapPin,
      },
      {
        name: "Navagraha Homam / Shanti Homam",
        desc: "Homam",
        icon: BellDot,
      },
      {
        name: "Lakshmi Homam",
        desc: "Homam",
        icon: Play,
      },
      {
        name: "Maha Mrithyunjaya Homam",
        desc: "Homam",
        icon: BookOpenText,
      },
      {
        name: "Mahalakshmi Homam",
        desc: "Homam",
        icon: Figma,
      },
      {
        name: "Sri Suktha  Homam",
        desc: "Homam",
        icon: BriefcaseBusiness,
      },
      {
        name: "Sudarshan Homam",
        desc: "Homam",
        icon: Images,
      },
      {
        name: "Chandi Homam",
        desc: "Homam",
        icon: Images,
      },
      {
        name: "Booh Varaha Homam",
        desc: "Homam",
        icon: Images,
      },
      {
        name: "Saraswathi Homam",
        desc: "Homam",
        icon: Images,
      },
      {
        name: "Ayushya Homam",
        desc: "Homam",
        icon: Images,
      },
    ],
    gridCols: 2,
  },
  {
    name: "Dhanurveda",
    subMenu: [
      {
        name: "Origin",
        path: "/Dhanur",
        desc: "Dhanurveda",
        icon: CircleHelp,
      },
      {
        name: "Dhanurvidya",
        desc: "Dhanurveda",
        icon: MessageCircle,
      },
      {
        name: "Khadgavidya",
        desc: "Dhanurveda",
        icon: MessageCircle,
      },
      {
        name: "Gadavidya",
        desc: "Dhanurveda",
        icon: TriangleAlert,
      },
    ],
    gridCols: 1,
  },
  {
    name: "Courses",
    // subMenuHeading: ["Overview", "Features"],
    subMenu: [
      {
        name: "3 Days Camp",
        desc: "Beginner",
        icon: ShieldPlus,
      },
      {
        name: "5 Days Camp",
        desc: "Beginner",
        icon: Users,
      },
      {
        name: "7 Days Camp",
        desc: "Level 1",
        icon: Dessert,
      },
      {
        name: " 11 Days Camp",
        desc: "Teacher Training",
        icon: Lock,
      },
    ],
    gridCols: 2,
  },
  {
    name: "Gurukulam",
    subMenu: [
      {
        name: "Tirupati",
        // desc: "Center",
        icon: CircleHelp,
      },
   
    ],
    gridCols: 1,
  },
  {
    name: "Tempale",
    subMenu: [
      {
        name: "Tirupati",
        // desc: "Center",
        icon: CircleHelp,
      },
   
    ],
    gridCols: 1,
  },
  {
    name: "Get Involved",
    subMenu: [
      {
        name: "Volunteer",
        desc: "Center",
        icon: CircleHelp,
      },
      {
        name: "Offer Seva",
        desc: "Project help",
        icon: MessageCircle,
      },
      {
        name: "Careers",
        desc: "Urgent issues",
        icon: TriangleAlert,
      },
    ],
    gridCols: 1,
  },
  
  {
    name: "Events",
  },
  {
    name: "Contact",
  },
];