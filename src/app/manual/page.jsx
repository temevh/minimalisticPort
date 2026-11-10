import { TopFive, StrenWeak, Interests, Principles } from "./components";

export const metadata = {
  title: "User manual",
  description:
    "A playbook on how to work with Teemu: principles, strengths, weaknesses and interests.",
};

const ManualPage = () => {
  return (
    <div>
      <h1 className="lg:text-3xl text-xl font-bold mt-2 lg:mt-4 mb-2 lg:mb-4">
        User Manual
      </h1>
      <p className="lg:text-lg text-sm lg:mb-6 lg:mt-4 text-graytext">
        This is a playbook on everything about me. It captures more about me and
        how I operate{" "}
      </p>
      <Principles />
      <StrenWeak />
      <TopFive />
      <Interests />
      <figure className="mt-8 text-center">
        <blockquote className="text-sm">"A pretty cool dude 👍🏻"</blockquote>
        <figcaption className="text-xs text-graytext mt-1">
          Juho, full-time friend, part-time enemy
        </figcaption>
      </figure>
    </div>
  );
};

export default ManualPage;
