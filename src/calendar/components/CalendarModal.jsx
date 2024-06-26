import { Modal } from './Modal';
import { FormEvent, useUiStore } from '../../hooks';
import { FabAddNewEvent } from './FabAddNewEvent';
import { FabDelete } from './FabDelete';

export const CalendarModal = () => {
  const { isDateModalOpen, onCloseModal } = useUiStore();

  return (
    <>
      <Modal isOpen={isDateModalOpen} onClose={onCloseModal}>
        <FormEvent />
      </Modal>
      <FabAddNewEvent />
      <FabDelete />
    </>
  );
};
