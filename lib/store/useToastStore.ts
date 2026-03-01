import { create } from 'zustand';
import type { ToastProps } from '@/types';

interface ToastState {
  toasts: ToastProps[];
  addToast: (toast: Omit<ToastProps, 'id'>) => void;
  removeToast: (id: string) => void;
  clearToasts: () => void;
}

export const useToastStore = create<ToastState>((set) => ({
  toasts: [],

  addToast: (toast) => {
    const id = Date.now().toString();
    const newToast: ToastProps = {
      ...toast,
      id,
      duration: toast.duration || 4000,
    };

    set((state) => ({
      toasts: [...state.toasts, newToast].slice(-3), // Max 3 toasts
    }));

    // Auto remove after duration
    setTimeout(() => {
      set((state) => ({
        toasts: state.toasts.filter((t) => t.id !== id),
      }));
    }, newToast.duration);
  },

  removeToast: (id: string) =>
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    })),

  clearToasts: () => set({ toasts: [] }),
}));

// Helper functions for common toast types
export const toast = {
  success: (message: string) =>
    useToastStore.getState().addToast({ type: 'success', message }),
  error: (message: string) =>
    useToastStore.getState().addToast({ type: 'error', message }),
  warning: (message: string) =>
    useToastStore.getState().addToast({ type: 'warning', message }),
  info: (message: string) =>
    useToastStore.getState().addToast({ type: 'info', message }),
};
