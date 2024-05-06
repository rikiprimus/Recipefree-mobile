import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import InputHeader from "../../components/InputHeader";
import Pizza from "../../assets/pizza.jpg";
import Ionicons from "react-native-vector-icons/Ionicons";
import useSearchData from "../../util/useSearchData";

const SearchScreen = ({navigation}) => {
  const { dataSearch, isLoading, setIsLoading } = useSearchData();

  const onRefresh = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Contoh: menghentikan tanda loading setelah 2 detik
  };

  console.log(dataSearch)
  
  const renderSeparator = () => <View style={{ height: 25 }} />;

  const renderSearch = ({ item }) => (
    <View>
      <TouchableOpacity 
        className="w-full flex flex-row gap-x-4 items-center"
        onPress={() => navigation.navigate("DetailsRecipe", {
          id: item.id,
        })}
      >
        <Image source={{uri: item.photo}} className="rounded-lg w-[70] h-[70]" />
        <View className="flex flex-col gap-y-1">
          <Text className="font-semibold text-lg">{item.title}</Text>
          <View className="flex flex-row items-center gap-x-2">
            <Ionicons name="star" color="orange" size={15} />
            {/* <Text className="font-semibold">{item.rating}</Text> */}
            <Text className="font-semibold">4.5</Text>
            <Text className="font-bold text-blue-grey">- {item.tag}</Text>
            <Text className="font-bold text-blue-grey">- Spicy</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  const onSubmitSearch = async () => {
    onRefresh()
  }

  return (
    <View className="w-full flex-1 items-center gap-y-6 bg-white pt-4 px-5">
      {/* input search  */}
      <View className="w-full pt-3">
        <InputHeader onSubmit={onSubmitSearch} />
      </View>
      {/* file  */}
      <View className="w-full">
        {isLoading? (
          <ActivityIndicator size={30} color="#EFC81A" />
        ) : (
          <FlatList
            data={dataSearch}
            renderItem={renderSearch}
            keyExtractor={(item, index) => index.toString()}
            vertical
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={renderSeparator}
          />
        )}
      </View>
    </View>
  );
};

export default SearchScreen;
