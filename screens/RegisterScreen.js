import React, { useState, useEffect } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import { candidateRegister, startupRegister } from "../redux/user/userSlice";
import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CandidateRegisterView from "../components/form/view/CandidateRegisterView";
import StartupRegisterView from "../components/form/view/StartupRegisterView";
import { resetFormData } from "../redux/form/formSlice";
import { height, width } from "../utils/dimensionUtils";

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const startupAccounts = useSelector((state) => state.user.startupAccounts);
  const candidateAccounts = useSelector(
    (state) => state.user.candidateAccounts
  );
  const [logoCandidate, setLogoCandidate] = useState(null);
  const [logoStartUp, setLogoStartUp] = useState(null);
  const formData = useSelector((state) => state.form);
  const userType = useSelector((state) => state.user.userType);

  console.log("startupAccounts:", startupAccounts);
  console.log("candidateAccounts", candidateAccounts);

  useEffect(() => {
    if (startupAccounts?.length && candidateAccounts?.length) {
      navigation.navigate("Main");
    }
  }, []);

  const onFormSubmit = () => {
    if (userType === "candidate") {
      dispatch(
        candidateRegister({
          logoCandidate,
          formData,
        })
      );
      navigation.navigate("Main");
    } else if (userType === "startup") {
      dispatch(
        startupRegister({
          logoStartUp,
          formData,
        })
      );
      navigation.navigate("Main");
      dispatch(resetFormData());
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    });

    console.log("picImage:", result);
    if (userType === "startup" && !result.canceled) {
      setLogoStartUp(result.assets[0].uri);
    } else if (userType === "candidate" && !result.canceled) {
      setLogoCandidate(result.assets[0].uri);
    } else {
      Alert.alert("Erreur", "Problème d'importation de l'image");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={{ backgroundColor: "black" }} />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign
          name="left"
          size={30}
          color="white"
          style={{ marginLeft: 10, marginVertical: 10 }}
        />
      </TouchableOpacity>

      {userType === "candidate" && (
        <>
          <Text style={styles.formTitle}>Créez votre profil</Text>
          <View style={{ width: "65%" }}>
            <Text style={[styles.formTitle, { color: "grey", fontSize: 12 }]}>
              Pas d'inquiétudes, vous pourrez modifier les informations plus
              tard
            </Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <TouchableOpacity onPress={pickImage}>
              {logoCandidate ? (
                <Image
                  source={{ uri: logoCandidate }}
                  style={{
                    height: height * 0.15,
                    width: width * 0.29,
                    marginVertical: 15,
                    borderRadius: 6,
                  }}
                />
              ) : (
                <Image
                  source={require("../assets/img/Avatar.png")}
                  style={{
                    height: height * 0.15,
                    width: width * 0.29,
                    marginVertical: 15,
                  }}
                />
              )}
            </TouchableOpacity>
          </View>

          <CandidateRegisterView />

          <View style={styles.validateButtonContainer}>
            <TouchableOpacity
              style={styles.validateButton}
              onPress={onFormSubmit}
            >
              <Text style={styles.validateButtonText}>Soumettre</Text>
            </TouchableOpacity>
          </View>
        </>
      )}

      {userType === "startup" && (
        <>
          <Text style={styles.formTitle}>Créez votre profil StartUp</Text>
          <View style={{ width: "65%" }}>
            <Text style={[styles.formTitle, { color: "grey", fontSize: 12 }]}>
              Pas d'inquiétudes, vous pourrez modifier les informations plus
              tard
            </Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <TouchableOpacity onPress={pickImage}>
              {logoStartUp ? (
                <Image
                  source={{ uri: logoStartUp }}
                  style={{
                    height: height * 0.15,
                    width: width * 0.29,
                    marginVertical: 15,
                    borderRadius: 6,
                  }}
                />
              ) : (
                <Image
                  source={require("../assets/img/Avatar.png")}
                  style={{
                    height: height * 0.15,
                    width: width * 0.29,
                    marginVertical: 15,
                  }}
                />
              )}
            </TouchableOpacity>
          </View>

          <StartupRegisterView />

          <View style={styles.validateButtonContainer}>
            <TouchableOpacity
              style={styles.validateButton}
              onPress={onFormSubmit}
            >
              <Text style={styles.validateButtonText}>Soumettre</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E0E0E",
  },
  formTitle: {
    fontFamily: "LeagueSpartan",
    fontSize: 25,
    color: "white",
    marginLeft: 10,
    marginVertical: 5,
  },
  validateButtonContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 30,
  },
  validateButton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    width: width * 0.7,
    height: height * 0.07,
    justifyContent: "center",
    alignItems: "center",
  },
  validateButtonText: {
    color: "black",
    fontFamily: "LeagueSpartan",
    fontSize: 16,
  },
});

export default RegisterScreen;
