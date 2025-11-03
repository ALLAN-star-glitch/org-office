"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DashboardPreviewSection() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 bg-linear-to-b from-white to-[#E8F1FF] overflow-hidden">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#2D3748] mb-4">
            Your Operations,{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#165DFC] to-[#63B3FF]">
              One Dashboard
            </span>
          </h2>
          <p className="text-lg text-[#4A5568] max-w-3xl mx-auto">
            OrgOffice brings together your organization’s people, communication,
            projects, and analytics into one clean, intuitive workspace — built
            for clarity, speed, and smarter management.
          </p>
        </motion.div>

        {/* Dashboard Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 blur-3xl bg-linear-to-r from-[#165DFC]/10 via-[#63B3FF]/10 to-transparent rounded-3xl"></div>

          {/* Replace this with your real dashboard image */}
          <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-[#E2E8F0]">
            <Image
              src="/dashboard.jpg"
              alt="OrgOffice Dashboard Preview"
              width={1200}
              height={700}
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <button className="px-8 py-3 bg-linear-to-r from-[#165DFC] to-[#63B3FF] text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition">
            Explore Dashboard
          </button>
          <button className="px-8 py-3 border border-[#165DFC] text-[#165DFC] font-semibold rounded-xl hover:bg-[#165DFC]/10 transition">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
