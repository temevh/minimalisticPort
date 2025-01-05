import { TopFive, StrenWeak, Interests, Principles } from "./components";

const ManualPage = () => {
  return (
    <div>
      <p className="text-3xl font-bold">User Manual</p>
      <p className="text-xl text-graytext mt-4">
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
