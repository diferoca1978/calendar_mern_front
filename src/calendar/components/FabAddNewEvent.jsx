import { addHours } from 'date-fns';
import { Button } from '../../components/ui';
import { CalendarPlus2 } from 'lucide-react';
import { useStoreCalendar, useUiStore } from '../../hooks';

export const FabAddNewEvent = () => {
  const { onOpenModal } = useUiStore();
  const { setActiveEvent } = useStoreCalendar();

  const handleClick = () => {
    setActiveEvent({
      title: '',
      note: '',
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: '#fafafa',
      user: {
        _id: '123',
        name: 'Diego',
      },
    });
    onOpenModal();
  };

  return (
    <>
      <Button
        onClick={handleClick}
        variant="outline"
        size="icon"
        className="fixed bottom-3 left-3 rounded-full bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
      >
        <CalendarPlus2 />
      </Button>
    </>
  );
};
