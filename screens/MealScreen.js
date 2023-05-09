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
import IcindekilerItem from "../components/IcindekilerItem";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

let deviceWidth = Dimensions.get("screen").width;

const MealScreen = (props) => {
  let navigasyon = useNavigation();

  useLayoutEffect(() => {
    navigasyon.setOptions({
      headerShown: false,
    });
  }, []);

  let route = useRoute();

  let mealId = route.params.mealId;

  let mealInfoo = MEALS.find((mealItem) => mealItem.id === mealId);

  let favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  let mealIsFavorite = favoriteMealIds.includes(mealId);
  let dispatch = useDispatch();

  let favoriHandler = () => {
    if (mealIsFavorite) {
      console.log("remove");
      dispatch(removeFavorite({ id: mealId }));
    } else {
      console.log("add");
      dispatch(addFavorite({ id: mealId }));
    }
  };

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

            <TouchableOpacity
              style={styles.addFav}
              onPress={() => {
                favoriHandler();
              }}
            >
              <Ionicons
                name={
                  mealIsFavorite === true ? "ios-heart" : "ios-heart-outline"
                }
                size={24}
                color="green"
              />
            </TouchableOpacity>
          </View>
          <Detaylar
            affordability={mealInfoo.affordability}
            complexity={mealInfoo.complexity}
            duration={mealInfoo.duration}
            style={styles.detaylar}
          ></Detaylar>
        </View>
      </View>
      <View style={styles.scrollContainer}>
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scroll}>
          <View style={styles.icerik}>
            <View style={styles.baslik}>
              <Text style={styles.baslikText}>İÇİNDEKİLER</Text>
            </View>

            <IcindekilerItem>{mealInfoo.ingredients}</IcindekilerItem>

            <View style={styles.baslik}>
              <Text style={styles.baslikText}>HAZIRLANIŞI</Text>
            </View>

            <IcindekilerItem>{mealInfoo.steps}</IcindekilerItem>
          </View>
        </ScrollView>
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
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 200,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.25,
  },
  addFav: {
    position: "absolute",
    alignSelf: "flex-end",
    backgroundColor: "white",
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 200,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.25,
    top: deviceWidth < 380 ? 40 : 65,
    right: deviceWidth < 380 ? 25 : 30,
  },
  detaylar: {
    paddingBottom: deviceWidth * 0.05,
    width: "100%",
    alignSelf: "center",
    backgroundColor: Renkler.bgWhite,
    borderBottomEndRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
    paddingTop: 10,
  },
  icerik: {
    alignItems: "center",
  },
  baslik: {
    marginTop: 20,
    borderBottomWidth: 1,
    paddingBottom: deviceWidth * 0.025,
  },
  baslikText: {
    fontSize: 20,
  },
  scrollContainer: { flex: 1 },
  scroll: { paddingBottom: 30 },
});
