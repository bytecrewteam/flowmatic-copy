// ========================================
// FLOWMATIC MOCK DATA
// ========================================

import type {
  Project,
  Automation,
  BlogPost,
  TeamMember,
  BillingInfo,
  Invoice,
  PaymentMethod,
  DashboardStats,
  ChartDataPoint,
  WorkflowRun,
  ScheduledRun,
  ActivityItem,
  PricingPlan,
} from '@/types';

// Dashboard Stats
export const dashboardStats: DashboardStats = {
  tasksAutomatedToday: 1247,
  tasksAutomatedChange: 14,
  activeWorkflows: 38,
  workflowsNewThisWeek: 2,
  timeSavedThisWeek: 6.4,
  timeSavedChange: 0.8,
  errorsToday: 2,
  errorsChange: -83,
};

// Chart Data - Tasks automated per day (14 days)
export const tasksPerDay: ChartDataPoint[] = [
  { date: '2026-02-09', value: 890 },
  { date: '2026-02-10', value: 920 },
  { date: '2026-02-11', value: 850 },
  { date: '2026-02-12', value: 980 },
  { date: '2026-02-13', value: 1020 },
  { date: '2026-02-14', value: 890 },
  { date: '2026-02-15', value: 450 },
  { date: '2026-02-16', value: 520 },
  { date: '2026-02-17', value: 1050 },
  { date: '2026-02-18', value: 1100 },
  { date: '2026-02-19', value: 1150 },
  { date: '2026-02-20', value: 1080 },
  { date: '2026-02-21', value: 1200 },
  { date: '2026-02-22', value: 1247 },
];

// Chart Data - 30 days
export const tasksPerDay30Days: ChartDataPoint[] = [
  { date: '2026-01-24', value: 780 },
  { date: '2026-01-25', value: 820 },
  { date: '2026-01-26', value: 650 },
  { date: '2026-01-27', value: 690 },
  { date: '2026-01-28', value: 720 },
  { date: '2026-01-29', value: 750 },
  { date: '2026-01-30', value: 380 },
  { date: '2026-01-31', value: 420 },
  { date: '2026-02-01', value: 800 },
  { date: '2026-02-02', value: 850 },
  { date: '2026-02-03', value: 870 },
  { date: '2026-02-04', value: 910 },
  { date: '2026-02-05', value: 890 },
  { date: '2026-02-06', value: 920 },
  { date: '2026-02-07', value: 950 },
  { date: '2026-02-08', value: 890 },
  { date: '2026-02-09', value: 920 },
  { date: '2026-02-10', value: 980 },
  { date: '2026-02-11', value: 850 },
  { date: '2026-02-12', value: 920 },
  { date: '2026-02-13', value: 1020 },
  { date: '2026-02-14', value: 890 },
  { date: '2026-02-15', value: 450 },
  { date: '2026-02-16', value: 520 },
  { date: '2026-02-17', value: 1050 },
  { date: '2026-02-18', value: 1100 },
  { date: '2026-02-19', value: 1150 },
  { date: '2026-02-20', value: 1080 },
  { date: '2026-02-21', value: 1200 },
  { date: '2026-02-22', value: 1247 },
];

// Top workflows by runs
export const topWorkflowsByRuns = [
  { name: 'Customer Onboarding Pipeline', runs: 4520 },
  { name: 'Lead Qualification Bot', runs: 3890 },
  { name: 'Monthly Reporting Suite', runs: 2150 },
  { name: 'Invoice Auto-Send', runs: 1890 },
  { name: 'HR Document Processor', runs: 1450 },
];

// Runs by day of week
export const runsByDayOfWeek = [
  { day: 'Mon', value: 2450 },
  { day: 'Tue', value: 2380 },
  { day: 'Wed', value: 1890 },
  { day: 'Thu', value: 1750 },
  { day: 'Fri', value: 1620 },
  { day: 'Sat', value: 580 },
  { day: 'Sun', value: 420 },
];

