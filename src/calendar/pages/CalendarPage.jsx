import { useState } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { localizer, calendarMessages } from '../../helpers';
import { CalendarEvent, CalendarModal } from '../components';
import { uiStore } from '../../stores/uiStore';
import { calendarStore } from '../../stores/calendarStore';

export const CalendarPage = () => {
  const { onOpenModal } = uiStore();
  const { events } = calendarStore();
  const onSetActiveEvent = calendarStore((state) => state.onSetActiveEvent);

  const [lastView, setLastView] = useState(
    localStorage.getItem('lastView') || 'week'
  );

  const eventPropGetter = (event, start, end, isSelected) => {
    return {
      ...(isSelected && {
        style: {
          backgroundColor: '#2a9d8f',
          opacity: 0.8,
        },
      }),
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
