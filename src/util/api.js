import axios from 'axios';

const apiUrl = 'https://recipefree.vercel.app'

const api = {
  add: async (endpoint, formData, token) => {
    try {
      const response = await axios.post(apiUrl+ `/${endpoint}`, formData, {
        headers: {
          'Content-Type': 'application/form-data',
          'Authorization': `Bearer ${token}`
        }
      });
      return response; 
    } catch (error) {
      console.error('Error adding data:', error);
      return error; // Produk gagal ditambahkan
    }
  },

  // Fungsi untuk mengambil informasi semua data
  get: async (endpoint) => {
    try {
      const response = await axios.get(apiUrl+ `/${endpoint}`);
      console.log('get success')
      return response.data; 
    } catch (error) {
      console.error('Error get data:', error);
      return error; // Produk gagal ditambahkan
    }
  },

  // Fungsi untuk mengambil informasi berdasarkan ID
  getById: async (endpoint, id) => {
    try {
      const response = await axios.get(apiUrl+ `/${endpoint}/${id}`);
      console.log('get by id success')
      return response.data; 
    } catch (error) {
      console.error('Error get data by id:', error);
      return error; // Produk gagal ditambahkan
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
      return error; // Produk gagal ditambahkan
    }
  },

  // Fungsi untuk memperbarui informasi produk
  update: async (endpoint, formData, token) => {
    try {
      const response = await axios.put(apiUrl+ `/${endpoint}`, formData, {
        headers: {
          'Content-Type': 'application/form-data',
          'Authorization': `Bearer ${token}`
        }
      });
      return response; 
    } catch (error) {
      console.error('Error update data:', error);
      return error; // Produk gagal ditambahkan
    }
  },

  // Fungsi untuk menghapus produk berdasarkan ID
  deleteProduct: async (endpoint, formData, token) => {
    try {
      const response = await axios.delete(apiUrl+ `/${endpoint}`, formData, {
        headers: {
          'Content-Type': 'application/form-data',
          'Authorization': `Bearer ${token}`
        }
      });
      return response; 
    } catch (error) {
      console.error('Error update data:', error);
      return error; // Produk gagal ditambahkan
    }
  }
};

export default api;
