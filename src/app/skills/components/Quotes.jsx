const Quotes = () => {
  const items = [
    {
      person: "Pekka Henriksson",
      title: "Business Coach, Telia Finland Oyj",
      say: "In their work, Teemu has demonstrated excellent problem-solving, teamwork, and customer service skills. Teemu handled his tasks responsibly and professionally. Teemu is an active and self-initiative employee, and he was also well-liked by the work community.",
    },
    {
      person: "Harri Koljonen",
      title: "CEO, 014-Kuljetus",
      say: "Teemu has demonstrated excellent abilities to work independently and efficiently in rapidly changing and challenging conditions.",
    },
    {
      person: "Juho",
      title: "Full-time friend, part-time enemy",
      say: "A pretty cool dude 👍🏻",
    },
  ];

  return (
    <div className="flex flex-row gap-6">
      {items.map((item) => (
        <div key={item.person}>
          <p className="text-md">"{item.say}"</p>
          <p className="font-bold text-graytext text-sm">{item.person}</p>
          <p className="text-graytext text-sm">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Quotes;
