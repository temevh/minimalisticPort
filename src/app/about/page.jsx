import { Work, General, Education, Next } from "./components";

const AboutPage = () => {
  return (
    <div>
      <div className="flex flex-col gap-">
        <General />
        <Work />
        <Education />
        <Next />
      </div>
    </div>
  );
};

export default AboutPage;
