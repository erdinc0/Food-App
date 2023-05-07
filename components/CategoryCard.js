import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Renkler from "../constants/Renkler";

const CategoryCard = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.card, { backgroundColor: props.itemColor }]}>
        <Text style={styles.text}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  card: {
    height: 180,
    width: 180,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  text: {
    color: Renkler.textColor,
    fontWeight: Renkler.fontWeight,
    fontSize: Renkler.fontSize,
  },
});
