const BackEnd = ({ openModal }) => {
  const skills = [
    {
      name: "MongoDb",
      desc: "I use Mongo as my default back-end due to the fast development time and good tools like Mongo Atlas and compass",
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
      name: "Node.js",
      desc: "I primarily use Node.js for backend development and API integration. Recently, I've been diving deeper into the more advanced aspects of Node.js to expand my knowledge.",
    },
  ];

  return (
    <>
      <div className="flex flex-row gap-8">
        <p className="text-lg text-graytext">Backend:</p>
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

export default BackEnd;
