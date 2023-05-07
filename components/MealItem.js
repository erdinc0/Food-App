import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Renkler from "../constants/Renkler";

let deviceWidth = Dimensions.get("window").width;

const MealItem = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.mainContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: props.image,
                width: "100%",
                height: "100%",
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{props.children}</Text>
            <View style={styles.detaylar}>
              <Text style={styles.detay}>
                Affordability {"\n"}
                {props.affordability.toUpperCase()}
              </Text>
              <Text style={styles.detay}>
                Complexity {"\n"}
                {props.complexity.toUpperCase()}
              </Text>
              <Text style={styles.detay}>
                Duration {"\n"}
                {props.duration}
                {" min"}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: deviceWidth * 0.95,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: Renkler.white,
    alignSelf: "center",
    paddingBottom: 20,
    borderRadius: 25,
    shadowOpacity: 0.3,
    shadowOffset: { width: 1, height: 1 },
  },
  imageContainer: {
    width: deviceWidth * 0.95,
    height: 175,
    alignSelf: "center",
  },
  image: {
    borderTopLeftRadius: 25,
    borderTopEndRadius: 25,
  },
  text: {
    textAlign: "center",
    width: "80%",
    color: "black",
    fontSize: Renkler.fontSize,
    fontWeight: Renkler.fontWeight,
    marginTop: 15,
  },
  textContainer: {
    alignItems: "center",
  },
  detaylar: {
    flexDirection: "row",
    marginTop: 10,
    width: "100%",
  },
  detay: {
    textAlign: "center",
    flex: 1,
  },
});
