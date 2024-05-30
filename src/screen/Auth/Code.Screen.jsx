import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import { useAuth } from "../../util/authContext";

const CodeScreen = ({ navigation }) => {
  const { sendPin, confirmPin, message, email } = useAuth();
  const [code, setCode] = useState('');
  const [timer, setTimer] = useState(60);
  const [data, setData] = useState({
    email: email,
    pin: '',
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);
    return () => clearInterval(countdown);
  }, [timer]);

  useEffect(() => {
    const checkPinLength = async () => {
      if (data.pin.length === 6) {
        const res = await confirmPin(data);
        console.log(res)
        if (res.status === 201) {
          navigation.navigate("ResetPassword");
        } else {
          setData((prevData) => ({
            ...prevData,
            pin: "",
          }));
        }
      }
    }
    checkPinLength();
  }, [data, confirmPin, navigation]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  const handleCodeChange = async (num) => {
    if (data.pin?.length < 6) {
      setData((prevData) => ({
        ...prevData,
        pin: (data.pin + num),
      }));
    }
  };

  const handleResendCode = async () => {
    await sendPin(email);
    setTimer(4);
  };

  const handleBackspace = () => {
    setData((prevData) => ({
      ...prevData,
      pin: prevData.pin.slice(0, -1)
    }));
  };

  return (
    <View className="flex-1 gap-10 items-center justify-center bg-white">
      <View>
        <Text className="text-lg text-text-grey text-center mb-5">Enter your code</Text>
        <SmoothPinCodeInput
          placeholder={
            <View className="w-4 h-4 rounded-full bg-opacity-30 bg-grey"></View>
          }
          mask={<View className="w-4 h-4 rounded-full bg-yellow"></View>}
          codeLength={6}
          maskDelay={1000}
          password={true}
          cellStyle={null}
          cellStyleFocused={null}
          value={data.pin}
        />
      </View>
      <View className="flex flex-col items-center">
        <View>
          <Text >Resend your code :</Text>
        </View>
        {timer === 0 ? (
          <TouchableOpacity onPress={handleResendCode}>
            <Text className="text-blue-grey text-base">Click here</Text>
          </TouchableOpacity>
        ) : (
          <Text className="text-yellow text-lg">{formatTime(timer)}</Text>
        )}
      </View>

      <View className="flex flex-row flex-wrap justify-center gap-1">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <TouchableOpacity
            key={num}
            className="w-[90px] h-[90px] flex items-center justify-center m-5 "
            onPress={() => handleCodeChange(num.toString())}
          >
            <Text className="font-bold text-2xl text-text-grey">{num}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity className="w-[90px] h-[90px] flex items-center justify-center m-5 " onPress={handleBackspace}>
          <Text className="font-bold text-2xl text-text-grey"></Text>
        </TouchableOpacity>
        <TouchableOpacity
            className="w-[90px] h-[90px] flex items-center justify-center m-5 "
            onPress={() => handleCodeChange([0].toString())}
          >
            <Text className="font-bold text-2xl text-text-grey">0</Text>
          </TouchableOpacity>
        <TouchableOpacity className="w-[90px] h-[90px] flex items-center justify-center m-5 " onPress={handleBackspace}>
          <Text className="font-bold text-2xl text-text-grey">⌫</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CodeScreen;
