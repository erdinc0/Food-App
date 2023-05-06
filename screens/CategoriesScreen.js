import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>CategoriesScreen</Text>
      </View>
    </ScrollView>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
});
