import React, { useState } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Entypo } from "@expo/vector-icons";
import { likeCandidateOffer, likeJobOffer } from "../redux/offer/offerSlice";
import ExpandableItem from "../components/ExpandableItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { height, width } from "../utils/dimensionUtils";
import InfoItem from "../components/InfoItem";

const JobOfferScreen = () => {
  const dispatch = useDispatch();
  const jobOffers = useSelector((state) => state.offer.jobOffers);
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const currentJobOffer = jobOffers[currentJobIndex];

  const candidateAccounts = useSelector(
    (state) => state.user.candidateAccounts
  );
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState(0);
  const currentCandidate = candidateAccounts[currentCandidateIndex];

  const userType = useSelector((state) => state.user.userType);

  const handlePassOffer = () => {
    if (userType === "candidate") {
      if (currentJobIndex < jobOffers.length - 1) {
        setCurrentJobIndex(currentJobIndex + 1);
      } else {
        // Si on atteint la fin de la liste des offres, revenir au début
        setCurrentJobIndex(0);
      }
    } else {
      if (currentCandidateIndex < candidateAccounts.length - 1) {
        setCurrentCandidateIndex(currentCandidateIndex + 1);
      } else {
        // Si on atteint la fin de la liste des candidats, revenir au début
        setCurrentCandidateIndex(0);
      }
    }
  };

  const handleLikeOffer = () => {
    if (userType === "candidate") {
      dispatch(likeJobOffer(currentJobOffer));

      handlePassOffer();
    } else {
      dispatch(likeCandidateOffer(currentCandidate));
      handlePassOffer();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {userType === "startup" && currentCandidate && (
        <>
          <ScrollView>
            <View style={styles.offerTitleLogoContainer}>
              {currentCandidate ? (
                <Image
                  source={{ uri: currentCandidate.logoCandidate }}
                  style={{
                    height: height * 0.1,
                    width: width * 0.35,
                    resizeMode: "cover",
                    borderRadius: 6,
                  }}
                />
              ) : null}
              <Text style={styles.titlePoste}>
                {currentCandidate?.formData
                  ? currentCandidate.formData.name
                  : currentCandidate.name}
              </Text>
            </View>
            <View style={styles.infoContainer}>
              <InfoItem
                title="Stack:"
                content={
                  currentCandidate?.formData
                    ? currentCandidate.formData.stack
                    : currentCandidate.stack
                }
              />
              <InfoItem
                title="Métier:"
                content={
                  currentCandidate?.formData
                    ? currentCandidate.formData.job
                    : currentCandidate.job
                }
              />
            </View>

            <Text
              style={[
                styles.titlePoste,
                { fontSize: 14, marginVertical: 15, marginLeft: 15 },
              ]}
            >
              Description
            </Text>

            <ExpandableItem
              title="N° de téléphone"
              content={
                currentCandidate?.formData
                  ? currentCandidate.formData.tel
                  : currentCandidate.tel
              }
              backgroundColor="#3A2B2A"
            />
            <ExpandableItem
              title="Expérience"
              content={
                currentCandidate?.formData
                  ? currentCandidate.formData.experience
                  : currentCandidate.experience
              }
              backgroundColor="#3A2B35"
            />
            <ExpandableItem
              title="Niveau d'étude"
              content={
                currentCandidate?.formData
                  ? currentCandidate.formData.education
                  : currentCandidate.education
              }
              backgroundColor="#2E3D3C"
            />
            <ExpandableItem
              title="Salaire"
              content={
                currentCandidate?.formData
                  ? currentCandidate.formData.salary
                  : currentCandidate.salary
              }
              backgroundColor="#1C1C1C"
            />
            <ExpandableItem
              title="Langues"
              content={
                currentCandidate?.formData
                  ? currentCandidate.formData.language
                  : currentCandidate.language
              }
              backgroundColor="#3A2B2A"
            />
          </ScrollView>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={[
                styles.swipeBtn,
                {
                  borderTopRightRadius: 25,
                  borderBottomEndRadius: 25,
                  backgroundColor: "#382A2A",
                },
              ]}
              onPress={handlePassOffer}
            >
              <Entypo
                name="cross"
                size={38}
                color="#E58E8B"
                style={{ marginRight: 5 }}
              />
            </TouchableOpacity>
            <View style={styles.probaContainer}>
              <Text
                style={[styles.titlePoste, { fontSize: 30, color: "#3E3E3E" }]}
              >
                83%
              </Text>
              <Text
                style={[
                  styles.titlePoste,
                  { fontSize: 15, color: "#3E3E3E", marginTop: -10 },
                ]}
              >
                Taux de probabilité
              </Text>
            </View>

            <TouchableOpacity
              style={[
                styles.swipeBtn,
                {
                  borderTopLeftRadius: 25,
                  borderBottomStartRadius: 25,
                  backgroundColor: "#2B313A",
                  elevation: 10,
                  ...Platform.select({
                    ios: {
                      shadowColor: "grey",
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.3,
                      shadowRadius: 4,
                    },
                  }),
                },
              ]}
              onPress={handleLikeOffer}
            >
              <Entypo
                name="heart"
                size={38}
                color="#9DDEF2"
                style={{ marginLeft: 5 }}
              />
            </TouchableOpacity>
          </View>
        </>
      )}
      {userType === "candidate" && (
        <>
          <ScrollView>
            <View style={styles.offerTitleLogoContainer}>
              <Image
                source={{ uri: currentJobOffer.logoStartUp }}
                style={{
                  height: height * 0.1,
                  width: width * 0.35,
                  resizeMode: "cover",
                  borderRadius: 6,
                }}
              />
              <Text style={styles.titlePoste}>
                {currentJobOffer?.formData
                  ? currentJobOffer.formData.title
                  : currentJobOffer.title}
              </Text>
            </View>

            <View style={styles.infoContainer}>
              <InfoItem
                title="Télétravail:"
                content={
                  currentJobOffer?.formData
                    ? currentJobOffer.formData.remote
                    : currentJobOffer.remote
                }
              />
              <InfoItem
                title="Rémunération:"
                content={
                  currentJobOffer?.formData
                    ? currentJobOffer.formData.salary
                    : currentJobOffer.salary
                }
              />
              <InfoItem
                title="Localisation:"
                content={
                  currentJobOffer?.formData
                    ? currentJobOffer.formData.localisation
                    : currentJobOffer.localisation
                }
              />
            </View>

            <Text
              style={[
                styles.titlePoste,
                { fontSize: 14, marginVertical: 15, marginLeft: 15 },
              ]}
            >
              Description du poste
            </Text>

            <ExpandableItem
              title="Votre mission"
              content={
                currentJobOffer?.formData
                  ? currentJobOffer.formData.description
                  : currentJobOffer.description
              }
              backgroundColor="#3A2B2A"
            />
            <ExpandableItem
              title="Type de contrat"
              content={
                currentJobOffer?.formData
                  ? currentJobOffer.formData.contract
                  : currentJobOffer.contract
              }
              backgroundColor="#3A2B35"
            />
            <ExpandableItem
              title="Les avantages"
              content={`${
                currentJobOffer?.formData
                  ? currentJobOffer.formData.benefits
                  : currentJobOffer.benefits
              }\nPrimes: ${
                currentJobOffer?.formData
                  ? currentJobOffer.formData.primes
                  : currentJobOffer.primes
              }`}
              backgroundColor="#2E3D3C"
            />

            <Text
              style={[
                styles.titlePoste,
                { fontSize: 14, marginVertical: 15, marginLeft: 15 },
              ]}
            >
              Prérequis
            </Text>

            <ExpandableItem
              title="Stack technique"
              content={
                currentJobOffer?.formData
                  ? currentJobOffer.formData.stack
                  : currentJobOffer.stack
              }
              backgroundColor="#1C1C1C"
            />
            <ExpandableItem
              title="Niveau d'étude requis"
              content={
                currentJobOffer?.formData
                  ? currentJobOffer.formData.education
                  : currentJobOffer.education
              }
              backgroundColor="#1C1C1C"
            />
            <ExpandableItem
              title="Années d'expérience"
              content={
                currentJobOffer?.formData
                  ? currentJobOffer.formData.experience
                  : currentJobOffer.experience
              }
              backgroundColor="#1C1C1C"
            />
            <ExpandableItem
              title="Langues"
              content={
                currentJobOffer?.formData
                  ? currentJobOffer.formData.languages
                  : currentJobOffer.languages
              }
              backgroundColor="#1C1C1C"
            />
            <ExpandableItem
              title="Permis de conduire"
              content={
                currentJobOffer?.formData
                  ? currentJobOffer.formData.permis
                  : currentJobOffer.permis
              }
              backgroundColor="#1C1C1C"
            />
            <View style={{ height: 80 }} />
          </ScrollView>

          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={[
                styles.swipeBtn,
                {
                  borderTopRightRadius: 25,
                  borderBottomEndRadius: 25,
                  backgroundColor: "#382A2A",
                },
              ]}
              onPress={handlePassOffer}
            >
              <Entypo
                name="cross"
                size={38}
                color="#E58E8B"
                style={{ marginRight: 5 }}
              />
            </TouchableOpacity>
            <View style={styles.probaContainer}>
              <Text
                style={[styles.titlePoste, { fontSize: 30, color: "#3E3E3E" }]}
              >
                83%
              </Text>
              <Text
                style={[
                  styles.titlePoste,
                  { fontSize: 15, color: "#3E3E3E", marginTop: -10 },
                ]}
              >
                Taux de probabilité
              </Text>
            </View>

            <TouchableOpacity
              style={[
                styles.swipeBtn,
                {
                  borderTopLeftRadius: 25,
                  borderBottomStartRadius: 25,
                  backgroundColor: "#2B313A",
                  elevation: 10,
                  ...Platform.select({
                    ios: {
                      shadowColor: "grey",
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.3,
                      shadowRadius: 4,
                    },
                  }),
                },
              ]}
              onPress={handleLikeOffer}
            >
              <Entypo
                name="heart"
                size={38}
                color="#9DDEF2"
                style={{ marginLeft: 5 }}
              />
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#181818",
    flex: 1,
  },
  offerTitleLogoContainer: {
    alignItems: "center",
  },
  titlePoste: {
    fontFamily: "LeagueSpartan",
    fontSize: 25,
    color: "white",
  },
  infoContainer: {
    height: height * 0.05,
    width: width * 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  btnContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginVertical: 10,
  },
  swipeBtn: {
    height: height * 0.1,
    width: width * 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  probaContainer: {
    height: height * 0.1,
    width: width * 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default JobOfferScreen;
