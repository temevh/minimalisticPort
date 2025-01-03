const AboutPage = () => {
  return (
    <div>
      <div className="flex flex-col gap-">
        <p className="text-3xl font-bold">Hey, I'm Teemu 👋</p>
        <p className="text-lg mb-6 mt-4">
          Through my (fairly) short life I have seen a lot of stuff, for better
          or worse. I have studied in two universities, and worked more jobs
          than I have fingers in my right hand. Right now I am focusing on
          advancing my CS studies while working on personal projects on the
          side.
        </p>
        <p className="text-lg">
          As a developer I am a fairly "skip to the good part"-type. The good
          part being the actual programming. Lately I have started to focus more
          on modularity and responsiveness in my projects. I would like to learn
          more machine learning and cyber security, and these are the things
          that I try to gradularly add to my schedule.
        </p>
        <p className="text-xl font-bold mt-4 mb-4">Work experience 👨‍💼</p>
        <p>
          I was born pretty young 👶. After growing up a bit (11 years) I
          started my first business, which was an{" "}
          <span
            href="https://www.ksml.fi/paikalliset/2653642"
            className="text-blue-500 hover:text-blue-400 hover:cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ice-cream shop
          </span>
          🍦. The business was booming, but I decided to retire at the ripe age
          of 15 (currently the ice cream bar is run by my little sister). In
          high school me and a few friends started a clothing brand 👕, but we
          gave up on it due to lack of motivation and time 🕒. Between high
          school and university I worked as a delivery driver 🚚 for a logistics
          company. After my first year at the university👨‍🎓 I got hired for a
          summer job by Telia. I worked as a technical specialist, fixing
          problems related to mostly broadband connections 🔧. After the second
          year of studying Twoday Finland hired me as a software developer 💻. I
          have worked for two summers plus a few miscelanneous part-time
          projects.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
