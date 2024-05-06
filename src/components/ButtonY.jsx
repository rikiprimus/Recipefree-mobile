import React, { useState } from "react";
import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";

const ButtonY = ({ children, onPress }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = async () => {
    setIsLoading(true);
    await onPress();
    setIsLoading(false);
  };

  return (
    <View>
      <TouchableOpacity
        className="flex items-center p-4 rounded-lg bg-yellow"
        onPress={handlePress} // Menggunakan handlePress yang sudah dimodifikasi
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-base font-bold text-[#fff]">{children}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ButtonY;
