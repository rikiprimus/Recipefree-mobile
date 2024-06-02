import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Input from "../../components/Input";
import { useAuth } from "../../util/authContext";
import ButtonY from "../../components/ButtonY";

const EditPasswordScreen = ({ navigation }) => {
  const { changePassword, logout, dataUser } = useAuth();
  const [data, setData] = useState({
    email: dataUser.email,
    password: "",
    confirmpassword: "",
  });

  const handleInputChange = (name, value) => {
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePress = async () => {
    const res = await changePassword(data);
    if (res.status === 201) {
      logout()
    } else {
      setData((prevData) => ({
        ...prevData,
        password: "",
        confirmpassword: "",
      }));
    }
  };

  return (
    <View className="w-full flex-1 gap-y-6 bg-white pt-4 px-5">
      {/* Header back  */}
      <View className="flex flex-row justify-start items-center pt-3 px-4">
        <TouchableOpacity
          className="bg-[#F8F8FA] p-4 rounded-lg"
          onPress={() => navigation.navigate("EditProfile")}
        >
          <Ionicons
            name="chevron-back-outline"
            size={25}
            className="text-[#18172B]"
          />
        </TouchableOpacity>
        <Text className="font-semibold text-2xl text-yellow pl-8">
          Change Password
        </Text>
      </View>
      {/* Input Password  */}
      <View className="flex flex-col gap-y-4">
        <View>
          <Input
            placeholder="Create New Password"
            nameicon="lock-closed-outline"
            value={data.password}
            onChangeText={(value) => handleInputChange("password", value)}
            secureTextEntry={true}
          />
        </View>
        <View>
          <Input
            placeholder="Password"
            nameicon="lock-closed-outline"
            value={data.confirmpassword}
            onChangeText={(value) =>
              handleInputChange("confirmpassword", value)
            }
            secureTextEntry={true}
          />
        </View>
      </View>
      <View>
        <ButtonY onPress={handlePress}>Change Password</ButtonY>
      </View>
    </View>
  );
};

export default EditPasswordScreen;
