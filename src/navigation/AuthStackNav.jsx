import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screen/Auth/Login.Screen';
import RegistrationScreen from '../screen/Auth/Registration.Screen';
import ForgotPasswordScreen from '../screen/Auth/ForgotPassword.Screen';
import ResetPasswordScreen from '../screen/Auth/ResetPassword.Screen';
import CodeScreen from '../screen/Auth/Code.Screen';
import HomeScreen from '../screen/Home/Home.Screen';

const AuthStack = createNativeStackNavigator();

const AuthStackNav = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Group 
        screenOptions={{
          headerTintColor: '#999999',
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#fff'
          },
          headerShadowVisible: false,
        }}>
        <AuthStack.Screen name='Login' component={LoginScreen} options={{headerShown:false}} />
        <AuthStack.Screen name='Registration' component={RegistrationScreen} />
        <AuthStack.Screen name='ForgotPassword' component={ForgotPasswordScreen} options={{headerShown:false}} />
        <AuthStack.Screen name='ResetPassword' component={ResetPasswordScreen} options={{headerShown:false}} />
        <AuthStack.Screen name='Code' component={CodeScreen} options={{headerShown:false}} />
        <AuthStack.Screen name='Home' component={HomeScreen} options={{headerShown:false}} />


      </AuthStack.Group>
    </AuthStack.Navigator>
  )
}

export default AuthStackNav
