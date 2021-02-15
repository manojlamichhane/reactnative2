import React from "react";
import { Text, View, Image } from "react-native";
import Icons from "../Icons";
import { AntDesign } from "@expo/vector-icons";

const Food = (props) => (
  <View style={{ flexDirection: "row" }}>
    <Image
      style={{ width: 60, height: 60, borderRadius: 20 }}
      source={{
        uri:
          "https://image.shutterstock.com/image-photo/chicken-hakkaschezwan-noodles-served-bowl-600w-1377414644.jpg",
      }}
    />

    <View style={{ paddingLeft: 20, paddingRight: 20, width: 220 }}>
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>{props.title}</Text>
      <Text>{props.subtitle}</Text>
      <Text>{props.duration}</Text>
    </View>
    <View>
      <View style={{ paddingLeft: 10 }}>
        <Icons size={30} color="#e03131">
          <AntDesign name="plus" size={20} color="white" />
        </Icons>
      </View>
      <Text style={{ marginTop: 30 }}>$23.00</Text>
    </View>
  </View>
);

export default Food;
