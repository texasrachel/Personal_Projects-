import api from './api-config';

export const getAllProjects = async () => {
  const resp = await api.get('/projects');
  return resp.data;
};

export const getProject = async (id) => {
  const resp = await api.get(`/projects/${id}`);
  return resp.data;
};

export const createProject = async (projectData) => {
  const resp = await api.post('/projects', { project: projectData });
  return resp.data;
};

export const updateProject = async (id, projectData) => {
  const resp = await api.put(`/projects/${id}`, { project: projectData });
  return resp.data;
};

export const deleteProject = async (id) => {
  const resp = await api.delete(`/projects/${id}`);
  return resp;
};

export const addItemToProject = async (itemId, id) => {
  const resp = await api.put(`/items/${itemId}/projects/${id}`);
  return resp.data;
};
