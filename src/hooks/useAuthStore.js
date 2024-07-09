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
      localStorage.setItem('token-init-date', new Date().getTime());
      onLogin({ name: data.user.name, userId: data.user.userId });
    } catch (error) {
      onLogout('Incorrect credentials');
      setTimeout(() => {
        clearErrorMessage();
      }, 10);
    }
  };

  const startRegister = async ({ name, email, password }) => {
    onChecking();

    try {
      const { data } = await calendarApi.post('/auth/singup', {
        name,
        email,
        password,
      });
      localStorage.setItem('token', data.user.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      onLogin({ name: data.user.name, userId: data.user.userId });
    } catch (error) {
      onLogout(error.response.data.errors.email.msg || '');
      setTimeout(() => {
        clearErrorMessage();
      }, 10);
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem('token');
    if (!token) return onLogout();

    try {
      const { data } = await calendarApi.get('/auth/renew');
      console.log(data);
      localStorage.setItem('token', data.user.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      onLogin({ name: data.user.name, userId: data.user.userId });
    } catch (error) {
      localStorage.clear();
      onLogout();
    }
  };

  return {
    //* Properties
    status,
    user,
    errorMessage,

    //* Methods
    startLogin,
    startRegister,
    checkAuthToken,
  };
};
