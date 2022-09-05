import {
  Dimensions,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

export default function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complex,
  afford,
}) {
  const navigation = useNavigation();
  function openDetail(){
    navigation.navigate('MealDetail', { mealId: id})
  }
  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{color:"#ccc"}} style={({ pressed }) =>
          pressed ? styles.buttonPressed : null
        } onPress={openDetail} >
        <View style={styles.innerContainer} >
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
          </View>
          <Text style={styles.title}>{title}</Text>
          <MealDetails duration={duration} complex={complex} afford={afford} />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: Dimensions.get("window").height / 5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden"
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  buttonPressed: {
    opacity: 0.5
  },
  mealItem: {
    margin: 16,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
});
