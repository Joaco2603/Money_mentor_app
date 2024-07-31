import { Logo } from "@/app/components/shared/Logo";
import { UserContext } from "@/app/context/userContext";
import { styles } from "@/app/theme/appTheme";
import { useContext } from "react";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StartCourseCard } from "./components/StartCourseCard";

export const HomeScreen = () => {
  const userContext = useContext(UserContext);

  return (
    <SafeAreaView>
      <Logo />
      <Text style={[styles.h2Size, styles.alignTextCenter]}>Bienvenido</Text>
      <StartCourseCard />
      <Pressable
        onPress={() => {
          userContext?.logout();
        }}
      >
        <Text>LogOut</Text>
      </Pressable>
    </SafeAreaView>
  );
};
