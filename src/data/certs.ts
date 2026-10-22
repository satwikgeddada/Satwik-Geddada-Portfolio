/**
 * CERTIFICATIONS DATA STORE
 *
 * HOW TO ADD A NEW CERTIFICATE & IMAGE:
 * 1. Place your certificate image (e.g., .png, .jpg, .webp) into the `public/certs/` folder.
 *    Example: `public/certs/aws-cloud-foundations.png`
 * 2. Add an entry to the `certs` array below:
 *    {
 *      id: "unique-slug-id",
 *      order: 1,
 *      title: "Certificate Name",
 *      issuer: "Organization Name",
 *      date: "2026",
 *      image: "/certs/your-image-filename.png", // or "" if not available yet
 *      link: "https://your-verification-link.com", // leave "" or omit to hide the "Verify credential" link
 *      tags: ["Tag1", "Tag2"],
 *      category: "AI & Machine Learning" | "Cloud & DevOps" | "Data & Databases" | "Security & Emerging Tech",
 *    }
 * 3. If `image` is empty ("" or undefined), a "Certificate image coming soon" placeholder
 *    will automatically be rendered in 4:3 aspect ratio.
 */

export type CertCategory =
  | "AI & Machine Learning"
  | "Cloud & DevOps"
  | "Data & Databases"
  | "Security & Emerging Tech";

export interface CertItem {
  id: string;
  order: number;
  title: string;
  issuer: string;
  date: string;
  image?: string;
  link?: string;
  tags: string[];
  category: CertCategory;
}

