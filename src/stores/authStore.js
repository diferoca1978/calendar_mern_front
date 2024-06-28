import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const authStore = create(
  devtools((set) => ({
    status: 'checking',
    user: {},
    errorMessage: undefined,

    onChecking: () =>
      set((state) => ({
        status: (state.status = 'checking'),
        user: (state.user = {}),
        errorMessage: (state.errorMessage = undefined),
      })),

    onLogin: (payload) =>
      set((state) => ({
        status: (state.status = 'authenticated'),
        user: (state.user = payload),
        errorMessage: (state.errorMessage = undefined),
      })),

    onLogout: (payload) =>
      set((state) => ({
        status: (state.status = 'not-authenticated'),
        user: (state.user = {}),
        errorMessage: (state.errorMessage = payload),
      })),

    clearErrorMessage: () =>
      set((state) => ({
        errorMessage: (state.errorMessage = undefined),
      })),
  }))
);
