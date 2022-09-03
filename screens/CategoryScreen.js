import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoryScreen() {

    function renderItem(item) {
        return(
            <CategoryGridTile title={item.item.title} color={item.item.color} />
        )
    }

  return (
    <View>
      <FlatList data={CATEGORIES} 
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      />
    </View>
  );
}

export default CategoryScreen;

const styles = StyleSheet.create({});
