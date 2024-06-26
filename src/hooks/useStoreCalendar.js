import { calendarStore } from '../stores';

export const useStoreCalendar = () => {
  const {
    onDeleteEvent,
    onUpdateEvent,
    onAddNewEvent,
    onSetActiveEvent,
    events,
    isActive,
  } = calendarStore();

  const setActiveEvent = (calendarEvent) => onSetActiveEvent(calendarEvent);

  const startSavingEvent = async (calendarEvent) => {
    // TODO: Get the BackEnd

    //? If all had been good

    if (calendarEvent._id) {
      // Means Updating an event
      onUpdateEvent({ ...calendarEvent });
    } else {
      // Means Creating an event
      onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() });
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
    deletEvent,
  };
};
