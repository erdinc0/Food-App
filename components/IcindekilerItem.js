import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const IcindekilerItem = (props) => {
  return (
    <View style={styles.mainContainer}>
      {props.children.map((ingredient) => (
        <View key={ingredient}>
          <TouchableOpacity style={styles.touch} activeOpacity={0.45}>
            <View style={styles.ingredient}>
              <Text style={styles.ingredientText}>{ingredient}</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default IcindekilerItem;

const styles = StyleSheet.create({
  ingredientText: {
    fontSize: 18,
    fontWeight: "300",
    textAlign: "center",
    paddingVertical: 10,
  },
  ingredient: {
    backgroundColor: "white",
    marginVertical: 5,
    paddingHorizontal: "12%",
    flex: 1,
    borderRadius: 15,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.15,
    justifyContent: "center",
    elevation: 2,
  },
  mainContainer: {
    paddingTop: 15,
    width: "80%",
  },
  touch: {},
});
