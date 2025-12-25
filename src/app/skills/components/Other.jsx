const Other = ({ openModal }) => {
  const languages = [
    {
      name: "Python",
      desc: "Python holds a dear place in my heart, being the first programming language I learned. I still create simple scripts occasionally with Python. Once I get my project backlog sorted, I will start to learn more machine learning/LLM stuff with Python.",
      projects: [
        {
          name: "Valuemap",
          code: "https://github.com/temevh/valuework",
          roles: ["Developer", "Designer", "Project lead"],
        },
        {
          name: "LSpool",
          roles: ["Developer", "Designer"],
        },
        {
          name: "Tuuraaja",
          code: "https://github.com/temevh/tuuraaja",
          roles: ["Developer", "Designer"],
        },
      ],
    },
    {
      name: "C++",
      desc: "I have some experience working with C++, mainly with school course but I really want to learn more of it, so I started creating a text-based RPG game as a 'passion project'. I try to focus on writing clean an re-usable code, and try to come up with creative solutions that only utilize the command terminal and basic commands.",
      projects: [
        {
          name: "Valuemap",
          code: "https://github.com/temevh/valuework",
          roles: ["Developer", "Designer", "Project lead"],
        },
        {
          name: "LSpool",
          roles: ["Developer", "Designer"],
        },
        {
          name: "Tuuraaja",
          code: "https://github.com/temevh/tuuraaja",
          roles: ["Developer", "Designer"],
        },
      ],
    },
    {
      name: "C",
      desc: "I have used C in multiple different courses (low level programming, embedded systems), and have tried to use it in my personal projects but I never really got myself to like it. Sure I can use it, but I still prefer C++ (or Rust, once I learn it lol). Im not really sure why, but I never just liked C that much and the programming experience has always felt tiresome.",
      projects: [
        {
          name: "Valuemap",
          code: "https://github.com/temevh/valuework",
          roles: ["Developer", "Designer", "Project lead"],
        },
        {
          name: "LSpool",
          roles: ["Developer", "Designer"],
        },
        {
          name: "Tuuraaja",
          code: "https://github.com/temevh/tuuraaja",
          roles: ["Developer", "Designer"],
        },
      ],
    },
    {
      name: "Java",
      desc: "Like C, I have mainly used Java in school projects/courses. I have used Java to create programs for the desktop, but also for mobile with Android studio. I have used Java with Kotlin a few times to write some 'native features' (location access for example) when working with React Native.",
      projects: [
        {
          name: "Valuemap",
          code: "https://github.com/temevh/valuework",
          roles: ["Developer", "Designer", "Project lead"],
        },
        {
          name: "LSpool",
          roles: ["Developer", "Designer"],
        },
        {
          name: "Tuuraaja",
          code: "https://github.com/temevh/tuuraaja",
          roles: ["Developer", "Designer"],
        },
      ],
    },
    {
      name: "Dart",
      desc: "I have used Dart on a few different occasions to create some mobile apps. I like to component structure of Dart/Flutter, and feel that it's a breath of fresh air, when compared to React Native for example.",
    },
  ];

  const Tools = [
    {
      name: "Atmel",
      desc: "I have utilized Atmel Studio to develop embedded systems in C. It's my preferred platform due to its use of near-native C, which offers greater flexibility compared to other platforms like the Arduino IDE.",
    },
    {
      name: "Docker",
      desc: "I have a solid understanding of containerization concepts, including how containers work and when they are most effective. My experience includes creating and adjusting Docker scripts for small-scale projects.",
    },
    {
      name: "Heroku",
      desc: "Heroku is my go-to platform for hosting and deploying backend functionality. I appreciate its simplicity, built-in support for various programming languages, and ability to quickly scale applications. Also I like how the CLI is fairly simple and straightforward to use.",
    },
    {
      name: "Vercel",
      desc: "Vercel is my preferred choice for deploying frontend applications, especially those built with Next.js. I've utilized Vercel to deploy production-ready applications with responsive designs and blazing-fast load times.",
    },
  ];

  const Design = [
    {
      name: "Figma",
      desc: "Figma is my go-to for creating UI's and collaborating with other people in everything design related. I also sometimes use Figma as a Kanban-board or just in general for notes related to a project.",
    },
    {
      name: "UI/UX prototyping",
      desc: "Before doing any designs with Figma I like to do some basic wireframe sketches with pen and paper. I often also think about the interactions of different components in this stage, and refine them in Figma.",
    },
  ];

  const Other = [
    {
      name: "API's",
      desc: "I regularly use API's in my projects and have created some myself for different projects. I try to incorporate API usage as much as possible, mainly to reduce repetition.",
    },
    {
      name: "Git",
      desc: "I use Git as my version management and have gotten to know the usage of it pretty well. Sometimes I use the GUI for merge conflicts etc, but mostly I get stuff done with just the terminal.",
    },
    {
      name: "Cybersecurity",
      desc: "I am interested in cybersecurity, and have spent some time learning it in school and outside of school. I managed to get to top 3% globally in tryhackme.com and have done some CTF's in HackTheBox. I try to stay up-to-date with the current cybersecurity principles and with the latest related news.",
    },
    {
      name: "Accessibility",
      desc: "Lately I have started to put more thought into the accessibility of my applications and projects. I try to find the fine line between usability and functionality.",
    },
    {
      name: "Mobile",
      desc: "I have developed mobile apps and functionalities with Dart and React Native mainly, but have done a few small modules with Kotlin. I like mobile development, especially when the stars align and I don't get any gradle/SDK/Java/Android errors...",
    },
  ];

  return (
    <div className="mt-4">
      <p className="text-sm lg:text-lg mb-1 lg:mt-4">Beyond the Basics</p>
      <div className="lg:flex lg:flex-row lg:gap-6">
        <p className="lg:text-lg text-sm text-graytext">Languages:</p>
        <div className="flex flex-row gap-2 mb-1">
          {languages.map((language) => (
            <span
              className="hover:text-graytext hover:cursor-pointer"
              onClick={() => openModal(language)}
              key={language.name}
            >
              <p className="lg:text-lg text-xs">{language.name}</p>
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-8">
        <div className="lg:flex lg:flex-row lg:gap-6 mb-1">
          <p className="lg:text-lg text-sm text-graytext">Tools:</p>
          <div className="flex flex-row gap-2">
            {Tools.map((tool) => (
              <span
                className="hover:text-graytext hover:cursor-pointer"
                onClick={() => openModal(tool)}
                key={tool.name}
              >
                <p className="lg:text-lg text-xs">{tool.name}</p>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:flex lg:flex-row lg:gap-6 mb-1">
        <p className="lg:text-lg text-sm text-graytext">Design:</p>
        <div className="flex flex-row gap-2">
          {Design.map((tool) => (
            <span
              className="hover:text-graytext hover:cursor-pointer"
              onClick={() => openModal(tool)}
              key={tool.name}
            >
              <p className="lg:text-lg text-xs">{tool.name}</p>
            </span>
          ))}
        </div>
      </div>
      <div className="lg:flex lg:flex-row lg:gap-6 mb-1">
        <p className="lg:text-lg text-sm text-graytext">Misc:</p>
        <div className="flex flex-row gap-4">
          {Other.map((tool) => (
            <span
              className="hover:text-graytext hover:cursor-pointer"
              onClick={() => openModal(tool)}
              key={tool.name}
            >
              <p className="lg:text-lg text-xs">{tool.name}</p>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Other;
