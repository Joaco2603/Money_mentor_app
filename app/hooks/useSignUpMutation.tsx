import { useMutation } from "@tanstack/react-query";
import { moneyMentorApi } from "../api/apiMoneyMentorAxios";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParams } from "../routes/StackNavigator";
import { User } from "../context/interface/user";

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
    onSuccess: async (data) => {
      const dataUser: User = data.data;
      console.log("Sign up successful!", dataUser);
      await userContext?.signUp(dataUser);
      navigation.navigate("Home");
      navigation.getState
      
    },
    onError: (error) => {
      console.log("Sign up error:", error);
    },
  });
};
