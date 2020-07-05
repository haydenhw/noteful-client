import axios from 'axios';
const API_ROOT = 'http://localhost:9090';

const requests = {
  get(url) {
    return axios.get(`${API_ROOT}${url}`).then(({ data }) => data);
  },
  post(url, body) {
    return axios.post(`${API_ROOT}${url}`, body).then(({ data }) => data);
  },
  patch(url, body) {
    return axios.patch(`${API_ROOT}${url}`, body).then(({ data }) => data);
  },
  delete(url, body) {
    return axios.delete(`${API_ROOT}${url}`).then(({ data }) => data);
  },
};

const api = {
  fetchFolders() {
    return requests.get('/folders');
  },
  createFolder(newFolder) {
    return requests.post('/folders', newFolder);
  },
  updateFolder(id) {
    return requests.patch(`/folders/${id}`);
  },
  deleteFolder(id) {
    return requests.delete(`/folders/${id}`);
  },
  fetchNotes() {
    return requests.get('/notes');
  },
  createNote(newNote) {
    return requests.post('/notes', newNote);
  },
  updateNote(id) {
    return requests.patch(`/notes/${id}`);
  },
  deleteNote(id) {
    return requests.delete(`/notes/${id}`);
  },
};

export default api;
