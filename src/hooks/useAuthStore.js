//* this hook only have the purpose to perform any operation that have related by the authStore

import { calendarApi } from '../api';
import { authStore } from '../stores';

export const useAuthStore = () => {
  const status = authStore((state) => state.status);
  const user = authStore((state) => state.user);
  const errorMesage = authStore((state) => state.errorMesage);

  const startLogin = async ({ email, password }) => {
    try {
      const { data } = await calendarApi.post('/auth', { email, password });
      console.log({ data });
    } catch (error) {
      console.log({ error });
    }
  };

  return {
    //* Properties
    status,
    user,
    errorMesage,

    //* Methods
    startLogin,
  };
};
