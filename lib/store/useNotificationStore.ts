import { create } from 'zustand';
import type { Notification } from '@/types';

interface NotificationState {
  notifications: Notification[];
  unreadCount: number;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  addNotification: (notification: Omit<Notification, 'id' | 'createdAt'>) => void;
}

const initialNotifications: Notification[] = [
  {
    id: '1',
    type: 'success',
    title: 'Customer Onboarding Pipeline ran successfully',
    message: '234 tasks processed',
    isRead: false,
    createdAt: '2026-02-23T10:30:00Z',
  },
  {
    id: '2',
    type: 'error',
    title: 'Invoice Auto-Send failed',
    message: 'Check your Gmail connection',
    isRead: false,
    createdAt: '2026-02-23T09:00:00Z',
  },
  {
    id: '3',
    type: 'warning',
    title: "You're approaching your monthly task limit",
    message: '82% used',
    isRead: false,
    createdAt: '2026-02-23T07:00:00Z',
  },
  {
    id: '4',
    type: 'user',
    title: 'Layla Hassan accepted your team invite',
    message: '',
    isRead: false,
    createdAt: '2026-02-23T05:00:00Z',
  },
  {
    id: '5',
    type: 'success',
    title: 'Monthly Reporting Suite completed',
    message: '',
    isRead: true,
    createdAt: '2026-02-22T14:00:00Z',
  },
  {
    id: '6',
    type: 'info',
    title: 'Flowmatic updated to v3.2.1',
    message: 'New AI suggestion features',
    isRead: true,
    createdAt: '2026-02-22T10:00:00Z',
  },
  {
    id: '7',
    type: 'success',
    title: 'Lead Qualification Bot ran successfully',
    message: '',
    isRead: true,
    createdAt: '2026-02-22T08:00:00Z',
  },
  {
    id: '8',
    type: 'warning',
    title: 'Scheduled maintenance window',
    message: 'Feb 28, 2026 2:00–4:00 AM UTC',
    isRead: true,
    createdAt: '2026-02-21T16:00:00Z',
  },
];

export const useNotificationStore = create<NotificationState>((set) => ({
  notifications: initialNotifications,
  unreadCount: initialNotifications.filter((n) => !n.isRead).length,

  markAsRead: (id: string) =>
    set((state) => {
      const notifications = state.notifications.map((n) =>
        n.id === id ? { ...n, isRead: true } : n
      );
      return {
        notifications,
        unreadCount: notifications.filter((n) => !n.isRead).length,
      };
    }),

  markAllAsRead: () =>
    set((state) => ({
      notifications: state.notifications.map((n) => ({ ...n, isRead: true })),
      unreadCount: 0,
    })),

  addNotification: (notification) =>
    set((state) => {
      const newNotification: Notification = {
        ...notification,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
      };
      return {
        notifications: [newNotification, ...state.notifications],
        unreadCount: state.unreadCount + 1,
      };
    }),
}));
