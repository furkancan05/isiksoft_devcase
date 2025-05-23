import React from "react";
import { ChevronsDown, ChevronsUp } from "lucide-react";
import { Sections, type SectionType } from "../config/Sections.config";

export default function SectionCards() {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-2 sm:gap-5 md:gap-[30px]">
      {Sections.map((section) => (
        <SectionCard key={section.title} section={section} />
      ))}
    </div>
  );
}

function SectionCard({ section }: { section: SectionType }) {
  return (
    <div className="w-full rounded-md bg-white shadow-sm py-3 px-5 sm:px-[30px] flex flex-col">
      <p className="text-secondary whitespace-nowrap">{section.title}</p>
      <strong className="font-bold text-[28px]">{section.value}</strong>

      <div
        className={`flex items-center font-bold text-base gap-0 ${
          section.percentage >= 0 ? "text-green" : "text-red"
        }`}
      >
        {section.percentage >= 0 ? <ChevronsUp /> : <ChevronsDown />}

        <small className="font-bold text-sm">{`${section.percentage}%`}</small>
      </div>
    </div>
  );
}
