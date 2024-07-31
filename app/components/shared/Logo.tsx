import { View, Text, Image } from "react-native";
import { styles } from "@/app/theme/appTheme";

export const Logo = () => {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <Image
        style={styles.logoImg}
        source={require("../../assets/logo.png")}
      ></Image>
      <View style={[styles.alignItemsCenter, { marginTop: "5%" }]}>
        <Text>Money</Text>
        <Text>Mentor</Text>
      </View>
    </View>
  );
};
