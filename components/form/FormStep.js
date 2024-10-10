import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import FormInput from "./FormInput";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../redux/form/formSlice";

const FormStep = ({ data }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);

  console.log("Data:", formData);

  const handleInputChange = (name, value) => {
    dispatch(updateFormData({ name, value }));
  };

  return (
    <View style={styles.scene}>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <FormInput
            key={index.toString()}
            placeholder={item.placeholder}
            onChangeText={(text) => handleInputChange(item.name, text)}
            style={{ flex: 1, marginVertical: 5, alignItems: "center" }}
          />
        )}
        keyExtractor={(item, index) => item.name + index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

export default FormStep;
