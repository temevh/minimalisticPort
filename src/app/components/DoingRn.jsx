const DoingRn = () => {
  return (
    <div>
      <p className="pb-2">Currently I am:</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-6 gap-2 text-sm lg:text-lg text-graytext">
        <span className="flex flex-col">
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
        <span className="flex flex-col">
          <p>📚Learning</p>
        </span>
        <p>💼Working</p>
        <p>📖Studying</p>
        <p>🏋️‍♂️Training</p>
        <p>📖Reading</p>
      </div>
    </div>
  );
};

export default DoingRn;
