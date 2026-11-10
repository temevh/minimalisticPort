const references = [
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
];

const References = () => {
  return (
    <section>
      <h2 className="font-bold text-lg lg:text-2xl text-white mb-3">
        What others say
      </h2>
      <div className="grid grid-cols-1 gap-3">
        {references.map((ref) => (
          <figure
            key={ref.person}
            className="rounded-lg border-l-2 border-accentOrange bg-gray-900 p-4"
          >
            <blockquote className="text-sm lg:text-base text-white">
              “{ref.say}”
            </blockquote>
            <figcaption className="mt-2 text-xs lg:text-sm text-graytext">
              <span className="font-bold text-white">{ref.person}</span>,{" "}
              {ref.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default References;
