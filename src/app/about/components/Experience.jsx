import { experience, earlierRoles } from "@/data/experience";

const Experience = () => {
  return (
    <section>
      <h2 className="lg:text-3xl text-xl font-bold mb-4">Work experience 👨‍💼</h2>

      <ol className="relative border-l border-gray-700 ml-2 flex flex-col gap-6">
        {experience.map((job) => (
          <li key={job.company + job.start} className="ml-4">
            <span
              className="absolute -left-[5px] mt-2 h-2.5 w-2.5 rounded-full bg-accentOrange"
              aria-hidden="true"
            />
            <p className="text-xs text-graytext">
              {job.start} – {job.end}
            </p>
            <h3 className="text-lg lg:text-xl font-bold text-white">
              {job.role} ·{" "}
              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400"
              >
                {job.company}
              </a>
            </h3>
            {job.summary && (
              <p className="text-sm lg:text-base text-white mt-1">
                {job.summary}
              </p>
            )}
            {job.highlights.length > 0 && (
              <ul className="list-disc pl-5 mt-2 flex flex-col gap-1">
                {job.highlights.map((item) => (
                  <li key={item} className="text-sm text-graytext">
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {job.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-700 text-white px-2 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>

      <h3 className="text-lg font-bold mt-8 mb-2">Before that</h3>
      <ul className="flex flex-col gap-2">
        {earlierRoles.map((role) => (
          <li key={role.company} className="text-sm lg:text-base text-white">
            {role.role} ·{" "}
            <a
              href={role.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400"
            >
              {role.company}
            </a>
            <span className="text-graytext"> – {role.note}</span>
          </li>
        ))}
      </ul>
      <p className="text-sm lg:text-base text-graytext mt-3">
        In high school a few friends and I also started a clothing brand 👕. We
        gave up on it due to lack of motivation and time, but it taught me a lot
        about starting things. See my{" "}
        <a
          href="/certificates"
          className="text-blue-500 hover:text-blue-400 hover:cursor-pointer"
        >
          certificates
        </a>{" "}
        for formal qualifications.
      </p>
    </section>
  );
};

export default Experience;
