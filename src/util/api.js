import axios from 'axios';
import { API_URL } from '@env';

const apiUrl = API_URL;

const api = {
  add: async (endpoint, formData) => {
    try {
      const response = await axios.post(apiUrl+ `/${endpoint}`, formData, {
        headers:{"Accept":"application/json, text/plain, /","Content-Type": "multipart/form-data"}
      });
      return response.data; 
    } catch (error) {
      console.error("error : ", error?.response)
      return error?.response?.data
    }
  },

  get: async (endpoint) => {
    try {
      const response = await axios.get(apiUrl+ `/${endpoint}`);
      console.log('get success')
      return response.data; 
    } catch (error) {
      console.error('Error get data:', error);
      return error; 
    }
  },

  getById: async (endpoint, id, token) => {
    try {
      const response = await axios.get(apiUrl+ `/${endpoint}/${id}`,{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }); 
      console.log('get by id success')
      return response.data; 
    } catch (error) {
      console.error('Error get data by id:', error?.response?.data);
      return error?.response?.data; 
    }
  },

  getDetails: async (endpoint, search) => {
    console.log("========")
    console.log(search)
    try {
      const response = await axios.get(apiUrl+ `/${endpoint}/detail`, {
        params: search
      });
      console.log('get detail success')
      return response.data; 
    } catch (error) {
      console.error('Error get data detail:', error);
      return error?.response?.data; 
    }
  },

  
  update: async (endpoint, form, id, token) => {
    try {
      const response = await axios.put(`${apiUrl}/${endpoint}/${id}`, form, {
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Authorization': `Bearer ${token}`,
        },
      });
      return response; 
    } catch (error) {
      console.error('Error api updating data:', error?.response?.data);
      return error?.response?.data; 
    }
  },

  updatephoto: async (endpoint, photo, id, token) => {
    try {
      const formData = new FormData();
      formData.append("photo_profile", {
        uri: photo.uri,
        name: photo.fileName || "photo.jpg",
        type: photo.type || "image/jpeg",
      });
      const response = await axios.put(`${apiUrl}/${endpoint}/${id}`, formData, {
        headers: {
          'Accept': 'application/json, text/plain, */*',
          "Content-Type": "multipart/form-data",
          'Authorization': `Bearer ${token}`,
        },
      });
      return response.data; 
    } catch (error) {
      console.error('Error api updating photo:', error?.request);
      return error?.response?.data; 
    }
  },

  delete: async (endpoint, id) => {
    try {
      const response = await axios.delete(apiUrl+ `/${endpoint}/${id}`, {
        headers: {
          'Content-Type': 'application/form-data',
        }
      });
      return response; 
    } catch (error) {
      console.error('Error delete data:', error);
      return error?.response?.data; 
    }
  }
};

export default api;
