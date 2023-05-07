import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useNavigation } from "@react-navigation/native";
import Renkler from "../constants/Renkler";

const MealsOverviewScreen = (props) => {
  itemId = props.route.params.itemId;
  let navigasyon = useNavigation();

  useLayoutEffect(() => {
    navigasyon.setOptions({
      headerTitle: props.route.params.categoryTitle,
    });
  }, []);

  let displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(itemId) >= 0;
  });

  return (
    <View style={styles.wrapper}>
      <FlatList
        numColumns={1}
        data={displayedMeals}
        renderItem={(displayedMealItem) => (
          <>
            <MealItem
              onPress={() => {
                navigasyon.navigate("MealScreen", {
                  mealId: displayedMealItem.item.id,
                  mealTitle: displayedMealItem.item.title,
                });
              }}
              image={displayedMealItem.item.imageUrl}
              affordability={displayedMealItem.item.affordability}
              complexity={displayedMealItem.item.complexity}
              duration={displayedMealItem.item.duration}
            >
              {displayedMealItem.item.title}
            </MealItem>
          </>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Renkler.bgWhite,
    flex: 1,
  },
});
