import React from "react";
import { StyleSheet, Text, View } from "react-native";

const InfoItem = ({ title, content }) => {
  return (
    <View style={styles.infoItem}>
      <Text style={styles.titlePoste}>{title}</Text>
      <Text style={[styles.titlePoste, { fontSize: 14 }]}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoItem: {
    backgroundColor: "#1C1C1C",
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  titlePoste: {
    fontFamily: "LeagueSpartan",
    fontSize: 13,
    color: "white",
  },
});

export default InfoItem;
