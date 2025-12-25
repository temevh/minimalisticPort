const FrameWorks = ({ openModal }) => {
  const skills = [
    {
      name: "TailwindCSS",
      desc: "I mainly use Tailwind for my CSS needs mostly due to its ease of use and good documentation. I have tried Bootstrap and sass, but felt the most comfortably with Tailwind in the end",
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
      name: "Next.Js",
      desc: "I have started to prefer NextJs as my framework for projects that are bigger than a single page. One thing which I dislike about Next though is the changes between updates.",
    },
    {name: "GrahpQL",
     desc: "I am currently learning how to use GraphQL with Apollo client and server. I am using it in my personal projects and also at work at the moment."
    },

  ];

  return (
    <>
      <div className="flex flex-row gap-4 lg:gap-8">
        <p className="lg:text-lg text-sm text-graytext">
          Frameworks{" "}
          <span className="hidden lg:inline-block"> & Libraries </span>:
        </p>
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

export default FrameWorks;
