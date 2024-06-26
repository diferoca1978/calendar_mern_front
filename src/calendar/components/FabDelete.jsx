import { Button } from '../../components/ui';
import { CalendarMinus2 } from 'lucide-react';
import { useStoreCalendar } from '../../hooks';

export const FabDelete = () => {
  const { deletEvent } = useStoreCalendar();

  const handleDelete = () => {
    deletEvent();
  };

  return (
    <>
      <Button
        onClick={handleDelete}
        variant="destructive"
        size="icon"
        className="fixed bottom-3 right-3 rounded-full"
      >
        <CalendarMinus2 />
      </Button>
    </>
  );
};
