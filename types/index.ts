// ========================================
// FLOWMATIC TYPE DEFINITIONS
// ========================================

// User & Auth Types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: UserRole;
  createdAt: string;
}

export type UserRole = 'owner' | 'admin' | 'member' | 'viewer';

// Project Types
export interface Project {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  workflowCount: number;
  lastRun: string;
  progress: number;
  createdAt: string;
  updatedAt: string;
}

export type ProjectStatus = 'active' | 'archived';

// Automation Types
export interface Automation {
  id: string;
  name: string;
  description: string;
  projectId: string;
  projectName: string;
  status: AutomationStatus;
  trigger: TriggerType;
  lastRun: string;
  runsToday: number;
  avgDuration: number;
  successRate: number;
  createdAt: string;
}

export type AutomationStatus = 'active' | 'paused' | 'failed';
export type TriggerType = 'schedule' | 'webhook' | 'manual' | 'app_event';

// Notification Types
export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

export type NotificationType = 'success' | 'error' | 'warning' | 'info' | 'user';

// Blog Types
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  author: Author;
  category: BlogCategory;
  readTime: number;
  publishedAt: string;
  featured?: boolean;
}

export interface Author {
  name: string;
  avatar?: string;
}

export type BlogCategory = 'Automation' | 'Productivity' | 'Product Updates' | 'Case Studies' | 'Leadership' | 'Comparison';

// Team Types
export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: TeamRole;
  avatar?: string;
  joinedAt: string;
}

export type TeamRole = 'owner' | 'admin' | 'member' | 'viewer';

// Billing Types
export interface BillingInfo {
  plan: PlanTier;
  billingCycle: 'monthly' | 'annual';
  nextBillingDate: string;
  amount: number;
}

export type PlanTier = 'free' | 'pro' | 'enterprise';

export interface Invoice {
  id: string;
  date: string;
  amount: number;
  status: 'paid' | 'pending' | 'failed';
  downloadUrl: string;
}

export interface PaymentMethod {
  id: string;
  type: 'visa' | 'mastercard' | 'amex';
  last4: string;
  expiryMonth: number;
  expiryYear: number;
}

// Dashboard Types
export interface DashboardStats {
  tasksAutomatedToday: number;
  tasksAutomatedChange: number;
  activeWorkflows: number;
  workflowsNewThisWeek: number;
  timeSavedThisWeek: number;
  timeSavedChange: number;
  errorsToday: number;
  errorsChange: number;
}

export interface ChartDataPoint {
  date: string;
  value: number;
  label?: string;
}

export interface WorkflowRun {
  id: string;
  workflowName: string;
  status: 'success' | 'failed';
  trigger: string;
  timestamp: string;
}

export interface ScheduledRun {
  id: string;
  workflowName: string;
  nextRun: string;
  schedule: string;
}

// Activity Types
export interface ActivityItem {
  id: string;
  type: ActivityType;
  title: string;
  description: string;
  timestamp: string;
  icon?: string;
}

export type ActivityType = 'success' | 'failed' | 'info' | 'warning' | 'user';

// UI Component Types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export interface InputProps {
  label?: string;
  error?: string;
  disabled?: boolean;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export interface BadgeProps {
  variant?: 'success' | 'warning' | 'error' | 'info' | 'neutral';
  dot?: boolean;
  children: React.ReactNode;
  className?: string;
}

export interface CardProps {
  hover?: boolean;
  children: React.ReactNode;
  className?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export interface ToastProps {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  duration?: number;
}

export interface SkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  className?: string;
}

// Settings Types
export interface ProfileSettings {
  fullName: string;
  displayName: string;
  email: string;
  jobTitle: string;
  bio: string;
}

// Pricing Types
export interface PricingPlan {
  name: string;
  tier: PlanTier;
  price: number;
  annualPrice?: number;
  features: string[];
  popular?: boolean;
  cta: string;
  limitations: {
    workflows: number | 'unlimited';
    tasks: number | 'unlimited';
    integrations: number | 'unlimited';
    seats: number | 'unlimited';
  };
}

// Filter & Sort Types
export interface FilterOption {
  value: string;
  label: string;
}

export interface SortOption {
  value: string;
  label: string;
}

// Table Types
export interface TableColumn<T> {
  key: keyof T | string;
  header: string;
  render?: (item: T) => React.ReactNode;
  sortable?: boolean;
  className?: string;
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  badge?: number;
}

// Command Palette Types
export interface CommandItem {
  id: string;
  label: string;
  category: string;
  action: () => void;
  icon?: React.ReactNode;
}
