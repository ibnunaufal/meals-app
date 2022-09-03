import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";

export default function MealsOverview({ navigation, route }) {
  const id = route.params.id;
  return (
    <View style={styles.container}>
      <Text>MealsOverview {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
