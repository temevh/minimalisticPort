import { TopFive, StrenWeak, Interests, Principles } from "./components";

const ManualPage = () => {
  return (
    <div>
      <p className="lg:text-3xl text-xl font-bold mt-2 lg:mt-4 mb-2 lg:mb-4">
        User Manual
      </p>
      <p className="lg:text-lg text-sm lg:mb-6 lg:mt-4 text-graytext">
        This is a playbook on everything about me. It captures more about me and
        how I operate{" "}
      </p>
      <Principles />
      <StrenWeak />
      <TopFive />
      <Interests />
    </div>
  );
};

export default ManualPage;
