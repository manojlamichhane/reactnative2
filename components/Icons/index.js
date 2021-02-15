import React from "react";
import { View, StyleSheet } from "react-native";

const Icons = (props) => (
  <View>
    <View
      style={{
        ...styles.iconcontainer,
        width: props.size,
        height: props.size,
        borderRadius: props.size / 2,
        backgroundColor: props.color,
      }}
    >
      {props.children}
    </View>
  </View>
);
const styles = StyleSheet.create({
  iconcontainer: {
    // borderRadius: 15,
    borderColor: "white",
    //backgroundColor: "white",
    // width: 30,
    // height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Icons;
