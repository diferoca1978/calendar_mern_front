import { addSeconds } from 'date-fns';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const tempEvent = {
  _id: new Date().getTime(),
  title: ' Boss Happy birthday',
  note: 'Buy a pie',
  start: new Date(),
  end: addSeconds(new Date(), 30),
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
  }))
);
