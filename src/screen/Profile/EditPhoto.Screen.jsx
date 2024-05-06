import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import profile from '../../assets/photo-profile.png';
import Ionicons from "react-native-vector-icons/Ionicons";

const EditPhotoScreen = ({navigation}) => {
  return (
    <View className="w-full flex-1 items-center justify-center gap-y-6 bg-white pt-4 px-5">
      <Image source={profile} className='w-[90px] h-[90px] rounded-full' />
      <View className="w-full flex-col px-5 bg-[#E7E7E7] rounded-xl">
        <TouchableOpacity onPress={() => navigation.navigate("EditPhoto")} className='w-full pt-3 pb-2'>
          <Text className="text-base text-center">Photo Library</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("EditPhoto")} className='w-full pb-3 pt-2'>
          <Text className="text-base text-center">Take Photo</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("EditProfile")} className='w-full py-2 rounded-xl bg-[#E7E7E7]'>
        <Text className="font-semibold text-base text-center">Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditPhotoScreen;
