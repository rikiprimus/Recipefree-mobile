import React, { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
  ScrollView,
} from "react-native";
import * as ImagePicker from "react-native-image-picker";
import SelectDropdown from "react-native-select-dropdown";
import Input from "../../components/Input";
import ButtonY from "../../components/ButtonY";
import api from "../../util/api";
import { useAuth } from "../../util/authContext";

const UploadRecipeScreen = ({ navigation }) => {
  const { dataUser } = useAuth()
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState();
  const [ingredient, setIngredient] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [message, setMessage] = useState("")
  

  const uploadRecipe = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("ingredient", ingredient);
      formData.append("category_id", categoryId);
      formData.append("users_id", dataUser?.id);
      formData.append("photo", {
        uri: photo?.uri,
        name: photo?.fileName,
        type: photo?.type,
      });

      const res = await api.add("recipes", formData)
      if(res?.status === 201) {
        setTitle("")
        setPhoto()
        setIngredient("")
        setCategoryId("")
        setMessage(res?.message)
        navigation.navigate('Main')
      } else {
        setMessage(res?.message)
      }
    } catch (error) {
      console.error('Gagal membuat resep:', error);
    }
  };

  const category = [
    {
      id: "ad3c939f-6976-4f7f-a477-619ee546c6fb",
      name: "Main Course",
    },
    {
      id: "f9f39283-a5c7-4d13-938e-5506b6fb2d8e",
      name: "Dessert",
    },
    {
      id: "3ef5ca5d-1b01-49c2-840f-a204502fb63d",
      name: "Appetizer",
    },
  ];

  const requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Izin Mengakses Kamera",
          message: "Aplikasi ini memerlukan izin untuk mengakses kamera.",
          buttonNeutral: "Tanyakan Nanti",
          buttonNegative: "Batal",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Izin kamera diberikan");
        console.log(granted);
      } else {
        console.log("Izin kamera ditolak");
        console.log(granted);
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const cameraLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };
    ImagePicker.launchCamera(options, (res) => {
      console.log("response camera ", res);
      if (res.didCancel) {
        console.log("user cancel camera");
      } else if (res.error) {
        console.log("camera error", res.errorMessage);
      } else {
        console.log("camera success");
        setPhoto(res.assets[0]);
      }
    });
  };
  const galleryLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };
    ImagePicker.launchImageLibrary(options, (res) => {
      console.log("response gallery ", res);
      if (res.didCancel) {
        console.log("user cancel gallery");
      } else if (res.error) {
        console.log("gallery error", res.errorMessage);
      } else {
        console.log("gallery success");
        console.log(res);
        setPhoto(res.assets[0]);
      }
    });
  };

  const handlePress = async () => {
    await requestPermission();
    cameraLaunch();
  };

  return (
    <View className="flex-1 items-center gap-y-6 pt-10 px-7 bg-white">
      <Text className="text-2xl font-semibold text-yellow">
        Add Your Recipe
      </Text>
      <ScrollView className="w-full flex flex-col gap-y-6">
        <View>
          <Input
            placeholder="Title"
            nameicon="book-outline"
            value={title}
            onChangeText={setTitle}
          />
        </View>
        <TextInput
          multiline={true}
          numberOfLines={10}
          placeholder={`Ingredients`}
          className="w-full text-base flex flex-row items-start justify-start border-2 border-[#fff] p-4 rounded-lg bg-med-white focus:border-yellow"
          style={{ textAlignVertical: "top" }}
          value={ingredient}
          onChangeText={setIngredient}
        />
        {photo ? (
          <View className="w-full flex items-center">
            <Image source={{ uri: photo?.uri }} className="w-[80px] h-[50px]" />
          </View>
        ) : null}
        {/* Button Add photo  */}
        <View className="w-full bg-med-white rounded-lg">
          <TouchableOpacity className="w-full p-4" onPress={handlePress}>
            <Text className="text-center">Add Photo</Text>
          </TouchableOpacity>
          <View className="border border-[#ffea97]"></View>
          <TouchableOpacity
            className="w-full p-4"
            onPress={() => galleryLaunch()}
          >
            <Text className="text-center">Add From Gallery</Text>
          </TouchableOpacity>
        </View>
        {/* Button Category  */}
        <View className="w-full bg-med-white rounded-lg">
          <SelectDropdown
            data={category}
            onSelect={(selectedItem, index) => {
              // console.log(selectedItem.id);
              setCategoryId(selectedItem.id)
            }}
            renderButton={(selectedItem, isOpened) => {
              return (
                <View>
                  <Text className="w-full p-4 text-center">
                    {(selectedItem && selectedItem.name) || "Select Category"}
                  </Text>
                </View>
              );
            }}
            renderItem={(item, index, isSelected) => {
              return (
                <View>
                  <Text className="w-full p-4 text-center">{item.name}</Text>
                </View>
              );
            }}
            showsVerticalScrollIndicator={false}
            dropdownStyle={{ borderRadius: 8 }}
          />
        </View>
        <View>
          <ButtonY onPress={() => uploadRecipe()}>POST</ButtonY>
        </View>
      </ScrollView>
    </View>
  );
};

export default UploadRecipeScreen;
