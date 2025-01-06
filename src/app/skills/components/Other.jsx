const Other = ({ openModal }) => {
  const languages = [
    {
      name: "Python",
      desc: "Python holds a dear place in my heart, being the first programming language I learned.",
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
