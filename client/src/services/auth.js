import api from './api-config';

export const signinUser = async (signinData) => {
  const res = await api.post('/auth/signin', { authentication: signinData });
  localStorage.setItem('authToken', res.data.token);
  api.defaults.headers.common.authorization = `Bearer ${res.data.token}`;
  return res.data.user;
}

export const signupUser = async (signupData) => {
  const res = await api.post('/users', { user: signupData });
  localStorage.setItem('authToken', res.data.token);
  api.defaults.headers.common.authorization = `Bearer ${res.data.token}`;
  return res.data.user;
};

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const res = await api.get('/auth/verify');
    return res.data;
  }
  return null;
};

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
};