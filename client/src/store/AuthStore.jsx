import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(persist(
  (set) => ({
    user: null,
    token: null,
    isLoggedIn: false,

    login: (userData, token) => set({
      user: userData,
      token,
      isLoggedIn: true,
    }),

    logout: () => set({
      user: null,
      token: null,
      isLoggedIn: false,
    }),
  }),
  {
    name: 'auth-storage', // Uses localStorage
  }
));

