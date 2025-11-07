"use client";

import {
  Home,
  Users,
  User,
  ClipboardList,
  Folder,
  MessageSquare,
  PieChart,
  Settings,
  Calendar,
  DollarSign,
  Send,
  FileText,
  Zap,
  CreditCard,
  Bell,
  Clock,
  ShieldCheck,
  FilePlus,
  Clipboard,
  Tag,
  BookOpen,
  Archive,
  Grid,
  Database,
  Globe,
  Hash,
  Wallet,
} from "lucide-react";

export interface SubItem {
  name: string;
  href: string;
}

export interface MenuItem {
  name: string;
  icon: React.ElementType;
  href: string;
  subItems?: SubItem[];
}

export interface MenuGroup {
  group: string;
  items: MenuItem[];
}

/**
 * Expanded, purpose-driven menu for OrgOffice
 * - covers org onboarding, events, docs, comms (bulk SMS + WhatsApp), payments, reports, integrations & admin
 */
export const menuGroups: MenuGroup[] = [
  {
    group: "General",
    items: [
      { name: "Overview", icon: Home, href: "/dashboard" },
      {
        name: "Quick Tasks",
        icon: Grid,
        href: "/dashboard/quick-tasks",
        subItems: [
          { name: "Create Event", href: "/dashboard/events/add" },
          { name: "Send SMS", href: "/dashboard/sms/send" },
          { name: "New Document", href: "/dashboard/documents/new" },
        ],
      },
    ],
  },

  {
    group: "Organization Management",
    items: [
      {
        name: "Organizations",
        icon: Folder,
        href: "/dashboard/organizations",
        subItems: [
          { name: "All Organizations", href: "/dashboard/organizations/all" },
          { name: "Add Organization", href: "/dashboard/organizations/add" },
          { name: "Organization Settings", href: "/dashboard/organizations/settings" },
          { name: "Organization Usage", href: "/dashboard/organizations/usage" },
        ],
      },
      {
        name: "Members & Teams",
        icon: Users,
        href: "/dashboard/members",
        subItems: [
          { name: "All Members", href: "/dashboard/members/all" },
          { name: "Invite Member", href: "/dashboard/members/invite" },
          { name: "Teams / Groups", href: "/dashboard/members/teams" },
          { name: "Attendance", href: "/dashboard/members/attendance" },
        ],
      },
      {
        name: "Roles & Permissions",
        icon: User,
        href: "/dashboard/roles",
        subItems: [
          { name: "All Roles", href: "/dashboard/roles/all" },
          { name: "Create Role", href: "/dashboard/roles/create" },
          { name: "Permission Matrix", href: "/dashboard/roles/matrix" },
        ],
      },
      {
        name: "Departments",
        icon: ClipboardList,
        href: "/dashboard/departments",
        subItems: [
          { name: "All Departments", href: "/dashboard/departments/all" },
          { name: "Add Department", href: "/dashboard/departments/add" },
        ],
      },
    ],
  },

  {
    group: "Projects & Events",
    items: [
      {
        name: "Project & Task Center",
        icon: Clipboard,
        href: "/dashboard/projects",
        subItems: [
          { name: "Active Projects", href: "/dashboard/projects/active" },
          { name: "Kanban Board", href: "/dashboard/projects/kanban" },
          { name: "Archived", href: "/dashboard/projects/archived" },
        ],
      },
      {
        name: "Events",
        icon: Calendar,
        href: "/dashboard/events",
        subItems: [
          { name: "All Events", href: "/dashboard/events/all" },
          { name: "Add Event", href: "/dashboard/events/add" },
          { name: "Registrations", href: "/dashboard/events/registrations" },
          { name: "Attendance", href: "/dashboard/events/attendance" },
          { name: "Integrations (Zoom/Meet)", href: "/dashboard/events/integrations" },
        ],
      },
      {
        name: "Scheduler",
        icon: Clock,
        href: "/dashboard/scheduler",
        subItems: [
          { name: "Calendar View", href: "/dashboard/scheduler/calendar" },
          { name: "Automations", href: "/dashboard/scheduler/automations" },
        ],
      },
    ],
  },

  {
    group: "Documents & Records",
    items: [
      {
        name: "Documents",
        icon: FileText,
        href: "/dashboard/documents",
        subItems: [
          { name: "All Documents", href: "/dashboard/documents/all" },
          { name: "Upload Document", href: "/dashboard/documents/upload" },
          { name: "Templates", href: "/dashboard/documents/templates" },
          { name: "Retention / Archive", href: "/dashboard/documents/archive" },
        ],
      },
      {
        name: "File Storage",
        icon: Database,
        href: "/dashboard/storage",
        subItems: [
          { name: "Storage Usage", href: "/dashboard/storage/usage" },
          { name: "Manage Buckets", href: "/dashboard/storage/buckets" },
        ],
      },
    ],
  },

  {
    group: "Communication",
    items: [
      {
        name: "Communication Hub",
        icon: MessageSquare,
        href: "/dashboard/communication",
        subItems: [
          { name: "Inbox", href: "/dashboard/communication/inbox" },
          { name: "Announcements", href: "/dashboard/communication/announcements" },
          { name: "Channels", href: "/dashboard/communication/channels" },
        ],
      },

      {
        name: "Bulk SMS",
        icon: Send,
        href: "/dashboard/sms",
        subItems: [
          { name: "Compose / Send", href: "/dashboard/sms/send" },
          { name: "Campaigns", href: "/dashboard/sms/campaigns" },
          { name: "Contacts & Groups", href: "/dashboard/sms/contacts" },
          { name: "SMS Credits & Billing", href: "/dashboard/sms/credits" },
          { name: "Delivery Reports", href: "/dashboard/sms/reports" },
          { name: "Templates", href: "/dashboard/sms/templates" },
        ],
      },

      {
        name: "WhatsApp",
        icon: Globe,
        href: "/dashboard/whatsapp",
        subItems: [
          { name: "Templates", href: "/dashboard/whatsapp/templates" },
          { name: "Broadcasts", href: "/dashboard/whatsapp/broadcasts" },
          { name: "Two-way Chat", href: "/dashboard/whatsapp/chat" },
          { name: "Delivery Reports", href: "/dashboard/whatsapp/reports" },
        ],
      },

      {
        name: "Notifications",
        icon: Bell,
        href: "/dashboard/notifications",
        subItems: [
          { name: "Push / Email", href: "/dashboard/notifications/email" },
          { name: "Notification Templates", href: "/dashboard/notifications/templates" },
        ],
      },
    ],
  },

  {
    group: "Finance & Payments",
    items: [
      {
        name: "Payments & Dues",
        icon: DollarSign,
        href: "/dashboard/payments",
        subItems: [
          { name: "All Payments", href: "/dashboard/payments/all" },
          { name: "Invoices", href: "/dashboard/payments/invoices" },
          { name: "Subscriptions", href: "/dashboard/payments/subscriptions" },
          { name: "M-Pesa (STK Push)", href: "/dashboard/payments/mpesa" },
          { name: "Manual Payments", href: "/dashboard/payments/manual" },
          { name: "Payment Reports", href: "/dashboard/payments/reports" },
        ],
      },
      {
        name: "Billing & Plans",
        icon: CreditCard,
        href: "/dashboard/billing",
        subItems: [
          { name: "Plans", href: "/dashboard/billing/plans" },
          { name: "Invoices & Billing History", href: "/dashboard/billing/invoices" },
          { name: "Usage & Quotas", href: "/dashboard/billing/usage" },
        ],
      },
    ],
  },

  {
    group: "Donor / CRM",
    items: [
      {
        name: "Donors & Contacts",
        icon: Tag,
        href: "/dashboard/donors",
        subItems: [
          { name: "All Contacts", href: "/dashboard/donors/all" },
          { name: "Create Contact", href: "/dashboard/donors/create" },
          { name: "Segments", href: "/dashboard/donors/segments" },
        ],
      },
      {
        name: "Contributions",
        icon: Wallet,
        href: "/dashboard/contributions",
        subItems: [
          { name: "All Contributions", href: "/dashboard/contributions/all" },
          { name: "Pledges", href: "/dashboard/contributions/pledges" },
        ],
      },
    ],
  },

  {
    group: "Reports & Analytics",
    items: [
      {
        name: "Reports & Analytics",
        icon: PieChart,
        href: "/dashboard/reports",
        subItems: [
          { name: "Activity Dashboard", href: "/dashboard/reports/activity" },
          { name: "Financial Reports", href: "/dashboard/reports/financial" },
          { name: "SMS / Comm Reports", href: "/dashboard/reports/communication" },
          { name: "Export Data", href: "/dashboard/reports/export" },
        ],
      },
      {
        name: "System Logs & Audit",
        icon: Archive,
        href: "/dashboard/audit",
        subItems: [
          { name: "Audit Logs", href: "/dashboard/audit/logs" },
          { name: "Access History", href: "/dashboard/audit/access" },
        ],
      },
    ],
  },

  {
    group: "Integrations",
    items: [
      {
        name: "Integrations",
        icon: Zap,
        href: "/dashboard/integrations",
        subItems: [
          { name: "Zoom / Meetings", href: "/dashboard/integrations/zoom" },
          { name: "Google (Calendar / Drive)", href: "/dashboard/integrations/google" },
          { name: "WhatsApp Cloud API", href: "/dashboard/integrations/whatsapp" },
          { name: "Custom API Keys", href: "/dashboard/integrations/api-keys" },
        ],
      },
      {
        name: "Third-party Connectors",
        icon: Globe,
        href: "/dashboard/integrations/connectors",
        subItems: [
          { name: "SFTP / Storage", href: "/dashboard/integrations/storage" },
          { name: "Payment Gateways", href: "/dashboard/integrations/payments" },
        ],
      },
    ],
  },

  {
    group: "Admin & Settings",
    items: [
      {
        name: "Platform Settings",
        icon: Settings,
        href: "/dashboard/settings",
        subItems: [
          { name: "Profile", href: "/dashboard/settings/profile" },
          { name: "Platform Settings", href: "/dashboard/settings/platform" },
          { name: "Security & SSO", href: "/dashboard/settings/security" },
          { name: "API Keys & Webhooks", href: "/dashboard/settings/api-keys" },
          { name: "Billing & Team", href: "/dashboard/settings/billing" },
        ],
      },
      {
        name: "Admin Console",
        icon: ShieldCheck,
        href: "/dashboard/admin",
        subItems: [
          { name: "Users & Admins", href: "/dashboard/admin/users" },
          { name: "Permissions", href: "/dashboard/admin/permissions" },
          { name: "Platform Usage", href: "/dashboard/admin/usage" },
        ],
      },
    ],
  },

  {
    group: "Help & Resources",
    items: [
      {
        name: "Knowledge Base",
        icon: BookOpen,
        href: "/dashboard/help/docs",
        subItems: [
          { name: "Getting Started", href: "/dashboard/help/getting-started" },
          { name: "SMS & Payments Guides", href: "/dashboard/help/sms-payments" },
          { name: "API Docs", href: "/dashboard/help/api" },
        ],
      },
      {
        name: "Support",
        icon: FilePlus,
        href: "/dashboard/help/support",
        subItems: [
          { name: "Open Ticket", href: "/dashboard/help/support/new" },
          { name: "My Tickets", href: "/dashboard/help/support/list" },
        ],
      },
    ],
  },
];
