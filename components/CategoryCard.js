import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import Renkler from "../constants/Renkler";

let deviceWidth = Dimensions.get("window").width;

const CategoryCard = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.forshadow}>
        <View style={styles.bgimageContainer}>
          <Image source={{ uri: props.imageUrl }} style={styles.bgimage} />
          <Text style={[styles.text]}>{props.children}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  text: {
    color: Renkler.textColor,
    fontWeight: Renkler.fontWeight,
    fontSize: 36,
    width: "80%",
    textAlign: "center",
    position: "absolute",
    shadowOpacity: 0.75,
    shadowOffset: { width: 1, height: 1 },
  },
  bgimageContainer: {
    height: deviceWidth * 0.45,
    width: deviceWidth * 0.45,
    margin: deviceWidth * 0.015,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: Renkler.bgColor,
  },
  bgimage: {
    width: "100%",
    height: "100%",
    opacity: 0.8,
  },
  forshadow: {
    shadowOpacity: 0.3,
    shadowOffset: { width: 1, height: 1 },
  },
});
