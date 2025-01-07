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
      name: "Javascript",
      desc: "I use Javascript alongside React in my projects and sometimes create simple scripts with it.",
    },
    {
      name: "HTML/CSS",
      desc: "I try to use pure HTML element as much as possible. Even though I prefer TailwindCSS, sometimes I use vanilla CSS for small adjustments.",
    },
  ];

  return (
    <>
      <div className="flex flex-row gap-8">
        <p className="text-lg text-graytext">Frontend:</p>
        {skills.map((skill) => (
          <span
            className="hover:text-graytext hover:cursor-pointer"
            onClick={() => openModal(skill)}
            key={skill.name}
          >
            <p className="text-lg">{skill.name}</p>
          </span>
        ))}
      </div>
    </>
  );
};

export default FrontEnd;
