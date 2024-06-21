import { uiStore } from '../../stores/uiStore';
import { Modal } from './Modal';
import { FormEvent } from '../../hooks';

export const CalendarModal = () => {
  const isDateModalOpen = uiStore((state) => state.isDateModalOpen);
  const { onCloseModal } = uiStore();

  return (
    <>
      <Modal isOpen={isDateModalOpen} onClose={onCloseModal}>
        <FormEvent />
      </Modal>
    </>
  );
};
