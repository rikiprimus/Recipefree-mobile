import React from 'react';

import ImageLogin from '../../assets/img-login.png'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../../components/Input'

const ForgotPasswordScreen = ({navigation}) => {
  return (
    <View className='flex-1 items-center gap-6 pt-28 px-10 bg-white'>
      <Image source={ImageLogin} style={{width: 180, height: 180}} />
      <View className='flex flex-col items-center'>
        <Text className='text-xl font-semibold text-yellow'>Forgot Password?</Text>
        <Text className='w-[270px] text-grey text-center'>We just need your registered e-mail addres
to send your password reset</Text>
      </View>

      <View className='w-full flex flex-col gap-y-6'>
        <View>
          <Input 
            placeholder='examplexxx@gmail.com'
            nameicon='person-outline'
          />
        </View>
        <TouchableOpacity
          className='flex items-center p-4 rounded-lg bg-yellow'
          onPress={() => navigation.navigate('ResetPassword')}
        >
          <Text className='text-base font-bold text-[#fff]'>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ForgotPasswordScreen
