import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import Pizza from '../../assets/pizza.jpg';

const DetailResepScreen = ({navigation}) => {
  const dataRecipe = {
    image: Pizza,
    title: 'Pizza',
    ingredient: "Puff pastry dough, Apples, Sugar,  Cinnamon, Lemon juice, flour, Egg",
    user_name: 'Bianca',
    bookmarked: true,
    liked: false,
  }
  const ingredientData = dataRecipe.ingredient.split(', ');

  return (
    <View className="relative flex-1 items-center bg-white">
      <Image source={dataRecipe.image} className='w-[700px] h-[500px]'/>
      <View className='absolute top-[300px] w-full flex flex-row items-end justify-between px-10'>
        <View className='flex flex-col '>
          <Text className='font-extrabold text-[35px] text-white'>{dataRecipe.title}</Text>
          <Text className='font-bold text-base text-grey'>by {dataRecipe.user_name}</Text>
        </View>
        <View className="flex flex-row gap-x-5 ">
          {dataRecipe.bookmarked === false ? (
            <TouchableOpacity
              className="bg-white p-3 rounded-full"
              // onPress={}
            >
              <Ionicons name="bookmark-outline" color="orange" size={25} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              className="bg-yellow p-3 rounded-full"
              // onPress={}
            >
              <Ionicons name="bookmark-outline" color="white" size={25} />
            </TouchableOpacity>
          )}

          {dataRecipe.liked === false ? (
            <TouchableOpacity 
              className="bg-white p-3 rounded-full"
              // onPress={}
            >
              <Ionicons name="thumbs-up-outline" color="orange" size={25} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity 
              className="bg-yellow p-3 rounded-full"
              // onPress={}
            >
              <Ionicons name="thumbs-up-outline" color="white" size={25} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View className='absolute bottom-0 w-full flex items-start bg-white rounded-t-3xl h-[420px] p-10'>
        <View className='flex flex-col items-center mb-6'>
          <Text className='font-semibold text-xl'>Ingredients</Text>
          <View className='w-[20] border-t-2 border-yellow'></View>
        </View>
        <View className='w-full bg-[#FAF7ED] rounded-xl p-3 '>
          {ingredientData.map((item, index) => (
            <Text key={index} className='font-bold text-base text-text-grey'>- {item}</Text>
          ))}
        </View>
      </View>
      
    </View>
  )
}

export default DetailResepScreen
