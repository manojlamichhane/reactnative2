import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Icons from "../Icons";

const Search = () => (
  <View style={styles.container}>
    <View
      style={{
        justifyContent: "flex-start",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <AntDesign name="search1" size={24} color="grey" />
      <Text style={{ color: "grey" }}>Search Food</Text>
    </View>
    <Icons color="white" size={30}>
      <AntDesign name="menufold" size={20} color="#e03131" />
    </Icons>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "#eceff4",
    borderRadius: 10,
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default Search;
