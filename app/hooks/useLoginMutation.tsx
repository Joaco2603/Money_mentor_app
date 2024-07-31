import { useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import { moneyMentorApi } from "../api/apiMoneyMentorAxios";
import { UserContext } from "../context/userContext";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParams } from "../routes/StackNavigator";
import { User } from "../context/interface/user";

export const useLoginMutation = () => {
  const userContext = useContext(UserContext);
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return useMutation({
    mutationFn: async (user) => {
      return await moneyMentorApi.post<User>(
        "/user/login",
        JSON.stringify(user)
      );
    },
    onSuccess: async (data) => {
      const dataUser: User = data.data;
      userContext?.signUp(dataUser);
      navigation.navigate("Home");
    },
    onError: (error) => {
      console.log("Sign up error:", error);
    },
  });
};
