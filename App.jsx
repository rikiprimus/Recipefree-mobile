import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import authApi from './src/util/authApi'
import AuthStackNav from './src/navigation/AuthStackNav';
import Feathericons from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Anticons from 'react-native-vector-icons/AntDesign';
import HomeStackNav from './src/navigation/HomeStackNav';
import AddRecipeStackNav from './src/navigation/AddRecipeStackNav';
import ChatScreen from './src/screen/Chat.Screen';
import ProfileStackNav from './src/navigation/ProfileStackNav';
import LoginScreen from './src/screen/Auth/Login.Screen';
import RegistrationScreen from './src/screen/Auth/Registration.Screen';
import ForgotPasswordScreen from './src/screen/Auth/ForgotPassword.Screen';
import ResetPasswordScreen from './src/screen/Auth/ResetPassword.Screen';
import CodeScreen from './src/screen/Auth/Code.Screen';
import HomeScreen from './src/screen/Home/Home.Screen';
import { AuthProvider, useAuth } from './src/util/authContext';

const AuthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const { isSigned } = useAuth();

  return (
    <NavigationContainer>
      {isSigned? (
        <Tab.Navigator 
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarInactiveTintColor: '#6E80B0',
            tabBarActiveTintColor: '#EEC302',
            headerShown : false,
            tabBarLabelStyle : {display: 'none'},
            tabBarIcon: ({focused, color, size}) => {
              if (route?.name === 'Main') {
                if(focused) {
                  return (
                    <View style={{ 
                      flex: 1, 
                      flexDirection: 'row', 
                      alignItems: 'center', 
                      gap: 10, 
                      backgroundColor: '#ececec',
                      padding: 6,
                      margin: 8,
                      borderRadius: 15,
                      }}>
                      <Feathericons name="home" color={color} size={size * 1.4} />
                      <Text style={{ color: color}}>Home</Text>
                    </View>
                  )
                } else {
                  return <Feathericons name="home" color={color} size={size * 1.4} />
                }
              } else if (route?.name === 'Add') {
                if (focused) {
                  return (
                    <View style={{ 
                      backgroundColor: '#ececec',
                      padding: 12,
                      borderRadius: 15,
                      }}>
                      <Anticons name="plussquareo" color={color} size={size * 1.4} />
                    </View>
                  )
                } else {
                  return <Anticons name="plussquareo" color={color} size={size * 1.4} />
                }
              } else if (route?.name === 'Chat') {
                if (focused) {
                  return (
                    <View style={{ 
                      backgroundColor: '#ececec',
                      padding: 12,
                      borderRadius: 15,
                      }}>
                      <Ionicons name="chatbubble-outline" color={color} size={size * 1.4} />
                    </View>
                  )
                } else {
                  return <Ionicons name="chatbubble-outline" color={color} size={size * 1.4} />
                }
              } else if (route?.name === 'Profile') {
                if (focused) {
                  return (
                    <View style={{ 
                      backgroundColor: '#ececec',
                      padding: 12,
                      borderRadius: 15,
                      }}>
                      <Ionicons name="person-outline" color={color} size={size * 1.4} />
                    </View>
                  )
                } else {
                  return <Ionicons name="person-outline" color={color} size={size * 1.4} />
                }
              }
              return null;
            },
            tabBarStyle: {
              height: 90,
              paddingBottom: 14,
              backgroundColor: '#FEFEFE',
              paddingLeft: 4
            },
          })}
        >
          <Tab.Screen name="Main" component={HomeStackNav} />
          <Tab.Screen name="Add" component={AddRecipeStackNav} />
          <Tab.Screen name="Chat" component={ChatScreen} />
          <Tab.Screen name="Profile" component={ProfileStackNav}/>
          
        </Tab.Navigator>
      ) : (
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
      )}
    </NavigationContainer>
  );
}

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);