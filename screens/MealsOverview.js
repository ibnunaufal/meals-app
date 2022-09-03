import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

export default function MealsOverview({ navigation, route }) {
  const id = route.params.id;
  const displayedMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(id) >= 0;
  });
  function renderItem(item) {
    return (
      <MealItem
        title={item.item.title}
        imageUrl={item.item.imageUrl}
        duration={item.item.duration}
        complex={item.item.complexity}
        afford={item.item.affordability}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
