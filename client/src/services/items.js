import api from './api-config';

export const getAllItems = async () => {
  const resp = await api.get('/items');
  return resp.data;
};

export const getItem = async id => {
  const resp = await api.get(`/items/${id}`);
  return resp.data;
};

export const createItem = async (itemData) => {
  const resp = await api.post('/items', { item: itemData });
  return resp.data;
};

export const updateItem = async (id, itemData) => {
  const resp = await api.put(`/items/${id}`, { item: itemData });
  return resp.data;
};

export const deleteItem = async id => {
  const resp = await api.delete(`/items/${id}`);
  return resp.data;
};
