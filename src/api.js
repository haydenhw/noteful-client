import axios from 'axios';

const DEV_URL =  'http://localhost:8000/api';
const PROD_URL = 'https://blogful-hayden.herokuapp.com/api';

const useProductionUrl = process.env.NODE_ENV === 'production' || process.env.REACT_APP_MOCK_PRODUCTION === 'true';
let API_ROOT = useProductionUrl ? PROD_URL : DEV_URL;

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
