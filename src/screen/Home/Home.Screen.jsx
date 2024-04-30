import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image, FlatList } from 'react-native';
// import Carousel from 'react-native-reanimated-carousel';
import Imghome1 from '../../assets/img-home1.png';
import Imghome2 from '../../assets/img-home2.png';
import Imghome3 from '../../assets/img-home3.png';
import Apple from '../../assets/appleflap.jpg';
import AyamMadu from '../../assets/ayamkecap.jpg';
import AyamKecap from '../../assets/ayammadu.jpg';
import Bihun from '../../assets/Bihun.jpg';
import Bruscheta from '../../assets/bruscheta.jpg';
import Pizza from '../../assets/pizza.jpg';
import InputHeader from '../../components/InputHeader';

const popular = [
  {
    image: Imghome1,
    title: 'Soup'
  },
  {
    image: Imghome2,
    title: 'Chicken'
  },
  {
    image: Imghome3,
    title: 'Seafood'
  },
  {
    image: Imghome2,
    title: 'Dessert'
  },
]

const recipe = [
  {
    image: Apple,
    title: 'Apple Flap',
    description: 'Ingredient'
  },
  {
    image: Apple,
    title: 'Apple Flap',
    description: 'Ingredient'
  },
  {
    image: Apple,
    title: 'Apple Flap',
    description: 'Ingredient'
  },
  {
    image: Apple,
    title: 'Apple Flap',
    description: 'Ingredient'
  },
  {
    image: Apple,
    title: 'Apple Flap',
    description: 'Ingredient'
  },
]

const HomeScreen = ({navigation}) => {

  const renderItemRecipe = ({ item }) => (
    <View>
      <TouchableOpacity
        className='relative flex mb-5 mx-2 shadow-md shadow-dark'
      >
        <Image source={item.image} className='w-[250px] h-[170px] rounded-lg' />
        <Text className='absolute bottom-7 left-5 font-bold text-lg text-white'>{item.title}</Text>
      </TouchableOpacity>
  </View>
  );

  const renderItemForYou = ({ item }) => (
    <View>
      <TouchableOpacity
        className='relative flex mb-20 mx-2 shadow-md shadow-dark'
      >
        <Image source={item.image} className='w-[250px] h-[170px] rounded-t-lg rounded-b-xl'/>
        <View className='absolute w-full bottom-0 rounded-b-lg bg-white px-5 py-4'>
          <Text className='font-bold text-lg text-dark'>{item.title}</Text>
          <Text className='font-semibold text-md text-dark'>{item.description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderSeparator = () => <View style={{ width: 15 }} />

  const searchRecipe = () => {
    navigation.navigate('Search')
  }

  return (
    <View className="w-full flex-1 items-center gap-y-6 bg-white pt-4 px-5">
      {/* input search  */}
      <View className='w-full pt-3'>
        <InputHeader onSubmit={searchRecipe} />
      </View>
      {/* Popular Recipe  */}
      <View className='w-full space-y-4'>
        <View className='flex flex-row items-center justify-between'>
          <Text className='text-left font-bold text-2xl text-dark'>Popular Recipes</Text>
          <TouchableOpacity onPress={() => navigation.navigate('DetailsPopular')}>
            <Text className='text-left font-bold text-base text-purple'>More info</Text>
          </TouchableOpacity>
        </View>
        {/* Carosel popular recipe  */}
        <FlatList
          data={recipe}
          renderItem={renderItemRecipe}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>

      {/* New Recipe  */}
      <View className='w-full space-y-4 mb-5'>
        <View className='flex flex-row items-center justify-between'>
          <Text className='text-left font-bold text-2xl text-dark'>New Recipes</Text>
          <TouchableOpacity onPress={() => navigation.navigate('DetailsPopular')}>
            <Text className='text-left font-bold text-base text-purple'>More info</Text>
          </TouchableOpacity>
        </View>
        <View className='flex flex-row justify-center gap-x-4'>
          {popular.map((item, index) => (
            <TouchableOpacity 
              key={index}
              className='flex items-center'
            >
              <Image source={item.image} style={{width: 90, height: 90}} />
              <Text className='font-bold text-base'>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Popular for you  */}
      <View className='w-full space-y-4'>
        <View className='flex flex-row items-center justify-between'>
          <Text className='text-left font-bold text-2xl text-dark'>Popular For You</Text>
          <TouchableOpacity onPress={() => navigation.navigate('DetailsPopular')}>
            <Text className='text-left font-bold text-base text-purple'>More info</Text>
          </TouchableOpacity>
        </View>
        {/* Carosel popular recipe  */}
        <FlatList
          data={recipe}
          renderItem={renderItemForYou}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
    </View>
  )
}

export default HomeScreen
