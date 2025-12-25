const BackEnd = ({ openModal }) => {
  const skills = [
    {
      name: "MongoDb",
      desc: "I use Mongo as my default back-end due to the fast development time and good tools like Mongo Atlas and compass. I also like other aspecs of noSQL, for example the lack of primary keys and confusing tables.",
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
    {
      name: "Prisma ORM",
      desc: "I actively use prisma ORM in my personal projects. I usually pair it with PostgreSQL.",
    },
    {
      name: "PostgreSQL",
      desc: "My go to SQL database. I have lately switched from mongodb to postgreSQL in my personal projects.",
    },
  ];

  return (
    <>
      <div className="flex flex-row gap-4 lg:gap-8">
        <p className="lg:text-lg text-sm text-graytext">Backend:</p>
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

export default BackEnd;
