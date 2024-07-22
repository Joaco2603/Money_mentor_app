import { useMutation } from "@tanstack/react-query";
import { moneyMentorApi } from "../api/apiMoneyMentorAxios";

export const useSignUpMutation = () => {
  return useMutation({
    mutationFn: async (newUser) => {
      return await moneyMentorApi.post("/user/signUp", JSON.stringify(newUser));
    },
    onSuccess: () => {
      console.log("Sign up successful!");
    },
    onError: (error) => {
      console.log("Sign up error:", error);
    },
  });
};
