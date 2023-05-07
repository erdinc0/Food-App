import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Renkler from "../constants/Renkler";

const Detaylar = (props) => {
  return (
    <View style={[styles.detaylar, props.style]}>
      <View style={styles.detay}>
        <View style={styles.detailContainer}>
          <Text style={styles.title}> Affordability </Text>
          <Text style={styles.aciklama}>
            {props.affordability.toUpperCase()}
          </Text>
        </View>
      </View>
      <View style={styles.detay}>
        <View style={styles.detailContainer}>
          <Text style={styles.title}> Duration </Text>
          <Text style={styles.aciklama}>{props.duration}</Text>
        </View>
      </View>
      <View style={styles.detay}>
        <View style={styles.detailContainer}>
          <Text style={styles.title}> Complexity </Text>
          <Text style={styles.aciklama}>{props.complexity.toUpperCase()}</Text>
        </View>
      </View>
    </View>
  );
};

export default Detaylar;

const styles = StyleSheet.create({
  detaylar: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  detay: { flex: 1, marginTop: 20 },
  title: {
    fontWeight: "bold",
    color: Renkler.gri,
  },
  aciklama: {
    color: Renkler.gri,
  },
  detailContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    height: 40,
  },
});
