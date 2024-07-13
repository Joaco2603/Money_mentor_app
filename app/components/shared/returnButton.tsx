import { RootStackParams } from "@/app/routes/StackNavigator";
import { FontAwesome } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { Pressable } from "react-native";

export const ReturnButton = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <Pressable onPress={() => navigation.goBack()}>
      <FontAwesome size={28} name="arrow-left" color={"black"} />
    </Pressable>
  );
};
