import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { height } from "../../utils/dimensionUtils";

const FormTab = ({ tabIndex, index, onPress }) => {
  const isFocused = index === tabIndex;

  return (
    <TouchableOpacity onPress={onPress} style={styles.formButton}>
      <View
        style={[
          styles.formUnderline,
          { backgroundColor: isFocused ? "#7A7A7A" : "#3B3B3B" },
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  formButton: {
    flex: 1,
    marginHorizontal: 5,
    justifyContent: "center",
    marginBottom: 10,
  },
  formUnderline: {
    height: height * 0.01,
    borderRadius: 2,
  },
});

export default FormTab;
