import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import { createJobOffer } from "../redux/offer/offerSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import CreateOfferFormView from "../components/form/view/CreateOfferFormView";
import { AntDesign } from "@expo/vector-icons";
import { resetFormData } from "../redux/form/formSlice";

const CreateJobOfferScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const jobOffers = useSelector((state) => state.offer.jobOffers);
  const startupAccounts = useSelector((state) => state.user.startupAccounts);
  const currentStartupAccount = startupAccounts[startupAccounts.length - 1];

  const formData = useSelector((state) => state.form);

  const onFormSubmit = () => {
    // Wait for the logo to be loaded
    const logoPromise = Image.getSize(currentStartupAccount.logoStartUp);

    logoPromise.then(() => {
      dispatch(
        createJobOffer({
          logoStartUp: currentStartupAccount.logoStartUp,
          formData,
        })
      );

      if (Object.values(jobOffers).every((value) => value !== "")) {
        navigation.navigate("Main");
      }

      dispatch(resetFormData());
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={{ backgroundColor: "black" }} />
      <TouchableOpacity
        style={{ width: 50 }}
        onPress={() => navigation.goBack()}
      >
        <AntDesign
          name="left"
          size={30}
          color="white"
          style={{ marginLeft: 10, marginVertical: 10 }}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Créez votre offre d'emploi</Text>
      <CreateOfferFormView />
      <View style={styles.validateButtonContainer}>
        <TouchableOpacity style={styles.validateButton} onPress={onFormSubmit}>
          <Text style={styles.validateButtonText}>Soumettre</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181818",
  },
  title: {
    fontFamily: "LeagueSpartan",
    fontSize: 20,
    color: "white",
    marginVertical: 10,
    marginLeft: 15,
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
    width: 342,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  validateButtonText: {
    color: "black",
    fontFamily: "LeagueSpartan",
    fontSize: 16,
  },
});

export default CreateJobOfferScreen;
