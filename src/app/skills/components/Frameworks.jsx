const FrameWorks = () => {
  const skills = [
    {
      name: "TailwindCSS",
      desc: "I mainly use Tailwind for my CSS needs, mostly due to its ease of use and good documentation.",
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
      ],
    },
    {
      name: "NextJs",
      desc: "I have started to prefer NextJs as my framework for projects that are bigger than a single page.",
    },
  ];

  return (
    <>
      <div className="flex flex-row gap-8">
        <p className="text-lg text-graytext">Frameworks & Libraries:</p>
        {skills.map((skill) => (
          <span className="hover:text-graytext hover:cursor-pointer">
            <p className="text-lg">{skill.name}</p>
          </span>
        ))}
      </div>
    </>
  );
};

export default FrameWorks;
