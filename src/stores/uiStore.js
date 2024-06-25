import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const uiStore = create(
  devtools((set) => ({
    isDateModalOpen: false,

    onOpenModal: () => set({ isDateModalOpen: true }),

    onCloseModal: () => set({ isDateModalOpen: false }),
  }))
);
