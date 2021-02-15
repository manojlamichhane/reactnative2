import React from "react";
import { View, StyleSheet } from "react-native";
import VarietyIcons from "../VarietyIcons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Variety = () => (
  <View style={styles.container}>
    <VarietyIcons size={50} title="Asian food">
      <MaterialCommunityIcons name="cupcake" size={32} color="#e03131" />
    </VarietyIcons>

    <VarietyIcons size={50} title="American">
      <MaterialCommunityIcons name="cake-variant" size={32} color="#e03131" />
    </VarietyIcons>

    <VarietyIcons size={50} title="Burger">
      <MaterialCommunityIcons name="hamburger" size={32} color="#e03131" />
    </VarietyIcons>

    <VarietyIcons size={50} title="Pizza">
      <MaterialCommunityIcons name="pizza" size={32} color="#e03131" />
    </VarietyIcons>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default Variety;
