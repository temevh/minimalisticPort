import { Work, General, Education, Next, Acollades } from "./components";

const AboutPage = () => {
  return (
    <div>
      <div className="flex flex-col gap-">
        <General />
        <Work />
        <Education />
        <Next />
        <Acollades />
      </div>
    </div>
  );
};

export default AboutPage;
