import { UserContext } from "@/app/context/userContext";
import { useContext } from "react";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const HomeScreen = () => {
  const userContext = useContext(UserContext);

  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <Pressable onPress={() => {
        userContext?.login(undefined);
      }}>
        <Text>LogOut</Text>
      </Pressable>
    </SafeAreaView>
  );
};
