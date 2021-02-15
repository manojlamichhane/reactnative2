import React from "react";
import { View, StyleSheet, Text } from "react-native";

const VarietyIcons = (props) => (
  <View>
    <View
      style={{
        ...styles.iconcontainer,
        width: props.size,
        height: props.size,
        borderRadius: props.size / 2,
      }}
    >
      {props.children}
    </View>
    <Text>{props.title}</Text>
  </View>
);
const styles = StyleSheet.create({
  iconcontainer: {
    // borderRadius: 25,
    borderColor: "white",
    backgroundColor: "#eceff4",
    // width: 50,
    // height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default VarietyIcons;
