import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Bar = (props) => (
  <View style={{ ...styles.container, width: props.size }}></View>
);
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    width: 90,
    height: 4,
    borderRadius: 3,
  },
});
export { Bar };
