/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HireMeModal({ isOpen, onClose }: HireMeModalProps) {
  if (!isOpen) return null;

  const handleDownloadResume = () => {
    // Generate a simple print layout of her portfolio resume, or trigger window.print() for her Resume!
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="w-full max-w-lg bg-[#fff7d1] p-8 sketchy-border sketchy-card-shadow rotate-1 relative paper-texture max-h-[90vh] overflow-y-auto"
      >
        {/* red washi tape top */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-red-400/40 rotate-1"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black hover:scale-110 active:scale-95 cursor-pointer p-1"
          title="Close"
        >
          <span className="material-symbols-outlined text-3xl">close</span>
        </button>

        <div className="text-center mt-4">
          <div className="w-16 h-16 bg-white border-2 border-black rounded-full flex items-center justify-center mx-auto mb-4 sketchy-border">
            <span className="material-symbols-outlined text-3xl text-yellow-600 animate-bounce">handshake</span>
          </div>

          <h2 className="font-display-lg text-4xl text-black mb-2 select-none">Hire Sirisha!</h2>
          <p className="font-headline-sm text-xl text-cyan-800 mb-6 italic">Let's build something awesome!</p>
        </div>

        <div className="space-y-4 font-body-md text-xl text-gray-800 leading-tight">
          <p>
            Sirisha Boya is a Senior Full-Stack Developer with <strong>5.7 years of experience</strong> across enterprise healthcare, banking, procurement, and asset systems.
          </p>

          <div className="bg-white p-4 border border-dashed border-black rounded space-y-2 font-label-code text-sm text-gray-700">
            <div>📍 <strong>Availability:</strong> Ready for Full-Time & Contract roles</div>
            <div>💼 <strong>Key strengths:</strong> React.js, ASP.NET Core, C#, Microservices, Azure SQL, Docker</div>
            <div>🚀 <strong>Workstyle:</strong> End-to-end owner, collaborative mentor, AI-assisted development</div>
          </div>

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 font-headline-sm">
            <a
              href="mailto:sirishab9196@gmail.com?subject=Job%20Inquiry%20-%20Full%20Stack%20Developer"
              className="px-4 py-2.5 bg-black text-white text-center rounded sketchy-border hover:scale-102 active:scale-98 transition-transform cursor-pointer"
            >
              Email Sirisha ✉
            </a>

            <button
              onClick={handleDownloadResume}
              className="px-4 py-2.5 bg-white text-black text-center rounded sketchy-border border-2 border-black hover:scale-102 active:scale-98 transition-transform cursor-pointer"
            >
              Print Resume 🖨
            </button>
          </div>

          <div className="mt-6 text-center border-t border-dashed border-black/15 pt-4">
            <span className="font-label-code text-xs text-gray-500">
              Direct: +91 9196... / sirishab9196@gmail.com • Hyderabad, India
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
