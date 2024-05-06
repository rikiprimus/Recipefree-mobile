import React, { useEffect, useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import api from '../../util/api'
import Imghome1 from "../../assets/img-home1.png";
import Imghome2 from "../../assets/img-home2.png";
import Imghome3 from "../../assets/img-home3.png";
import InputHeader from "../../components/InputHeader";

const tag = [
  {
    image: Imghome1,
    title: "Soup",
  },
  {
    image: Imghome2,
    title: "Chicken",
  },
  {
    image: Imghome3,
    title: "Seafood",
  },
  {
    image: Imghome2,
    title: "Dessert",
  },
];

const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [popular, setPopular] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.get('recipes')
        setPopular(data.data)
        setIsLoading(false);
        console.log(data.data)
      } catch (error) {
        console.error('Error fetching isSigned from AsyncStorage:', error);
      }
    };

    fetchData()
    console.log("=======================");
  }, []);

  const renderItemRecipe = ({ item }) => (
    <View>
      <TouchableOpacity
        className="relative flex mb-5 mx-2 shadow-md shadow-dark"
        onPress={() => navigation.navigate("DetailsRecipe", {
            id: item.id,
          })}
      >
        <Image
          source={{ uri: item.photo }}
          className="w-[250px] h-[170px] rounded-lg"
        />
        <Text className="absolute bottom-7 left-5 font-bold text-lg text-white">
          {item.title}
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderItemForYou = ({ item }) => (
    <View>
      <TouchableOpacity 
        className="relative flex mb-20 mx-2 shadow-lg shadow-dark"
        onPress={() => navigation.navigate("DetailsRecipe", {
          id: item.id,
        })}
      >
        <Image
          source={{ uri: item.photo }}
          className="w-[250px] h-[170px] rounded-t-lg rounded-b-xl"
        />
        <View className="absolute w-full bottom-0 rounded-b-lg bg-white px-5 py-4">
          <Text className="font-bold text-lg text-dark">{item.title}</Text>
          <Text className="font-semibold text-md text-dark">
            {item.description}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderSeparator = () => <View style={{ width: 15 }} />;

  const searchRecipe = () => {
    navigation.navigate("Search");
  };

  return (
    <View className="w-full flex-1 items-center gap-y-6 bg-white pt-4 px-5">
      {/* input search  */}
      <View className="w-full pt-3">
        <InputHeader onSubmit={searchRecipe} />
      </View>
        {isLoading ? (
          <ActivityIndicator size={30} color="#EFC81A" />
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            {/* Popular Recipe  */}
            <View className="w-full space-y-4">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-left font-bold text-2xl text-dark">
                  Popular Recipes
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("DetailsPopular")}
                >
                  <Text className="text-left font-bold text-base text-purple">
                    More info
                  </Text>
                </TouchableOpacity>
              </View>
              {/* Carosel popular recipe  */}
              <FlatList
                  data={popular}
                  renderItem={renderItemRecipe}
                  keyExtractor={(item, index) => index.toString()}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  ItemSeparatorComponent={renderSeparator}
                />
            </View>

            {/* New Recipe  */}
            <View className="w-full space-y-4 mb-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-left font-bold text-2xl text-dark">
                  New Recipes
                </Text>
              </View>
              <View className="flex flex-row justify-center gap-x-4">
                {tag.map((item, index) => (
                  <TouchableOpacity key={index} className="flex items-center">
                    <Image source={item.image} style={{ width: 80, height: 80 }} />
                    <Text className="font-bold text-base">{item.title}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            
            {/* Popular for you  */}
            <View className="w-full space-y-2">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-left font-bold text-2xl text-dark">
                  Popular For You
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("DetailsPopular")}
                >
                  <Text className="text-left font-bold text-base text-purple">
                    More info
                  </Text>
                </TouchableOpacity>
              </View>
              {/* Carosel popular recipe  */}
              {isLoading ? (
                <ActivityIndicator size={30} color="#EFC81A" />
              ) : (
                <FlatList
                  data={popular}
                  renderItem={renderItemForYou}
                  keyExtractor={(item, index) => index.toString()}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  ItemSeparatorComponent={renderSeparator}
                />
              )}
            </View>
          </ScrollView>
        )}
    </View>
  );
};

export default HomeScreen;
