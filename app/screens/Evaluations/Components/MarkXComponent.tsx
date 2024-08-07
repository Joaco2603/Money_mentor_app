import { View, Text, Pressable } from "react-native";
import { styles } from "@/app/theme/appTheme";

export const MarkXComponent = () => {
  return (
    <View style={[{ display: "flex", flexDirection: "row", marginTop: 10 }]}>
      <Pressable>
        <View style={styles.MarkXBools}></View>
      </Pressable>
      <Text>La mentalidad es</Text>
    </View>
  );
};
