import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import LikedOffer from "../components/liked/LikedOffer";
import LikedCandidate from "../components/liked/LikedCandidate";

const LikeScreen = ({ navigation }) => {
  const userType = useSelector((state) => state.user.userType);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.likedContainer}>
        <LikedOffer />
        <LikedCandidate />

        {userType === "startup" && (
          <View style={styles.newOfferButtonContainer}>
            <TouchableOpacity
              style={styles.newOfferButton}
              onPress={() => navigation.navigate("CreateJobOffer")}
            >
              <Text style={styles.newOfferButtonText}>+ NOUVELLE OFFRE</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181818",
  },
  likedContainer: {
    alignItems: "center",
    flex: 1,
  },
  newOfferButtonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
  },
  newOfferButton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    width: 342,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  newOfferButtonText: {
    color: "black",
    fontFamily: "LeagueSpartan",
    fontSize: 16,
  },
});

export default LikeScreen;
