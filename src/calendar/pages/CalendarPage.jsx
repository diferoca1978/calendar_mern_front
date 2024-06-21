import { useState } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours } from 'date-fns';
import { localizer, calendarMessages } from '../../helpers';
import { CalendarEvent, CalendarModal } from '../components';
import { uiStore } from '../../stores/uiStore';

const events = [
  {
    title: 'Leydi Happy Birthday',
    note: 'Buy a Coffee pie',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
      _id: '123',
      name: 'Diego Rodriguez',
    },
  },
];

export const CalendarPage = () => {
  const { onOpenModal } = uiStore();

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