// Runs by trigger type
export const runsByTrigger = [
  { name: 'Schedule', value: 55 },
  { name: 'Webhook', value: 25 },
  { name: 'Manual', value: 12 },
  { name: 'App Event', value: 8 },
];

// Recent Activity
export const recentActivity: WorkflowRun[] = [
  {
    id: '1',
    workflowName: 'Customer Onboarding Pipeline',
    status: 'success',
    trigger: 'Schedule',
    timestamp: '2026-02-23T10:30:00Z',
  },
  {
    id: '2',
    workflowName: 'Lead Qualification Bot',
    status: 'success',
    trigger: 'App Event',
    timestamp: '2026-02-23T10:15:00Z',
  },
  {
    id: '3',
    workflowName: 'Invoice Auto-Send',
    status: 'failed',
    trigger: 'Schedule',
    timestamp: '2026-02-23T09:00:00Z',
  },
  {
    id: '4',
    workflowName: 'Monthly Reporting Suite',
    status: 'success',
    trigger: 'Schedule',
    timestamp: '2026-02-22T14:00:00Z',
  },
  {
    id: '5',
    workflowName: 'HR Document Processor',
    status: 'success',
    trigger: 'Webhook',
    timestamp: '2026-02-22T11:30:00Z',
  },
  {
    id: '6',
    workflowName: 'Social Media Scheduler',
    status: 'success',
    trigger: 'Schedule',
    timestamp: '2026-02-22T08:00:00Z',
  },
  {
    id: '7',
    workflowName: 'Customer Onboarding Pipeline',
    status: 'success',
    trigger: 'Manual',
    timestamp: '2026-02-21T16:45:00Z',
  },
  {
    id: '8',
    workflowName: 'Lead Qualification Bot',
    status: 'success',
    trigger: 'Schedule',
    timestamp: '2026-02-21T14:20:00Z',
  },
];

// Upcoming scheduled runs
export const upcomingScheduledRuns: ScheduledRun[] = [
  {
    id: '1',
    workflowName: 'Customer Onboarding Pipeline',
    nextRun: '2026-02-23T14:00:00Z',
    schedule: 'Every 4 hours',
  },
  {
    id: '2',
    workflowName: 'Monthly Reporting Suite',
    nextRun: '2026-02-28T09:00:00Z',
    schedule: 'Monthly on the 28th',
  },
  {
    id: '3',
    workflowName: 'Invoice Auto-Send',
    nextRun: '2026-02-24T09:00:00Z',
    schedule: 'Daily at 9 AM',
  },
  {
    id: '4',
    workflowName: 'Social Media Scheduler',
    nextRun: '2026-02-23T12:00:00Z',
    schedule: 'Every 6 hours',
  },
  {
    id: '5',
    workflowName: 'HR Document Processor',
    nextRun: '2026-02-24T10:00:00Z',
    schedule: 'Weekdays at 10 AM',
  },
];

