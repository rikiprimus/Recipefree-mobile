import React, { useState } from 'react';

import ImageLogin from '../../assets/img-login.png'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../../components/Input'
import { useAuth } from "../../util/authContext";
import ButtonY from '../../components/ButtonY';

const RegistrationScreen = ({navigation}) => {
  const { register } = useAuth();
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    new_password: ''
  });

  const handleInputChange = (name, value) => {
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  const handleSubmit = async () => {
    await register(data);
    navigation.navigate('Login')
  }

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
            value={data.name}
            onChangeText={(value) => handleInputChange('name', value)}
          />
        </View>
        <View>
          <Input 
            placeholder='Email'
            nameicon='mail-outline'
            value={data.email}
            onChangeText={(value) => handleInputChange('email', value)}
          />
        </View>
        <View>
          <Input 
            placeholder='Phone Number'
            nameicon='call-outline'
            value={data.photo}
            onChangeText={(value) => handleInputChange('phone', value)}
          />
        </View>
        <View>
          <Input 
            placeholder='Create New Password'
            nameicon='lock-closed-outline'
            value={data.new_password}
            onChangeText={(value) => handleInputChange('new_password', value)}
            secureTextEntry={true}
          />
        </View>
        <View>
          <Input 
            placeholder='Password'
            nameicon='lock-closed-outline'
            value={data.password}
            onChangeText={(value) => handleInputChange('password', value)}
            secureTextEntry={true}
          />
        </View>
        <View>
          <ButtonY onPress={handleSubmit}>Register</ButtonY>
        </View>
        
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
