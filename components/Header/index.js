import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = () => (
  <View style={styles.container}>
    <Ionicons name="location" size={24} color="#e03131" />
    <Text style={{ fontSize: 18, color: "grey" }}>2142, Doggie NY, USA</Text>
  </View>
);
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});
export default Header;
