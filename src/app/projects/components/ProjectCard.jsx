const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-row">
      <img
        src={project.img}
        alt={project.title}
        className="w-40 h-40 rounded-[10px] object-cover border-[1px] border-secondary"
      />
      <div className="pl-4">
        <p className="text-graytext text-md">{project.desc}</p>
        <div className="flex flex-row gap-2">
          {project.tags.map((tag) => (
            <p className="text-sm bg-gray-500 px-1 rounded-md">{tag}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
