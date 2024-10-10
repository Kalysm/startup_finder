import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import ExpandableItem from "../components/ExpandableItem";
import { height, width } from "../utils/dimensionUtils";

const AccountScreen = ({ navigation }) => {
  const startupAccounts = useSelector((state) => state.user.startupAccounts);
  const candidateAccounts = useSelector(
    (state) => state.user.candidateAccounts
  );
  const userType = useSelector((state) => state.user.userType);
  const currentUserAccount =
    userType === "startup"
      ? {
          ...startupAccounts[1]?.formData,
          logoStartUp: startupAccounts[1]?.logoStartUp,
          ...startupAccounts[0], // Valeur de repli si `formData` est vide
        }
      : {
          ...candidateAccounts[1]?.formData,
          logoCandidate: candidateAccounts[1]?.logoCandidate,
          ...candidateAccounts[0], // Valeur de repli si `formData` est vide
        };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Mon Profil</Text>

      {userType === "startup" && currentUserAccount && (
        <View>
          <View style={styles.logoContainer}>
            <Image
              source={{ uri: currentUserAccount.logoStartUp }}
              style={{
                height: height * 0.15,
                width: width * 0.5,
                marginVertical: 15,
                borderRadius: 6,
              }}
            />
          </View>
          <View style={styles.itemAccountContainer}>
            <ExpandableItem
              title="Nom de la société"
              content={currentUserAccount.name}
              backgroundColor="#1C1C1C"
            />
            <ExpandableItem
              title="N° de téléphone"
              content={currentUserAccount.tel}
              backgroundColor="#1C1C1C"
            />
            <ExpandableItem
              title="Domaine"
              content={currentUserAccount.area}
              backgroundColor="#1C1C1C"
            />
            <ExpandableItem
              title="Date de création"
              content={currentUserAccount.birthday}
              backgroundColor="#1C1C1C"
            />
            <ExpandableItem
              title="Nombre de collaborateurs"
              content={currentUserAccount.employees}
              backgroundColor="#1C1C1C"
            />
            <ExpandableItem
              title="N° de siret"
              content={currentUserAccount.siret}
              backgroundColor="#1C1C1C"
            />
          </View>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
            }}
            onPress={() => navigation.navigate("Selection")}
          >
            <Text>Selection userType</Text>
          </TouchableOpacity>
        </View>
      )}
      {userType === "candidate" && currentUserAccount && (
        <View>
          <View style={styles.logoContainer}>
            <Image
              source={{ uri: currentUserAccount.logoCandidate }}
              style={{
                height: height * 0.15,
                width: width * 0.5,
                marginVertical: 15,
                borderRadius: 6,
              }}
            />
          </View>

          <View style={styles.itemAccountContainer}>
            <ExpandableItem
              title="Nom & Prénom"
              content={currentUserAccount.name}
              backgroundColor="#1C1C1C"
            />
            <ExpandableItem
              title="Date d'anniversaire"
              content={currentUserAccount.birthday}
              backgroundColor="#1C1C1C"
            />
            <ExpandableItem
              title="N° de téléphone"
              content={currentUserAccount.tel}
              backgroundColor="#1C1C1C"
            />
            <ExpandableItem
              title="Métier"
              content={currentUserAccount.job}
              backgroundColor="#1C1C1C"
            />
            <ExpandableItem
              title="Années d'expérience"
              content={currentUserAccount.experience}
              backgroundColor="#1C1C1C"
            />
            <ExpandableItem
              title="Stack technique"
              content={currentUserAccount.stack}
              backgroundColor="#1C1C1C"
            />
            <ExpandableItem
              title="Niveau d'étude"
              content={currentUserAccount.education}
              backgroundColor="#1C1C1C"
            />
            <ExpandableItem
              title="Salaire estimé"
              content={currentUserAccount.salary}
              backgroundColor="#1C1C1C"
            />
            <ExpandableItem
              title="Langues parlées"
              content={currentUserAccount.language}
              backgroundColor="#1C1C1C"
            />
          </View>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
            }}
            onPress={() => navigation.navigate("Selection")}
          >
            <Text>Selection userType</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181818",
  },
  logoContainer: {
    alignItems: "center",
  },
  title: {
    fontFamily: "LeagueSpartan",
    fontSize: 14,
    color: "white",
    marginLeft: 15,
    marginTop: 15,
  },
  itemAccountContainer: {
    marginTop: 20,
  },
});

export default AccountScreen;
