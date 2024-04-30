import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthStackNav from './src/navigation/AuthStackNav';
import Feathericons from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Anticons from 'react-native-vector-icons/AntDesign';
import HomeStackNav from './src/navigation/HomeStackNav';
import AddRecipeStackNav from './src/navigation/AddRecipeStackNav';
import ChatScreen from './src/screen/Chat.Screen';
import ProfileStackNav from './src/navigation/ProfileStackNav';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator 
        initialRouteName="Auth"
        screenOptions={({ route }) => ({
          tabBarInactiveTintColor: '#6E80B0',
          tabBarActiveTintColor: '#EEC302',
          headerShown : false,
          tabBarLabelStyle : {display: 'none'},
          tabBarIcon: ({focused, color, size}) => {
            if(route?.name === 'Auth') {
              return <Ionicons name="chevron-down-circle-outline" color={color} size={size * 1.4} />
            } else if (route?.name === 'Main') {
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
            backgroundColor: '#FEFEFE'
          },
        })}
      >
        <Tab.Screen name="Auth" component={AuthStackNav} />
        <Tab.Screen name="Main" component={HomeStackNav} />
        <Tab.Screen name="Add" component={AddRecipeStackNav} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Profile" component={ProfileStackNav}/>
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

