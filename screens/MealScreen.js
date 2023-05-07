import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import Renkler from "../constants/Renkler";
import Detaylar from "../components/Detaylar";

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

  let mealInfoo = MEALS.find((mealItem) => mealItem.id === route.params.mealId);

  return (
    <>
      <StatusBar style="light" />

      <View>
        <View>
          <View style={styles.imageContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{mealInfoo.title}</Text>
            </View>
            <Image
              style={styles.image}
              source={{
                uri: mealInfoo.imageUrl,
              }}
            />
            <TouchableOpacity
              style={styles.goback}
              onPress={() => navigasyon.goBack()}
            >
              <Ionicons name="ios-arrow-back" size={24} color="green" />
            </TouchableOpacity>
          </View>
          <Detaylar
            affordability={mealInfoo.affordability}
            complexity={mealInfoo.complexity}
            duration={mealInfoo.duration}
            style={styles.detaylar}
          ></Detaylar>
        </View>
        <View style={styles.scrollContainer}>
          <ScrollView>
            <View style={styles.icerik}>
              <View style={styles.baslik}>
                <Text style={styles.baslikText}>İÇİNDEKİLER</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
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
    fontSize: 32,
    fontWeight: "bold",
    color: Renkler.white,

    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.75,
  },
  titleContainer: {
    width: deviceWidth * 0.8,
    position: "absolute",
    zIndex: 1,
    alignSelf: "center",
    top: deviceWidth * 0.45,
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
  detaylar: {
    borderBottomColor: "green",
    borderBottomWidth: 1,
    paddingBottom: deviceWidth * 0.05,
    width: "90%",
    alignSelf: "center",
  },
  icerik: {
    alignItems: "center",
    marginTop: deviceWidth * 0.05,
  },
  baslik: {
    borderBottomWidth: 1,
    paddingBottom: deviceWidth * 0.025,
  },
  baslikText: {
    fontSize: 20,
  },
  scrollContainer: {
    height: "100%",
  },
});
