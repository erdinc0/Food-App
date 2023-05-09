import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import Renkler from "../constants/Renkler";

const FavsScreen = () => {
  let navigasyon = useNavigation();

  let favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  let displayedFavoriteMeals = MEALS.filter((meal) => {
    return favoriteMealIds.includes(meal.id);
  });

  useEffect(() => {
    navigasyon.setOptions({
      headerShown: true,
      headerTitle: "Favorites",
    });
  }, []);

  if (displayedFavoriteMeals.length <= 0) {
    console.log("pop");
    return (
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={{ textAlign: "center", fontSize: 18, color: Renkler.gri }}
          >
            No Favorites Yet...
          </Text>
        </View>
      </ScrollView>
    );
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        numColumns={1}
        data={displayedFavoriteMeals}
        renderItem={(displayedFavoriteMeals) => (
          <>
            <MealItem
              onPress={() => {
                navigasyon.navigate("MealScreen", {
                  mealId: displayedFavoriteMeals.item.id,
                  mealTitle: displayedFavoriteMeals.item.title,
                });
              }}
              image={displayedFavoriteMeals.item.imageUrl}
              affordability={displayedFavoriteMeals.item.affordability}
              complexity={displayedFavoriteMeals.item.complexity}
              duration={displayedFavoriteMeals.item.duration}
            >
              {displayedFavoriteMeals.item.title}
            </MealItem>
          </>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default FavsScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Renkler.bgWhite,
    flex: 1,
  },
});
