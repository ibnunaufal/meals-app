import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoryScreen({navigation}) {

  function renderItem(item) {
    function pressHandler() {
        console.log('pressed')
        navigation.navigate('MealsOverview',{
            id: item.item.id
        })
      }
    return (
      <CategoryGridTile
        title={item.item.title}
        color={item.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
}

export default CategoryScreen;

const styles = StyleSheet.create({});
