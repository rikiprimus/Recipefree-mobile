import React, { useState } from "react";
import { TextInput, View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import useSearchData from "../util/useSearchData";

const InputHeader = ({ onSubmit }) => {
  const { detailSearch, updateSearchQuery  } = useSearchData();
  const [searchText, setSearchText] = useState(detailSearch.search);

  const handleSubmit = async () => {
    updateSearchQuery({ ...detailSearch, search: searchText });
    onSubmit() 
  };

  return (
    <View className="w-full flex flex-col gap-y-6">
      <TextInput
        className="w-full p-4 border-2 border-[#fff] rounded-lg bg-med-white placeholder:pl-16 focus:border-yellow"
        placeholder="Search Pasta, Bread, etc"
        value={searchText}
        onChangeText={(textInput) => setSearchText(textInput)}
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
