import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UploadRecipeScreen from '../screen/Add/UploadRecipe.Screen';
import HomeScreen from '../screen/Home/Home.Screen';

const AddStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

const AddRecipeStackNav = () => {
  return (
    <AddStack.Navigator>
      <AddStack.Screen name='UploadRecipe' component={UploadRecipeScreen} options={{headerShown:false}} />
      
      
      <HomeStack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
    </AddStack.Navigator>
  )
}

export default AddRecipeStackNav
