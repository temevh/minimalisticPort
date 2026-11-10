const Mark = ({ children }) => (
  <span className="bg-yellow-200 text-black">{children}</span>
);

const General = () => {
  return (
    <section>
      <h1 className="lg:text-3xl text-xl font-bold">Hey, I'm Teemu 👋</h1>
      <p className="lg:text-lg text-sm mb-6 mt-4">
        Over the years, I've gained a <Mark>wealth of experiences</Mark> from
        studying in three universities and working in more roles than I can
        count on one hand. Currently, I'm working as a{" "}
        <Mark>junior software engineer at Saab Finland</Mark>, after{" "}
        <Mark>three years as a full-stack consultant at Twoday</Mark>. Alongside
        work I keep <Mark>building personal projects</Mark> that fuel my{" "}
        <Mark>passion for development</Mark>.
      </p>
      <p className="lg:text-lg">
        As a developer, I enjoy{" "}
        <Mark>diving straight into the heart of programming</Mark>. Lately, I've
        been dedicating more attention to{" "}
        <Mark>architecture, modularity and responsiveness</Mark> in my projects,
        aiming to make them both efficient and user-friendly. I'm also eager to
        grow my skills in <Mark>cloud technologies, AI and agents</Mark> and{" "}
        <Mark>technical leadership</Mark>.
      </p>
    </section>
  );
};

export default General;
