import React from 'react';

import ImageLogin from '../../assets/img-login.png'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../../components/Input'


const LoginScreen = ({navigation}) => {
  return (
    <View className='flex-1 items-center gap-6 pt-10 px-10 bg-white'>
      <Image source={ImageLogin} style={{width: 180, height: 180}} />
      <View className='flex flex-col items-center'>
        <Text className='text-xl font-semibold text-yellow'>Welcome !</Text>
        <Text className='text-grey'>Log in to your exiting account.</Text>
      </View>

      <View className='w-full flex flex-col gap-y-6'>
        <View>
          <Input 
            placeholder='examplexxx@gmail.com'
            nameicon='person-outline'
          />
        </View>
        <View>
          <Input 
            placeholder='Password'
            nameicon='lock-closed-outline'
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPassword')}
        >
          <Text className='text-text-grey text-right'>Forgot Password ?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className='flex items-center p-4 rounded-lg bg-yellow'
          onPress={() => navigation.navigate('Home')}
        >
          <Text className='text-base font-bold text-[#fff]'>Log in</Text>
        </TouchableOpacity>

        <View className='flex flex-row items-center justify-center'>
          <Text className='text-text-grey'>Don’t have an account? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Registration')}
          >
            <Text className='text-yellow'>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default LoginScreen
