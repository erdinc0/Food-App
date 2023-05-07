import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";

let deviceWidth = Dimensions.get("screen").width;

const MealScreen = (props) => {
  let navigasyon = useNavigation();

  useLayoutEffect(() => {
    navigasyon.setOptions({
      headerShown: false,
    });
  }, []);

  let route = useRoute();

  let mealInfo = MEALS.filter((mealItem) => {
    return mealItem.id == route.params.mealId;
  });

  return (
    <>
      <StatusBar style="light" />
      <FlatList
        data={mealInfo}
        renderItem={(mealInfoItem) => (
          <>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{
                  uri: mealInfoItem.item.imageUrl,
                }}
              />
              <TouchableOpacity
                style={styles.goback}
                onPress={() => navigasyon.goBack()}
              >
                <Ionicons name="ios-arrow-back" size={24} color="green" />
              </TouchableOpacity>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{mealInfoItem.item.title}</Text>
            </View>
          </>
        )}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

export default MealScreen;

const styles = StyleSheet.create({
  imageContainer: {
    height: deviceWidth * 0.7,

    borderBottomEndRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
  },
  titleContainer: {
    marginTop: 20,

    borderBottomColor: "green",
    borderBottomWidth: 2,
    width: deviceWidth * 0.8,
    alignSelf: "center",
    paddingBottom: deviceWidth * 0.05,
  },
  goback: {
    position: "absolute",
    top: deviceWidth < 380 ? 40 : 65,
    left: deviceWidth < 380 ? 25 : 30,
    backgroundColor: "white",
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 200,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.25,
  },
});
