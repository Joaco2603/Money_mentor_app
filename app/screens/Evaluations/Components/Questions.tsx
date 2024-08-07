import { View, Text } from "react-native";
import React from "react";
import { styles } from "@/app/theme/appTheme";
import { MarkXComponent } from "./MarkXComponent";

interface Prop {
  index: number;
  question: string;
  answers: any;
}

export const Questions = ({ index, question, answers }: Prop) => {
  return (
    <View style={styles.alignItemsCenter}>
      <View style={{ width: "80%" }}>
        <Text style={styles.h3Size}>Question </Text>
        <Text style={[styles.textLeft]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          blanditiis dolores odio aspernatur, mollitia culpa veniam non
          laboriosam officia! Minus, dignissimos. Aut ullam deleniti maxime id
          earum debitis repellendus ipsum.
        </Text>
        <View>
          <MarkXComponent />
          <MarkXComponent />
          <MarkXComponent />
          <MarkXComponent />
        </View>
      </View>
    </View>
  );
};
