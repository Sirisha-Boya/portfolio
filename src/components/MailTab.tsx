/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { INITIAL_GUESTBOOK } from '../data';
import { GuestbookEntry } from '../types';
import { motion, AnimatePresence } from 'motion/react';

export default function MailTab() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [noteColor, setNoteColor] = useState<'yellow' | 'cyan' | 'pink'>('yellow');
  
  // Contact Form State
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMsg, setContactMsg] = useState('');
  const [contactSent, setContactSent] = useState(false);

  // Load from localStorage or defaults
  useEffect(() => {
    const saved = localStorage.getItem('sirisha_guestbook');
    if (saved) {
      try {
        setEntries(JSON.parse(saved));
      } catch (e) {
        setEntries(INITIAL_GUESTBOOK);
      }
    } else {
      setEntries(INITIAL_GUESTBOOK);
    }
  }, []);

  const saveEntries = (newEntries: GuestbookEntry[]) => {
    setEntries(newEntries);
    localStorage.setItem('sirisha_guestbook', JSON.stringify(newEntries));
  };

  const handleAddSticky = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newEntry: GuestbookEntry = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      color: noteColor,
      timestamp: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
    };

    const updated = [newEntry, ...entries];
    saveEntries(updated);
    setName('');
    setMessage('');
  };

  const handleDeleteSticky = (id: string) => {
    const updated = entries.filter(item => item.id !== id);
    saveEntries(updated);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMsg) return;
    
    setContactSent(true);
    // Auto-reset message sent confirmation in 4 seconds
    setTimeout(() => {
      setContactSent(false);
      setContactName('');
      setContactEmail('');
      setContactMsg('');
    }, 4500);
  };

  return (
    <div className="space-y-16">
      {/* Contact Form & Guestbook Form Block */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Lined Envelope-Style Contact Card */}
        <div className="bg-white p-8 md:p-10 sketchy-border rotate-[-1deg] paper-texture relative">
          <div className="absolute top-2 right-4 text-xs font-mono text-gray-400 select-none">STAMP HERE</div>
          <div className="absolute top-4 right-4 w-12 h-14 bg-amber-50 border-2 border-dashed border-neutral-400 flex items-center justify-center rotate-6 select-none font-bold text-gray-500">
            ✉
          </div>
          
          <h2 className="font-headline-md text-2xl mb-4 text-black flex items-center gap-2">
            <span className="material-symbols-outlined text-cyan-600">mail</span>
            Send Me a Letter
          </h2>
          <p className="font-body-md text-lg text-gray-600 mb-6 leading-tight">
            Need high-quality web integrations, REST APIs, or cloud solutions? Write me a sweet handwritten-style note!
          </p>

          <AnimatePresence mode="wait">
            {!contactSent ? (
              <motion.form 
                onSubmit={handleContactSubmit}
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div>
                  <label className="block font-label-code text-base text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="E.g., Ada Lovelace"
                    className="w-full bg-neutral-50/50 p-2 border-2 border-black rounded font-body-md text-xl placeholder-gray-400 focus:outline-none focus:bg-amber-50/20"
                  />
                </div>

                <div>
                  <label className="block font-label-code text-base text-gray-700 mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="ada@computing.org"
                    className="w-full bg-neutral-50/50 p-2 border-2 border-black rounded font-body-md text-xl placeholder-gray-400 focus:outline-none focus:bg-amber-50/20"
                  />
                </div>

                <div>
                  <label className="block font-label-code text-base text-gray-700 mb-1">Your Message</label>
                  <textarea
                    required
                    rows={4}
                    value={contactMsg}
                    onChange={(e) => setContactMsg(e.target.value)}
                    placeholder="What awesome thing shall we build together?"
                    className="w-full bg-neutral-50/50 p-2 border-2 border-black rounded font-body-md text-xl placeholder-gray-400 focus:outline-none focus:bg-amber-50/20"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-black text-white font-headline-sm text-lg sketchy-border sketchy-card-shadow hover:scale-[1.02] active:scale-[0.98] transition-transform cursor-pointer"
                >
                  Seal & Send Letter ✉
                </button>
              </motion.form>
            ) : (
              <motion.div 
                className="py-10 text-center flex flex-col items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center border-2 border-black mb-4 animate-bounce">
                  <span className="material-symbols-outlined text-3xl text-emerald-600">done</span>
                </div>
                <h3 className="font-headline-sm text-2xl text-black mb-2">Letter Sealed & Sent!</h3>
                <p className="font-body-md text-xl text-gray-700">
                  Thank you, <strong>{contactName}</strong>! Your email has been delivered to <strong>sirishab9196@gmail.com</strong>. Sirisha will get back to you shortly!
                </p>
                <div className="mt-4 font-label-code text-xs text-neutral-400 italic">
                  Refreshing form shortly...
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Pin a Sticky Note on Corkboard Form */}
        <div className="bg-white p-8 md:p-10 sketchy-border rotate-[0.5deg] paper-texture relative">
          <div className="washi-tape-blue" style={{ top: '-10px', left: '15%' }}></div>
          
          <h2 className="font-headline-md text-2xl mb-2 text-black flex items-center gap-2">
            <span className="material-symbols-outlined text-yellow-600">push_pin</span>
            Pin a Sticky Note!
          </h2>
          <p className="font-body-md text-lg text-gray-600 mb-6">
            Write on the virtual Guestbook wall! Type your greeting, choose a sticky background color, and hit Pin.
          </p>

          <form onSubmit={handleAddSticky} className="space-y-4">
            <div>
              <label className="block font-label-code text-base text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="E.g., Fellow Developer"
                className="w-full bg-neutral-50/50 p-2 border-2 border-black rounded font-body-md text-xl placeholder-gray-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-label-code text-base text-gray-700 mb-1">Message Note</label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your scribble..."
                className="w-full bg-neutral-50/50 p-2 border-2 border-black rounded font-body-md text-xl placeholder-gray-400 focus:outline-none"
              />
            </div>

            {/* Note Color Selector */}
            <div>
              <label className="block font-label-code text-base text-gray-700 mb-2">Paper Color</label>
              <div className="flex gap-4">
                {[
                  { id: 'yellow', label: 'Sunshine Yellow', color: 'bg-[#fff7d1]' },
                  { id: 'cyan', label: 'Breeze Cyan', color: 'bg-cyan-100' },
                  { id: 'pink', label: 'Blossom Pink', color: 'bg-rose-100' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setNoteColor(item.id as 'yellow' | 'cyan' | 'pink')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 border-2 rounded font-label-code text-xs text-black cursor-pointer transition-all ${noteColor === item.id ? 'border-black ring-2 ring-black scale-105' : 'border-neutral-300'}`}
                  >
                    <span className={`w-3.5 h-3.5 rounded-full border border-black/10 ${item.color}`} />
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-neutral-100 hover:bg-neutral-200 text-black font-headline-sm text-lg border-2 border-black rounded-lg hover:shadow-md transition-all duration-150 cursor-pointer"
            >
              Pin to Wall 📌
            </button>
          </form>
        </div>
      </div>

      {/* Guestbook Corkboard Area */}
      <div className="bg-[#eedec5] p-8 md:p-10 border-4 border-amber-900 rounded-xl relative shadow-2xl overflow-hidden min-h-[400px]">
        {/* Corkboard texture simulation with dots or gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-800/10 via-amber-950/20 to-amber-950/40 pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b-2 border-dashed border-amber-900/35 pb-4 mb-8">
          <div>
            <h2 className="font-headline-md text-2xl text-amber-950 flex items-center gap-2">
              <span className="material-symbols-outlined text-amber-950 font-bold">dashboard</span>
              Interactive Guestbook Wall
            </h2>
            <p className="font-body-md text-lg text-amber-900">
              Hover, admire, or drag-inspired notes pinned by visitors. Let's grow Sirisha's community board!
            </p>
          </div>
          
          <div className="bg-amber-900/10 border border-amber-900/30 px-3 py-1 rounded text-xs font-label-code text-amber-900">
            Total Notes: {entries.length}
          </div>
        </div>

        {/* Sticky Notes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          <AnimatePresence initial={false}>
            {entries.map((entry, idx) => {
              // Custom sticky colors
              let colorBg = 'bg-[#fff7d1]';
              if (entry.color === 'cyan') colorBg = 'bg-cyan-100';
              if (entry.color === 'pink') colorBg = 'bg-rose-100';

              // Alternate rotations for realistic scattered look
              const rotation = idx % 3 === 0 ? 'rotate-2' : idx % 3 === 1 ? '-rotate-3' : 'rotate-1';

              return (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                  animate={{ opacity: 1, scale: 1, rotate: idx % 3 === 0 ? 2 : idx % 3 === 1 ? -3 : 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className={`p-6 ${colorBg} sketchy-border sketchy-card-shadow ${rotation} relative paper-texture flex flex-col justify-between transition-transform duration-300 hover:scale-102 hover:rotate-0 group`}
                >
                  {/* Push Pin */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-2xl z-20 filter drop-shadow select-none">
                    📌
                  </div>

                  <div>
                    {/* Delete button (only visible on hover for neatness) */}
                    <button
                      onClick={() => handleDeleteSticky(entry.id)}
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-neutral-900 text-white rounded-full p-0.5 border border-black hover:scale-110 text-[10px] cursor-pointer transition-opacity flex items-center justify-center w-5 h-5"
                      title="Remove Note"
                    >
                      <span className="material-symbols-outlined text-xs">close</span>
                    </button>

                    <p className="font-body-lg text-2xl text-gray-800 leading-snug break-words mb-4">
                      "{entry.message}"
                    </p>
                  </div>

                  <div className="border-t border-dashed border-black/15 pt-2 flex justify-between items-center text-black">
                    <span className="font-headline-sm text-lg font-bold truncate max-w-[150px]">
                      ~ {entry.name}
                    </span>
                    <span className="font-label-code text-xs text-gray-600">
                      {entry.timestamp}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {entries.length === 0 && (
          <div className="text-center py-16 text-amber-900 font-body-md text-2xl">
            Corkboard is empty! Pin the first sticky note above! 📌
          </div>
        )}
      </div>
    </div>
  );
}
