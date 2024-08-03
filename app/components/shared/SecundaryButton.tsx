import { Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "@/app/theme/appTheme";

interface Props {
  text: string;
  onPress: () => void;
  paddingHorizontal?: number;
}

export const SecundaryButton = ({
  text = "Undefined",
  onPress,
  paddingHorizontal = 40,
}: Props) => {
  return (
    <Pressable onPress={onPress}>
      <LinearGradient
        colors={["#832289", "#85248D", "#8577B9", "#84CAE4"]}
        style={[styles.primaryButton, { paddingHorizontal: paddingHorizontal }]}
        start={{ x: 0, y: 0.3 }}
        end={{ x: 0.7, y: 0.5 }}
        locations={[0.1, 0.3, 0.6, 0.9]}
      >
        <Text style={styles.textPrimaryButton}>{text}</Text>
      </LinearGradient>
    </Pressable>
  );
};