// Projects
export const projects: Project[] = [
  {
    id: '1',
    name: 'Customer Onboarding Pipeline',
    description: 'Automate new customer setup, account creation, and welcome sequences.',
    status: 'active',
    workflowCount: 12,
    lastRun: '2026-02-23T10:30:00Z',
    progress: 78,
    createdAt: '2025-08-15T10:00:00Z',
    updatedAt: '2026-02-23T10:30:00Z',
  },
  {
    id: '2',
    name: 'Monthly Reporting Suite',
    description: 'Automated reports generation and distribution for stakeholders.',
    status: 'active',
    workflowCount: 7,
    lastRun: '2026-02-21T14:00:00Z',
    progress: 100,
    createdAt: '2025-09-01T10:00:00Z',
    updatedAt: '2026-02-21T14:00:00Z',
  },
  {
    id: '3',
    name: 'Lead Qualification Bot',
    description: 'Score and qualify leads based on engagement and demographics.',
    status: 'active',
    workflowCount: 5,
    lastRun: '2026-02-23T10:15:00Z',
    progress: 60,
    createdAt: '2025-10-20T10:00:00Z',
    updatedAt: '2026-02-23T10:15:00Z',
  },
  {
    id: '4',
    name: 'HR Document Processor',
    description: 'Process and organize employee documents automatically.',
    status: 'active',
    workflowCount: 3,
    lastRun: '2026-02-22T16:30:00Z',
    progress: 45,
    createdAt: '2025-11-05T10:00:00Z',
    updatedAt: '2026-02-22T16:30:00Z',
  },
  {
    id: '5',
    name: 'Invoice Auto-Send',
    description: 'Automate invoice generation and payment reminders.',
    status: 'active',
    workflowCount: 2,
    lastRun: '2026-02-22T09:00:00Z',
    progress: 90,
    createdAt: '2025-12-01T10:00:00Z',
    updatedAt: '2026-02-22T09:00:00Z',
  },
  {
    id: '6',
    name: 'Social Media Scheduler',
    description: 'Schedule and publish content across social platforms.',
    status: 'archived',
    workflowCount: 8,
    lastRun: '2026-02-20T12:00:00Z',
    progress: 100,
    createdAt: '2025-07-10T10:00:00Z',
    updatedAt: '2026-02-20T12:00:00Z',
  },
];

// Automations
export const automations: Automation[] = [
  {
    id: '1',
    name: 'Send Welcome Email',
    description: 'Send personalized welcome email when new customer is created.',
    projectId: '1',
    projectName: 'Customer Onboarding Pipeline',
    status: 'active',
    trigger: 'app_event',
    lastRun: '2026-02-23T10:30:00Z',
    runsToday: 23,
    avgDuration: 1.2,
    successRate: 99.5,
    createdAt: '2025-08-15T10:00:00Z',
  },
  {
    id: '2',
    name: 'Create Slack Channel',
    description: 'Automatically create a Slack channel for new customers.',
    projectId: '1',
    projectName: 'Customer Onboarding Pipeline',
    status: 'active',
    trigger: 'app_event',
    lastRun: '2026-02-23T10:30:00Z',
    runsToday: 23,
    avgDuration: 2.8,
    successRate: 98.2,
    createdAt: '2025-08-16T10:00:00Z',
  },
  {
    id: '3',
    name: 'Setup CRM Profile',
    description: 'Create and populate CRM contact profile from signup data.',
    projectId: '1',
    projectName: 'Customer Onboarding Pipeline',
    status: 'active',
    trigger: 'app_event',
    lastRun: '2026-02-23T10:30:00Z',
    runsToday: 23,
    avgDuration: 1.5,
    successRate: 99.8,
    createdAt: '2025-08-17T10:00:00Z',
  },
  {
    id: '4',
    name: 'Schedule Onboarding Call',
    description: 'Book a discovery call with new customer after signup.',
    projectId: '1',
    projectName: 'Customer Onboarding Pipeline',
    status: 'paused',
    trigger: 'schedule',
    lastRun: '2026-02-20T14:00:00Z',
    runsToday: 0,
    avgDuration: 3.2,
    successRate: 97.5,
    createdAt: '2025-08-18T10:00:00Z',
  },
  {
    id: '5',
    name: 'Send Monthly Report',
    description: 'Generate and email monthly performance report.',
    projectId: '2',
    projectName: 'Monthly Reporting Suite',
    status: 'active',
    trigger: 'schedule',
    lastRun: '2026-02-21T14:00:00Z',
    runsToday: 0,
    avgDuration: 45.6,
    successRate: 100,
    createdAt: '2025-09-01T10:00:00Z',
  },
  {
    id: '6',
    name: 'Score Lead Engagement',
    description: 'Calculate and update lead score based on website activity.',
    projectId: '3',
    projectName: 'Lead Qualification Bot',
    status: 'active',
    trigger: 'app_event',
    lastRun: '2026-02-23T10:15:00Z',
    runsToday: 156,
    avgDuration: 0.8,
    successRate: 99.9,
    createdAt: '2025-10-20T10:00:00Z',
  },
  {
    id: '7',
    name: 'Route High-Value Leads',
    description: 'Route leads with score > 80 to sales team.',
    projectId: '3',
    projectName: 'Lead Qualification Bot',
    status: 'active',
    trigger: 'app_event',
    lastRun: '2026-02-23T10:15:00Z',
    runsToday: 42,
    avgDuration: 1.1,
    successRate: 98.7,
    createdAt: '2025-10-21T10:00:00Z',
  },
  {
    id: '8',
    name: 'Process Invoice',
    description: 'Generate and send invoice to customer.',
    projectId: '5',
    projectName: 'Invoice Auto-Send',
    status: 'failed',
    trigger: 'schedule',
    lastRun: '2026-02-23T09:00:00Z',
    runsToday: 0,
    avgDuration: 4.5,
    successRate: 85.0,
    createdAt: '2025-12-01T10:00:00Z',
  },
  {
    id: '9',
    name: 'Send Payment Reminder',
    description: 'Send reminder for unpaid invoices after 7 days.',
    projectId: '5',
    projectName: 'Invoice Auto-Send',
    status: 'active',
    trigger: 'schedule',
    lastRun: '2026-02-22T09:00:00Z',
    runsToday: 0,
    avgDuration: 2.1,
    successRate: 96.5,
    createdAt: '2025-12-02T10:00:00Z',
  },
  {
    id: '10',
    name: 'Process HR Documents',
    description: 'Extract and organize employee submitted documents.',
    projectId: '4',
    projectName: 'HR Document Processor',
    status: 'active',
    trigger: 'webhook',
    lastRun: '2026-02-22T16:30:00Z',
    runsToday: 8,
    avgDuration: 5.2,
    successRate: 94.2,
    createdAt: '2025-11-05T10:00:00Z',
  },
];

// Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: '10-workflow-automations-every-operations-team-should-set-up-this-quarter',
    title: '10 Workflow Automations Every Operations Team Should Set Up This Quarter',
    excerpt: 'Streamline your operations with these battle-tested automation workflows that save time and reduce errors.',
    content: `
Automation isn't just about saving time—it's about freeing your team to focus on work that actually matters. After analyzing thousands of workflows across our customer base, we've identified the automations that deliver the biggest impact for operations teams.

## 1. New Employee Onboarding Pipeline

The first 30 days set the tone for any new hire. Automate document collection, account provisioning, and training assignments so your HR team can focus on the human side of onboarding.

## 2. Invoice Processing

Manual invoice processing is a time sink. With the right workflow, you can automatically extract data, match against purchase orders, and route for approval—all without touching a single document.

## 3. Customer Feedback Collection

Understanding your customers requires consistent feedback collection. Automate NPS surveys, support ticket follow-ups, and product feedback requests to build a comprehensive view of customer sentiment.

## 4. Inventory Alerts

Nothing kills productivity like unexpected stockouts. Set up workflows that monitor inventory levels and alert the right team members before products run dry.

## 5. Compliance Documentation

Regulatory requirements don't sleep. Automate document retention, access logs, and compliance reporting to stay audit-ready without the last-minute scramble.

## 6. Meeting Scheduling

The average professional spends 4.5 hours per week on scheduling. Automate meeting requests, calendar invites, and follow-up reminders to reclaim that time.

## 7. Performance Reporting

Weekly and monthly reports shouldn't require hours of manual data gathering. Build workflows that aggregate metrics, generate visualizations, and distribute reports automatically.

## 8. Lead Routing

Get the right leads to the right people at the right time. Automate lead scoring, qualification, and routing to ensure no opportunity slips through the cracks.

## 9. Support Ticket Triage

Not every ticket needs the same urgency. Automate categorization, priority assignment, and routing to ensure critical issues get immediate attention.

## 10. Document Approval Chains

Manual approvals create bottlenecks. Build automated workflows that route documents through the correct approval chain based on type, value, or department.

## Getting Started

The best time to start was yesterday. The second best time is today. Begin with one workflow that addresses your most painful bottleneck, measure the impact, and iterate from there.
    `,
    author: { name: 'Aisha Kamara' },
    category: 'Automation',
    readTime: 7,
    publishedAt: '2026-02-10T10:00:00Z',
    featured: true,
  },
  {
    id: '2',
    slug: 'why-no-code-doesnt-mean-no-strategy',
    title: "Why 'No-Code' Doesn't Mean 'No Strategy'",
    excerpt: 'Building workflows without code still requires planning, logic, and intentional design.',
    author: { name: 'Marcus Chen' },
    category: 'Productivity',
    readTime: 5,
    publishedAt: '2026-02-08T10:00:00Z',
  },
  {
    id: '3',
    slug: 'how-nexora-saved-14-hours-per-week-with-flowmatic',
    title: 'How Nexora Saved 14 Hours Per Week With Flowmatic',
    excerpt: 'A deep dive into how one team transformed their operations with strategic automation.',
    author: { name: 'Sarah K.' },
    category: 'Case Studies',
    readTime: 4,
    publishedAt: '2026-02-05T10:00:00Z',
  },
  {
    id: '4',
    slug: 'hidden-cost-of-manual-data-entry',
    title: 'The Hidden Cost of Manual Data Entry (And How to Stop It)',
    excerpt: 'Manual data entry is silently draining your team productivity. Here\'s the math.',
    author: { name: 'David Park' },
    category: 'Automation',
    readTime: 6,
    publishedAt: '2026-02-03T10:00:00Z',
  },
  {
    id: '5',
    slug: 'flowmatic-3-0-ai-suggestions',
    title: 'Flowmatic 3.0: AI Suggestions, New Integrations, and More',
    excerpt: 'Our biggest release yet brings intelligent automation recommendations to every user.',
    author: { name: 'Product Team' },
    category: 'Product Updates',
    readTime: 3,
    publishedAt: '2026-01-28T10:00:00Z',
  },
  {
    id: '6',
    slug: 'building-a-team-culture-around-automation',
    title: 'Building a Team Culture Around Automation',
    excerpt: 'Automation tools are only as good as the culture that uses them. Here\'s how to foster adoption.',
    author: { name: 'Priya Mehta' },
    category: 'Leadership',
    readTime: 8,
    publishedAt: '2026-01-25T10:00:00Z',
  },
  {
    id: '7',
    slug: 'zapier-vs-flowmatic',
    title: 'Zapier vs Flowmatic: Which Is Right for Your Team?',
    excerpt: 'A detailed comparison of two popular automation platforms to help you make the right choice.',
    author: { name: 'James O.' },
    category: 'Comparison',
    readTime: 10,
    publishedAt: '2026-01-20T10:00:00Z',
  },
];

