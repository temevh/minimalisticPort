import { ProjectCard, SecondaryProjectCard } from "./components";
import { projectsPrimary, projectsSecondary } from "@/data/projects";

export const metadata = {
  title: "Projects",
  description:
    "Selected projects: HelpNow, MyGraine, Kursari, Betterbrain and more, built with React, Next.js, React Native, Flutter and cloud tooling.",
};

const ProjectsPage = () => {
  return (
    <div>
      <h1 className="lg:text-3xl text-xl font-bold">
        Cool stuff I have made 👨‍💻
      </h1>
      <p className="lg:text-sm text-xs text-graytext italic mb-4 mt-2">
        These are just a few of the projects I have made
      </p>
      <div className="flex flex-col gap-2 lg:gap-4">
        {projectsPrimary.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
        <h2 className="text-xl mt-4 text-graytext">More projects by me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {projectsSecondary.map((project) => (
            <SecondaryProjectCard project={project} key={project.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
