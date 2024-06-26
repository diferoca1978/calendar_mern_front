import { addHours } from 'date-fns';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const tempEvent = {
  _id: new Date().getTime(),
  title: ' Boss Happy birthday',
  note: 'Buy a pie',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Diego',
  },
};

export const calendarStore = create(
  devtools((set) => ({
    events: [tempEvent],
    isActive: null,

    onSetActiveEvent: (event) =>
      set((state) => ({ isActive: (state.isActive = event) })),

    onAddNewEvent: (event) =>
      set((state) => ({
        events: [...state.events, event],
        isActive: (state.isActive = null),
      })),

    onUpdateEvent: (updateEvent) =>
      set(
        (state) => ({
          events: state.events.map((event) =>
            event._id === updateEvent._id ? updateEvent : event
          ),
        }),
        false,
        'onUpdateEvent'
      ),

    onDeleteEvent: () =>
      set((state) => ({
        events:
          state.isActive !== null
            ? state.events.filter((event) => event._id !== state.isActive._id)
            : state.events,

        isActive: (state.isActive = null),
      })),
  }))
);
