import { View, Text } from "react-native";
import React from "react";
import { styles } from "@/app/theme/appTheme";
import { FontAwesome } from "@expo/vector-icons";

export const Instructions = () => {
  return (
    <View style={[styles.alignItemsCenter, styles.marginTen]}>
      <Text style={styles.h2Size}>Instruciones</Text>
      <Text style={styles.alignTextCenter}>
        Marque con x la respuesta correcta, hay solo una respuesta correcta
      </Text>
      <FontAwesome size={50} name="arrow-down" color="black" />
    </View>
  );
};
