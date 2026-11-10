const linkClass = "text-blue-500 hover:text-blue-400 hover:cursor-pointer";

const Community = () => {
  return (
    <section>
      <h2 className="lg:text-3xl text-xl font-bold mb-2 lg:mb-4">
        Leadership & community 🤝
      </h2>
      <p className="lg:text-lg text-sm text-white">
        I have been active in organizations for a long time: I was part of
        Jyväskylä's youth council, have led scout groups, was the vice president
        of the overalls team of our guild, and I'm currently on the board of my
        guild as the übertutor.
      </p>
      <p className="lg:text-lg text-sm text-white mt-4">
        I have also taken part in multiple hackathons (
        <a
          href="https://www.hackjunction.com/"
          className={linkClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          Junction
        </a>
        ,{" "}
        <a
          href="https://www.finnishgamejam.com/"
          className={linkClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          Finnish Game Jam
        </a>{" "}
        and others) and even managed to{" "}
        <a
          href="https://edufutura.fi/tapahtumat/tag/hackathon/?eventDisplay=past"
          className={linkClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          win one
        </a>{" "}
        in high school.
      </p>
    </section>
  );
};

export default Community;
