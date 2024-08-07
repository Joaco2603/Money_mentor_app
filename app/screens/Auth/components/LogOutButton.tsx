import { UserContext } from "@/app/context/userContext";
import { useContext } from "react";
import { Image, Pressable } from "react-native";

export const LogOutButton = () => {
  const userContext = useContext(UserContext);
  return (
    <Pressable
      onPress={() => {
        userContext?.logout();
      }}
    >
      <Image
        style={{ width: 200, height: 80, marginLeft: "30%" }}
        source={require("../../../assets/logoutImg.png")}
      ></Image>
    </Pressable>
  );
};
