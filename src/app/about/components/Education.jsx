import Link from "next/link";

const linkClass = "text-blue-500 hover:text-blue-400 hover:cursor-pointer";

const Education = () => {
  return (
    <section>
      <h2 className="lg:text-3xl text-xl font-bold mb-2 lg:mb-4">
        Education 👨‍🎓
      </h2>
      <p className="lg:text-lg text-sm">
        After primary school I went to a local{" "}
        <a
          href="https://www.gradia.fi/jyvaskylan-lyseon-lukio-lukiolinja/l16691"
          className={linkClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          high school
        </a>{" "}
        where I focused on STEM-subjects. I graduated on time with good marks.
        As soon as possible I started my computer science degree at the{" "}
        <a
          href="https://www.lut.fi/en"
          className={linkClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          University of Lappeenranta (LUT)
        </a>
        . My main focus was on software engineering and I did quite well in my
        studies, achieving an above 4.1 GPA after my second year. After my
        second year I decided to transfer universities, and from my third year
        on I have studied computer science at the{" "}
        <a
          href="https://www.tuni.fi/en"
          className={linkClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          University of Tampere (TUNI)
        </a>
        , with the main focus still on software engineering. I also studied for
        a semester in South-Korea's{" "}
        <a
          href="https://eng.inha.ac.kr/eng/index.do"
          className={linkClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          Inha university
        </a>
        , with a focus on business and software development.
      </p>

      <div className="mt-4 rounded-lg border border-gray-800 bg-gray-900 p-4">
        <p className="text-xs text-accentOrange mb-1">Bachelor's thesis</p>
        <Link
          href="/writing/microsoft-ai-tools-thesis"
          className="font-bold text-white hover:text-accentOrange"
        >
          Mapping Microsoft's AI tools: Azure and other AI solutions supporting
          programming
        </Link>
        <p className="text-sm text-graytext mt-1">
          A survey of how tools like GitHub Copilot, Azure Machine Learning and
          Azure Databricks can support software development.{" "}
          <Link
            href="/writing/microsoft-ai-tools-thesis"
            className={linkClass}
          >
            Read the summary →
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Education;
