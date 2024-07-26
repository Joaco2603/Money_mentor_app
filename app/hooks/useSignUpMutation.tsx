import { useMutation } from "@tanstack/react-query";
import { moneyMentorApi } from "../api/apiMoneyMentorAxios";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { User } from "../context/interface/user";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParams } from "../routes/StackNavigator";

export const useSignUpMutation = () => {
  const userContext = useContext(UserContext);
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  return useMutation({
    mutationFn: async (newUser) => {
      return await moneyMentorApi.post<User>(
        "/user/signUp",
        JSON.stringify(newUser)
      );
    },
    onSuccess: (data) => {
      console.log("Sign up successful!");
      userContext?.signUp(data);
      navigation.navigate("Home");
    },
    onError: (error) => {
      console.log("Sign up error:", error);
    },
  });
};
