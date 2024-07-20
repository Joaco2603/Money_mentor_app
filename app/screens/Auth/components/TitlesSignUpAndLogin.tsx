import { styles } from "@/app/theme/appTheme";
import { Text, Pressable } from "react-native";

export const TitlesSignUpAndLogin = ({
  text,
  onPress,
  color,
}: {
  text: string;
  onPress: () => void;
  color: string;
}) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={[styles.h2Size, {color: color}]}>{text}</Text>
    </Pressable>
  );
};
