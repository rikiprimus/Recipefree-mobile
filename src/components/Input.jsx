import React from 'react'
import { View, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Input = ({placeholder, nameicon}) => {
  return (
    <View className='relative w-full '>
      <TextInput
        placeholder={placeholder}
        className='w-full p-4 border-2 border-[#fff] rounded-lg bg-med-white placeholder:pl-16 focus:border-yellow'
      >
      </TextInput>
      <Ionicons 
        name={nameicon}
        size={25} 
        color='#C4C4C4' 
        className='absolute py-3 pl-5 pr-3 top-2'
      />
    </View>
  )
}

export default Input
