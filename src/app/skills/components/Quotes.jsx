import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto mt-6">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={6000}
        arrows={false}
      >
        {items.map((item) => (
          <div key={item.person} className="text-center p-4 ">
            <p className="text-md">"{item.say}"</p>
            <p className="font-bold text-gray-700 text-lg mt-2">
              {item.person}
            </p>
            <p className="text-gray-500 text-sm">{item.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Quotes;
