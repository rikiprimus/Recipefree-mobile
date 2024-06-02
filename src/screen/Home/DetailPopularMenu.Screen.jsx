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
import Ionicons from "react-native-vector-icons/Ionicons";
import api from "../../util/api";

const DetailPopularMenuScreen = ({ navigation }) => {
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
        const data = await api.get("recipes");
        setPopular(data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching :", error);
      }
    };

    fetchData();
  }, []);

  const renderSeparator = () => <View style={{ height: 25 }} />;

  const renderPopular = ({ item, bookmarked }) => (
    <View>
      <View className="w-full flex flex-row gap-x-4 justify-between items-center">
        <TouchableOpacity
          className="flex flex-row gap-x-4 items-center"
          onPress={() =>
            navigation.navigate("DetailsRecipe", {
              id: item.id,
            })
          }
        >
          <Image
            source={{ uri: item.photo }}
            className="rounded-lg w-[70] h-[70]"
          />
          <View className="w-[120px] flex flex-col gap-y-1">
            <Text className="font-semibold text-xl">{item.title}</Text>
            <View className="flex flex-row items-center gap-x-2">
              <Ionicons name="person-outline" color="orange" size={22} />
              <Text className="font-bold text-blue-grey">{item.name}</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View className="flex flex-row gap-x-4 ">
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

          {item?.liked === false ? (
            <TouchableOpacity
              className="bg-white p-2 border-2 border-yellow rounded-full"
              // onPress={}
            >
              <Ionicons name="thumbs-up-outline" color="orange" size={25} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              className="bg-yellow p-2 border-2 border-yellow rounded-full"
              // onPress={}
            >
              <Ionicons name="thumbs-up-outline" color="white" size={25} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );

  return (
    <View className="w-full flex-1 gap-y-6 bg-white pt-4 px-5">
      {/* Header back  */}
      <View className="flex flex-row justify-start items-center pt-3 px-4">
        <TouchableOpacity
          className="bg-[#F8F8FA] p-4 rounded-lg"
          onPress={() => navigation.navigate("Home")}
        >
          <Ionicons
            name="chevron-back-outline"
            size={25}
            className="text-[#18172B]"
          />
        </TouchableOpacity>
        <Text className="font-semibold text-2xl text-yellow pl-14">
          Popular Menu
        </Text>
      </View>
      {/* file  */}
      {isLoading ? (
        <ActivityIndicator size={30} color="#EFC81A" />
      ) : (
        <FlatList
          data={popular}
          renderItem={renderPopular}
          keyExtractor={(item, index) => index.toString()}
          vertical
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={renderSeparator}
          showsVerticalScrollIndicator={false}
          refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
};

export default DetailPopularMenuScreen;
