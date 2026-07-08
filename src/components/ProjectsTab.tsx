/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import { motion } from "motion/react";

interface ProjectsTabProps {
  selectedProjectTitle: string | null;
  onClearSelectedProject: () => void;
}

export default function ProjectsTab({
  selectedProjectTitle,
  onClearSelectedProject,
}: ProjectsTabProps) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // ScribblePad state
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushColor, setBrushColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(3);

  useEffect(() => {
    if (selectedProjectTitle) {
      const found = PROJECTS.find(
        (p) => p.title.toLowerCase() === selectedProjectTitle.toLowerCase(),
      );
      if (found) {
        setActiveProject(found);
      }
    } else {
      setActiveProject(PROJECTS[0]);
    }
  }, [selectedProjectTitle]);

  // Canvas drawing handlers
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas and draw grid on init
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid(canvas, ctx);
  }, []);

  const drawGrid = (
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
  ) => {
    ctx.strokeStyle = "rgba(229, 231, 235, 0.5)";
    ctx.lineWidth = 1;
    // draw 15px grid
    for (let x = 0; x < canvas.width; x += 15) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 15) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
  };

  const getCoordinates = (
    e:
      | React.MouseEvent<HTMLCanvasElement>
      | React.TouchEvent<HTMLCanvasElement>,
  ) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();

    if ("touches" in e) {
      if (e.touches.length === 0) return { x: 0, y: 0 };
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    } else {
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  };

  const startDrawing = (
    e:
      | React.MouseEvent<HTMLCanvasElement>
      | React.TouchEvent<HTMLCanvasElement>,
  ) => {
    e.preventDefault();
    const { x, y } = getCoordinates(e);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = brushColor;
    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    setIsDrawing(true);
  };

  const draw = (
    e:
      | React.MouseEvent<HTMLCanvasElement>
      | React.TouchEvent<HTMLCanvasElement>,
  ) => {
    if (!isDrawing) return;
    e.preventDefault();
    const { x, y } = getCoordinates(e);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid(canvas, ctx);
  };

  return (
    <div className="space-y-12">
      {/* Portfolio Projects Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Project Selector Left Side */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="bg-white p-6 sketchy-border rotate-[-1deg] paper-texture">
            <h2 className="font-headline-md text-2xl mb-4 text-black flex items-center gap-2">
              <span className="material-symbols-outlined text-cyan-600">
                bookmark_heart
              </span>
              My Masterpieces
            </h2>
            <p className="font-body-md text-lg text-gray-600 mb-6">
              Select an item to peel back the tape and view deep development
              details:
            </p>

            <div className="flex flex-col gap-3">
              {PROJECTS.map((proj, idx) => {
                const isSelected = activeProject?.title === proj.title;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      onClearSelectedProject();
                      setActiveProject(proj);
                    }}
                    className={`w-full text-left p-3 rounded transition-all sketchy-border duration-200 cursor-pointer flex items-center gap-3 ${isSelected ? "highlighter-yellow rotate-1 border-black font-semibold" : "bg-transparent border-neutral-300 hover:border-black hover:-rotate-1"}`}
                  >
                    <span className="text-2xl filter drop-shadow select-none">
                      {proj.emoji}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="font-headline-sm text-lg text-black truncate">
                        {proj.title}
                      </div>
                      <div className="font-body-md text-sm text-gray-600 truncate">
                        {proj.category}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Project Details Right Side */}
        <div className="lg:col-span-8">
          {activeProject && (
            <motion.div
              key={activeProject.title}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 md:p-10 sketchy-border sketchy-card-shadow rotate-1 relative paper-texture"
            >
              <div
                className="washi-tape"
                style={{ top: "-10px", right: "10%" }}
              ></div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-dashed border-neutral-300 pb-6 mb-6">
                <div>
                  <span className="text-4xl filter drop-shadow select-none mb-2 block sm:inline mr-2">
                    {activeProject.emoji}
                  </span>
                  <h1 className="font-headline-md text-3xl text-black inline-block align-middle">
                    {activeProject.title}
                  </h1>
                  <p className="font-body-md text-xl text-cyan-700 italic">
                    {activeProject.category}
                  </p>
                </div>

                <div className="flex gap-3">
                  <a
                    href="#contact"
                    onClick={() => {
                      const mailBtn = document.getElementById("nav-mail");
                      if (mailBtn) mailBtn.click();
                    }}
                    className="px-4 py-1.5 bg-[#dfe900]/20 hover:highlighter-yellow text-black rounded font-label-code text-base border border-black cursor-pointer transition-colors"
                  >
                    Inquire ✎
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-headline-sm text-xl text-black mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">
                      info
                    </span>
                    Description
                  </h3>
                  <p className="font-body-lg text-2xl text-gray-800 leading-relaxed">
                    {activeProject.description}
                  </p>
                </div>

                <div>
                  <h3 className="font-headline-sm text-xl text-black mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">
                      hotel_class
                    </span>
                    Key Project Highlights
                  </h3>
                  <ul className="list-none space-y-3 font-body-md text-xl text-gray-700 pl-2">
                    {activeProject.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* <div>
                  <h3 className="font-headline-sm text-xl text-black mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">
                      construction
                    </span>
                    Technologies Doodle-Tag Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.title === "Bank In A Box" &&
                      [
                        "Microservices",
                        "ASP.NET Core",
                        "C#",
                        "Docker",
                        "JWT Auth",
                        "D3.js",
                        "Azure",
                      ].map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 border border-black bg-amber-50 rounded-full font-label-code text-sm transform rotate-1 hover:-rotate-1 cursor-default select-none"
                        >
                          {tag}
                        </span>
                      ))}
                    {activeProject.title ===
                      "Clinical Administration & Management System (CaMS)" &&
                      [
                        "React.js",
                        "ASP.NET Core",
                        "PostgreSQL",
                        "REST API",
                        "HIPAA Safeguards",
                        "Docker",
                      ].map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 border border-black bg-cyan-50 rounded-full font-label-code text-sm transform -rotate-1 hover:rotate-1 cursor-default select-none"
                        >
                          {tag}
                        </span>
                      ))}
                    {activeProject.title ===
                      "Hiring & Applicant Tracking System (HaTS)" &&
                      [
                        "React.js",
                        "C#",
                        "SQL Server",
                        "Kanban Engine",
                        "Cognitive AI Parser",
                      ].map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 border border-black bg-pink-50 rounded-full font-label-code text-sm transform rotate-2 hover:-rotate-2 cursor-default select-none"
                        >
                          {tag}
                        </span>
                      ))}
                    {activeProject.title === "XyMACS" &&
                      [
                        "React.js",
                        ".NET 6",
                        "Purchase Orders",
                        "CSV Engine",
                        "PDF Generator",
                        "SQL Server",
                      ].map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 border border-black bg-green-50 rounded-full font-label-code text-sm transform -rotate-2 hover:rotate-2 cursor-default select-none"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                </div> */}
                <div className="flex flex-wrap gap-2">
                  {activeProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 border border-black bg-amber-50 rounded-full font-label-code text-sm transform rotate-1 hover:-rotate-1 cursor-default select-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* ScribblePad: Highly Interactive Sketch Canvas */}
      <div className="bg-white p-8 sketchy-border sketchy-card-shadow rotate-[-0.5deg] relative paper-texture overflow-hidden">
        <div className="absolute -top-3 left-10 bg-yellow-200 text-black px-3 py-1 text-sm font-label-code border border-black rounded transform -rotate-2">
          CREATIVE CORNER
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-b border-dashed border-neutral-300 pb-6 mb-6">
          <div>
            <h2 className="font-headline-md text-2xl text-black flex items-center gap-2">
              <span className="material-symbols-outlined text-yellow-600 animate-pulse">
                gesture
              </span>
              Virtual ScribblePad
            </h2>
            <p className="font-body-md text-lg text-gray-600">
              Pick a pencil color and draw or leave a cute hand-drawn greeting
              directly on our gridded scrapbook!
            </p>
          </div>

          {/* Canvas Controls */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 bg-neutral-50 px-3 py-1.5 border border-black rounded">
              <span className="font-label-code text-sm text-gray-700">
                Ink:
              </span>
              <div className="flex gap-1.5">
                {["#000000", "#2563eb", "#dc2626", "#16a34a", "#db2777"].map(
                  (col) => (
                    <button
                      key={col}
                      onClick={() => setBrushColor(col)}
                      className={`w-6 h-6 rounded-full border border-black/40 cursor-pointer transition-transform ${brushColor === col ? "scale-125 ring-2 ring-black" : ""}`}
                      style={{ backgroundColor: col }}
                      title={col}
                    />
                  ),
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 bg-neutral-50 px-3 py-1.5 border border-black rounded">
              <span className="font-label-code text-sm text-gray-700">
                Brush Size:
              </span>
              <input
                type="range"
                min="1"
                max="12"
                value={brushSize}
                onChange={(e) => setBrushSize(Number(e.target.value))}
                className="w-20 accent-black cursor-pointer"
              />
              <span className="font-label-code text-xs text-black w-4">
                {brushSize}px
              </span>
            </div>

            <button
              onClick={clearCanvas}
              className="px-4 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-black border border-black rounded font-label-code text-sm transition-colors cursor-pointer flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-base">
                delete
              </span>
              Erase Slate
            </button>
          </div>
        </div>

        {/* Drawing Canvas Board */}
        <div className="relative bg-neutral-50 border-2 border-dashed border-neutral-300 rounded overflow-hidden cursor-crosshair">
          <canvas
            ref={canvasRef}
            width={850}
            height={300}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            className="w-full bg-white touch-none"
          />
          <div className="absolute bottom-2 right-3 pointer-events-none text-neutral-400 font-label-code text-xs">
            ✎ Touch or drag mouse to draw anything!
          </div>
        </div>
      </div>
    </div>
  );
}
