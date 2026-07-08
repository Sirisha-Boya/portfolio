/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { SKILL_DETAILS } from "../data";
import { SkillDetail } from "../types";
import { motion, AnimatePresence } from "motion/react";

export default function StackTab() {
  const [selectedSkill, setSelectedSkill] = useState<SkillDetail | null>(null);

  const skillGroups = [
    {
      title: "🎨 Frontend Techs",
      colorClass: "bg-blue-50/40",
      skills: ["React.js", "Tailwind CSS", "Vite", "HTML5 & CSS3"],
    },
    {
      title: "⚙️ Backend Engines",
      colorClass: "bg-red-50/40",
      skills: [
        "ASP.NET Core",
        ".NET 8",
        "C#",
        "Microservices",
        "Ocelot API Gateway",
      ],
    },
    {
      title: "🗄️ Database Shelves",
      colorClass: "bg-amber-50/40",
      skills: [
        "SQL Server",
        "Azure SQL",
        "PostgreSQL",
        "Entity Framework Core",
      ],
    },
    {
      title: "☁️ Clouds & Helpers",
      colorClass: "bg-purple-50/40",
      skills: [
        "Docker",
        "Microsoft Azure",
        "GitHub Copilot",
        "CI/CD Pipelines",
      ],
    },
  ];

  // Helper to find or manufacture skill details
  const getSkillDetail = (name: string): SkillDetail => {
    const existing = SKILL_DETAILS.find(
      (s) => s.name.toLowerCase() === name.toLowerCase(),
    );
    if (existing) return existing;

    // Default fallback
    return {
      name,
      level: "Highly Skilled",
      description: `Proficient with ${name} through multiple enterprise deployments and client support contracts. Optimized for clean architecture, low-latency, and clean code formatting.`,
      icon: "bolt",
    };
  };

  return (
    <div className="space-y-12">
      {/* Introduction Note */}
      <div className="bg-white p-6 sketchy-border rotate-[-0.5deg] paper-texture relative">
        <div className="washi-tape"></div>
        <h2 className="font-headline-md text-2xl mb-2 text-black text-center mt-2">
          Sirisha's Tech Toolbox
        </h2>
        <p className="font-body-md text-lg text-center text-gray-600 max-w-xl mx-auto">
          These are the primary building blocks of my enterprise web
          applications. Click any sticker below to see how I apply it in
          production!
        </p>
      </div>

      {/* Grid of Shelves */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {skillGroups.map((group, gIdx) => (
          <div
            key={gIdx}
            className={`p-6 sketchy-border bg-white ${group.colorClass} relative rotate-${gIdx % 2 === 0 ? "1" : "-1"} paper-texture`}
          >
            <h3 className="font-headline-sm text-2xl text-black mb-4 border-b-2 border-dashed border-black/15 pb-2">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skillName, sIdx) => {
                const detail = getSkillDetail(skillName);
                const isSelected = selectedSkill?.name === detail.name;
                return (
                  <button
                    key={sIdx}
                    onClick={() => {
                      if (selectedSkill?.name === detail.name) {
                        setSelectedSkill(null);
                      } else {
                        setSelectedSkill(detail);
                      }
                    }}
                    className={`px-4 py-2 border-2 border-black rounded-lg font-label-code text-lg cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md select-none ${isSelected ? "bg-black text-white" : "bg-white text-black"}`}
                  >
                    <span>{skillName}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Expanded Sticker Details (Sticky Note Style) */}
      <AnimatePresence mode="wait">
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 1 }}
            exit={{ opacity: 0, scale: 0.9, rotate: -2 }}
            className="p-8 bg-[#fff7d1] border-2 border-dashed border-black rounded-lg relative max-w-2xl mx-auto paper-texture shadow-lg"
          >
            <div className="absolute -top-3 left-10 bg-red-400 text-white px-3 py-1 text-xs font-mono rounded transform -rotate-2 border border-black shadow">
              STICKY EXPERIENCE NOTE
            </div>

            <div className="flex items-center justify-between mb-4 mt-2">
              <h4 className="font-headline-sm text-2xl text-black flex items-center gap-2">
                <span className="material-symbols-outlined text-xl">draw</span>
                {selectedSkill.name}
              </h4>
              <span className="font-label-code text-sm md:text-base highlighter-cyan px-3 py-0.5 rounded text-black font-semibold rotate-2">
                {selectedSkill.level}
              </span>
            </div>

            <p className="font-body-lg text-2xl text-gray-800 leading-relaxed mb-4">
              {selectedSkill.description}
            </p>

            <div className="bg-white/50 p-3 rounded border border-black/10 font-label-code text-sm text-gray-600">
              ⚡ Used inside production products: <strong>Bank In A Box</strong>
              , <strong>CaMS</strong>, and <strong>HaTS</strong>.
            </div>

            <button
              onClick={() => setSelectedSkill(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black cursor-pointer p-1"
              title="Close Note"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
