import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import Renkler from "../constants/Renkler";
import CategoryCard from "../components/CategoryCard";
import { useNavigation } from "@react-navigation/native";

const CategoriesScreen = (props) => {
  let [fotos, setfotos] = useState([]);

  let navigasyon = useNavigation();

  useEffect(() => {
    navigasyon.setOptions({
      headerShown: true,
      headerTitle: "All Categories",
    });
  }, []);

  useLayoutEffect(() => {
    let urls = [];
    let url = "";

    MEALS.map((itemData) => {
      url = itemData.imageUrl;
      urls.push(url);
    });

    setfotos(urls);
  }, []);

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
            props.navigation.navigate("Meals", {
              itemId: itemData.item.id,
              categoryTitle: itemData.item.title,
              imageUrl: fotos[itemData.index],
            });
          }}
          itemColor={itemData.item.color}
          imageUrl={fotos[itemData.index]}
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
    backgroundColor: Renkler.bgWhite,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    paddingBottom: 30,
  },
  FlatList: {
    width: "100%",
  },
});
