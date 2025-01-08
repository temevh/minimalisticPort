"use client";
import { useState } from "react";
import {
  FrontEnd,
  BackEnd,
  FrameWorks,
  Other,
  Modal,
  Features,
} from "./components";

const SkillsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const openModal = (skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedSkill(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <p className="text-3xl font-bold">What I know🧙</p>
      <p className="text-sm text-graytext italic">
        Psst! Click on a specific skill for more information
      </p>
      <p className="text-lg mt-4 mb-2">
        My most common tech stack looks like the following
      </p>
      <FrontEnd openModal={openModal} />
      <BackEnd openModal={openModal} />
      <FrameWorks openModal={openModal} />
      <Other openModal={openModal} />
      {/* <Features />*/}

      {isModalOpen && (
        <Modal selectedSkill={selectedSkill} closeModal={closeModal} />
      )}
    </div>
  );
};
export default SkillsPage;
