import Link from "next/link";

const items = [
  {
    title: "Full-stack delivery",
    text: "React and Vue frontends, Node.js and GraphQL backends, plus mobile with React Native.",
    href: "/skills#frontend",
  },
  {
    title: "Architecture & DevOps",
    text: "Maintainable system design, with working knowledge of CI/CD, Terraform, Ansible and nginx.",
    href: "/skills#architecture",
  },
  {
    title: "AI & agents",
    text: "Building with LLMs and agents, and using AI-assisted development responsibly.",
    href: "/skills#ai",
  },
  {
    title: "Leadership & teamwork",
    text: "Project lead, board member and scout leader. I take ownership and bring teams together.",
    href: "/skills#people",
  },
];

const Highlights = () => {
  return (
    <section>
      <h2 className="font-bold text-lg lg:text-2xl text-white mb-3">
        What I bring
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group rounded-lg border border-gray-800 p-4 transition-all duration-300 hover:border-accentOrange"
          >
            <h3 className="font-bold text-white group-hover:text-accentOrange">
              {item.title}
            </h3>
            <p className="text-sm text-graytext mt-1">{item.text}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