// Blog Post Categories
export const blogCategories = [
  'All',
  'Automation',
  'Productivity',
  'Product Updates',
  'Case Studies',
  'Leadership',
  'Comparison',
];

// Team Members
export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    email: 'alex@nexora.io',
    role: 'owner',
    joinedAt: '2025-06-15T10:00:00Z',
  },
  {
    id: '2',
    name: 'Layla Hassan',
    email: 'layla@nexora.io',
    role: 'admin',
    joinedAt: '2025-08-20T10:00:00Z',
  },
  {
    id: '3',
    name: 'Omar Sheikh',
    email: 'omar@nexora.io',
    role: 'member',
    joinedAt: '2025-10-05T10:00:00Z',
  },
  {
    id: '4',
    name: 'Priya Mehta',
    email: 'priya@nexora.io',
    role: 'viewer',
    joinedAt: '2025-12-01T10:00:00Z',
  },
];

// Billing Info
export const billingInfo: BillingInfo = {
  plan: 'pro',
  billingCycle: 'monthly',
  nextBillingDate: '2026-03-15T10:00:00Z',
  amount: 29,
};

// Payment Method
export const paymentMethod: PaymentMethod = {
  id: '1',
  type: 'visa',
  last4: '4242',
  expiryMonth: 12,
  expiryYear: 2027,
};

