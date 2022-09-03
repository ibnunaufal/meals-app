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

export default function MealItem({
  title,
  imageUrl,
  duration,
  complex,
  afford,
}) {
  console.log(imageUrl);
  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{color:"#ccc"}} style={({ pressed }) =>
          pressed ? styles.buttonPressed : null
        } >
        <View style={styles.innerContainer} >
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
          </View>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.detail}>
            <Text style={styles.detailItem}>{duration} m</Text>
            <Text style={styles.detailItem}>{complex.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{afford.toUpperCase()}</Text>
          </View>
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
