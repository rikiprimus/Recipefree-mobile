import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screen/Profile/Profile.Screen';
import EditProfileScreen from '../screen/Profile/EditProfile.Screen';
import MyRecipeScreen from '../screen/Profile/MyRecipe.Screen';
import SavedRecipeScreen from '../screen/Profile/SavedRecipe.Screen';
import LikedRecipeScreen from '../screen/Profile/LikedRecipe.Screen';
import EditPhotoScreen from '../screen/Profile/EditPhoto.Screen';
import EditPasswordScreen from '../screen/Profile/EditPassword.Screen';
import DetailResepScreen from '../screen/Home/DetailResep.Screen';

const ProfileStack = createNativeStackNavigator();

const ProfileStackNav = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Group
        screenOptions={{
          headerTitle: '',
          headerTransparent: true,
          headerStyle: {
            
          }
        }}
      >

        <ProfileStack.Screen name="MyProfile" component={ProfileScreen} options={{headerShown:false}} />
        <ProfileStack.Screen name="EditProfile" component={EditProfileScreen} options={{headerShown:false}} />
        <ProfileStack.Screen name="EditPhoto" component={EditPhotoScreen} options={{headerShown:false}} />
        <ProfileStack.Screen name="EditPassword" component={EditPasswordScreen} options={{headerShown:false}} />
        <ProfileStack.Screen name="MyRecipe" component={MyRecipeScreen} options={{headerShown:false}} />
        <ProfileStack.Screen name="SavedRecipe" component={SavedRecipeScreen} options={{headerShown:false}} />
        <ProfileStack.Screen name="LikedRecipe" component={LikedRecipeScreen} options={{headerShown:false}} />
    
        <ProfileStack.Screen name="DetailsRecipe" component={DetailResepScreen} />
      </ProfileStack.Group>
    </ProfileStack.Navigator>
  )
}

export default ProfileStackNav
