"use client";

import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import SlideInWhenVisible from "@/components/animations/SlideInWhenVisible";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative w-full grid md:grid-cols-[1.8fr_1fr] gap-16 items-center px-8 md:px-20 py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-l from-black/80 via-[#0A2540]/75 to-[#165DFC]/60" />

      {/* Animated Blur Accents */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-10 right-10 w-[400px] h-[400px] bg-[#4EA8FF] rounded-full blur-3xl opacity-25"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#165DFC] rounded-full blur-3xl opacity-25"
      />

      {/* Left Side */}
      <div className="flex flex-col space-y-8 md:pr-12 relative z-10 text-white">
        <SlideInWhenVisible from="left">
          <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium w-max backdrop-blur-sm">
            Trusted by forward-thinking organisations
          </span>
        </SlideInWhenVisible>

        {/* Animated Gradient Header */}
        <SlideInWhenVisible from="left" delay={0.2}>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg">
            Manage Your Organization{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4EA8FF] to-[#AEEBFF] animate-gradient">
              Smarter
            </span>{" "}
            — All in One Place
          </h1>
        </SlideInWhenVisible>

        <FadeInWhenVisible delay={0.4}>
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed text-gray-200">
            OrgOffice centralizes your operations, teams, communication, and
            documents in one intuitive platform — helping organizations achieve
            more with less hassle and improved collaboration.
          </p>
        </FadeInWhenVisible>

        <SlideInWhenVisible from="up" delay={0.6}>
          <div className="flex flex-wrap gap-4">
            <button className="bg-linear-to-r from-[#4EA8FF] to-[#165DFC] text-white px-8 py-3 rounded-xl hover:opacity-90 shadow-lg shadow-black/30 transition font-medium">
              Get Started
            </button>
            <button className="border border-white px-8 py-3 rounded-xl hover:bg-white/20 transition font-medium text-white">
              Book a Demo
            </button>
          </div>
        </SlideInWhenVisible>

        <FadeInWhenVisible delay={0.8}>
          <p className="text-sm text-gray-300 mt-6">
            Trusted by 500+ organisations across schools, NGOs, and enterprises.
          </p>
        </FadeInWhenVisible>
      </div>

      {/* Right Side (Login Form) */}
      <SlideInWhenVisible from="right" delay={0.3}>
        <div className="relative flex justify-center md:justify-end z-10">
          <form className="w-full md:w-[80%] bg-white/95 shadow-2xl rounded-2xl p-8 space-y-6 border border-white/20 backdrop-blur-md">
            <h2 className="text-2xl font-semibold text-[#0A2540]">Login</h2>
            <p className="text-[#334155] text-sm">
              Access your OrgOffice dashboard and continue where you left off.
            </p>

            <div className="space-y-3">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border border-[#CBD5E1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4EA8FF]"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border border-[#CBD5E1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4EA8FF]"
              />
            </div>

            <button className="w-full bg-linear-to-r from-[#165DFC] to-[#4EA8FF] hover:opacity-90 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-md shadow-[#165DFC]/30">
              Login
            </button>

            <p className="text-sm text-[#334155] text-center">
              Don’t have an account?{" "}
              <span className="text-[#165DFC] hover:underline cursor-pointer">
                Create one
              </span>
            </p>
          </form>
        </div>
      </SlideInWhenVisible>
    </section>
  );
}
