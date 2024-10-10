import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../components/Header";
import { StatusBar } from "expo-status-bar";

const CriteriaScreen = () => {
  const [textJob, onChangeTextJob] = useState("");
  const [textContract, onChangeTextContract] = useState("");
  const [textLocalisation, onChangeTextLocalisation] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style={{ backgroundColor: "black" }} />
      <Header />
      <View style={styles.criteriaContainer}>
        <View style={styles.criteria}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeTextJob}
            value={textJob}
            placeholder="Métier"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeTextContract}
            value={textContract}
            placeholder="Type de contrat"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeTextLocalisation}
            value={textLocalisation}
            placeholder="Localisation"
          />
          <TouchableOpacity style={styles.btnContainer}>
            <Text style={styles.btnTxt}>Rechercher</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.shadowContainer} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  criteriaContainer: {
    alignItems: "center",
  },
  criteria: {
    backgroundColor: "white",
    height: 250,
    width: 300,
    bottom: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 2,
    zIndex: 1,
  },
  input: {
    height: 40,
    width: 220,
    marginHorizontal: 12,
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    fontSize: 15,
    fontFamily: "LeagueSpartan",
  },
  btnContainer: {
    backgroundColor: "black",
    borderRadius: 10,
    marginTop: 15,
    height: 35,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTxt: {
    color: "white",
    fontSize: 15,
    fontFamily: "LeagueSpartan",
  },
  shadowContainer: {
    backgroundColor: "grey",
    height: 250,
    width: 300,
    bottom: 290,
    left: 10,
    borderRadius: 20,
  },
});

export default CriteriaScreen;
