import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const apiUrl = 'https://recipefree.vercel.app'

const authApi = {
  // Fungsi untuk melakukan login
  login: async (credentials) => {
    try {
      const response = await axios.post(apiUrl + '/auth/login', credentials, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      // Menyimpan data pengguna yang sudah login ke AsyncStorage
      await AsyncStorage.setItem('userData', JSON.stringify(response.data));
      await AsyncStorage.setItem('isSigned', 'true');

      return response.data;
    } catch (error) {
      return error?.response?.data; 
    }
  },

  // Fungsi untuk melakukan register
  register: async (credentials) => {
    try {
      const response = await axios.post(apiUrl + '/auth/register', credentials, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      return response.data; // Mengembalikan data pengguna yang sudah login
    } catch (error) {
      return error?.response?.data; 
    }
  },

  sendpin: async (credentials) => {
    try {
      const response = await axios.post(apiUrl + '/auth/sendpin', credentials, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      await AsyncStorage.setItem('emailpin', credentials.email);
      return response.data; // Mengembalikan data pengguna yang sudah login
    } catch (error) {
      return error?.response?.data; 
    }
  },
  confirmpin: async (credentials) => {
    try {
      const response = await axios.post(apiUrl + '/auth/confirmpin', credentials, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      console.log(response.data)
      return response.data; // Mengembalikan data pengguna yang sudah login
    } catch (error) {
      return error?.response?.data; 
    }
  },
  changepassword: async (credentials) => {
    try {
      const response = await axios.post(apiUrl + '/auth/changepasswordbyemail', credentials, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      return response.data; // Mengembalikan data pengguna yang sudah login
    } catch (error) {
      return error?.response?.data; 
    }
  },

  // Fungsi untuk logout
  logout: async () => {
    try {
      // Menghapus data pengguna yang sudah login dari AsyncStorage saat logout
      await AsyncStorage.removeItem('userData');
      await AsyncStorage.removeItem('isSigned');
      return true; // Berhasil logout
    } catch (error) {
      return false; // Gagal logout
    }
  },

  

  // Fungsi untuk mendapatkan data pengguna yang sudah login
  getUserData: async () => {
    try {
      // Mendapatkan data pengguna yang sudah login dari AsyncStorage
      const userDataString = await AsyncStorage.getItem('userData');
      if (userDataString) {
        // Ubah string JSON menjadi objek JavaScript
        const userData = JSON.parse(userDataString);
        return userData;
      } else {
        console.log('userData tidak ditemukan di AsyncStorage');
        return null;
      }
    } catch (error) {
      return null;
    }
  },

  getUserLogin: async (id, token) => {
    try {
      const res = await axios.get(apiUrl + `users/${id}`, credentials, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      return res.data
    } catch (error) {
      return error;
    }
  }

  
};

export default authApi;
