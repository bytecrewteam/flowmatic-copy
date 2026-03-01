import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '@/types';

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Mock user data
const mockUser: User = {
  id: '1',
  name: 'Alex Johnson',
  email: 'alex@nexora.io',
  role: 'owner',
  createdAt: '2025-06-15T10:00:00Z',
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      user: null,

      login: async (_email: string, _password: string) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        set({
          isLoggedIn: true,
          user: mockUser,
        });
        
        // Set cookie for middleware
        document.cookie = 'auth-token=dummy; path=/; max-age=86400';
      },

      signup: async (_name: string, _email: string, _password: string) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        set({
          isLoggedIn: true,
          user: { ...mockUser, name: _name, email: _email },
        });
        
        document.cookie = 'auth-token=dummy; path=/; max-age=86400';
      },

      logout: () => {
        set({
          isLoggedIn: false,
          user: null,
        });
        
        // Clear cookie
        document.cookie = 'auth-token=; path=/; max-age=0';
      },
    }),
    {
      name: 'flowmatic-auth',
    }
  )
);
