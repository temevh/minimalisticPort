import FeatureCard from "./FeatureCard";

const Features = () => {
  const features = [
    {
      title: "Software Developer",
      desc: "I build applications and solve problems with clean, efficient code.",
    },
    {
      title: "User Experience Designer",
      desc: "I focus on creating intuitive, user-friendly interfaces that deliver a seamless experience.",
    },
    {
      title: "API Integrator",
      desc: "I specialize in connecting systems and integrating APIs to ensure smooth data flow.",
    },
    {
      title: "Mobile App Developer",
      desc: "Using Flutter and Dart, I craft responsive and modern mobile applications.",
    },
    {
      title: "AI Enthusiast",
      desc: "I incorporate AI solutions to enhance performance and improve project outcomes.",
    },
    {
      title: "Network Specialist",
      desc: "At Telia, I gained hands-on experience in network tools and technologies.",
    },
    {
      title: "Database Manager",
      desc: "I work with databases to structure, manage, and analyze data effectively.",
    },
    {
      title: "Version Control Expert",
      desc: "I rely on Git to manage codebases and collaborate efficiently in team environments.",
    },
  ];

  return (
    <div>
      <p className="text-lg mb-2">Features</p>
      <div className=" grid grid-cols-4 gap-4">
        {features.map((feature) => (
          <FeatureCard feature={feature} key={feature.title} />
        ))}
      </div>
    </div>
  );
};

export default Features;
