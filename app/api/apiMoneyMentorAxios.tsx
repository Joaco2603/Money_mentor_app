import axios from "axios";

export const moneyMentorApi = axios.create({
  baseURL: "http://192.168.0.3:3000/money_mentor",
  headers: {
    "Content-Type": "application/json",
  },
});
