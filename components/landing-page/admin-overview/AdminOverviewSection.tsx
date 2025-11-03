"use client";

import { motion } from "framer-motion";
import { BarChart2, Users, FileText, Layers, Bell, Search } from "lucide-react";


/**
 * AdminOverviewSection
 * Drop this after your HeroSection.
 *
 * Uses brand:
 * - Royal Blue: #165DFC
 * - Light Blue:  #E8F1FF
 * - Sky Blue:    #63B3FF
 * - Slate Gray:  #4A5568
 * - Neutrals: white / #EDF2F7
 *
 * No external chart libs — charts are simple SVG placeholders you can later replace.
 */

export default function AdminOverviewSection() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      {/* Header / Top bar */}
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#2D3748]">
              Super Admin Dashboard
            </h3>
            <p className="text-sm text-[#4A5568] mt-1">
              Overview — control users, roles, files, projects and system analytics.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none">
              <input
                aria-label="Search"
                placeholder="Search users, projects, files..."
                className="w-full md:w-[340px] px-4 py-2 rounded-xl border border-[#EDF2F7] bg-white/95 placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#E8F1FF]"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" size={18} />
            </div>

            <button className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#EDF2F7] rounded-xl shadow-sm">
              <Bell size={18} className="text-[#4A5568]" />
              <span className="text-sm text-[#4A5568]">Notifications</span>
            </button>

            <div className="ml-2 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#E8F1FF] flex items-center justify-center text-[#165DFC] font-medium">SA</div>
            </div>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: "Total Users", value: "12,482", icon: <Users size={20} /> , badge:'#63B3FF'},
            { title: "Active Departments", value: "28", icon: <Layers size={20} /> , badge:'#34C759'},
            { title: "Pending Approvals", value: "17", icon: <FileText size={20} /> , badge:'#FFB020'},
            { title: "Uploaded Files", value: "4,312", icon: <BarChart2 size={20} /> , badge:'#165DFC'},
          ].map((c) => (
            <motion.div
              key={c.title}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-white rounded-2xl p-5 shadow-sm border border-[#EDF2F7] flex items-start gap-4"
            >
              <div
                className="p-3 rounded-lg flex items-center justify-center"
                style={{ background: `${c.badge}20` }}
              >
                <div className="p-1 rounded-md bg-white/90 text-[#165DFC]">{c.icon}</div>
              </div>
              <div className="flex-1">
                <div className="text-sm text-[#4A5568]">{c.title}</div>
                <div className="mt-1 text-xl font-semibold text-[#2D3748]">{c.value}</div>
              </div>
              <div className="text-sm text-[#63B3FF]">↗︎</div>
            </motion.div>
          ))}
        </div>

        {/* Main Grid: Analytics | Files | Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Analytics area (span 2) */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div className="bg-white rounded-2xl p-6 border border-[#EDF2F7] shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-[#2D3748]">Active Users Over Time</h4>
                  <p className="text-sm text-[#4A5568]">Weekly active users (last 12 weeks)</p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-3 py-1 text-sm rounded-lg bg-[#E8F1FF] text-[#165DFC]">7d</button>
                  <button className="px-3 py-1 text-sm rounded-lg bg-white border border-[#EDF2F7] text-[#4A5568]">30d</button>
                </div>
              </div>

              {/* Line chart placeholder (SVG) */}
              <div className="w-full h-48">
                <svg viewBox="0 0 800 200" className="w-full h-full">
                  <defs>
                    <linearGradient id="g1" x1="0" x2="1">
                      <stop offset="0%" stopColor="#165DFC" stopOpacity="1" />
                      <stop offset="100%" stopColor="#63B3FF" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                  <rect x="0" y="0" width="800" height="200" fill="#FFFFFF" />
                  <path d="M0 140 L80 120 L160 100 L240 110 L320 70 L400 90 L480 60 L560 80 L640 50 L720 70 L800 40"
                        fill="none" stroke="url(#g1)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>

            <motion.div className="bg-white rounded-2xl p-6 border border-[#EDF2F7] shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-[#2D3748]">Role Distribution</h4>
                <p className="text-sm text-[#4A5568] mb-4">Proportion of roles across the org</p>
                {/* Pie chart placeholder */}
                <div className="w-full h-40 flex items-center justify-center">
                  <svg viewBox="0 0 32 32" className="w-28 h-28">
                    <circle r="16" cx="16" cy="16" fill="#EDF2F7" />
                    <path d="M16 16 L32 16 A16 16 0 0 1 10 3 Z" fill="#165DFC"></path>
                    <path d="M16 16 L10 3 A16 16 0 0 1 22 29 Z" fill="#63B3FF"></path>
                    <path d="M16 16 L22 29 A16 16 0 0 1 16 16 Z" fill="#34C759"></path>
                  </svg>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-[#2D3748]">Project Completion</h4>
                <p className="text-sm text-[#4A5568] mb-3">Average progress across active projects</p>
                {/* Bar chart placeholder */}
                <div className="space-y-2">
                  {[80, 60, 40, 90].map((v, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="text-sm w-28 text-[#4A5568]">Project {idx + 1}</div>
                      <div className="h-3 flex-1 bg-[#EDF2F7] rounded-full overflow-hidden">
                        <div style={{ width: `${v}%` }} className="h-full rounded-full bg-linear-to-r from-[#165DFC] to-[#63B3FF]"></div>
                      </div>
                      <div className="text-sm w-10 text-[#4A5568] text-right">{v}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* File Management Panel */}
          <motion.aside
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="bg-white rounded-2xl p-4 border border-[#EDF2F7] shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-md font-semibold text-[#2D3748]">Files</h5>
              <button className="px-3 py-1 text-sm rounded-lg bg-[#165DFC] text-white">Upload</button>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              {["Documents", "Spreadsheets", "Images", "Other"].map((t, i) => (
                <div key={t} className="p-3 rounded-lg bg-[#E8F1FF] text-[#165DFC] text-sm flex items-center justify-between">
                  <span>{t}</span>
                  <span className="text-xs text-[#4A5568]"> {1000 - i * 120}</span>
                </div>
              ))}
            </div>

            <div className="mb-3">
              <div className="text-sm text-[#4A5568] mb-2">Quick Upload</div>
              <div className="border-dashed border-2 border-[#E8F1FF] rounded-lg p-4 text-center text-sm text-[#4A5568]">
                Drag & drop files here <br />
                <span className="text-xs text-[#94A3B8]">or click to browse</span>
              </div>
            </div>

            <div>
              <h6 className="text-sm font-medium text-[#2D3748] mb-2">Recent</h6>
              <ul className="space-y-2 text-sm text-[#4A5568]">
                <li className="flex items-center justify-between">
                  <span>policy_update.pdf</span>
                  <span className="text-xs text-[#94A3B8]">2h</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Q3_report.xlsx</span>
                  <span className="text-xs text-[#94A3B8]">1d</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>team_photo.jpg</span>
                  <span className="text-xs text-[#94A3B8]">3d</span>
                </li>
              </ul>
            </div>
          </motion.aside>
        </div>

        {/* Activity Feed */}
        <div className="mt-8 bg-white rounded-2xl p-6 border border-[#EDF2F7] shadow-sm">
          <h4 className="text-lg font-semibold text-[#2D3748] mb-4">Activity Feed</h4>
          <div className="space-y-3">
            {[
              { text: "Added role: Finance Manager", time: "5m" },
              { text: "User approved: john.doe@example.com", time: "20m" },
              { text: "Uploaded: Q3_report.xlsx", time: "2h" },
              { text: "Created department: Grants", time: "1d" },
            ].map((it, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.01 }}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F7FAFF]"
              >
                <div className="h-10 w-10 rounded-md bg-[#E8F1FF] flex items-center justify-center text-[#165DFC]">
                  <FileText size={16} />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-[#2D3748]">{it.text}</div>
                  <div className="text-xs text-[#94A3B8] mt-1">{it.time}</div>
                </div>
                <div className="text-sm text-[#94A3B8]">Details</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-[#94A3B8]">
          © 2025 OrgOffice — Streamlining Organizational Management. Built with ❤️ using NestJS.
        </div>
      </div>
    </section>
  );
}
