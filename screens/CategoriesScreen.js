import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import Renkler from "../constants/Renkler";
import CategoryCard from "../components/CategoryCard";

const CategoriesScreen = (props) => {
  return (
    <FlatList
      horizontal={false}
      numColumns={2}
      style={styles.FlatList}
      contentContainerStyle={styles.scroll}
      data={CATEGORIES}
      renderItem={(itemData) => (
        <CategoryCard
          onPress={() => {
            props.navigation.navigate("Meals");
          }}
          itemColor={itemData.item.color}
        >
          {itemData.item.title}
        </CategoryCard>
      )}
      keyExtractor={(item) => item.id}
    ></FlatList>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: Renkler.bgColor,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  FlatList: { width: "100%" },
});
