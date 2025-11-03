"use client";

import { motion } from "framer-motion";
import { MessageSquare, BarChart3, Users, Phone } from "lucide-react";

export default function CommunicationSection() {
  const features = [
    {
      title: "Bulk SMS Campaigns",
      desc: "Send announcements, reminders, and alerts to your teams, departments, or clients in one click — directly from OrgOffice.",
      icon: <Phone size={22} />,
      color: "#165DFC",
    },
    {
      title: "Smart Messaging Hub",
      desc: "Centralize communication — from internal messages to broadcast alerts — all within one secure dashboard.",
      icon: <MessageSquare size={22} />,
      color: "#63B3FF",
    },
    {
      title: "Analytics & Insights",
      desc: "Get real-time delivery stats, message open rates, and team engagement analytics for smarter decision-making.",
      icon: <BarChart3 size={22} />,
      color: "#5C6BF0",
    },
    {
      title: "User Groups & Roles",
      desc: "Segment recipients by departments, roles, or teams for targeted communication and streamlined operations.",
      icon: <Users size={22} />,
      color: "#165DFC",
    },
  ];

  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-20 bg-linear-to-r from-[#E8F1FF] via-white to-[#E8F1FF] overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="z-10"
        >
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#2D3748] mb-4">
            Powerful Communication <br /> & Organizational Insights
          </h3>
          <p className="text-[#4A5568] mb-8">
            Keep everyone informed and engaged with built-in Bulk SMS,
            centralized messaging, and actionable analytics — all designed to
            help your organization move faster, together.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="flex items-start space-x-4 bg-white border border-[#EDF2F7] rounded-xl p-5 shadow-sm hover:shadow-md"
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-lg"
                  style={{ backgroundColor: `${item.color}15`, color: item.color }}
                >
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#2D3748]">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#64748B] mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Illustration / Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="w-full max-w-md h-[360px] bg-white rounded-2xl border border-[#E2E8F0] shadow-lg overflow-hidden">
            <div className="h-10 bg-[#165DFC]"></div>
            <div className="p-6 flex flex-col gap-4">
              <div className="h-8 w-3/4 bg-[#E8F1FF] rounded-md" />
              <div className="h-4 w-1/2 bg-[#E8F1FF] rounded-md" />
              <div className="h-32 w-full bg-linear-to-r from-[#E8F1FF] to-white rounded-lg" />
              <div className="h-4 w-1/3 bg-[#E8F1FF] rounded-md" />
            </div>
          </div>
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#63B3FF]/20 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
