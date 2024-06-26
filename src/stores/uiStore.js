import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const uiStore = create(
  devtools((set) => ({
    isDateModalOpen: false,

    onOpenModal: () =>
      set(
        (state) => ({ isDateModalOpen: (state.isDateModalOpen = true) }),
        false,
        'onOpenModal'
      ),

    onCloseModal: () =>
      set(
        (state) => ({ isDateModalOpen: (state.isDateModalOpen = false) }),
        false,
        'onCloseModal'
      ),
  }))
);
