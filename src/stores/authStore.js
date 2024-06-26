import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const authStore = create(
  devtools((set) => ({
    status: 'cheking',
    user: {},
    errorMessage: undefined,

    checking: () =>
      set((state) => ({
        status: (state.status = 'checking'),
        user: (state.user = {}),
        errorMessage: (state.errorMessage = undefined),
      })),
  }))
);
