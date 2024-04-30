import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/Home/Home.Screen';
import SearchScreen from '../screen/Home/Search.Screen';
import DetailPopularMenuScreen from '../screen/Home/DetailPopularMenu.Screen';
import DetailResepScreen from '../screen/Home/DetailResep.Screen';


const HomeStack = createNativeStackNavigator();

const HomeStackNav = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Group
        screenOptions={{
          headerTitle: '',
          headerTransparent: true,
          headerStyle: {
            
          }
        }}
      >
        <HomeStack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <HomeStack.Screen name="Search" component={SearchScreen} options={{headerShown:false}} />
        <HomeStack.Screen name="DetailsPopular" component={DetailPopularMenuScreen} options={{headerShown:false}} />
        <HomeStack.Screen name="DetailsRecipe" component={DetailResepScreen} />
      </HomeStack.Group>
    </HomeStack.Navigator>
  )
}

export default HomeStackNav
