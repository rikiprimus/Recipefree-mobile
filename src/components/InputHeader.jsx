import React, { useState } from "react";
import { TextInput, View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const InputHeader = ({ onPress, onSubmit }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <View className="w-full flex flex-col gap-y-6">
      <TextInput
        className="w-full p-4 border-2 border-[#fff] rounded-lg bg-med-white placeholder:pl-16 focus:border-yellow"
        placeholder="Search Pasta, Bread, etc"
        value={searchText}
        onChangeText={(textInput) => setSearchText(textInput)}
        onSubmitEditing={onSubmit}
      />
      <Ionicons
        name="search"
        size={25}
        color="#C4C4C4"
        className="absolute py-3 pl-5 pr-3 top-2"
      />
    </View>
  );
};

export default InputHeader;
