const Accent = ({ children }) => (
  <span className="text-accentOrange">{children}</span>
);

const facts = [
  { big: "5+ years", small: "professional experience" },
  { big: "Full-stack", small: "React · Vue · TypeScript · Node.js" },
  { big: "Any team size", small: "multi-team projects to solo" },
];

const Summary = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        {facts.map((fact) => (
          <div key={fact.big}>
            <p className="font-bold text-white lg:text-lg">{fact.big}</p>
            <p className="text-xs text-graytext">{fact.small}</p>
          </div>
        ))}
      </div>

      <h2 className="font-bold text-lg lg:text-2xl text-white mb-1">Summary</h2>
      <p className="text-graytext text-md lg:text-lg">
        I'm a <Accent>full-stack developer</Accent> with{" "}
        <Accent>3+ years of professional experience</Accent> building web and
        mobile applications, first as a consultant at Twoday and now as a junior
        software engineer at Saab Finland. I work mostly with{" "}
        <Accent>React, Vue and TypeScript</Accent> on the front and{" "}
        <Accent>Node.js and GraphQL</Accent> on the back, and I care about{" "}
        <Accent>architecture</Accent> and the <Accent>CI/CD and cloud</Accent>{" "}
        that gets it to production. I also build with{" "}
        <Accent>AI and agents</Accent>, and wrote my bachelor's thesis on AI in
        software development.
      </p>
      <p className="text-graytext text-md lg:text-lg mt-3">
        I'm happiest in a team: I'm comfortable <Accent>taking the lead</Accent>{" "}
        when it is needed, and I like{" "}
        <Accent>bridging technical and non-technical people</Accent>. Next, I'm
        looking for a <Accent>mid-level developer role</Accent> where I can own
        features end to end and keep growing towards architecture and technical
        leadership.
      </p>
    </section>
  );
};

export default Summary;
