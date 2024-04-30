import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UploadRecipeScreen from '../screen/Add/UploadRecipe.Screen';

const AddStack = createNativeStackNavigator();

const AddRecipeStackNav = () => {
  return (
    <AddStack.Navigator>
      <AddStack.Screen name='UploadRecipe' component={UploadRecipeScreen} options={{headerShown:false}} />
    </AddStack.Navigator>
  )
}

export default AddRecipeStackNav
