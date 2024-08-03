import { useContext, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StartScreen } from "../screens/StartScreen";
import { AuthScreen } from "../screens/Auth/AuthScreen";
import { UserContextProvider } from "../context/userContext";
import { TabNavigator } from "./TabNavigator";

export type RootStackParams = {
  Start: undefined;
  Auth: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <UserContextProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: {
            elevation: 0,
            shadowColor: "transparent",
          },
        }}
      >
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Home" component={TabNavigator} />
      </Stack.Navigator>
    </UserContextProvider>
  );
};
