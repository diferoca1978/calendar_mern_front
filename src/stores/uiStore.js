import { create } from 'zustand';

export const uiStore = create((set) => ({
  isDateModalOpen: false,

  onOpenModal: () => set(state => ({ isDateModalOpen: state.isDateModalOpen = true })),

  onCloseModal: () => set(state => ({ isDateModalOpen: state.isDateModalOpen = false }))

}));
