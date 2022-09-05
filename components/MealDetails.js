import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function MealDetails({duration, complex, afford}) {
  return (
    <View style={styles.detail}>
      <Text style={styles.detailItem}>{duration} m</Text>
      <Text style={styles.detailItem}>{complex.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{afford.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  detail: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
