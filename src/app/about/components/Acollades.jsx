const Acollades = () => {
  return (
    <>
      <p className="text-2xl font-bold mt-2 lg:mt-4 mb-2 lg:mb-4">
        Other neat stuff
      </p>
      <p className="text-base lg:mb-6 lg:mt-4 text-white">
        I have participated in multiple hackathons (
        <a
          href="https://www.hackjunction.com/"
          className="text-blue-500 hover:text-blue-400 hover:cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
          Junction
        </a>
        ,{" "}
        <a
          href="https://www.finnishgamejam.com/"
          className="text-blue-500 hover:text-blue-400 hover:cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
          Finnish Game Jam
        </a>{" "}
        etc.) and have even managed to{" "}
        <a
          href="https://edufutura.fi/tapahtumat/tag/hackathon/?eventDisplay=past"
          className="text-blue-500 hover:text-blue-400 hover:cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
          win one
        </a>{" "}
        in high school. I have also been active in organizations. I was a part
        of Jyväskylä's youth council, have been leading boy scout groups, and
        lately I was the vice president of the overalls team for our guild and
        currently I am working in the board of my guild as the übertutor.
      </p>
      <p className="text-base lg:mb-6 lg:mt-4 text-white">
        Check out my{" "}
        <a
          href="/certificates"
          className="text-blue-500 hover:text-blue-400 hover:cursor-pointer"
        >
          professional certificates
        </a>{" "}
        to see my formal qualifications and achievements.
      </p>
    </>
  );
};

export default Acollades;
