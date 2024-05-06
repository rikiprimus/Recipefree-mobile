import React, { useState } from "react";

import ImageLogin from "../../assets/img-login.png";
import { Text, View, Image, TouchableOpacity } from "react-native";
import Input from "../../components/Input";
import { useAuth } from "../../util/authContext";
import ButtonY from "../../components/ButtonY";

const LoginScreen = ({ navigation }) => {
  const { login } = useAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (name, value) => {
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    await login(data);
  };

  return (
    <View className="flex-1 items-center gap-6 pt-10 px-10 bg-white">
      <Image source={ImageLogin} style={{ width: 180, height: 180 }} />
      <View className="flex flex-col items-center">
        <Text className="text-xl font-semibold text-yellow">Welcome !</Text>
        <Text className="text-grey">Log in to your exiting account.</Text>
      </View>

      <View className="w-full flex flex-col gap-y-6">
        <View>
          <Input
            placeholder="examplexxx@gmail.com"
            nameicon="person-outline"
            value={data.email}
            onChangeText={(value) => handleInputChange("email", value)}
          />
        </View>
        <View>
          <Input
            placeholder="Password"
            nameicon="lock-closed-outline"
            value={data.password}
            onChangeText={(value) => handleInputChange("password", value)}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text className="text-text-grey text-right">Forgot Password ?</Text>
        </TouchableOpacity>
        <View>
          <ButtonY onPress={handleSubmit}>Log in</ButtonY>
        </View>

        <View className="flex flex-row items-center justify-center">
          <Text className="text-text-grey">Don’t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
            <Text className="text-yellow">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
