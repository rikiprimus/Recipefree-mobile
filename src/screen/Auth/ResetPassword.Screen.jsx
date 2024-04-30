import React from 'react';

import ImageLogin from '../../assets/img-login.png'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../../components/Input'

const ResetPasswordScreen = ({navigation}) => {
  return (
    <View className='flex-1 items-center gap-6 pt-28 px-10 bg-white'>
      <Image source={ImageLogin} style={{width: 180, height: 180}} />

      <View className='w-full flex flex-col gap-y-6'>
        <View>
          <Input 
            placeholder='Create New Password'
            nameicon='lock-closed-outline'
          />
        </View>
        <View>
          <Input 
            placeholder='Password'
            nameicon='lock-closed-outline'
          />
        </View>
        <TouchableOpacity
          className='flex items-center p-4 rounded-lg bg-yellow'
          onPress={() => navigation.navigate('Login')}
        >
          <Text className='text-base font-bold text-[#fff]'>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ResetPasswordScreen
