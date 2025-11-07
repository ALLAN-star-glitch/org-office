"use client";

import QuickOverviewCard from "@/components/dashboard/Cards/QuickOverviewCard";
import LineChart from "@/components/dashboard/Charts/LineChart";
import {
  Users,
  Calendar,
  FileText,
  MessageSquare,
  Wallet,
  TrendingUp,
  Clock,
  Building2,
} from "lucide-react";

export default function OverviewPage() {
  const activityData = [
    { date: "2025-11-01", users: 40 },
    { date: "2025-11-02", users: 52 },
    { date: "2025-11-03", users: 64 },
    { date: "2025-11-04", users: 58 },
  ];

  const recentActivities = [
    { message: "New event ‘Community Workshop’ created", time: "2h ago" },
    { message: "Faith CBO uploaded ‘November Budget.xlsx’", time: "5h ago" },
    { message: "M-Pesa payment received – KES 3,000", time: "7h ago" },
    { message: "New organization ‘Hope Kenya’ registered", time: "1d ago" },
  ];

  return (
    <div
      className="
        h-screen overflow-y-auto scroll-smooth
        px-6 py-8 md:px-10 md:py-10
        bg-[#F9FBFF] text-[#1E293B] space-y-8
      "
    >
      {/* HEADER */}
      <header className="flex flex-col md:flex-row md:items-center md:justify-between pb-4 border-b border-[#E5E9F2]">
        <div>
          <h1 className="text-2xl font-bold text-[#165DFC]">OrgOffice Overview</h1>
          <p className="text-sm text-[#64748B] mt-1 max-w-lg">
            Welcome to your organization’s digital workspace — manage events,
            members, communication, and finances all in one place.
          </p>
        </div>

        <div className="mt-4 md:mt-0 flex items-center gap-3">
          <button
            className="
              px-4 py-2 bg-gradient-to-r from-[#165DFC] to-[#4EA8FF]
              text-white text-sm font-medium rounded-lg shadow-[0_2px_6px_rgba(22,93,252,0.25)]
              hover:shadow-[0_4px_10px_rgba(22,93,252,0.35)]
              hover:scale-[1.02] transition-all cursor-pointer
              flex items-center
            "
          >
            <TrendingUp className="w-4 h-4 mr-1" />
            Generate Summary
          </button>
          <button
            className="
              px-4 py-2 border border-[#E5E9F2]
              text-sm font-medium text-[#1E293B]
              rounded-lg hover:bg-[#F1F5FF]
              transition-all cursor-pointer flex items-center
            "
          >
            <Clock className="w-4 h-4 mr-1 text-[#165DFC]" />
            Last 7 Days
          </button>
        </div>
      </header>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="cursor-pointer">
          <QuickOverviewCard
            title="Registered Organizations"
            value={128}
            icon={<Building2 />}
            color="from-[#165DFC] to-[#4EA8FF]"
          />
        </div>
        <div className="cursor-pointer">
          <QuickOverviewCard
            title="Active Members"
            value={842}
            icon={<Users />}
            color="from-[#5C6BF0] to-[#A5B4FC]"
          />
        </div>
        <div className="cursor-pointer">
          <QuickOverviewCard
            title="Events Scheduled"
            value={22}
            icon={<Calendar />}
            color="from-[#FFB020] to-[#FFD580]"
          />
        </div>
        <div className="cursor-pointer">
          <QuickOverviewCard
            title="Documents Uploaded"
            value={356}
            icon={<FileText />}
            color="from-[#5C6BF0] to-[#A5B4FC]"
          />
        </div>
        <div className="cursor-pointer">
          <QuickOverviewCard
            title="Payments Processed"
            value="KES 92,000"
            icon={<Wallet />}
            color="from-[#34C759] to-[#6EE7B7]"
          />
        </div>
      </div>

      {/* CHARTS SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ACTIVITY CHART */}
        <div
          className="
            p-6 bg-white rounded-2xl border border-[#E5E9F2]
            shadow-[0_1px_4px_rgba(0,0,0,0.05)]
            hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]
            hover:scale-[1.01]
            transition-all cursor-pointer
          "
        >
          <h3 className="text-base font-semibold text-[#1E293B] mb-4">
            Active Member Growth
          </h3>
          <LineChart data={activityData} />
        </div>

        {/* EVENT ATTENDANCE PLACEHOLDER */}
        <div
          className="
            p-6 bg-white rounded-2xl border border-[#E5E9F2]
            shadow-[0_1px_4px_rgba(0,0,0,0.05)]
            flex flex-col items-start justify-center
            hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]
            hover:scale-[1.01] transition-all cursor-pointer
          "
        >
          <h3 className="text-base font-semibold text-[#1E293B] mb-4">
            Event Attendance Rate
          </h3>
          <div
            className="
              w-full h-48 flex items-center justify-center
              text-[#64748B] text-sm border border-dashed border-[#E5E9F2]
              rounded-xl bg-[#F9FBFF]
            "
          >
            <MessageSquare className="w-4 h-4 mr-2 text-[#5C6BF0]" />
            Chart visualization coming soon...
          </div>
        </div>
      </div>

      {/* RECENT ACTIVITY */}
      <div
        className="
          p-6 bg-white rounded-2xl border border-[#E5E9F2]
          shadow-[0_1px_4px_rgba(0,0,0,0.05)]
          hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]
          transition-all
        "
      >
        <h3 className="text-base font-semibold text-[#1E293B] mb-4">
          Recent Activities
        </h3>
        <ul className="divide-y divide-[#E5E9F2]">
          {recentActivities.map((activity, idx) => (
            <li
              key={idx}
              className="
                flex justify-between items-center py-3 text-sm text-[#1E293B]
                hover:bg-[#F9FBFF] px-2 rounded-lg cursor-pointer transition-all
              "
            >
              <span>{activity.message}</span>
              <span className="text-xs text-[#64748B]">{activity.time}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* FOOTER */}
      <footer className="text-center text-xs text-[#64748B] py-4 border-t border-[#E5E9F2]">
        © {new Date().getFullYear()} OrgOffice — Your Organization. Organized.
      </footer>
    </div>
  );
}
