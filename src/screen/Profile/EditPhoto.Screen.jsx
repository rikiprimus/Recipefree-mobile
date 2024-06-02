import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
  ScrollView,
} from "react-native";
import profile from "../../assets/photo-profile.png";
import { useAuth } from "../../util/authContext";
import * as ImagePicker from "react-native-image-picker";
import axios from "axios";
import api from "../../util/api";

const EditPhotoScreen = ({ navigation }) => {
  const { dataUser, setDataUser } = useAuth();
  const [dataPhoto, setDataPhoto] = useState(null);
  const [photo, setPhoto] = useState(null);

  const getDataById = async () => {
    try {
      const res = await api.getById("users", dataUser.id, dataUser.token);
      setDataUser(res.data);
      setPhoto(res.data.photo_profile);
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

  useEffect(() => {
    setPhoto(dataUser.photo_profile);
  }, [dataUser]);

  const handleChangePhoto = async () => {
    const res = await api.updatephoto(
      "users",
      dataPhoto,
      dataUser.id,
      dataUser.token
    );
    if(res?.code === 201) {
      await getDataById();
      navigation.navigate("EditProfile")
    } else {
      await getDataById();
    }
  };

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
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const cameraLaunch = async () => {
    if (await requestPermission()) {
      let options = {
        storageOptions: {
          skipBackup: true,
          path: "images",
        },
      };
      ImagePicker.launchCamera(options, (res) => {
        if (res.didCancel) {
          console.log("User cancelled camera");
        } else if (res.errorCode) {
          console.log("Camera error", res.errorMessage);
        } else {
          setDataPhoto(res.assets[0]);
          setPhoto(res.assets[0].uri);
        }
      });
    } else {
      console.log("Camera permission denied");
    }
  };

  const galleryLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };
    ImagePicker.launchImageLibrary(options, (res) => {
      if (res.didCancel) {
        console.log("User cancelled gallery");
      } else if (res.errorCode) {
        console.log("Gallery error", res.errorMessage);
      } else {
        setDataPhoto(res.assets[0]);
        setPhoto(res.assets[0].uri);
      }
    });
  };

  return (
    <View className="w-full flex-1 items-center justify-center gap-y-6 bg-white pt-4 px-5">
      {photo && (
        <View className="w-full flex items-center">
          <Image
            source={{ uri: photo }}
            className="w-[80px] h-[80px] rounded-full"
          />
        </View>
      )}

      <View className="w-full flex flex-col px-5 bg-[#E7E7E7] rounded-xl">
        {/* Button Add photo & gallery  */}
        <TouchableOpacity className="w-full p-4" onPress={cameraLaunch}>
          <Text className="text-center">Add Photo</Text>
        </TouchableOpacity>
        <View className="border border-grey"></View>
        <TouchableOpacity className="w-full p-4" onPress={galleryLaunch}>
          <Text className="text-center">Add From Gallery</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={handleChangePhoto}
        className="w-full py-4 rounded-xl bg-[#E7E7E7]"
      >
        <Text className="font-semibold text-base text-center">Save</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("EditProfile")}
        className="w-full py-4 rounded-xl bg-[#E7E7E7]"
      >
        <Text className="font-semibold text-base text-center">Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditPhotoScreen;
