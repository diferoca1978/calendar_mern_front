import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const authStore = create(
  devtools((set) => ({
    status: 'cheking',
    user: {},
    errorMessage: undefined,

    onChecking: () =>
      set((state) => ({
        status: (state.status = 'checking'),
        user: (state.user = {}),
        errorMessage: (state.errorMessage = undefined),
      })),

    onLogin: (user) =>
      set((state) => ({
        status: (state.status = 'authenticathed'),
        user: (state.user = user),
        errorMessage: (state.errorMessage = undefined),
      })),
  }))
);
