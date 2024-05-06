import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Input from "../../components/Input";

const EditPasswordScreen = ({ navigation }) => {
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
          <Input placeholder="Old Password" nameicon="lock-closed-outline" />
        </View>
        <View>
          <Input placeholder="New Password" nameicon="lock-closed-outline" />
        </View>
        <View>
          <Input
            placeholder="Confirm Password"
            nameicon="lock-closed-outline"
          />
        </View>
      </View>
      <TouchableOpacity
        className="flex items-center p-4 rounded-lg bg-yellow"
        onPress={() => navigation.navigate("MyProfile")}
      >
        <Text className="text-base font-bold text-[#fff]">Change Password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditPasswordScreen;
