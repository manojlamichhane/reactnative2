import React from "react";
import { View, Text } from "react-native";
import { Bar } from "../Widgets";
import Food from "../Food";

const Recommendation = () => {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
        Other Food
      </Text>
      <Bar size={35} />
      <View style={{ marginTop: 20 }}>
        <Food
          title="Chineese Cousin"
          subtitle="Lorem Ipsum has been the industry's standard dummy "
          duration="34mins"
        />
      </View>
    </View>
  );
};

export default Recommendation;
