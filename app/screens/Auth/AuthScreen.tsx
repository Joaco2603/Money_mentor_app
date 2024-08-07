import { View, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/app/theme/appTheme";
import { ReturnButton } from "@/app/components/shared/index";
import {
  LoginGoogle,
  OrBlack,
  OrWhite,
  PrimaryInputs,
  SecundaryInputs,
  TitlesSignUpAndLogin,
} from "./components";
import { AnimationSlideInY } from "../hooks/AnimationSlideInY";

export const AuthScreen = () => {
  const { pan, panResponder, animateTo } = AnimationSlideInY();

  return (
    <SafeAreaView style={styles.main}>
      <ReturnButton />
      <View style={styles.login}>
        <TitlesSignUpAndLogin
          text={"Iniciar Sesión"}
          onPress={() => {
            animateTo(600);
          }}
          color={"black"}
        />
        <PrimaryInputs />
        <OrBlack />
        <LoginGoogle loginOrSignUp={false} />
      </View>

      <Animated.View style={pan.getLayout()} {...panResponder.panHandlers}>
        <View style={styles.signUp}>
          <View style={styles.slideButton}></View>
          <TitlesSignUpAndLogin
            text={"Inscribirse"}
            onPress={() => {}}
            color={"white"}
          />
          <SecundaryInputs />
          <OrWhite />
          <LoginGoogle />
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};
