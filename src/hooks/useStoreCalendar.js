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
    // TODO: Update event

    //? If all had been good

    try {
      if (calendarEvent.id) {
        // Means Updating an event
        onUpdateEvent({ ...calendarEvent });
        return;
      }

      // Means Creating an event
      const { data } = await calendarApi.post('/events', calendarEvent);
      console.log({ data });
      onAddNewEvent({ ...calendarEvent, id: data.event.eventId, user });
    } catch (error) {
      console.log(error);
    }
  };

  const startLoadingEvents = async () => {
    try {
      const { data } = await calendarApi.get('/events');
      const events = convertEventDate(data.events);
      onLoadEvents(events);
      console.log(events);
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error('Error response from server:', error.response.data);
      } else if (error.request) {
        // Request was made but no response received
        console.error('No response received:', error.request);
      } else {
        // Something else happened in setting up the request
        console.error('Error setting up request:', error.message);
      }
    }
  };

  const deletEvent = () => {
    onDeleteEvent();
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
