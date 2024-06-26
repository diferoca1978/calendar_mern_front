import { uiStore } from '../stores';

export const useUiStore = () => {
  const isDateModalOpen = uiStore((state) => state.isDateModalOpen);
  const onOpenModal = uiStore((state) => state.onOpenModal);
  const onCloseModal = uiStore((state) => state.onCloseModal);

  return {
    //* properties
    isDateModalOpen,

    //* Methods
    onOpenModal,
    onCloseModal,
  };
};
