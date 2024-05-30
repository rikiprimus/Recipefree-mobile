import React, { useState } from "react";

import ImageLogin from "../../assets/img-login.png";
import { Text, View, Image } from "react-native";
import Input from "../../components/Input";
import { useAuth } from "../../util/authContext";
import Alert from "../../components/Alert";
import ButtonY from "../../components/ButtonY";

const ForgotPasswordScreen = ({ navigation }) => {
  const { sendPin, message } = useAuth();
  const [data, setData] = useState({
    email: "",
  });

  const handleInputChange = (name, value) => {
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePress = async () => {
    const res = await sendPin(data);
    if (res.status === 201) {
      navigation.navigate("Code");
    } else {
      setData((prevData) => ({
        ...prevData,
        email: "",
      }));
    }
  };

  return (
    <View className="flex-1 items-center gap-6 pt-28 px-10 bg-white">
      <View>
        <Alert message={message} />
      </View>
      <Image source={ImageLogin} style={{ width: 180, height: 180 }} />
      <View className="flex flex-col items-center">
        <Text className="text-xl font-semibold text-yellow">
          Forgot Password?
        </Text>
        <Text className="w-[270px] text-grey text-center">
          We just need your registered e-mail addres to send your password reset
        </Text>
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
          <ButtonY onPress={handlePress}>Send Email</ButtonY>
        </View>
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;
