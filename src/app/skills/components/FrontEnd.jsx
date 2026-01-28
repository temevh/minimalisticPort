const FrontEnd = ({ openModal }) => {
  const skills = [
    {
      name: "React.js",
      desc: "React is my go-to framework for everything frontend related. I have a lot of experience with React and its accessory libraries, like redux for example.",
      projects: [
        {
          name: "Valuemap",
          code: "https://github.com/temevh/valuework",
          roles: ["Developer", "Designer", "Project lead"],
        },
        {
          name: "Tuuraaja",
          code: "https://github.com/temevh/tuuraaja",
          roles: ["Developer", "Designer"],
        },
        {
          name: "Maltas Data Dashboard",
          code: "https://github.com/PROJ-A2023-G08/maltas-data-dashboard",
          roles: ["Developer", "Designer"],
        },
        {
          name: "React Review App",
          code: "https://github.com/temevh/react-review-app",
          roles: ["Developer", "Designer"],
        },
      ],
    },
    {
      name: "Typescript",
      desc: "Typescript has become my favourite language with anything frontend related. I use it at work and with my personal projects.",
    },
    {
      name: "HTML/CSS",
      desc: "Even though I prefer TailwindCSS or other modern styling libraries, sometimes I prefer to use vanilla CSS to reduce overhead. HTML i regularly use with react (or just by itself)",
    },
  ];

  return (
    <>
      <div className="flex flex-row gap-3 lg:gap-8">
        <p className="lg:text-lg text-sm text-graytext">Frontend:</p>
        {skills.map((skill) => (
          <span
            className="hover:text-graytext hover:cursor-pointer"
            onClick={() => openModal(skill)}
            key={skill.name}
          >
            <p className="lg:text-lg text-sm">{skill.name}</p>
          </span>
        ))}
      </div>
    </>
  );
};

export default FrontEnd;
