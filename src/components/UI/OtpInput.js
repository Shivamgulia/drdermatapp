import React, { useRef, useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const OTPInput = ({ length = 6, updateOtp }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    if (text.length > 1) text = text[text.length - 1];
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    updateOtp(newOtp);

    // Move to next input if current one is filled
    if (text && index < length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleBackspace = (text, index) => {
    if (!text && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={(ref) => (inputs.current[index] = ref)}
          style={styles.input}
          keyboardType="number-pad"
          maxLength={1}
          value={digit}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === "Backspace") {
              handleBackspace("", index);
            }
          }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: 40,
    height: 50,
    marginHorizontal: 5,
    textAlign: "center",
    fontSize: 20,
    borderRadius: 5,
  },
});

export default OTPInput;
