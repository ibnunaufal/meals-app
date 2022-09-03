import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="default" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MealsCategory">
          <Stack.Screen name="MealsCategory" component={CategoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
    // <View style={styles.container}>
    //   <Text>Hello World!!!!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
