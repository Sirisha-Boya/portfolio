/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import HomeTab from "./components/HomeTab";
import ProjectsTab from "./components/ProjectsTab";
import StackTab from "./components/StackTab";
import MailTab from "./components/MailTab";
import HireMeModal from "./components/HireMeModal";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [selectedProjectTitle, setSelectedProjectTitle] = useState<
    string | null
  >(null);
  const [isHireMeOpen, setIsHireMeOpen] = useState<boolean>(false);

  useEffect(() => {
    const handler = () => {
      setActiveTab("mail");
    };

    window.addEventListener("open-contact", handler);

    return () => window.removeEventListener("open-contact", handler);
  }, []);
  const handleNavigateToTab = (tab: string) => {
    setActiveTab(tab);
    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectProject = (title: string) => {
    setSelectedProjectTitle(title);
  };

  const handleClearSelectedProject = () => {
    setSelectedProjectTitle(null);
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case "home":
        return (
          <HomeTab
            onNavigateToTab={handleNavigateToTab}
            onSelectProject={handleSelectProject}
            onOpenHireMe={() => setIsHireMeOpen(true)}
          />
        );
      case "projects":
        return (
          <ProjectsTab
            selectedProjectTitle={selectedProjectTitle}
            onClearSelectedProject={handleClearSelectedProject}
          />
        );
      case "stack":
        return <StackTab />;
      case "mail":
        return <MailTab />;
      default:
        return (
          <HomeTab
            onNavigateToTab={handleNavigateToTab}
            onSelectProject={handleSelectProject}
            onOpenHireMe={() => setIsHireMeOpen(true)}
          />
        );
    }
  };

  return (
    <div className="bg-[#f9f9f9] text-black grid-paper selection:bg-yellow-200 selection:text-black min-h-screen relative font-sans">
      {/* Decorative Ink Stains */}
      <div className="ink-stain top-10 left-10"></div>
      <div className="ink-stain bottom-20 right-20"></div>
      <div className="ink-stain top-1/2 left-1/3"></div>

      {/* Sidebar Navigation Shell (Desktop) */}
      <nav className="hidden md:flex h-full w-64 fixed left-0 bg-[#eeeeee]/90 backdrop-blur-md border-r-4 border-black flex-col gap-2 p-6 z-40">
        <div className="mb-10 p-2 border-b-2 border-dashed border-black">
          <h1 className="font-display-lg text-4xl text-black transform -rotate-2 select-none">
            Sirisha B
          </h1>
          <p className="font-label-code text-neutral-500 italic">
            Full-Stack Scribbles
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <button
            onClick={() => handleNavigateToTab("home")}
            className={`w-full flex items-center gap-3 p-2 cursor-pointer rounded transition-all font-headline-sm text-lg text-left ${activeTab === "home" ? "highlighter-yellow text-black font-semibold sketchy-border rotate-1" : "text-neutral-600 hover:highlighter-cyan hover:-rotate-1"}`}
          >
            <span className="material-symbols-outlined">home</span> Home
          </button>

          <button
            onClick={() => handleNavigateToTab("projects")}
            className={`w-full flex items-center gap-3 p-2 cursor-pointer rounded transition-all font-headline-sm text-lg text-left ${activeTab === "projects" ? "highlighter-yellow text-black font-semibold sketchy-border rotate-1" : "text-neutral-600 hover:highlighter-cyan hover:-rotate-1"}`}
          >
            <span className="material-symbols-outlined">edit_square</span>{" "}
            Projects
          </button>

          <button
            onClick={() => handleNavigateToTab("stack")}
            className={`w-full flex items-center gap-3 p-2 cursor-pointer rounded transition-all font-headline-sm text-lg text-left ${activeTab === "stack" ? "highlighter-yellow text-black font-semibold sketchy-border rotate-1" : "text-neutral-600 hover:highlighter-cyan hover:-rotate-1"}`}
          >
            <span className="material-symbols-outlined">terminal</span> Stack
          </button>

          <button
            id="nav-mail"
            onClick={() => handleNavigateToTab("mail")}
            className={`w-full flex items-center gap-3 p-2 cursor-pointer rounded transition-all font-headline-sm text-lg text-left ${activeTab === "mail" ? "highlighter-yellow text-black font-semibold sketchy-border rotate-1" : "text-neutral-600 hover:highlighter-cyan hover:-rotate-1"}`}
          >
            <span className="material-symbols-outlined">mail</span> Mail
          </button>
        </div>

        <button
          onClick={() => setIsHireMeOpen(true)}
          className="mt-auto p-4 bg-black text-white font-headline-md text-xl sketchy-border sketchy-card-shadow hover:scale-105 active:scale-95 transition-transform cursor-pointer"
        >
          Hire Me!
        </button>
      </nav>

      {/* Main Content Canvas */}
      <main className="md:ml-64 p-6 md:p-16 max-w-7xl mx-auto relative z-10 min-h-screen flex flex-col justify-between">
        {/* Main interactive Tab Content container */}
        <div className="flex-1 pb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              {renderActiveTab()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Scrapbook Elements */}
        <footer className="mt-20 pb-12 text-center relative border-t-4 border-dotted border-black pt-12">
          {/* Quote Banner */}
          <div className="inline-block relative p-8 max-w-xl mx-auto mb-10">
            <div className="absolute inset-0 bg-[#fff7d1] opacity-70 sketchy-border rotate-[-1deg] paper-texture"></div>
            <div
              className="washi-tape-blue"
              style={{ top: "-10px", right: "20px" }}
            ></div>
            <p className="font-headline-sm text-lg italic relative z-10 text-gray-900 leading-relaxed">
              "Code is like humor. When you have to explain it, it's bad." 😊
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-black mt-4">
            <p className="font-label-code text-xl md:text-2xl font-bold">
              Made with coffee &amp; ink • © 2026 • Sirisha Boya
            </p>
            <div className="flex gap-6 font-headline-sm text-lg">
              <a
                href="https://github.com/Sirisha-Boya/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:highlighter-cyan px-1.5 transition-all"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/sirisha-b-334505257"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:highlighter-yellow px-1.5 transition-all"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Decorative Star Doodles */}
          <div className="absolute -bottom-2 left-1/4 text-3xl animate-pulse select-none">
            ⭐
          </div>
          <div className="absolute bottom-6 right-1/4 text-3xl animate-bounce select-none">
            ✨
          </div>
        </footer>
      </main>

      {/* Mobile Navigation (Bottom Bar) */}
      <nav className="md:hidden fixed bottom-6 left-6 right-6 bg-white border-2 border-black p-3.5 z-40 flex justify-around sketchy-border sketchy-card-shadow">
        <button
          onClick={() => handleNavigateToTab("home")}
          className={`flex flex-col items-center p-1 cursor-pointer transition-transform ${activeTab === "home" ? "text-[#dfe900] scale-110" : "text-neutral-500"}`}
        >
          <span className="material-symbols-outlined text-2xl font-bold">
            home
          </span>
        </button>
        <button
          onClick={() => handleNavigateToTab("projects")}
          className={`flex flex-col items-center p-1 cursor-pointer transition-transform ${activeTab === "projects" ? "text-[#dfe900] scale-110" : "text-neutral-500"}`}
        >
          <span className="material-symbols-outlined text-2xl font-bold">
            edit_square
          </span>
        </button>
        <button
          onClick={() => handleNavigateToTab("stack")}
          className={`flex flex-col items-center p-1 cursor-pointer transition-transform ${activeTab === "stack" ? "text-[#dfe900] scale-110" : "text-neutral-500"}`}
        >
          <span className="material-symbols-outlined text-2xl font-bold">
            terminal
          </span>
        </button>
        <button
          onClick={() => handleNavigateToTab("mail")}
          className={`flex flex-col items-center p-1 cursor-pointer transition-transform ${activeTab === "mail" ? "text-[#dfe900] scale-110" : "text-neutral-500"}`}
        >
          <span className="material-symbols-outlined text-2xl font-bold">
            mail
          </span>
        </button>
      </nav>

      {/* Hire Me Interactive Modal Overlay */}
      <AnimatePresence>
        {isHireMeOpen && (
          <HireMeModal
            isOpen={isHireMeOpen}
            onClose={() => setIsHireMeOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
