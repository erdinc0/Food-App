import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Renkler from "../constants/Renkler";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Detaylar = (props) => {
  return (
    <View style={[styles.detaylar, props.style]}>
      <View style={styles.detay}>
        <View style={styles.detailContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.title}> Affordability </Text>
            <FontAwesome name="money" size={16} color={Renkler.gri} />
          </View>

          <Text style={styles.aciklama}>
            {props.affordability.toUpperCase() == "AFFORDABLE" ? "$" : "$$$"}
          </Text>
        </View>
      </View>
      <View style={styles.detay}>
        <View style={styles.detailContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.title}> Duration </Text>
            <Ionicons name="timer-outline" size={16} color={Renkler.gri} />
          </View>
          <Text style={styles.aciklama}>
            {props.duration}
            {" MIN"}
          </Text>
        </View>
      </View>
      <View style={styles.detay}>
        <View style={styles.detailContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={styles.title}> Complexity </Text>
            <Ionicons name="analytics-outline" size={16} color={Renkler.gri} />
          </View>
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
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  detay: { flex: 1, marginTop: 10 },
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
