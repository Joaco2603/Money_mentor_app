import { useMutation } from "@tanstack/react-query";
import { moneyMentorApi } from "../api/apiMoneyMentorAxios";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: async (user) => {
      return await moneyMentorApi.post("/user/login", JSON.stringify(user));
    },
    onSuccess: () => {
      console.log("Login successful!");
    },
    onError: (error) => {
      console.log("Sign up error:", error);
    },
  });
};
