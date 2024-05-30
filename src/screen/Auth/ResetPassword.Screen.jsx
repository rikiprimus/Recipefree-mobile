import React, { useState } from "react";

import ImageLogin from "../../assets/img-login.png";
import { View, Image, } from "react-native";
import Input from "../../components/Input";
import { useAuth } from "../../util/authContext";
import ButtonY from "../../components/ButtonY";

const ResetPasswordScreen = ({ navigation }) => {
  const { changePassword, message, email } = useAuth();
  const [data, setData] = useState({
    email: email,
    password: "",
    confirmpassword: "",
  });

  const handleInputChange = (name, value) => {
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(data)
  };

  const handlePress = async () => {
    const res = await changePassword(data);
    if (res.status === 201) {
      navigation.navigate("Login");
    } else {
      setData((prevData) => ({
        ...prevData,
        password: "",
        confirmpassword: "",
      }));
    }
  };

  return (
    <View className="flex-1 items-center gap-6 pt-28 px-10 bg-white">
      <Image source={ImageLogin} style={{ width: 180, height: 180 }} />

      <View className="w-full flex flex-col gap-y-6">
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
        <View>
          <ButtonY onPress={handlePress}>Reset Password</ButtonY>
        </View>
      </View>
    </View>
  );
};

export default ResetPasswordScreen;
