import { ProjectCard, SecondaryProjectCard } from "./components";

const ProjectsPage = () => {
  const projectsPrimary = [
    {
      title: "HelpNow",
      desc: "HelpNow is a platform connecting volunteers with those in need of assistance, facilitating community support through easy-to-use tools.",
      tags: ["React", "Next.js", "Prisma", "PostgreSQL", "ChakraUI", "Google cloud"],
      img: "https://i.ibb.co/CpLxDYsN/helpnow.png",
      code: "https://github.com/temevh/helpnow",
    },
    {
      title: "MyGraine",
      desc: "Personalized migraine prevention, detection and treatment",
      tags: ["React Native",  "AI", "Cloud"],
      img: "https://i.ibb.co/Xf1NpmLm/mygraine.png",
      code: "https://github.com/temevh/AavaPfizer/tree/release",
    },
    {
      title: "Kursari",
      desc: "Kursari is a platform where users can anonymously review and rate university courses",
      tags: ["React", "Next.js", "Prisma", "PostgreSQL", "shadcn", "LLM"],
      img: "",
      code: "https://github.com/temevh/some",
    },
    {
      title: "Betterbrain",
      desc: "Get a personalized task every day, based on the skills and areas of life that you wish to improve on.",
      tags: ["Dart", "Flutter", "Mobile", "Firebase"],
      img:"https://i.ibb.co/mFgwZYCb/bb.png" ,
      code: "https://github.com/temevh/betterbrain",
    },
  ];

  const secondaryProjects = [
    {
      title: "Tuuraaja",
      desc: "Tuuraaja is a full-stack app made to make it easier for schools to find and contact substitutes on a short notice. The substitute candidates select the days on which they are available and what subjects they are able to teach. ",
      tags: ["React", "Next.js", "MongoDB", "TailwindCSS"],
      img: "https://i.ibb.co/TKBdJH4/tuuraaja.jpg",
      code: "https://github.com/temevh/tuuraaja",
    },
    {
      title: "Valuemap",
      desc: "Valuemap matches job seekers with companies based on shared values, believes and needs. Made for Junction hackathon 2024 ",
      tags: ["React", "Next.js", "MongoDB", "TailwindCSS"],
      img: "https://i.ibb.co/XWrHknw/vm3.png",
      code: "https://github.com/temevh/valuework",
    },
    {
      title: "Arduino alarm system",
      desc: "A fairly complex alarm system made with two Arduino boards which are connected with USART. The movement sensor waits for movements and triggers an alarm protocol when triggered",
      tags: ["C", "Arduino", "Atmel studio"],
      img: "https://user-images.githubusercontent.com/96690178/259686989-b7ab8e2d-f22a-4dca-803c-aca4170e6632.jpg",
      code: "https://github.com/temevh/Arduino-AlarmSystem/tree/main",
    },

    {
      title: "React review app",
      desc: "An app that lets the user add, review, search and edit books. The app is build around a carousel type of menu where the books are displayed. The app utilizes local storage to save the books and their reviews.",
      tags: ["React"],
      img: "https://user-images.githubusercontent.com/37696410/212696470-7da86ac0-c80c-4921-99df-e725be4b3a27.png",
      code: "https://github.com/temevh/react-review-app",
    },
    {
      title: "Hash table utilizing linked list",
      desc: "A fairly straightforward hash table utilizing linked list. The hash table is made to be able to handle collisions and it is made to be able to handle and match a large amount of data.",
      tags: ["Python", "DSA"],
      img: "https://www.ekreative.com/wp-content/uploads/2021/03/pankaj-patel-_SgRNwAVNKw-unsplash.jpg",
      code: "https://github.com/temevh/Algorithms-and-data-structures/tree/master/Assingment",
    },

    {
      title: "Wherewolf",
      desc: "A first person game made with Godot. In the game the player has to either save or kill the villagers of a small town, depending on the time of day. The game was made for Finnish Game Jam 2022. My main task was creating the assets/graphics.",
      tags: ["Godot", "GAP", "Game"],
      img: "https://ggj.s3.amazonaws.com/styles/game_content__wide/games/screenshots/2022/01/138869/nayttokuva_154.png?itok=JMBNCLa2&timestamp=1643543481",
      code: "https://github.com/temevh/fgj2022",
    },
  ];

  return (
    <div>
      <p className="lg:text-3xl text-xl font-bold">Cool stuff I have made 👨‍💻</p>
      <p className="lg:text-sm text-xs text-graytext italic mb-4 mt-2">
        These are just a few of the projects I have made
      </p>
      <div className="flex flex-col gap-2 lg:gap-4">
        {projectsPrimary.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
        <p className="text-xl mt-4 text-graytext">More projects by me</p>
        <div className="grid grid-cols-2 gap-4">
          {secondaryProjects.map((project) => (
            <SecondaryProjectCard project={project} key={project.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
