import Link from "next/link";
import { projectsPrimary } from "@/data/projects";

const FeaturedProjects = () => {
  const featured = projectsPrimary.slice(0, 4);

  return (
    <section>
      <div className="flex items-baseline justify-between mb-3">
        <h2 className="font-bold text-lg lg:text-2xl text-white">
          Selected projects
        </h2>
        <Link
          href="/projects"
          className="text-sm text-blue-500 hover:text-blue-400"
        >
          All projects →
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-3">
        {featured.map((project) => (
          <a
            key={project.title}
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-gray-800  p-4 transition-all duration-300 hover:border-accentOrange"
          >
            <h3 className="font-bold text-white group-hover:text-accentOrange">
              {project.title}
            </h3>
            <p className="text-sm text-graytext mt-1">{project.desc}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-700 text-white px-2 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
