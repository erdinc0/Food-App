import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Renkler from "./constants/Renkler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealScreen from "./screens/MealScreen";
import BottomTabNavigator from "./screens/BottomTabNavigator";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

let Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTitle: "All Categories",
              headerTintColor: Renkler.accentColor,
            }}
          >
            <Stack.Screen
              name="BottomTabNavigator"
              component={BottomTabNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="Meals" component={MealsOverviewScreen} />
            <Stack.Screen name="MealScreen" component={MealScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Renkler.accentColor,
  },
});
