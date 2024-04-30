import React from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import InputHeader from "../../components/InputHeader";
import Imghome1 from "../../assets/img-home1.png";
import Imghome2 from "../../assets/img-home2.png";
import Imghome3 from "../../assets/img-home3.png";
import Apple from "../../assets/appleflap.jpg";
import AyamMadu from "../../assets/ayamkecap.jpg";
import AyamKecap from "../../assets/ayammadu.jpg";
import Bihun from "../../assets/Bihun.jpg";
import Bruscheta from "../../assets/bruscheta.jpg";
import Pizza from "../../assets/pizza.jpg";
import Ionicons from "react-native-vector-icons/Ionicons";

const SearchScreen = () => {
  const searchResult = [
    {
      image: Pizza,
      title: "Pizza",
      rating: "4.3",
      tag: "Breakfast",
    },
    {
      image: Pizza,
      title: "Pizza",
      rating: "4.3",
      tag: "Breakfast",
    },
    {
      image: Pizza,
      title: "Pizza",
      rating: "4.3",
      tag: "Breakfast",
    },
    {
      image: Pizza,
      title: "Pizza",
      rating: "4.3",
      tag: "Breakfast",
    },
    {
      image: Pizza,
      title: "Pizza",
      rating: "4.3",
      tag: "Breakfast",
    },
    {
      image: Pizza,
      title: "Pizza",
      rating: "4.3",
      tag: "Breakfast",
    },
    {
      image: Pizza,
      title: "Pizza",
      rating: "4.3",
      tag: "Breakfast",
    },
    {
      image: Pizza,
      title: "Pizza",
      rating: "4.3",
      tag: "Breakfast",
    },
    {
      image: Pizza,
      title: "Pizza",
      rating: "4.3",
      tag: "Breakfast",
    },
    {
      image: Pizza,
      title: "Pizza",
      rating: "4.3",
      tag: "Breakfast",
    },
    {
      image: Pizza,
      title: "Pizza",
      rating: "4.3",
      tag: "Breakfast",
    },
    {
      image: Pizza,
      title: "Pizza",
      rating: "4.3",
      tag: "Breakfast",
    },
    {
      image: Pizza,
      title: "Pizza",
      rating: "4.3",
      tag: "Breakfast",
    },
  ];
  const renderSeparator = () => <View style={{ height: 25 }} />

  const renderSearch = ({ item }) => (
    <View>
      <TouchableOpacity className="w-full flex flex-row gap-x-4 items-center">
        <Image source={item.image} className="rounded-lg w-[70] h-[70]" />
        <View className="flex flex-col gap-y-1">
          <Text className="font-semibold text-lg">{item.title}</Text>
          <View className="flex flex-row items-center gap-x-2">
            <Ionicons name="star" color="orange" size={15} />
            <Text className="font-semibold">{item.rating}</Text>
            <Text className="font-bold text-blue-grey">- {item.tag}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View className="w-full flex-1 items-center gap-y-6 bg-white pt-4 px-5">
      {/* input search  */}
      <View className="w-full pt-3">
        <InputHeader />
      </View>
      {/* file  */}
      <View className='w-full'>
        <FlatList
          data={searchResult}
          renderItem={renderSearch}
          keyExtractor={(item, index) => index.toString()}
          vertical
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
    </View>
  );
};

export default SearchScreen;
