import { Text, Pressable } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "@/app/routes/StackNavigator";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "@/app/theme/appTheme";

interface Props {
  text: string;
  onPress: () => void;
}

export const PrimaryButton = ({ text = "Undefined", onPress }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <Pressable onPress={onPress}>
      <LinearGradient
        colors={["#A430AB", "#7744CD"]}
        style={styles.primaryButton}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0.5 }}
      >
        <Text style={styles.textPrimaryButton}>{text}</Text>
      </LinearGradient>
    </Pressable>
  );
};
