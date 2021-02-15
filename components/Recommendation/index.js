import React from "react";
import { View, Text } from "react-native";
import Box from "../Box";
import { Bar } from "../Widgets";

const Recommendation = () => {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
        Recommendation Deals
      </Text>
      <Bar size={60} />
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          justifyContent: "space-between",
        }}
      >
        <Box
          title="Spicy Chowmin"
          color="#f59f00"
          source="https://image.shutterstock.com/image-photo/chicken-hakkaschezwan-noodles-served-bowl-600w-1377414644.jpg"
          likecount="99+"
        />
        <Box
          title="Honey Mojjan Dish"
          color="#00ccff"
          source="https://image.shutterstock.com/image-photo/chicken-hakkaschezwan-noodles-served-bowl-600w-1377414644.jpg"
          likecount="98+"
        />
      </View>
    </View>
  );
};

export default Recommendation;
