const DoingRn = () => {
  return (
    <div>
      <p className="lg:text-2xl text-lg font-bold">Currently I am:</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-6 gap-2 text-sm lg:text-lg text-graytext">
        <span className="flex flex-col px-2">
          <p>🛠️Building</p>
          <a
            href="https://github.com/temevh/helpnow"
            className="text-blue-500 hover:text-graytext"
          >
            HelpNow
          </a>
          <a
            href="https://github.com/temevh/some"
            className="text-blue-500 hover:text-graytext"
          >
            Kursari
          </a>
        </span>
        <span className="flex flex-col px-2">
          <p>📚Learning</p>
          <a
            href="https://www.skills.google/paths/12"
            className="text-blue-500 hover:text-graytext"
          >
            Cloud architecht
          </a>
          <p>Modern full-stack technologies</p>
        </span>
        <span className="flex flex-col px-2">
          <p>💼Working</p>
          <p>Part time as front-end developer</p>
        </span>
        <span className="flex flex-col px-2">
          <p>📖Studying</p>
          <p>Masters in software engineering</p>
        </span>
        <span className="flex flex-col px-2">
          <p>🏋️‍♂️Training</p>
          <p>Muay thai</p>
          <p>Gym</p>
        </span>
        <span className="flex flex-col px-2">
          <p>📖Reading</p>
          <p>Red rising trilogy</p>
        </span>
      </div>
    </div>
  );
};

export default DoingRn;