export const certs: CertItem[] = [
  {
    id: "Gen-AI-Academy-Ai-Ml",
    order: 1,
    title: "AI & Machine Learning Learning Track",
    issuer: "Google Cloud",
    date: "2025",
    image: "/certs/H2S10GENAI-AIML.jpg",
    link: "https://certificate.hack2skill.com/verify/2025H2S10GENAI-AIML100108",
    tags: [
      "Generative AI",
      "Machine Learning",
      "Google Cloud",
      "Document AI",
      "Dataflow",
      "Dataproc",
    ],
    category: "AI & Machine Learning",
  },
  {
    id: "mongodb-rag",
    order: 2,
    title: "Building RAG Apps Using MongoDB",
    issuer: "MongoDB",
    date: "2026",
    image: "/certs/Building RAG Apps Using MongoDB.jpg",
    link: "https://www.credly.com/earner/earned/badge/e98c381d-e0d8-4ffb-92b7-d6305d603a3e",
    tags: ["MongoDB", "RAG", "Vector Search", "GenAI", "Embeddings"],
    category: "AI & Machine Learning",
  },
  {
    id: "oracle-agentic-ai",
    order: 3,
    title: "Agentic AI Certified Foundations Associate",
    issuer: "Oracle University",
    date: "2026",
    image: "/certs/oracle agentic ai foundations.jpg",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=3D84F2B0C4F46685F4115FA89AA54EF30E174BEB62DFA9B3ACDA623B3B4D8FDC",
    tags: ["Agentic AI", "LLMs", "Autonomous Agents", "Oracle Cloud"],
    category: "AI & Machine Learning",
  },
  {
    id: "forage-genai-data-analytics",
    order: 4,
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Forage",
    date: "2026",
    image: "/certs/GenAI Powered Data Analytics Job Simulation.jpg",
    link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_6aa1253772c3c37111613c6a_1790401689480_completion_certificate.pdf",
    tags: ["GenAI", "Data Analytics", "Prompt Engineering", "Python"],
    category: "AI & Machine Learning",
  },
  {
    id: "gfg-genai-snowflake",
    order: 5,
    title: "Introduction to Generative AI with Snowflake",
    issuer: "GeeksforGeeks",
    date: "2026",
    image: "/certs/Introduction to Generative AI with Snowflake.jpg",
    link: "https://media.geeksforgeeks.org/courses/certificates/e3c9143353efdabeaeffa2e3a922aecf.pdf",
    tags: ["Snowflake", "Generative AI", "Data Cloud", "LLMs"],
    category: "AI & Machine Learning",
  },
  {
    id: "ibm-getting-started-ai",
    order: 6,
    title: "Getting Started with Artificial Intelligence",
    issuer: "IBM",
    date: "2024",
    image: "/certs/ibm-getting-started-ai.jpg",
    link: "https://www.credly.com/badges/d3156dbd-35de-444a-b010-5fb6013bc076/public_url",
    tags: ["Artificial Intelligence", "Machine Learning", "IBM Watson"],
    category: "AI & Machine Learning",
  },
  {
    id: "aws-cloud-foundations",
    order: 7,
    title: "AWS Academy Graduate - Cloud Foundations",
    issuer: "AWS Academy",
    date: "2026",
    image: "/certs/AWS_Academy_Graduate___Cloud_Foundations.jpg",
    link: "https://www.credly.com/badges/2926ccbf-fe4d-45dc-9099-a2ce90fb77df",
    tags: ["AWS", "Cloud Architecture", "EC2", "S3", "IAM"],
    category: "Cloud & DevOps",
  },
  {
    id: "Gen-AI-Academy-DevOps",
    order: 8,
    title: "DevOps Learning Track",
    issuer: "Google Cloud",
    date: "2025",
    image: "/certs/H2S10GENAI-DE.jpg",
    link: "https://certificate.hack2skill.com/verify/2025H2S10GENAI-DE100166",
    tags: [
      "Google Cloud",
      "DevOps",
      "CI/CD",
      "Kubernetes",
      "Artifact Registry",
      "Cloud Build",
      "GKE",
    ],
    category: "Cloud & DevOps",
  },
  {
    id: "nptel-cloud-computing",
    order: 9,
    title: "Cloud Computing",
    issuer: "IIT Kharagpur(NPTEL)",
    date: "2025",
    image: "/certs/Cloud Computing NPTEL.jpg",
    link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs107/Course/NPTEL25CS107S45110054010829595.pdf",
    tags: ["Cloud Computing", "Virtualization", "Distributed Systems", "NPTEL"],
    category: "Cloud & DevOps",
  },
  {
    id: "cognitive-data-analysis-python",
    order: 10,
    title: "Data Analysis with Python",
    issuer: "Cognitive Class",
    date: "2024",
    image: "/certs/Data Analysis with Python.jpg",
    link: "https://courses.cognitiveclass.ai/certificates/36747a627cf04a3caf5a99470f8dca96",
    tags: ["Python", "Pandas", "NumPy", "Data Analysis"],
    category: "Data & Databases",
  },
  {
    id: "forage-data-visualisation",
    order: 11,
    title: "Data Visualisation: Empowering Business with Effective Insights",
    issuer: "Forage",
    date: "2026",
    image: "/certs/Data Visualisation Job Simulation.jpg",
    link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_6aa1253772c3c37111613c6a_1790404805706_completion_certificate.pdf",
    tags: ["Data Visualisation", "Tableau", "Business Analytics", "Data Storytelling"],
    category: "Data & Databases",
  },
  {
    id: "reddis-software-operator",
    order: 12,
    title: "Reddis Associate Software Operator",
    issuer: "Reddis",
    date: "2026",
    image: "/certs/reddis associate software operator.jpg",
    link: "https://credentials.redis.io/9f3cc476-ed2d-46f3-9a2e-9849fec40cff#acc.9OPI25EjS",
    tags: ["Redis", "Caching", "Key-Value Stores", "In-Memory Systems"],
    category: "Data & Databases",
  },
  {
    id: "forage-cybersecurity",
    order: 13,
    title: "Cybersecurity Analyst Job Simulation",
    issuer: "Forage",
    date: "2026",
    image: "/certs/Cybersecurity Analyst Job Simulation.jpg",
    link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_6aa1253772c3c37111613c6a_1790411731491_completion_certificate.pdf",
    tags: ["Cybersecurity", "Threat Analysis", "Network Security", "Security Operations"],
    category: "Security & Emerging Tech",
  },
  {
    id: "wiser-quantum",
    order: 14,
    title: "Quantum Fundamentals",
    issuer: "Wiser",
    date: "2026",
    image: "/certs/quantum fundamentals.jpg",
    link: "#",
    tags: ["Quantum Computing", "Qubits", "Quantum Algorithms"],
    category: "Security & Emerging Tech",
  },
];
