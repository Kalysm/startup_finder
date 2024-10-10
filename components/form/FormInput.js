import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const FormInput = ({ placeholder, value, onChangeText }) => {
  const [text, setText] = useState("");

  const handleChangeText = (inputText) => {
    setText(inputText);
    onChangeText(inputText);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={handleChangeText}
        value={value}
        placeholderTextColor="#9E9E9E"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 5,
  },
  input: {
    padding: 15,
    backgroundColor: "#1C1C1C",
    marginHorizontal: 5,
    borderRadius: 8,
    fontFamily: "LeagueSpartan",
    color: "white",
  },
});

export default FormInput;
