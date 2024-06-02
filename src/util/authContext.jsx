// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authApi from './authApi'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isSigned, setIsSigned] = useState(false);
  const [dataUser, setDataUser] = useState(null);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  // delete message for 5 seconds 
  useEffect(() => {
    if (message !== '') {
      const timer = setTimeout(() => {
        setMessage('');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message]);

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
    console.log(res.data)
    if(res.status === 200) {
      setDataUser(res.data)
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

  const sendPin = async (data) => {
    const res = await authApi.sendpin(data);
    if(res.status === 201) {
      setEmail(data.email)
      setMessage(res.messages)
    } else {
      setMessage(res.messages)
    }
    return res;
  };

  const confirmPin = async (data) => {
    const res = await authApi.confirmpin(data);
    if(res.status === 201) {
      setMessage(res.messages)
    } else {
      setMessage(res.messages)
    }
    return res;
  };
  const changePassword = async (data) => {
    const res = await authApi.changepassword(data);
    if(res.status === 201) {
      setMessage(res.messages)
    } else {
      setMessage(res.messages)
    }
    return res;
  };
  
  const logout = async () => {
    const res = await authApi.logout();
    if(res) {
      setIsSigned(false);
      console.log('logout success')
    }
  };

  return (
    <AuthContext.Provider value={{ isSigned, login, logout, register, sendPin, confirmPin, changePassword, dataUser, setDataUser, message, email }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);