"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Bell,
  ChevronDown,
  Search,
  MessageSquare,
  Send,
  X,
  Menu,
} from "lucide-react";

interface DashboardTopbarProps {
  onToggleSidebar: () => void;
}

export default function DashboardTopbar({ onToggleSidebar }: DashboardTopbarProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const mobileSearchRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown on outside click or Esc
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        setMobileSearchOpen(false);
      }
    };

    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // Auto-close mobile search on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768 && mobileSearchOpen) {
        setMobileSearchOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [mobileSearchOpen]);

  return (
    <header className="flex items-center justify-between h-16 px-3 md:px-6 border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
      {/* LEFT: sidebar toggle + title */}
      <div className="flex items-center gap-3 min-w-0">
        <button
          aria-label="Toggle sidebar"
          onClick={onToggleSidebar}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <Menu className="w-5 h-5 text-gray-700" />
        </button>

        <div className="flex items-center gap-3">
          <div className="truncate sm:flex items-center gap-2 min-w-0">
            <h1 className="text-sm sm:text-base font-semibold text-gray-800 truncate">
              Dashboard
            </h1>
            <span className="hidden lg:inline-block px-2 py-0.5 text-xs bg-blue-100 text-blue-600 rounded-full font-medium">
              Admin Panel
            </span>
          </div>
        </div>
      </div>

      {/* CENTER: search (desktop only) */}
      <div className="flex-1 flex justify-center relative px-2">
        <div className="hidden lg:block relative w-full max-w-lg">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
          <input
            aria-label="Search"
            type="text"
            placeholder="Search OrgOffice..."
            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 text-sm transition-all"
          />
        </div>

        {/* Mobile search overlay */}
        {mobileSearchOpen && (
          <div
            ref={mobileSearchRef}
            className="absolute top-12 left-2 right-2 lg:hidden bg-white shadow-lg rounded-md p-3 z-50 animate-fadeIn"
          >
            <div className="flex items-center gap-2">
              <input
                aria-label="Mobile search"
                type="text"
                placeholder="Search OrgOffice..."
                className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 text-sm"
                autoFocus
              />
              <button
                aria-label="Close search"
                onClick={() => setMobileSearchOpen(false)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer transition"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* RIGHT: actions */}
      <div className="flex items-center gap-2 md:gap-3 ml-2">
        {/* Search icon (mobile + medium screens only) */}
        <button
          aria-label="Open search"
          onClick={() => setMobileSearchOpen((s) => !s)}
          className="lg:hidden p-2 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer transition"
        >
          <Search className="w-5 h-5 text-gray-700" />
        </button>

        {/* Notifications */}
        <button
          aria-label="Notifications"
          className="relative p-2 rounded-full hover:bg-gray-100 cursor-pointer transition"
        >
          <Bell className="w-5 h-5 text-gray-700" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* Messages */}
        <button
          aria-label="Messages"
          className="relative p-2 rounded-full hover:bg-gray-100 cursor-pointer transition"
        >
          <MessageSquare className="w-5 h-5 text-gray-700" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full" />
        </button>

        {/* Bulk SMS */}
        <button
          aria-label="Send bulk SMS"
          className="flex items-center gap-2 bg-blue-600 text-white font-medium px-3 py-2 rounded-lg shadow hover:bg-blue-700 active:scale-[0.98] transition-all cursor-pointer text-sm"
        >
          <Send className="w-4 h-4" />
          <span className="hidden lg:inline">Send Bulk SMS</span>
        </button>

        {/* Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
            onClick={() => setDropdownOpen((d) => !d)}
            className="flex items-center gap-2 p-1.5 rounded-full hover:bg-gray-100 transition cursor-pointer"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-200">
              <Image
                src="/allan_profile.jpg"
                alt="Admin Avatar"
                fill
                className="object-cover"
              />
            </div>

            <span className="hidden md:block text-sm font-medium text-gray-800">
              Super Admin
            </span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>

          {dropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-[60] animate-fadeIn"
            >
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer transition"
              >
                Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer transition"
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-50 cursor-pointer transition"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
