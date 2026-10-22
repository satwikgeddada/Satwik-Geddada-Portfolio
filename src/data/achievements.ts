import {
  Trophy,
  Users,
  Cpu,
  BrainCircuit,
  Code2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Achievement {
  order: number;
  title: string;
  category: string;
  icon: LucideIcon;
  description: string;
  className?: string;
  image?: string;
  fit?: "cover" | "contain";
  focus?: string;
}

export const achievements: Achievement[] = [
  {
    order: 1,
    title: "1st Prize Winner",
    category: "ESPARX 2026 – JNTUK",
    icon: Trophy,
    description:
      "Secured 1st prize at the ESPARX event organized by JNTUK for the WiFi Smart Shield project, showcasing an innovative smart WiFi solution through practical implementation, technical creativity, and problem-solving.",
    image: "/espark_expo.webp",
    fit: "cover",
    focus: "center 20%",
  },
  {
    order: 2,
    title: "Microsoft Student Ambassador",
    category: "Leadership",
    icon: Users,
    description:
      "Recognized as a Microsoft Student Ambassador for promoting technology, sharing knowledge, and fostering innovation within the student community.",
    image: "/msa.webp",
    fit: "contain",
  },
  {
    order: 3,
    title: "2nd Prize Winner",
    category: "Aditya University Project Expo",
    icon: Trophy,
    description:
      "Secured 2nd prize at the Aditya University Project Expo for showcasing an innovative engineering solution. Recognized for technical excellence, creative problem-solving, and practical implementation, with the achievement featured in a college news article.",
    image: "/Aditya_University_Project_Expo.webp",
    fit: "contain",
  },
  {
    order: 4,
    title: "3rd Place (2nd Runner-Up)",
    category: "V Cube National Level GenAI Hackathon",
    icon: Trophy,
    description:
      "Secured 3rd prize in a national-level GenAI hackathon organized by Srinivasa Institute of Engineering and Technology in collaboration with V Cube Software Solutions, Hyderabad. Collaborated with a team to develop innovative AI solutions, demonstrating problem-solving, teamwork, and technical expertise in Generative AI.",
    image: "/vcube-hackathon.webp",
    fit: "cover",
    focus: "center 25%",
  },
  {
    order: 5,
    title: "2nd Prize Winner",
    category: "CodeYodha Coding Competition",
    icon: Trophy,
    description:
      "Secured 2nd prize in a competitive coding event, demonstrating strong problem-solving, algorithmic thinking, and programming skills.",
    image: "/codeyodha.webp",
    fit: "cover",
    focus: "center 25%",
  },
  {
    order: 6,
    title: "1st Prize Winner",
    category: "Quiz Competition",
    icon: Trophy,
    description:
      "Secured 1st prize in a quiz competition, demonstrating strong knowledge, quick thinking, analytical skills, and problem-solving abilities.",
    image: "/quiz-competition.webp",
    fit: "cover",
    focus: "center 25%",
  },
  {
    order: 7,
    title: "Build with AI Bootcamp 2026",
    category: "Google for Developers × Hack2Skill",
    icon: BrainCircuit,
    description:
      "Participated in the Build with AI Bootcamp 2026 organized by Google for Developers and Hack2Skill at Sasi Institute of Technology and Engineering, Tadepalligudem, exploring practical AI development and hands-on applications of artificial intelligence.",
    image: "/Build_with_AI_Bootcamp.webp",
    fit: "contain",
  },
  {
    order: 8,
    title: "Embedded Systems, IoT & Smart Drone Development using AI",
    category: "ESPARX 2026 - Workshop",
    icon: Cpu,
    description:
      "Completed a two-day workshop at ESPARX 2026, JNTUK, exploring Embedded Systems, IoT, and AI-powered Smart Drone Development. Gained hands-on exposure to real-world applications, system analysis, and practical engineering.",
    image: "/esparx_workshop.webp",
    fit: "cover",
    focus: "center 25%",
  },
  {
    order: 9,
    title: "30-Day POTD Challenge",
    category: "Unstop | Problem of the Day",
    icon: Code2,
    description:
      "Completed the Unstop 30-Day Problem of the Day Challenge, strengthening problem-solving abilities, logical thinking, and coding skills through consistent daily programming practice.",
    image: "/unstop_potd.webp",
    fit: "contain",
  },
];
