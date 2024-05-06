import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

const EditProfileScreen = ({navigation}) => {
  return (
    <View className="w-full flex-1 gap-y-6 bg-white pt-4 px-5">
      {/* Header back  */}
      <View className="flex flex-row justify-start items-center pt-3 px-4">
        <TouchableOpacity 
          className='bg-[#F8F8FA] p-4 rounded'
          onPress={() => navigation.goBack()}  
        >
          <Ionicons name="chevron-back-outline" size={25} className='text-[#18172B]' />
        </TouchableOpacity>
        <Text className='font-semibold text-2xl text-yellow pl-12'>Edit Profile</Text>
      </View>
      {/* List Edit Profile  */}
      <View className='w-full flex flex-col gap-y-3 px-5'>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditPhoto')}
        >
          <Text className='text-base'>Change Profile Picture</Text>
        </TouchableOpacity>
        <View className='w-full border-[0.8px] border-[#E7E7E7]'></View>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditPassword')}
        >
          <Text className='text-base'>Change Password</Text>
        </TouchableOpacity>
        <View className='w-full border-[0.8px] border-[#E7E7E7]'></View>
      </View>
    </View>
  )
}

export default EditProfileScreen
