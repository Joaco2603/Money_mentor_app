import { Text, View, SafeAreaView } from "react-native";
import { Logo } from "@/app/components/shared";
import { CardProfile } from "./components/CardProfile";
import { LogOutButton } from "./components/LogOutButton";

export const SettingsScreen = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Logo />
        <LogOutButton />
      </View>
      <Text style={{ marginLeft: 15, marginBottom: 20, color: "#320DAF" }}>
        Range
      </Text>
      <CardProfile />
    </SafeAreaView>
  );
};
