import api from './api-config';

export const getAllItems = async () => {
  const resp = await api.get('/items');
  return resp.data;
};

export const getItem = async id => {
  const resp = await api.get(`/items/${id}`);
  return resp.data;
};

export const createItem = async item => {
  const resp = await api.post('/items', item);
  return resp.data;
};

export const updateItem = async (id, item) => {
  const resp = await api.post(`/items/${id}`);
  return resp.data;
};

export const deleteItems = async id => {
  const resp = await api.delete(`/items/${id}`);
  return resp.data;
};
