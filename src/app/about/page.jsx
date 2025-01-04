import { Work, General, Education } from "./components";

const AboutPage = () => {
  return (
    <div>
      <div className="flex flex-col gap-">
        <General />
        <Work />
        <Education />
      </div>
    </div>
  );
};

export default AboutPage;
