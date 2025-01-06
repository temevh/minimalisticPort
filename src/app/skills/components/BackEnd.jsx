const BackEnd = () => {
  const skills = [
    {
      name: "MongoDb",
      desc: "I use Mongo as my default back-end due to the fast development time and good tools like Mongo Atlas and compass",
      projects: [
        {
          name: "Valuemap",
          code: "https://github.com/temevh/valuework",
        },
        {
          name: "Tuuraaja",
          code: "https://github.com/temevh/tuuraaja",
        },
      ],
    },
    {
      name: "Node.js",
      desc: "I use Node.js for my backend and API needs in most cases",
    },
  ];

  return (
    <>
      <div className="flex flex-row gap-8">
        <p className="text-lg text-graytext">Backend:</p>
        {skills.map((skill) => (
          <span className="hover:text-graytext hover:cursor-pointer">
            <p className="text-lg">{skill.name}</p>
          </span>
        ))}
      </div>
    </>
  );
};

export default BackEnd;