// Invoices
export const invoices: Invoice[] = [
  {
    id: '1',
    date: '2026-02-15T10:00:00Z',
    amount: 29,
    status: 'paid',
    downloadUrl: '#',
  },
  {
    id: '2',
    date: '2026-01-15T10:00:00Z',
    amount: 29,
    status: 'paid',
    downloadUrl: '#',
  },
  {
    id: '3',
    date: '2025-12-15T10:00:00Z',
    amount: 29,
    status: 'paid',
    downloadUrl: '#',
  },
];

// Pricing Plans
export const pricingPlans: PricingPlan[] = [
  {
    name: 'Free',
    tier: 'free',
    price: 0,
    features: [
      '5 active workflows',
      '1,000 tasks/month',
      '3 integrations',
      'Community support',
      'Basic analytics',
    ],
    cta: 'Get started',
    limitations: {
      workflows: 5,
      tasks: 1000,
      integrations: 3,
      seats: 1,
    },
  },
  {
    name: 'Pro',
    tier: 'pro',
    price: 29,
    annualPrice: 23,
    features: [
      'Unlimited workflows',
      '50,000 tasks/month',
      '2,000+ integrations',
      'Priority support',
      'AI suggestions',
      'Advanced analytics',
      'Team collaboration (up to 10 seats)',
      'Custom webhooks',
    ],
    popular: true,
    cta: 'Start free trial',
    limitations: {
      workflows: 'unlimited',
      tasks: 50000,
      integrations: 'unlimited',
      seats: 10,
    },
  },
  {
    name: 'Enterprise',
    tier: 'enterprise',
    price: 0,
    features: [
      'Everything in Pro',
      'Unlimited tasks',
      'Unlimited seats',
      'SSO & SAML',
      'Custom contracts',
      'Dedicated CSM',
      'SLA guarantee',
      'On-premise options',
    ],
    cta: 'Talk to sales',
    limitations: {
      workflows: 'unlimited',
      tasks: 'unlimited',
      integrations: 'unlimited',
      seats: 'unlimited',
    },
  },
];

// Activity Timeline
export const activityTimeline: ActivityItem[] = [
  {
    id: '1',
    type: 'success',
    title: 'Workflow completed',
    description: 'Customer Onboarding Pipeline ran successfully - 234 tasks processed',
    timestamp: '2026-02-23T10:30:00Z',
  },
  {
    id: '2',
    type: 'success',
    title: 'Workflow completed',
    description: 'Lead Qualification Bot processed 156 leads',
    timestamp: '2026-02-23T10:15:00Z',
  },
  {
    id: '3',
    type: 'failed',
    title: 'Workflow failed',
    description: 'Invoice Auto-Send - Gmail connection error',
    timestamp: '2026-02-23T09:00:00Z',
  },
  {
    id: '4',
    type: 'success',
    title: 'Workflow completed',
    description: 'Monthly Reporting Suite generated February report',
    timestamp: '2026-02-21T14:00:00Z',
  },
  {
    id: '5',
    type: 'success',
    title: 'Workflow completed',
    description: 'HR Document Processor processed 8 documents',
    timestamp: '2026-02-22T16:30:00Z',
  },
  {
    id: '6',
    type: 'info',
    title: 'Automation created',
    description: 'New automation "Send Follow-up Email" added to Customer Onboarding',
    timestamp: '2026-02-20T11:00:00Z',
  },
  {
    id: '7',
    type: 'warning',
    title: 'Automation paused',
    description: 'Schedule Onboarding Call was paused by user',
    timestamp: '2026-02-20T14:00:00Z',
  },
  {
    id: '8',
    type: 'user',
    title: 'Team member added',
    description: 'Priya Mehta was invited to the workspace',
    timestamp: '2026-02-19T10:00:00Z',
  },
  {
    id: '9',
    type: 'success',
    title: 'Workflow completed',
    description: 'Social Media Scheduler posted to 3 platforms',
    timestamp: '2026-02-20T12:00:00Z',
  },
  {
    id: '10',
    type: 'info',
    title: 'Project created',
    description: 'New project "Customer Onboarding Pipeline" was created',
    timestamp: '2025-08-15T10:00:00Z',
  },
];

