import { skillGroups, skillLevels, peopleSkills } from "@/data/skills";
import { SkillGroup, TierLegend, PeopleSkills } from "./components/SkillGroup";

export const metadata = {
  title: "Skills",
  description:
    "Frontend (React, Vue, TypeScript), backend, architecture and DevOps (CI/CD, Terraform, Ansible, nginx), AI and agents, mobile, and people skills.",
};

const SkillsPage = () => {
  const mainGroups = skillGroups.slice(0, 4);
  const otherGroups = skillGroups.slice(4);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="lg:text-3xl text-xl font-bold">What I know 🧙</h1>
        <p className="lg:text-sm text-xs text-graytext italic mt-2 mb-3">
          Grouped by area, with how much I use each skill. Click a skill to
          see where I have used it.
        </p>
        <TierLegend levels={skillLevels} />
      </div>

      {mainGroups.map((group) => (
        <SkillGroup key={group.id} group={group} />
      ))}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {otherGroups.map((group) => (
          <SkillGroup key={group.id} group={group} />
        ))}
      </div>

      <PeopleSkills items={peopleSkills} />
    </div>
  );
};

export default SkillsPage;
