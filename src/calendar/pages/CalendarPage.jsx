import { useEffect, useState } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { localizer, calendarMessages } from '../../helpers';
import { CalendarEvent, CalendarModal } from '../components';
import { uiStore } from '../../stores/uiStore';
import { calendarStore } from '../../stores/calendarStore';
import { useAuthStore, useStoreCalendar } from '../../hooks';

export const CalendarPage = () => {
  const { user } = useAuthStore();
  const { onOpenModal } = uiStore();
  const { events } = calendarStore();
  const onSetActiveEvent = calendarStore((state) => state.onSetActiveEvent);
  const { startLoadingEvents } = useStoreCalendar();

  const [lastView, setLastView] = useState(
    localStorage.getItem('lastView') || 'week'
  );

  // eslint-disable-next-line no-unused-vars
  const eventPropGetter = (event, start, end, isActive) => {
    const isMyEvent =
      user.userId === event.user._id || user.userId === event.user.userId;

    const style = {
      backgroundColor: isMyEvent ? '#0081a7' : '#415a77',
      borderRadius: '4px',
      opacity: 0.9,
      color: '#fefae0',
    };
    return {
      style,
    };
  };

  const onDoubleClick = (event) => {
    onOpenModal();
    console.log({ doubleClick: event });
  };

  const onClick = (event) => {
    onSetActiveEvent(event);
    console.log({ click: event });
  };

  const onViewChange = (event) => {
    localStorage.setItem('lastView', event);
    setLastView(event);
  };

  useEffect(() => {
    startLoadingEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Calendar
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={calendarMessages()}
        eventPropGetter={eventPropGetter}
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onClick}
        onView={onViewChange}
      />

      <CalendarModal />
    </>
  );
};
