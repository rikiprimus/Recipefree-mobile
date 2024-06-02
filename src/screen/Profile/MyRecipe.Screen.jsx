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
import axios from "axios";
import { useAuth } from "../../util/authContext";
import api from "../../util/api";

const MyRecipeScreen = ({ navigation }) => {
  const { dataUser } = useAuth();
  const [popular, setPopular] = useState([]);

  const getDataById = async () => {
    const res = await api.getById("recipes/user", dataUser.id);
    setPopular(res.data);
  };

  useEffect(() => {
    getDataById();
  }, [dataUser]);

  const handleDelete = async (id) => {
    await api.delete('recipes', id)
    await getDataById()
  }

  const renderSeparator = () => <View style={{ height: 25 }} />;

  const renderPopular = ({ item, bookmarked }) => (
    <View>
      <View className="w-full flex flex-row gap-x-4 justify-between items-center">
        <TouchableOpacity
          className="w-[270px] flex flex-row gap-x-4 items-center"
          onPress={() => navigation.navigate("DetailsRecipe", {
            id: item.id,
          })}
        >
          <Image
            source={{ uri: item.photo }}
            className="rounded-lg w-[70] h-[70]"
          />
          <View className="flex flex-col gap-y-1">
            <Text className="font-semibold text-xl">{item.title}</Text>
            <View className="flex flex-row items-center gap-x-2">
              <Ionicons name="person-outline" color="orange" size={22} />
              <Text className="font-bold text-blue-grey">{item.name}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View className="flex flex-col gap-y-2">
          <TouchableOpacity
            className="flex items-center px-4 py-2 rounded-lg bg-[#30C0F3]"
            // onPress={} // Menggunakan handlePress yang sudah dimodifikasi
          >
            <Text className="text-base font-bold text-[#fff]">Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex items-center px-4 py-2 rounded-lg bg-[#F57E71]"
            onPress={() => handleDelete(item.id)}
          >
            <Text className="text-base font-bold text-[#fff]">Delete</Text>
          </TouchableOpacity>
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
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="chevron-back-outline"
            size={25}
            className="text-[#18172B]"
          />
        </TouchableOpacity>
        <Text className="font-semibold text-2xl text-yellow pl-14">
          My Recipes
        </Text>
      </View>
      {/* file  */}
      <View className="w-full">
        {popular.length >= 1 ? (
          <FlatList
            data={popular}
            renderItem={renderPopular}
            keyExtractor={(item, index) => index.toString()}
            vertical
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={renderSeparator}
          />
        ) : (
          <View className="h-[500px] flex items-center justify-center">
            <Text className="font-semibold text-lg text-yellow">
              Kamu belum memiliki recipe...
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default MyRecipeScreen;
