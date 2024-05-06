import React, { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import api from "../../util/api";
import axios from "axios";

const DetailResepScreen = ({navigation, route}) => {
  const { id } = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const fetchDataById = async () => {
      try {
        const data = await api.getById("recipes", id);
        setRecipe(data.data);
        setIsLoading(false);
        console.log(data.data);
      } catch (error) {
        console.error("Error fetching By Id :", error);
      }
    };

    fetchDataById();
    console.log("=======================");
  }, []);

  const ingredientData = recipe?.ingredient?.split(', ');

  return (
    <View className="relative flex-1 items-center justify-center bg-white">
      {isLoading ? (
        <ActivityIndicator size={30} color='#EFC81A' />
      ) : (
        <View className="relative flex-1 items-center bg-white">
          <Image source={{uri:recipe?.photo}} className='w-[600px] h-[400px]'/>
          <View className='absolute top-[230px] w-full flex flex-row items-end justify-between px-10'>
            <View className='flex flex-col '>
              <Text className='font-extrabold text-[35px] text-white'>{recipe?.title}</Text>
              <Text className='font-bold text-base text-grey'>by {recipe?.name}</Text>
            </View>
            <View className="flex flex-row gap-x-5 ">
              {recipe?.bookmarked === false ? (
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

              {recipe?.liked === false ? (
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
              {ingredientData?.map((item, index) => (
                <Text key={index} className='font-bold text-base text-text-grey'>- {item}</Text>
              ))}
            </View>
          </View>
        </View>
      )}
      
    </View>
  )
}

export default DetailResepScreen
