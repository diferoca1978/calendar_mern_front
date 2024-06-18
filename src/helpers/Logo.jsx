import { CalendarDays } from 'lucide-react';

export const Logo = () => {
  return (
    <div className="flex space-x-1 text-primary-foreground items-center text-lg">
      <CalendarDays
        className="items-center text-primary-foreground"
        size={36}
      />
      <span className="text-primary-foreground ml-1">Calendar</span>
    </div>
  );
};
