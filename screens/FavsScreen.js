import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const FavsScreen = () => {
  let navigasyon = useNavigation();

  useEffect(() => {
    navigasyon.setOptions({
      headerShown: true,
      headerTitle: "Favorites",
    });
  }, []);

  return (
    <View>
      <Text>FavsScreen</Text>
    </View>
  );
};

export default FavsScreen;

const styles = StyleSheet.create({});
