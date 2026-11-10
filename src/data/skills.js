// Skills are grouped so the page stays easy to scan.
//
// level:
//   "core"  - what I use day to day / in professional work
//   "solid" - used in real projects, comfortable working with it
//   "basic" - working knowledge / actively learning
//
// To add a skill, add { name, level } to a group. `note` is optional short text.
export const skillLevels = {
  core: { label: "Core", hint: "used day to day" },
  solid: { label: "Solid", hint: "used in real projects" },
  basic: {
    label: "Working knowledge",
    hint: "hands-on basics, still learning",
  },
};

export const skillGroups = [
  {
    id: "frontend",
    title: "Frontend",
    blurb:
      "Where I spend most of my time: fast, accessible and maintainable user interfaces.",
    skills: [
      { name: "Vue", level: "core" },
      { name: "React", level: "core" },
      { name: "TypeScript", level: "core" },
      { name: "HTML/CSS", level: "core" },
      { name: "Next.js", level: "solid" },
      { name: "Nuxt", level: "solid" },
      { name: "TailwindCSS", level: "solid" },
      { name: "GraphQL / Apollo", level: "solid" },
      { name: "MUI / Chakra / shadcn / vuetify", level: "solid" },
      { name: "Redux", level: "solid" },
    ],
  },
  {
    id: "backend",
    title: "Backend & data",
    blurb:
      "APIs and data layers that are simple to reason about and to change.",
    skills: [
      { name: "Node.js", level: "core" },
      { name: "REST & GraphQL APIs", level: "core" },
      { name: "PostgreSQL", level: "core" },
      { name: "Python", level: "solid" },
      { name: "Prisma", level: "solid" },
      { name: "MongoDB", level: "solid" },
    ],
  },
  {
    id: "architecture",
    title: "Architecture & DevOps",
    blurb:
      "I design for maintainability first, and I know enough infrastructure to ship and run what I build.",
    skills: [
      { name: "Git", level: "core" },
      { name: "Docker", level: "core" },
      { name: "Software architecture", level: "core" },
      { name: "CI/CD", level: "solid" },
      { name: "Terraform", level: "basic" },
      { name: "Ansible", level: "basic" },
      { name: "nginx", level: "basic" },
    ],
  },
  {
    id: "ai",
    title: "AI & agents",
    blurb:
      "Building with LLMs and agents, and using AI-assisted development responsibly. It was also the topic of my bachelor's thesis.",
    skills: [
      { name: "AI-assisted development", level: "core" },
      { name: "AI agents & tool use", level: "core" },
      { name: "LLM integration", level: "solid" },
      { name: "Azure AI / GitHub Copilot", level: "basic" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & hosting",
    blurb: "Mostly Google Cloud and Vercel lately, with some AWS and Azure.",
    skills: [
      { name: "Google Cloud", level: "solid" },
      { name: "Vercel", level: "solid" },
      { name: "AWS", level: "solid" },
      { name: "Azure", level: "basic" },
      { name: "Heroku", level: "basic" },
    ],
  },
  {
    id: "mobile",
    title: "Mobile",
    blurb: "Shipped mobile apps with React Native and Flutter.",
    skills: [
      { name: "React Native", level: "solid" },
      { name: "Flutter / Dart", level: "solid" },
    ],
  },
  {
    id: "security",
    title: "Security",
    blurb:
      "Top 3% globally on TryHackMe, HackTheBox CTFs, Cisco CyberOps Associate and University of Helsinki Cyber Security Base.",
    skills: [
      { name: "Secure coding", level: "solid" },
      { name: "CTFs", level: "solid" },
    ],
  },
  {
    id: "languages",
    title: "Languages, design & more",
    blurb: "Breadth from university and personal projects.",
    skills: [
      { name: "UI/UX prototyping", level: "solid" },
      { name: "Figma", level: "solid" },
      { name: "Java", level: "basic" },
      { name: "C / C++", level: "basic" },
      { name: "Accessibility", level: "basic" },
    ],
  },
];

// Soft skills, backed by concrete examples.
export const peopleSkills = [
  {
    title: "Leadership",
    text: "I step up and take charge when it is needed, even in tense situations.",
    evidence:
      "Leader in multiple school projects. Managing 50+ tutors (including international). Leading ad-hoc meetings at work if needed",
  },
  {
    title: "Team player",
    text: "Comfortable in large multi-team projects and just as happy working independently.",
    evidence:
      "Multiple different roles on projects from large multi-team deliveries to small solo ones. Experienced in working with a variety of different people",
  },
  {
    title: "Communication",
    text: "I talk well with computers but also with humans",
    evidence:
      "Client-facing consulting work. Helping people with IT related problems. Simplifying and explaining difficult IT concepts.",
  },
  {
    title: "Initiative",
    text: "I start things and finish them, and I adapt quickly to new situations.",
    evidence:
      "Building projects from start to end, no matter if its in IT or some other area",
  },
];
