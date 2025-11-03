"use client";

import { motion } from "framer-motion";
import { Users, MessageCircle, Repeat, ShieldCheck } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Centralized Management",
      desc: "Manage users, teams, roles and resources from a single place.",
      icon: <Users size={20} />,
      accent: "from-[#E8F1FF] to-white",
      color: "#165DFC",
    },
    {
      title: "Communication",
      desc: "Announcements, Bulk SMS, messaging and group collaboration built in.",
      icon: <MessageCircle size={20} />,
      accent: "from-[#F3F7FF] to-white",
      color: "#5C6BF0",
    },
    {
      title: "Automated Workflows",
      desc: "Approvals, reminders and rules that save time and reduce errors.",
      icon: <Repeat size={20} />,
      accent: "from-[#E8F1FF] to-white",
      color: "#63B3FF",
    },
    {
      title: "Secure Access Control",
      desc: "Role-based permissions, audit logs and secure authentication.",
      icon: <ShieldCheck size={20} />,
      accent: "from-[#F3F9FF] to-white",
      color: "#165DFC",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#2D3748]">
            Built to keep teams focused and productive
          </h3>
          <p className="mt-3 text-[#4A5568]">
            OrgOffice gives organizations the tools they need to manage people,
            projects, communication and security — in one intuitive platform.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <motion.div
              key={f.title}
              whileHover={{ y: -8, boxShadow: "0 12px 30px rgba(16,24,40,0.08)" }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="bg-white border border-[#EDF2F7] rounded-2xl p-6 flex flex-col gap-4"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{
                  background: `linear-gradient(180deg, ${f.color}22, #ffffff)`,
                }}
              >
                <div
                  className="p-2 rounded-md bg-white/90"
                  style={{ color: f.color }}
                >
                  {f.icon}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-[#2D3748]">{f.title}</h4>
                <p className="mt-2 text-sm text-[#64748B]">{f.desc}</p>
              </div>

              <div className="mt-auto">
                <button
                  className="inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-lg"
                  style={{
                    color: f.color,
                    border: `1px solid ${f.color}33`,
                    background: "transparent",
                  }}
                >
                  Learn more
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-80"
                  >
                    <path d="M5 12h14" stroke={f.color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 5l7 7-7 7" stroke={f.color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
