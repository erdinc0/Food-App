import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import Renkler from "../constants/Renkler";

let deviceWidth = Dimensions.get("window").width;

const CategoryCard = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={[
          styles.card,
          {
            backgroundColor: props.itemColor,
          },
        ]}
      >
        <Text style={[styles.text]}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  card: {
    height: deviceWidth * 0.45,
    width: deviceWidth * 0.45,
    margin: deviceWidth * 0.015,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 5,
    shadowOpacity: 0.3,
    shadowOffset: { width: 1, height: 1 },
  },
  text: {
    color: Renkler.textColor,
    fontWeight: Renkler.fontWeight,
    fontSize: Renkler.fontSize,
    width: "100%",
    textAlign: "center",
  },
  textContainer: {},
});
