import React from "react";
import { TextInput, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const InputHeader = ({ onSubmit, navigation }) => {
  const [searchText, setSearchText] = React.useState("");

  const handleSubmit = () => {
    onSubmit(searchText);
    if (navigation) {
      navigation.navigate("Search");
    }
  };

  return (
    <View className="w-full flex flex-col gap-y-6">
      <TextInput
        className="w-full p-4 border-2 border-[#fff] rounded-lg bg-med-white placeholder:pl-16 focus:border-yellow"
        placeholder="Search Pasta, Bread, etc"
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={handleSubmit}
      />
      <View className='absolute py-3 pl-5 pr-3 top-2'>
        <Ionicons 
          name="search"
          size={25} 
          color='#C4C4C4' 
        />
      </View>
    </View>
  );
};

export default InputHeader;
