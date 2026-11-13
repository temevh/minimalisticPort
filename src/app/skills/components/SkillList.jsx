"use client";

import { useEffect, useRef, useState } from "react";
import skillUsage from "@/data/skillUsage.json";

const tierStyles = {
  core: "border-accentOrange text-white",
  solid: "border-gray-500 text-white",
  basic: "border-gray-700 border-dashed text-graytext",
};

const SkillModal = ({ skill, onClose }) => {
  const closeRef = useRef(null);
  const usage = skillUsage[skill.name] ?? {};
  const text = usage.text?.trim();
  const entries = usage.projects ?? [];

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    // Hiding the scrollbar widens the page; pad by its width so nothing reflows.
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    // Padding goes on <html> because body's width is a percentage of it.
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    const prevPadding = root.style.paddingRight;
    root.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      root.style.paddingRight = `${scrollbarWidth}px`;
    }
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      root.style.overflow = prevOverflow;
      root.style.paddingRight = prevPadding;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="skill-modal-title"
        className="w-full max-w-lg max-h-[80vh] overflow-y-auto rounded-md border border-gray-700 bg-[#0c0f11] p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h2
            id="skill-modal-title"
            className="text-lg lg:text-xl font-bold text-white"
          >
            {skill.name}
          </h2>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close"
            className="text-graytext hover:text-white text-xl leading-none"
          >
            ×
          </button>
        </div>
        {text && (
          <p className="text-sm mt-3 whitespace-pre-line">{text}</p>
        )}

        {!text && entries.length === 0 && (
          <p className="text-sm text-graytext italic mt-3">
            Nothing written here yet.
          </p>
        )}

        {entries.length > 0 && (
          <h3 className="text-xs uppercase tracking-wide text-graytext mt-5 mb-3">
            Where I have used it
          </h3>
        )}

        {entries.length > 0 && (
          <ul className="flex flex-col gap-3">
            {entries.map((entry) => (
              <li key={entry.title} className="border-l-2 border-accentOrange pl-3">
                {entry.link ? (
                  <a
                    href={entry.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-accentOrange hover:underline"
                  >
                    {entry.title} ↗
                  </a>
                ) : (
                  <h3 className="font-bold text-accentOrange">{entry.title}</h3>
                )}
                {entry.description && (
                  <p className="text-sm mt-1">{entry.description}</p>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export const SkillList = ({ skills }) => {
  const [active, setActive] = useState(null);

  return (
    <>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li key={skill.name}>
            <button
              type="button"
              onClick={() => setActive(skill)}
              className={`rounded-md border px-2 py-1 text-xs lg:text-sm transition-colors hover:bg-white/10 ${tierStyles[skill.level]}`}
            >
              {skill.name}
              {skill.note && (
                <span className="text-graytext"> · {skill.note}</span>
              )}
            </button>
          </li>
        ))}
      </ul>
      {active && <SkillModal skill={active} onClose={() => setActive(null)} />}
    </>
  );
};
