import { SkillList } from "./SkillList";

const tierStyles = {
  core: "border-accentOrange text-white",
  solid: "border-gray-500 text-white",
  basic: "border-gray-700 border-dashed text-graytext",
};

export const SkillGroup = ({ group }) => (
  <section id={group.id} className="scroll-mt-6">
    <h2 className="text-lg lg:text-xl font-bold text-white">{group.title}</h2>
    <p className="text-xs lg:text-sm text-graytext mt-1 mb-3">{group.blurb}</p>
    <SkillList skills={group.skills} />
  </section>
);

export const TierLegend = ({ levels }) => (
  <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-graytext">
    {Object.entries(levels).map(([key, level]) => (
      <li key={key} className="flex items-center gap-2 text-graytext">
        <span
          className={`inline-block h-3 w-5 rounded-sm border ${tierStyles[key]}`}
          aria-hidden="true"
        />
        {level.label}
        <span className="hidden lg:inline">({level.hint})</span>
      </li>
    ))}
  </ul>
);

export const PeopleSkills = ({ items }) => (
  <section id="people" className="scroll-mt-6">
    <h2 className="text-lg lg:text-xl font-bold text-white">
      People & leadership
    </h2>
    <p className="text-xs lg:text-sm text-graytext mt-1 mb-3">
      The part of the job that does not show up in a tech stack.
    </p>
    <div>
      {items.map((item) => (
        <div key={item.title} className="mb-3">
          <h3 className="font-bold text-accentOrange">{item.title}</h3>
          <p className="text-sm text-white mt-1">{item.text}</p>
          <p className="text-xs text-graytext mt-2">{item.evidence}</p>
        </div>
      ))}
    </div>
  </section>
);
