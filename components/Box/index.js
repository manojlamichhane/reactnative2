import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Box = (props) => (
  <View style={{ ...styles.container, backgroundColor: props.color }}>
    <Text style={{ color: "white", fontSize: 15 }}>{props.title}</Text>
    <Image
      style={styles.image}
      source={{
        uri: props.source,
      }}
    />
    <View style={{ flexDirection: "row" }}>
      <AntDesign name="hearto" size={24} color="white" />
      <Text style={{ color: "white", paddingLeft: 5, fontSize: 20 }}>
        {props.likecount}
      </Text>
    </View>
  </View>
);
const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: 150,
    height: 190,
    borderRadius: 20,
    backgroundColor: "red",
  },
  image: {
    width: 130,
    height: 130,
  },
});
export default Box;
