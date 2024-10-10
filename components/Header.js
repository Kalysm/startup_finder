import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.accountContainer}>
          <TouchableOpacity
            style={styles.accountBtn}
            onPress={() => navigation.navigate("Main")}
          >
            <Octicons name="stack" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    height: 83,
    borderBottomStartRadius: 40,
    borderBottomEndRadius: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  txtContainer: {
    width: 230,
    marginLeft: 10,
  },
  headerTxt: {
    color: "white",
    fontSize: 27,
    fontFamily: "LeagueSpartan",
  },
  accountContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  accountBtn: {
    padding: 10,
  },
  headerImg: {
    marginRight: 40,
    marginBottom: 80,
  },
});

export default Header;
