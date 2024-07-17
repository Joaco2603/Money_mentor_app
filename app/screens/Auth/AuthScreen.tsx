import {
  Text,
  View,
  Pressable,
  Animated,
  PanResponder,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useMutation } from "@tanstack/react-query";
import { moneyMentorApi } from "@/app/api/apiMoneyMentorAxios";
import { User } from "@/app/context/interface/user";
import { styles } from "@/app/theme/appTheme";
import { ReturnButton } from "@/app/components/shared/index";
import {
  LoginGoogle,
  OrBlack,
  OrWhite,
  PrimaryInputs,
  SecundaryInputs,
} from "./components";
import { AnimationSlideInY } from "../hooks/AnimationSlideInY";

const AuthCallBackend = async ({ user }: { user: User }) => {
  const { data } = await moneyMentorApi.post<User>(`/user/signUp`, user);
  return data;
};

export const AuthScreen = () => {
  // const authQuery = useMutation({
  //   queryKey: [],
  //   queryFn: () => AuthCallBackend(),
  // });

  const { pan, panResponder, animateTo } = AnimationSlideInY();

  return (
    <SafeAreaView style={styles.main}>
      <ReturnButton />

      <View style={styles.login}>
        <Pressable onPress={() => animateTo(600)}>
          <Text style={[styles.h2Size, styles.textColorBlack]}>
            Iniciar sesión
          </Text>
        </Pressable>
        <PrimaryInputs />
        <OrBlack />
        <LoginGoogle loginOrSignUp={false} />
      </View>

      <Animated.View style={pan.getLayout()} {...panResponder.panHandlers}>
        <View style={styles.signUp}>
          <View style={styles.slideButton}></View>

          <Pressable>
            <Text style={[styles.h1Size, styles.textColorWhite]}>
              Incribirse
            </Text>
          </Pressable>

          <SecundaryInputs />
          <OrWhite />
          <LoginGoogle />
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};
