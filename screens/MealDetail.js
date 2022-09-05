import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

export default function MealDetail({ route }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => mealId === meal.id);
  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complex={selectedMeal.complexity}
        afford={selectedMeal.affordability}
      />
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Ingredients: </Text>
      </View>
      {selectedMeal.ingredients.map((ing) => (
        <View key={ing} style={styles.comp}>
            <Text style={styles.compText} >{ing}</Text>
        </View> 
      ))}
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Steps: </Text>
      </View>
      {selectedMeal.steps.map((step) => (
        <View key={step} style={styles.comp}>
            <Text key={step}>{step}</Text>
        </View> 
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: Dimensions.get("window").height / 4,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 4,
    textAlign: "center",
    padding: 6,
  },
  subtitleContainer: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  comp: {
    backgroundColor: 'yellow',
    margin: 5,
    padding: 5,
    borderRadius: 10
  },
  compText: {
    textAlign: "center"
  }
});
