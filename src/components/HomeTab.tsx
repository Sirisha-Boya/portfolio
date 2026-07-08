/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { EXPERIENCES, SKILL_DETAILS, PROJECTS, PRIMARY_SKILLS } from "../data";
import { SkillDetail } from "../types";
import { motion, AnimatePresence } from "motion/react";
const profile = "/assets/portfolio-image.PNG";

interface HomeTabProps {
  onNavigateToTab: (tab: string) => void;
  onSelectProject: (title: string) => void;
  onOpenHireMe: () => void;
}

export default function HomeTab({
  onNavigateToTab,
  onSelectProject,
  onOpenHireMe,
}: HomeTabProps) {
  const [selectedSkill, setSelectedSkill] = useState<SkillDetail | null>(null);

  const handleSkillClick = (skillName: string) => {
    const detail = SKILL_DETAILS.find((s) => s.name === skillName);
    if (detail) {
      if (selectedSkill?.name === skillName) {
        setSelectedSkill(null); // toggle off
      } else {
        setSelectedSkill(detail);
      }
    } else if (skillName === "More") {
      // Handle "More" button click, e.g., navigate to a detailed skills page or show a modal
      onNavigateToTab("stack");
    }
  };

  const handleProjectClick = (title: string) => {
    onSelectProject(title);
    onNavigateToTab("projects");
  };

  return (
    <div className="relative">
      {/* Header Section */}
      <header className="flex flex-col lg:flex-row items-center gap-12 mb-16 relative">
        <div className="relative group float-animation">
          <div className="washi-tape"></div>
          <div className="absolute -inset-4 bg-yellow-200/50 -rotate-6 sketchy-border opacity-50"></div>
          <div className="bg-white p-2 sketchy-border sketchy-card-shadow rotate-2 relative z-10 transition-transform hover:scale-102">
            <img
              alt="Sirisha Boya Portrait"
              className="w-56 h-56 md:w-72 md:h-72 object-cover grayscale contrast-125"
              src={profile}
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-white border-2 border-black rounded-full flex items-center justify-center rotate-12 z-20 sketchy-border">
            <span className="material-symbols-outlined text-2xl text-black">
              mood
            </span>
          </div>
        </div>

        <div className="flex-1 text-center lg:text-left pt-6">
          <h1 className="font-display-lg text-5xl md:text-7xl lg:text-8xl mb-4 tracking-tighter transform -rotate-1 select-none">
            SIRISHA BOYA
          </h1>
          <div className="inline-block px-6 py-2 highlighter-cyan font-headline-md mb-6 rotate-1 text-xl md:text-2xl text-black">
            React.js | .NET Full Stack Developer
          </div>

          <p className="font-label-code text-xl flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-gray-700">
            <span className="hand-drawn-underline cursor-pointer hover:text-black">
              Microservices
            </span>
            <span className="hand-drawn-underline cursor-pointer hover:text-black">
              Cloud
            </span>
            <span className="hand-drawn-underline cursor-pointer hover:text-black">
              REST APIs
            </span>
            <span className="hand-drawn-underline cursor-pointer hover:text-black">
              SQL Server
            </span>
          </p>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-8 font-body-lg text-xl md:text-2xl text-black">
            <span className="flex items-center gap-2 group cursor-pointer hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-primary">
                location_on
              </span>{" "}
              Hyderabad, Telangana
            </span>
            <a
              href="mailto:sirishab9196@gmail.com"
              className="flex items-center gap-2 group cursor-pointer hover:scale-105 transition-transform"
            >
              <span className="material-symbols-outlined text-primary">
                mail
              </span>{" "}
              sirishab9196@gmail.com
            </a>
          </div>
        </div>

        {/* Sticky Note CTA */}
        <div
          onClick={onOpenHireMe}
          className="cursor-pointer hidden lg:block absolute -right-4 top-0 w-52 h-52 bg-[#fff7d1] p-6 rotate-6 sketchy-border sketchy-card-shadow paper-texture transition-transform hover:rotate-3 hover:scale-105 z-20"
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-red-400/30 rotate-2"></div>
          <p className="font-headline-sm text-center text-primary text-xl leading-tight mt-2 select-none">
            LET'S BUILD SOMETHING AWESOME!
          </p>
          <div className="mt-4 flex justify-center text-primary">
            <span className="material-symbols-outlined text-3xl animate-bounce">
              draw
            </span>
          </div>
        </div>
      </header>

      {/* Bento Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col gap-12">
          {/* About Me */}
          <div className="bg-white p-8 md:p-10 sketchy-border sketchy-card-shadow -rotate-1 relative overflow-hidden paper-texture">
            <div
              className="washi-tape-blue"
              style={{ top: "-10px", left: "10%" }}
            ></div>
            <h2 className="font-headline-md text-3xl mb-6 flex items-center gap-4 text-black">
              <span className="material-symbols-outlined text-3xl text-yellow-500">
                lightbulb
              </span>
              <span className="hand-drawn-underline">The Backstory</span>
            </h2>
            <p className="font-body-lg text-2xl text-gray-800 mb-6 leading-relaxed">
              React/.NET Full Stack Developer with 4+ years of experience
              designing, developing, deploying and supporting enterprise
              applications across Banking, Healthcare, HRMS, Procurement and
              Asset Management domains.
            </p>
            <p className="font-body-md text-xl text-gray-700 mb-6 leading-relaxed">
              Experienced in end-to-end feature ownership using React.js,
              ASP.NET Core, C#, SQL Server, PostgreSQL, Microservices, Docker
              and cloud technologies like Azure, vercel, and resend. Strong in
              API design, authentication, cloud deployments, production support,
              mentoring junior developers and collaborating with
              cross-functional teams.
            </p>
            <div className="highlighter-yellow p-6 border-l-8 border-black rotate-1 text-black">
              <p className="font-label-code text-lg">
                ✨ AI Native: Using LLMs to build faster, smarter, and cleaner
                than ever before.
              </p>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="bg-amber-50/20 p-8 md:p-10 sketchy-border rotate-1 relative">
            <h2 className="font-headline-md text-3xl mb-8 flex items-center gap-4 text-black">
              <span className="material-symbols-outlined text-3xl text-cyan-600">
                history_edu
              </span>
              Career Timeline
            </h2>
            <div className="relative pl-8 md:pl-12">
              <div className="absolute left-3 md:left-4 top-2 bottom-2 timeline-line"></div>

              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="mb-12 last:mb-0 relative">
                  {/* Bullet */}
                  <div
                    className={`absolute -left-[38px] md:-left-[48px] top-1.5 w-6 h-6 md:w-8 md:h-8 rounded-full border-4 border-white sketchy-border ${idx === 0 ? "bg-black" : "bg-gray-300"}`}
                  ></div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                    <h3 className="font-headline-sm text-xl md:text-2xl text-black font-semibold">
                      {exp.role}
                    </h3>
                    <span
                      className={`font-label-code text-sm md:text-base px-3 py-0.5 rounded ${exp.color === "cyan" ? "highlighter-cyan rotate-1" : "highlighter-yellow -rotate-2"} text-black self-start md:self-auto`}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <p className="font-headline-sm text-lg text-gray-700 mb-3 italic">
                    {exp.company}
                  </p>
                  <ul className="font-body-md text-lg md:text-xl space-y-2 list-none text-gray-800">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-black font-bold">✎</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-5 flex flex-col gap-12">
          {/* Core Skills */}
          <div className="bg-white p-6 md:p-8 sketchy-border sketchy-card-shadow rotate-1 relative paper-texture">
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-white flex items-center justify-center sketchy-border -rotate-12 z-20">
              <span className="material-symbols-outlined text-yellow-500">
                bolt
              </span>
            </div>
            <h2 className="font-headline-md text-3xl mb-4 text-black">
              Skill Doodles
            </h2>
            <p className="font-body-md text-xl text-gray-700 mb-6">
              Click a skill to check Sirisha's doodle detail and deployment
              usage:
            </p>

            <div className="flex flex-wrap gap-3 mb-4">
              {PRIMARY_SKILLS.map((skill, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSkillClick(skill.name)}
                  className={`px-4 py-1.5 border-2 border-black rounded-full font-label-code text-lg cursor-pointer transition-all duration-200 outline-none select-none hover:bg-neutral-100 ${selectedSkill?.name === skill.name ? "bg-cyan-100 ring-2 ring-black" : ""}`}
                >
                  <span className="relative z-10">{skill.name}</span>
                </button>
              ))}
              <button
                onClick={() => handleSkillClick("More")}
                className={`px-4 py-1.5 border-2 border-black rounded-full font-label-code text-lg cursor-pointer transition-all duration-200 outline-none select-none hover:bg-neutral-100 ${selectedSkill?.name === "More" ? "bg-cyan-100 ring-2 ring-black" : ""}`}
              >
                <span className="relative z-10">More...</span>
              </button>
            </div>

            {/* Interactive Doodled Detail Box */}
            <AnimatePresence mode="wait">
              {selectedSkill && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="mt-6 p-5 bg-[#fff7d1] border-2 border-dashed border-black rounded relative paper-texture shadow-inner"
                >
                  <div className="absolute -top-3 right-4 bg-red-400/40 text-black px-2 py-0.5 text-xs font-mono rounded transform rotate-3">
                    {selectedSkill.level}
                  </div>
                  <h4 className="font-headline-sm text-xl text-black mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">
                      draw
                    </span>
                    {selectedSkill.name} Experience
                  </h4>
                  <p className="font-body-md text-lg text-gray-800 leading-relaxed">
                    {selectedSkill.description}
                  </p>
                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="absolute -bottom-3 -right-2 bg-black text-white rounded-full p-1 border border-black hover:scale-110 active:scale-95 text-xs cursor-pointer flex items-center justify-center"
                    title="Close"
                  >
                    <span className="material-symbols-outlined text-sm">
                      close
                    </span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Top Hits / Projects */}
          <div className="bg-white p-6 md:p-8 sketchy-border rotate-[-0.5deg]">
            <h2 className="font-headline-md text-3xl mb-6 flex items-center gap-3 text-black">
              <span className="material-symbols-outlined text-3xl text-emerald-600">
                folder_open
              </span>
              Top Hits
            </h2>
            <div className="space-y-6">
              {PROJECTS.map((proj, idx) => (
                <div
                  key={idx}
                  onClick={() => handleProjectClick(proj.title)}
                  className="group cursor-pointer"
                >
                  <div className="flex items-start gap-4 p-4 hover:bg-yellow-100/60 lg:hover:highlighter-yellow transition-all duration-300 rounded-lg border border-transparent hover:border-black/5">
                    <span className="text-4xl filter drop-shadow select-none">
                      {proj.emoji}
                    </span>
                    <div className="flex-1">
                      <h4 className="font-headline-sm text-xl md:text-2xl leading-tight mb-1 text-black group-hover:underline">
                        {proj.title}
                      </h4>
                      <p className="font-body-md text-lg text-gray-500 italic mb-1">
                        {proj.category}
                      </p>
                      <p className="font-label-code text-sm md:text-base text-gray-700 leading-snug">
                        {proj.description}
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-gray-400 group-hover:text-black transition-colors self-center">
                      arrow_forward_ios
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => onNavigateToTab("projects")}
                className="px-6 py-2 bg-black text-white font-headline-sm text-lg sketchy-border sketchy-card-shadow hover:scale-105 active:scale-95 transition-transform cursor-pointer"
              >
                Browse All Projects 📂
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