// Company logos for social proof
export const companyLogos = [
  { name: 'Nexora', domain: 'nexora.io' },
  { name: 'Brightloop', domain: 'brightloop.io' },
  { name: 'Stackify', domain: 'stackify.com' },
  { name: 'Veltrix', domain: 'veltrix.io' },
  { name: 'Pulsed', domain: 'pulsed.io' },
];

// Features for landing page
export const features = [
  {
    icon: 'Workflow',
    title: 'Visual Workflow Builder',
    description: 'Drag, drop, and connect. Build complex automations in minutes with our no-code canvas.',
  },
  {
    icon: 'Zap',
    title: 'Smart Triggers',
    description: 'Set it and forget it. Trigger workflows based on time, events, or real-time data changes.',
  },
  {
    icon: 'Plug',
    title: '2,000+ Integrations',
    description: 'Connect Slack, Notion, HubSpot, Airtable, and thousands more in one click.',
  },
  {
    icon: 'Sparkles',
    title: 'AI Suggestions',
    description: "Flowmatic's AI detects repetitive patterns in your work and suggests automations before you think to ask.",
  },
  {
    icon: 'Users',
    title: 'Team Collaboration',
    description: 'Assign, comment, and track workflows across your entire team in real time.',
  },
  {
    icon: 'BarChart',
    title: 'Detailed Analytics',
    description: "See what's running, what failed, and what saved you the most time with live dashboards.",
  },
];

// Testimonials
export const testimonials = [
  {
    quote: "We cut our onboarding process from 4 hours to 20 minutes. Our HR team couldn't believe it.",
    name: 'Sarah K.',
    role: 'Head of People',
    company: 'Nexora',
  },
  {
    quote: "The AI suggestions feature is genuinely spooky. It suggested an automation we'd been manually doing for 8 months.",
    name: 'James O.',
    role: 'CTO',
    company: 'Brightloop',
  },
  {
    quote: "Finally, a tool that does what it promises. The ROI was visible in our first week.",
    name: 'Priya M.',
    role: 'Operations Lead',
    company: 'Stackify',
  },
];

// FAQ items
export const faqItems = [
  {
    question: 'Is there a free plan?',
    answer: 'Yes, free forever with up to 5 active workflows and 1,000 tasks/month.',
  },
  {
    question: 'Do I need to know how to code?',
    answer: 'Never. Flowmatic is 100% no-code.',
  },
  {
    question: 'How long does setup take?',
    answer: "Most teams are running their first automation within 15 minutes of signing up.",
  },
  {
    question: 'Can I connect my existing tools?',
    answer: 'Yes. We support 2,000+ integrations via native connectors and Zapier.',
  },
  {
    question: 'What happens if I exceed my plan limits?',
    answer: "You'll get notified before hitting limits and can upgrade or pause automations.",
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes. We\'re SOC 2 Type II certified and encrypt all data at rest and in transit.',
  },
];

// Pricing FAQ
export const pricingFaqItems = [
  {
    question: 'Can I change plans at any time?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and wire transfers for Enterprise plans.',
  },
  {
    question: 'Is there a refund policy?',
    answer: 'We offer a 14-day money-back guarantee for all paid plans.',
  },
  {
    question: 'What happens to my data if I cancel?',
    answer: 'Your data remains accessible for 30 days after cancellation. You can export it anytime.',
  },
];

// ========================================
// HELPER FUNCTIONS
// ========================================

export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return 'Just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} min ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 172800) return 'Yesterday';
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`;
  
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num);
}

export function formatPercentage(num: number): string {
  return `${num > 0 ? '+' : ''}${num}%`;
}
