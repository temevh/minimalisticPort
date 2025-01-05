const TopFive = () => {
  //Books, movies, songs, sports, foods

  const stuff = [
    { title: "Books", list: ["Dune", "Ego", "Hitchikers guide"] },
    { title: "Movies", list: ["Dune", "Dune 2"] },
    { title: "Sports", list: ["MMA", "Muay thai", "E-sports", ""] },
    {
      title: "Foods",
      list: [
        "Meatballs and mashed potatoes",
        "Chicken nuggets",
        "Lasagna (mom's)",
        "",
      ],
    },
  ];

  return (
    <>
      <p className="text-xl font-bold mt-4 ">Top 5 of 4🎈</p>
      <p className="text-sm text-graytext">Without any real reasoning</p>
    </>
  );
};

export default TopFive;
