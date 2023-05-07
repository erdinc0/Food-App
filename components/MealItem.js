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
import Detaylar from "./Detaylar";

let deviceWidth = Dimensions.get("window").width;

const MealItem = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.forshadow}>
          <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{
                  uri: props.image,
                }}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>{props.children}</Text>
            </View>
            <Detaylar
              affordability={props.affordability}
              complexity={props.complexity}
              duration={props.duration}
            ></Detaylar>
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

    overflow: "hidden",
  },
  imageContainer: {
    width: "100%",
    height: 175,
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    textAlign: "center",
    color: "black",
    fontSize: 24,
    fontWeight: Renkler.fontWeight,
    marginTop: 15,
  },
  textContainer: {
    alignItems: "center",
    width: "80%",
  },

  forshadow: {
    shadowOpacity: 0.3,
    shadowOffset: { width: 1, height: 1 },
  },
});
