import React from 'react';

import ImageLogin from '../../assets/img-login.png'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../../components/Input'

const RegistrationScreen = ({navigation}) => {
  return (
    <View className='flex-1 items-center gap-6 pt-10 px-10 bg-white'>
      <View className='flex flex-col items-center'>
        <Text className='text-2xl font-semibold text-yellow'>Let’s Get Started !</Text>
        <Text className='text-grey'>Create new account to access all feautures</Text>
      </View>

      <View className='w-full flex flex-col gap-y-6'>
        <View>
          <Input 
            placeholder='Name'
            nameicon='person-outline'
          />
        </View>
        <View>
          <Input 
            placeholder='Email'
            nameicon='mail-outline'
          />
        </View>
        <View>
          <Input 
            placeholder='Phone Number'
            nameicon='call-outline'
          />
        </View>
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
          <Text className='text-base font-bold text-[#fff]'>Sign Up</Text>
        </TouchableOpacity>

        <View className='flex flex-row items-center justify-center'>
          <Text className='text-text-grey'>Already have account? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
          >
            <Text className='text-yellow'>Log in Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default RegistrationScreen
