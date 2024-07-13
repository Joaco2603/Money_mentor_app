import { View, Text, Pressable, Image } from "react-native";
import { styles } from "@/app/theme/appTheme";

export const LoginGoogle = ({ loginOrSignUp = true }: {loginOrSignUp?: boolean} ) => {
  return (
    <View style={styles.googleServicesContainer}>
      <View style={styles.googleServicesCard}>
        <View style={styles.googleServicesIconChild}>
          <Pressable onPress={() => {}}>
            <Image
              style={styles.imageGoogle}
              source={require("../../../assets/googleImg.png")}
            ></Image>
          </Pressable>
        </View>
        <View style={styles.googleServicesTextChild}>
          <Pressable onPress={() => {}}>
            <Text>
              {loginOrSignUp
                ? "Incribirse con google"
                : "Iniciar Sesion con google"}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
