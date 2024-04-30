import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import profile from '../../assets/photo-profile.png';
import Ionicons from "react-native-vector-icons/Ionicons";

const ProfileScreen = ({navigation}) => {
  return (
    <View className="relative flex-1 items-center bg-white">
      <View className='w-full flex flex-col items-center justify-center gap-y-4 h-[400px] bg-yellow'>
        <Image source={profile} className='w-[90px] h-[90px] rounded-full' />
        <Text className='font-semibold text-lg text-white'>Mareta Lopeda</Text>
      </View>
      <View className='absolute w-[435px] h-[500px] bottom-0 mx-4 p-6 bg-white rounded-t-2xl'>
        <TouchableOpacity
          className='flex flex-row items-center justify-between mb-10'
          // onPress={}
        >
          <View className='flex flex-row items-center gap-x-4'>
            <Ionicons name='person-outline' size={25} className='text-yellow'/>
            <Text>Edit Profile</Text>
          </View>
          <Ionicons name='chevron-forward-outline' size={25} className='text-[#8C8C8C]'/>
        </TouchableOpacity>
        <TouchableOpacity
          className='flex flex-row items-center justify-between mb-10'
          // onPress={}
        >
          <View className='flex flex-row items-center gap-x-4'>
            <Ionicons name='list-outline' size={25} className='text-yellow'/>
            <Text>My Recipe</Text>
          </View>
          <Ionicons name='chevron-forward-outline' size={25} className='text-[#8C8C8C]'/>
        </TouchableOpacity>
        <TouchableOpacity
          className='flex flex-row items-center justify-between mb-10'
          // onPress={}
        >
          <View className='flex flex-row items-center gap-x-4'>
            <Ionicons name='bookmark-outline' size={25} className='text-yellow'/>
            <Text>Saved Recipe</Text>
          </View>
          <Ionicons name='chevron-forward-outline' size={25} className='text-[#8C8C8C]'/>
        </TouchableOpacity>
        <TouchableOpacity
          className='flex flex-row items-center justify-between mb-10'
          // onPress={}
        >
          <View className='flex flex-row items-center gap-x-4'>
            <Ionicons name='thumbs-up-outline' size={25} className='text-yellow'/>
            <Text>Liked Recipe</Text>
          </View>
          <Ionicons name='chevron-forward-outline' size={25} className='text-[#8C8C8C]'/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProfileScreen
