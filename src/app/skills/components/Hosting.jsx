const Hosting = ({ openModal }) => {
  const skills = [
   
    {
      name: "Vercel",
      desc: "Most often I use Vercel to deploy my front-end",
    },
    {
      name: "Cloud",
      desc: "I have started to dabble with cloud services. I have tried Azure and AWS, but lately I have been toying around (and deploying) with Google Cloud",
    },

    {
      name: "UI libraries",
      desc: "My most used UI libraries are MaterialUI and chakraUI. I also however have experience working with shadcn and other miscellaneous smaller libraries",
    },
  ];

  return (
    <>
      <div className="flex flex-row gap-3 lg:gap-8">
        <p className="lg:text-lg text-sm text-graytext">Miscellaneous:</p>
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

export default Hosting;
