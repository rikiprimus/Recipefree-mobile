import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  TouchableHighlight,
} from "react-native";
import Pizza from "../../assets/pizza.jpg";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from 'axios';

const SavedRecipeScreen = ({navigation}) => {
  const base_url = "https://recipefree.vercel.app";
  const [popular, setPopular] = useState([])
  async function getData () {
    try {
      let res = await axios.get(`${base_url}/recipes`)
      console.log(res.data.data)
      setPopular(res.data.data)
    } catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
    console.log('=======================')
  }, [])

  const renderSeparator = () => <View style={{ height: 25 }} />;

  const renderPopular = ({ item, bookmarked }) => (
    <View>
      <View className="w-full flex flex-row gap-x-4 justify-between items-center">
        <TouchableOpacity 
          className="w-[300px] flex flex-row gap-x-4 items-center"
          onPress={() => navigation.navigate('DetailsRecipe')}
        >
          <Image source={{ uri: item.photo }} className="rounded-lg w-[70] h-[70]" />
          <View className="flex flex-col gap-y-1">
            <Text className="font-semibold text-xl">{item.title}</Text>
            <View className="flex flex-row items-center gap-x-2">
              <Ionicons name="person-outline" color="orange" size={22} />
              <Text className="font-bold text-blue-grey">{item.name}</Text>
            </View>
          </View>
        </TouchableOpacity>

        {item?.bookmarked === false ? (
            <TouchableOpacity
              className="bg-white p-2 border-2 border-yellow rounded-full"
              // onPress={}
            >
              <Ionicons name="bookmark-outline" color="orange" size={25} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              className="bg-yellow p-2 border-2 border-yellow rounded-full"
              // onPress={}
            >
              <Ionicons name="bookmark-outline" color="white" size={25} />
            </TouchableOpacity>
          )}
      </View>
    </View>
  );

  return (
    <View className="w-full flex-1 gap-y-6 bg-white pt-4 px-5">
      {/* Header back  */}
      <View className="flex flex-row justify-start items-center pt-3 px-4">
        <TouchableOpacity 
          className='bg-[#F8F8FA] p-4 rounded-lg'
          onPress={() => navigation.goBack()}  
        >
          <Ionicons name="chevron-back-outline" size={25} className='text-[#18172B]' />
        </TouchableOpacity>
        <Text className='font-semibold text-2xl text-yellow pl-8'>Saved Recipes</Text>
      </View>
      {/* file  */}
      <View className="w-full">
        <FlatList
          data={popular}
          renderItem={renderPopular}
          keyExtractor={(item, index) => index.toString()}
          vertical
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
    </View>
  )
}

export default SavedRecipeScreen
