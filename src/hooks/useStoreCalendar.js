import Swal from 'sweetalert2';
import { calendarApi } from '../api';
import { convertEventDate } from '../helpers';
import { authStore, calendarStore } from '../stores';

export const useStoreCalendar = () => {
  const {
    onDeleteEvent,
    onUpdateEvent,
    onAddNewEvent,
    onSetActiveEvent,
    events,
    isActive,
    onLoadEvents,
  } = calendarStore();

  const { user } = authStore();

  const setActiveEvent = (calendarEvent) => onSetActiveEvent(calendarEvent);

  const startSavingEvent = async (calendarEvent) => {
    try {
      if (calendarEvent.id) {
        //* Means updating event
        await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent);
        onUpdateEvent({ ...calendarEvent, user });
        return;
      }

      //* Means Creating an event
      const { data } = await calendarApi.post('/events', calendarEvent);
      onAddNewEvent({ ...calendarEvent, id: data.event.eventId, user });
    } catch (error) {
      console.log(error);
      const errorMsg = error.response.data.msg;
      Swal.fire({
        icon: 'error',
        title: 'Error to save the changes',
        text: errorMsg,
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
        showConfirmButton: true,
      });
    }
  };

  const startLoadingEvents = async () => {
    try {
      const { data } = await calendarApi.get('/events');
      const events = convertEventDate(data.events);
      onLoadEvents(events);
    } catch (error) {
      console.log(error);
    }
  };

  const deletEvent = async () => {
    try {
      await calendarApi.delete(`/events/delete/${isActive.id}`);
      onDeleteEvent();
    } catch (error) {
      console.log(error);
      const errorMsg = error.response.data.msg;
      Swal.fire({
        icon: 'error',
        title: 'Error to delete',
        text: errorMsg,
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
        showConfirmButton: true,
      });
    }
  };

  return {
    //* properties
    events,
    isActive,

    //* Methods
    setActiveEvent,
    startSavingEvent,
    startLoadingEvents,
    deletEvent,
  };
};
