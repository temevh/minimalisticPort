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
      desc: "I have used C in multiple different courses, and have tried to use it in my personal projects but I never really got myself to like it. Sure I can use it, but I still prefer C++ (or Rust, once I learn it lol). Im not really sure why, but I never just liked C that much and the programming experience has always felt tiresome.",
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
  ];

  return (
    <div className="mt-4">
      <p className="text-lg">Beyond the Basics</p>
      <div className="flex flex-row gap-8">
        <span className="text-lg text-graytext">Languages:</span>
        {languages.map((language) => (
          <span
            className="hover:text-graytext hover:cursor-pointer"
            onClick={() => openModal(language)}
            key={language.name}
          >
            <p className="text-lg">{language.name}</p>
          </span>
        ))}
      </div>
      <p className="text-lg">
        <span className="text-lg text-graytext">Tools:</span> Atmel Studio,
        Docker, PostgreSQL
      </p>
      <p className="text-lg">
        <span className="text-lg text-graytext">Design:</span> Figma, UI/UX
        prototyping
      </p>
      <p className="text-lg">
        <span className="text-lg text-graytext">Other:</span> APIs, Git,
        cybersecurity, accessibility
      </p>
    </div>
  );
};

export default Other;
