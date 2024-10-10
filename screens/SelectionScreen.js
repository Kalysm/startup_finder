import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { setUserType, loadUserFixtures } from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { jobOfferFixtures, userFixtures } from "../data/fixtures";
import { loadOfferFixtures } from "../redux/offer/offerSlice";

const SelectionScreen = ({ navigation }) => {
  const [fixtures, setFixtures] = useState(false);
  const dispatch = useDispatch();

  const userType = useSelector((state) => state.user.userType);

  useEffect(() => {
    if (userType === "candidate") {
      navigation.navigate("Register", { userType });
    } else if (userType === "startup") {
      navigation.navigate("Register", { userType });
    }
    console.log("erreur");
  }, [userType, navigation]);

  const handleSelection = (type) => {
    dispatch(setUserType(type));
  };

  console.log(fixtures);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.selectionBtn}>
        <Text
          style={styles.selectionTxt}
          onPress={() => setFixtures(!fixtures)}
        >
          Fixtures
        </Text>
      </TouchableOpacity>
      {fixtures === true && (
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Text
              style={[
                styles.selectionTxt,
                { color: "green", fontSize: 20, margin: 10 },
              ]}
              onPress={() => {
                handleSelection("candidate");
                dispatch(loadUserFixtures(userFixtures));
                dispatch(loadOfferFixtures(jobOfferFixtures));
              }}
            >
              - Log as Candidate -
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleSelection("startup");
              dispatch(loadUserFixtures(userFixtures));
              dispatch(loadOfferFixtures(jobOfferFixtures));
            }}
          >
            <Text
              style={[
                styles.selectionTxt,
                { color: "blue", fontSize: 20, margin: 10 },
              ]}
            >
              - Log as StartUp -
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity style={styles.selectionBtn}>
        <Text
          style={styles.selectionTxt}
          onPress={() => handleSelection("candidate")}
        >
          Candidat
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.selectionBtn}
        onPress={() => handleSelection("startup")}
      >
        <Text style={styles.selectionTxt}>StartUp</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  selectionBtn: {
    backgroundColor: "black",
    borderRadius: 10,
    marginTop: 15,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  selectionTxt: {
    color: "white",
    fontSize: 30,
    fontFamily: "LeagueSpartan",
  },
});

export default SelectionScreen;
