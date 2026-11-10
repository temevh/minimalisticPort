const SecondaryProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col rounded-md">
      <a
        className="font-bold text-lg text-blue-500"
        href={project.code}
        target="_blank"
        rel="noopener noreferrer"
      >
        {project.title}
      </a>
      <p className="text-sm">{project.desc}</p>
      <div className="flex flex-row flex-wrap gap-2 mt-2">
        {project.tags.map((tag) => (
          <p key={tag} className="text-sm bg-gray-500 px-1 rounded-md">
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};
export default SecondaryProjectCard;
