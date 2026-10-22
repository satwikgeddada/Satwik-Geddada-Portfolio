import {
  Code2,
  Layout,
  Server,
  Brain,
  Wrench,
  HeartHandshake,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  color: string;
  className?: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: Code2,
    color: "from-blue-500/20 to-indigo-500/20",
    skills: [
      "Python",
      "C / C++",
      "Java",
      "JavaScript",
      "TypeScript",
      "DSA",
    ],
  },
  {
    title: "Frontend",
    icon: Layout,
    color: "from-cyan-500/20 to-blue-500/20",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Framer Motion",
    ],
  },
  {
    title: "Backend & Databases",
    icon: Server,
    color: "from-green-500/20 to-emerald-500/20",
    skills: [
      "FastAPI",
      "Flask",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "PostgreSQL",
    ],
  },
  {
    title: "AI/ML & Tools",
    icon: Brain,
    color: "from-purple-500/20 to-pink-500/20",
    skills: [
      "Generative AI",
      "LLMs",
      "RAG",
      "Prompt Engineering",
      "Docker",
      "AWS",
    ],
  },
  {
    title: "Other Skills & Tools",
    icon: Wrench,
    color: "from-amber-500/20 to-orange-500/20",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Vercel",
      "CapCut",
      "Video Editing",
      "Content Creation",
    ],
  },
  {
    title: "Soft Skills",
    icon: HeartHandshake,
    color: "from-rose-500/20 to-orange-500/20",
    skills: [
      "Problem Solving",
      "Public Speaking",
      "Team Leadership",
      "Critical Thinking",
    ],
  },
];
