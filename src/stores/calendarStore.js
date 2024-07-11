//import { addHours } from 'date-fns';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// const tempEvent = {
//   id: new Date().getTime(),
//   title: ' Boss Happy birthday',
//   note: 'Buy a pie',
//   start: new Date(),
//   end: addHours(new Date(), 2),
//   bgColor: '#fafafa',
//   user: {
//     _id: '123',
//     name: 'Diego',
//   },
// };

export const calendarStore = create(
  devtools((set) => ({
    events: [],
    isLoadingEvents: true,
    isActive: null,

    onSetActiveEvent: (payload) =>
      set((state) => ({ isActive: (state.isActive = payload) })),

    onAddNewEvent: (payload) =>
      set((state) => ({
        events: [...state.events, payload],
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

    onLoadEvents: (payload) =>
      set((state) => ({
        isLoadingEvents: false,
        events: [
          ...state.events,
          ...payload.filter(
            (event) => !state.events.some((dbEvent) => dbEvent.id === event.id)
          ),
        ],
      })),

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
