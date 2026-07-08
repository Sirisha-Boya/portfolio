/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Experience {
  role: string;
  period: string;
  company: string;
  bullets: string[];
  color: "cyan" | "yellow" | "green";
}

export interface SkillDetail {
  name: string;
  level: string; // e.g., "5.7 Years" or "Expert"
  description: string;
  icon: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  emoji: string;
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
}

export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  color: "yellow" | "cyan" | "pink";
  timestamp: string;
}
