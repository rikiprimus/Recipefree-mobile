// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authApi from './authApi'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isSigned, setIsSigned] = useState(false);
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    const fetchIsSigned = async () => {
      try {
        const value = await AsyncStorage.getItem('isSigned');
        if (value !== null) {
          setIsSigned(JSON.parse(value));
        }
      } catch (error) {
        console.error('Error fetching isSigned from AsyncStorage:', error);
      }
    };

    fetchIsSigned();
  }, [isSigned]);

  const login = async (data) => {
    const res = await authApi.login(data);
    const user = await authApi.getUserData()
    setDataUser(user)
    console.log(res.status)
    if(res.status === 200 && user !== null) {
      setDataUser(data)
      setIsSigned(true);
      console.log('login success')
    } else (
      console.log('login gagal')
    )
  };

  const register = async (data) => {
    const res = await authApi.register(data);
    console.log(res)
  };
  
  const logout = async () => {
    const res = await authApi.logout();
    console.log(res)
    if(res) {
      setIsSigned(false);
      console.log('logout success')
    }
  };

  return (
    <AuthContext.Provider value={{ isSigned, login, logout, register, dataUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);