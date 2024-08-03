import { Logo } from "@/app/components/shared/Logo";
import { UserContext } from "@/app/context/userContext";
import { styles } from "@/app/theme/appTheme";
import { useContext } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StartCourseCard } from "./components/StartCourseCard";
import { CardDescriptionsCourses } from "./components/CardDescriptionsCourses";

export const HomeScreen = () => {
  const userContext = useContext(UserContext);

  return (
    <SafeAreaView style={[styles.container]}>
      <Logo />
      <Text style={[styles.h2Size, styles.alignTextCenter]}>Bienvenido</Text>
      <StartCourseCard />
      <CardDescriptionsCourses />

      {/* <Pressable
        onPress={() => {
          userContext?.logout();
        }}
      >
        <Text>LogOut</Text>
      </Pressable> */}
    </SafeAreaView>
  );
};
