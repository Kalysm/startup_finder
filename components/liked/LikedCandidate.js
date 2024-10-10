import React from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { removeLikedCandidateOffer } from "../../redux/offer/offerSlice";
import { Entypo } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { getFieldValue } from "../../utils/offerUtils";

const LikedCandidate = () => {
  const dispatch = useDispatch();

  const likedCandidates = useSelector(
    (state) => state.offer.candidateOfferLiked
  );
  const userType = useSelector((state) => state.user.userType);

  const handleDeleteLikedCandidate = ({ likedCandidateID }) => {
    if (userType === "startup") {
      Alert.alert(
        "Supression de candidat",
        "Êtes vous sûre de vouloir supprimer votre candidat?",
        [
          {
            text: "Annuler",
            style: "cancel",
          },
          {
            text: "Supprimer",
            onPress: () =>
              dispatch(removeLikedCandidateOffer(likedCandidateID)),
          },
        ]
      );
    }
  };
  return (
    <>
      {userType === "startup" && (
        <>
          <Text style={[styles.title, { marginLeft: 15, marginVertical: 15 }]}>
            Mes candidats potentiels
          </Text>
          {likedCandidates.length === 0 ? (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <Text style={[styles.title, { color: "grey" }]}>
                Pas de candidats pour le moment...
              </Text>
            </View>
          ) : (
            likedCandidates.map((likedCandidate) => (
              <View key={likedCandidate.id} style={styles.jobOfferContainer}>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Image
                      source={{ uri: likedCandidate.logoCandidate }}
                      style={{
                        height: 40,
                        width: 80,
                        marginRight: 15,
                        resizeMode: "cover",
                        borderRadius: 6,
                      }}
                    />
                    <Text style={styles.jobOfferTitle}>
                      {getFieldValue(likedCandidate, "name")}
                    </Text>
                    <Text style={styles.jobOfferVariables}>
                      {getFieldValue(likedCandidate, "job")}
                    </Text>
                    <Text style={styles.jobOfferVariables}>
                      {getFieldValue(likedCandidate, "tel")}
                    </Text>
                  </View>
                  <View style={styles.rightColumnContainer}>
                    <View style={styles.compatiblityContainer}>
                      <View style={{ flexDirection: "row" }}>
                        <Entypo
                          name="heart"
                          size={16}
                          color="#9DDEF2"
                          style={{
                            marginRight: 5,
                            justifyContent: "center",
                            alignContent: "center",
                            height: 16,
                            marginTop: 5,
                          }}
                        />
                        <Text
                          style={[
                            styles.title,
                            { fontSize: 16, color: "#3E3E3E" },
                          ]}
                        >
                          83%
                        </Text>
                      </View>
                      <Text
                        style={[
                          styles.title,
                          { fontSize: 11, marginTop: -5, color: "#3E3E3E" },
                        ]}
                      >
                        de probabilité
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() =>
                        handleDeleteLikedCandidate({
                          likedCandidateID: likedCandidate.id,
                        })
                      }
                    >
                      <Octicons name="trash" size={16} color="red" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))
          )}
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontFamily: "LeagueSpartan",
    color: "white",
  },
  jobOfferContainer: {
    padding: 10,
    margin: 5,
    borderRadius: 8,
    width: "95%",
    backgroundColor: "#1C1C1C",
  },
  jobOfferTitle: {
    fontSize: 16,
    fontFamily: "LeagueSpartan",
    color: "white",
  },
  jobOfferVariables: {
    fontFamily: "LeagueSpartan",
    color: "white",
  },
  rightColumnContainer: {
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-end",
  },
  compatiblityContainer: {
    alignItems: "center",
  },
});

export default LikedCandidate;
