//* this hook only have the purpose to perform any operation that have related by the authStore

import { calendarApi } from '../api';
import { authStore } from '../stores';

export const useAuthStore = () => {
  const status = authStore((state) => state.status);
  const user = authStore((state) => state.user);
  const errorMessage = authStore((state) => state.errorMessage);
  const { onChecking, onLogin, onLogout, clearErrorMessage } = authStore();

  const startLogin = async ({ email, password }) => {
    onChecking();
    try {
      const { data } = await calendarApi.post('/auth', { email, password });
      localStorage.setItem('token', data.user.token);
      onLogin({ name: data.user.name, token: data.user.token });
    } catch (error) {
      onLogout('Incorrect credentials');
      setTimeout(() => {
        clearErrorMessage();
      }, 10);
    }
  };

  return {
    //* Properties
    status,
    user,
    errorMessage,

    //* Methods
    startLogin,
  };
};
