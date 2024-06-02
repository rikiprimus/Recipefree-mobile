import React from "react";
import { View, Text } from "react-native";

const Alert = ({ message }) => {
  return (
    <View>
      {message? (
        <View className="px-5 py-3 bg-[#f87171] border-2 border-[#ef4444] rounded-xl">
          <Text className="text-center text-white">{message}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default Alert;
