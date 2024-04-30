import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screen/Profile/Profile.Screen';
import EditProfileScreen from '../screen/Profile/EditProfile.Screen';
import MyRecipeScreen from '../screen/Profile/MyRecipe.Screen';
import SavedRecipeScreen from '../screen/Profile/SavedRecipe.Screen';
import LikedRecipeScreen from '../screen/Profile/LikedRecipe.Screen';

const HomeStack = createNativeStackNavigator();

const ProfileStackNav = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="MyProfile" component={ProfileScreen} options={{headerShown:false}} />
      <HomeStack.Screen name="EditProfile" component={EditProfileScreen} options={{headerShown:false}} />
      <HomeStack.Screen name="MyRecipe" component={MyRecipeScreen} options={{headerShown:false}} />
      <HomeStack.Screen name="SavedRecipe" component={SavedRecipeScreen} options={{headerShown:false}} />
      <HomeStack.Screen name="LikedRecipe" component={LikedRecipeScreen} options={{headerShown:false}} />
    </HomeStack.Navigator>
  )
}

export default ProfileStackNav
