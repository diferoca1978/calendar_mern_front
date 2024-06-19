export const calendarMessages = () => {
  return {
    date: 'Date',
    time: 'Time',
    event: 'Event',
    allDay: 'All Day',
    week: 'Week',
    work_week: 'Work Week',
    day: 'Day',
    month: 'Month',
    previous: 'Back',
    next: 'Next',
    yesterday: 'Yesterday',
    tomorrow: 'Tomorrow',
    today: 'Today',
    agenda: 'Schedule',

    noEventsInRange: 'There are no events in this range.',
    /**
     * params {total} count of remaining events
     * params {remainingEvents} remaining events
     * params {events} all events in day
     */
    showMore: (total) => `+${total} más`,
  };
};
