const ProjectCard = ({ project, index }) => {
  return (
    <div
      className={`flex ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } mb-2 flex-col lg:flex-row`}
    >
      <img
        src={project.img}
        alt={project.title}
        className="w-3/4 lg:w-32 lg:h-32 h-auto rounded-[10px] object-cover border-[1px] border-secondary mx-auto "
      />
      <div className="pl-4 flex-1">
        <a
          className="font-bold text-lg lg:text-lg text-blue-500 block mb-1 text-center lg:text-justify"
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.title}
        </a>
        <p className="text-white text-sm lg:text-base mb-2">{project.desc}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.map((tag, tagIndex) => (
            <p
              key={tagIndex}
              className="text-xs lg:text-sm bg-gray-500 px-2 py-1 rounded-md"
            >
              {tag}
            </p>
          ))}
        </div>
        <a
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-500 hover:text-gray-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          View Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
