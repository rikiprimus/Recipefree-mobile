import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import profile from '../../assets/photo-profile.png';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useAuth } from '../../util/authContext';
import authApi from '../../util/authApi'

const ProfileScreen = ({navigation}) => {
  const { logout, dataUser } = useAuth()
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    setPhoto(dataUser?.photo_profile);
  }, [dataUser]);
  const handleLogout = async () => {
    logout()
  }

  return (
    <View className="relative flex-1 items-center bg-white">
        {photo !== null ? ( 
          <View className='w-full flex flex-col items-center justify-center gap-y-4 h-[400px] bg-yellow'>
            <Image source={{uri: photo}} className='w-[90px] h-[90px] rounded-full' />
            <Text className='font-semibold text-lg text-white'>{dataUser?.name}</Text>
          </View>
        ) : null }
      <View className='absolute w-[405px] h-1/2 bottom-0 mx-7 p-6 bg-white rounded-t-2xl'>
        <TouchableOpacity
          className='flex flex-row items-center justify-between mb-10'
          onPress={()=> navigation.navigate("EditProfile")}
        >
          <View className='flex flex-row items-center gap-x-4'>
            <Ionicons name='person-outline' size={25} className='text-yellow'/>
            <Text>Edit Profile</Text>
          </View>
          <Ionicons name='chevron-forward-outline' size={25} className='text-[#8C8C8C]'/>
        </TouchableOpacity>
        <TouchableOpacity
          className='flex flex-row items-center justify-between mb-10'
          onPress={()=> navigation.navigate("MyRecipe")}
        >
          <View className='flex flex-row items-center gap-x-4'>
            <Ionicons name='list-outline' size={25} className='text-yellow'/>
            <Text>My Recipe</Text>
          </View>
          <Ionicons name='chevron-forward-outline' size={25} className='text-[#8C8C8C]'/>
        </TouchableOpacity>
        <TouchableOpacity
          className='flex flex-row items-center justify-between mb-10'
          onPress={()=> navigation.navigate("SavedRecipe")}
        >
          <View className='flex flex-row items-center gap-x-4'>
            <Ionicons name='bookmark-outline' size={25} className='text-yellow'/>
            <Text>Saved Recipe</Text>
          </View>
          <Ionicons name='chevron-forward-outline' size={25} className='text-[#8C8C8C]'/>
        </TouchableOpacity>
        <TouchableOpacity
          className='flex flex-row items-center justify-between mb-10'
          onPress={()=> navigation.navigate("LikedRecipe")}
        >
          <View className='flex flex-row items-center gap-x-4'>
            <Ionicons name='thumbs-up-outline' size={25} className='text-yellow'/>
            <Text>Liked Recipe</Text>
          </View>
          <Ionicons name='chevron-forward-outline' size={25} className='text-[#8C8C8C]'/>
        </TouchableOpacity>
        {/* logout button  */}
        <View className='w-full mb-10'>
          <TouchableOpacity
            onPress={handleLogout}
          >
            <Text className='font-bold text-xl text-[#e24b4b] text-center'>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ProfileScreen
