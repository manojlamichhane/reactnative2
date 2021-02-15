import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Header from "./components/Header";
import Recommendation from "./components/Recommendation";
import Search from "./components/Search";
import Variety from "./components/Variety";
import Otherfood from "./components/Otherfood";
import { FontAwesome } from "@expo/vector-icons";
import VarietyIcons from "./components/VarietyIcons";
import { Ionicons } from "@expo/vector-icons";
export default function App() {
  return (
    <ScrollView>
      <View>
        <View style={styles.container}>
          <Header />
          <Search />
          <Variety />
          <Recommendation />
          <Otherfood />
        </View>
        <View style={styles.navbar}>
          <VarietyIcons size={40} title="Home">
            <FontAwesome name="home" size={30} color="#e03131" />
          </VarietyIcons>
          <VarietyIcons size={40} title="Search">
            <FontAwesome name="search" size={24} color="grey" />
          </VarietyIcons>
          <VarietyIcons size={40} title="Cart">
            <FontAwesome name="shopping-cart" size={24} color="grey" />
          </VarietyIcons>
          <VarietyIcons size={40} title="Card">
            <FontAwesome name="credit-card" size={24} color="grey" />
          </VarietyIcons>
          <VarietyIcons size={40} title="Account">
            <Ionicons name="person-outline" size={24} color="black" />
          </VarietyIcons>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 4,
    backgroundColor: "#fff",
  },
  navbar: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 30,
    flex: 1,
    borderRadius: 30,
    borderColor: "grey",
    borderWidth: 1,
    justifyContent: "space-between",
    backgroundColor: "white",
    flexDirection: "row",
  },
});
