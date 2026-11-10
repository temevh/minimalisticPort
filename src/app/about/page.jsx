import { Experience, General, Education, Next, Community } from "./components";

export const metadata = {
  title: "About",
  description:
    "Experience at Saab Finland and Twoday, education at Tampere University and LUT, and the leadership and community work behind it.",
};

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <General />
      <Experience />
      <Education />
      <Community />
      <Next />
    </div>
  );
};

export default AboutPage;
