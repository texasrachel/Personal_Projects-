import api from './api-config';

export const getAllItems = async () => {
  const resp = await api.get('/items');
  return resp.data;
};
