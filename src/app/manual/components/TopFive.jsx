const TopFive = () => {
  //Books, movies, songs, sports, foods

  const stuff = [
    { title: "Books", list: ["Dune", "Dune 2"] },
    { title: "Movies", list: ["Dune", "Dune 2"] },
    { title: "Sports", list: ["Dune", "Dune 2"] },
    { title: "Foods", list: ["Dune", "Dune 2"] },
  ];

  return (
    <>
      <p className="text-xl font-bold mt-4 ">Top 5 of 4🎈</p>
      <p className="text-sm text-graytext">Without any real reasoning</p>
    </>
  );
};

export default TopFive;
