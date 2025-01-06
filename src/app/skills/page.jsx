import { FrontEnd, BackEnd } from "./components";

const SkillsPage = () => {
  return (
    <div>
      <p className="text-3xl font-bold">What I know🧙</p>
      <p className="text-sm text-graytext">
        Psst! Click on a specific skill for more information
      </p>
      <p className="text-lg mt-4">
        My most common tech stack looks like the following
      </p>
      <FrontEnd />
      <BackEnd />
    </div>
  );
};
export default SkillsPage;
