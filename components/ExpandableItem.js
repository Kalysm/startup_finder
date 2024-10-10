import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const ExpandableItem = ({ title, content, backgroundColor }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <View style={styles.itemdescriptionContainer}>
      <TouchableOpacity
        style={[styles.descriptionItem, { backgroundColor }]}
        onPress={() => setIsExpanded(!isExpanded)}
      >
        <Text style={styles.titlePoste}>{title}</Text>
      </TouchableOpacity>
      {isExpanded && (
        <View style={[styles.clickedContainer, { backgroundColor }]}>
          <Text style={[styles.titlePoste, { color: "#e9e58c" }]}>
            {content}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  itemdescriptionContainer: {
    marginBottom: 2,
  },
  descriptionItem: {
    padding: 15,
    backgroundColor: "#3A2B35",
    marginHorizontal: 5,
    borderRadius: 6,
  },
  clickedContainer: {
    borderBottomEndRadius: 6,
    borderBottomStartRadius: 6,
    marginHorizontal: 5,
    marginTop: -4,
    marginBottom: 2,
    padding: 10,
  },
  titlePoste: {
    fontFamily: "LeagueSpartan",
    fontSize: 14,
    color: "white",
  },
});
export default ExpandableItem;
