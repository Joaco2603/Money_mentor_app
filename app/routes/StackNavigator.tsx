import { useContext, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StartScreen } from "../screens/StartScreen";
import { AuthScreen } from "../screens/Auth/AuthScreen";
import { UserContext, UserContextProvider } from "../context/userContext";
import { HomeScreen } from "../screens";

import { NavigationProp, useNavigation } from "@react-navigation/native";

export type RootStackParams = {
  Start: undefined;
  Auth: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  const valuesContext = useContext(UserContext);
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    console.log("Estado del usuario:", valuesContext?.user);
    navigation.navigate("Home");
  }, [valuesContext?.user, navigation]);

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
        {valuesContext?.user === undefined ? (
          <>
            <Stack.Screen name="Start" component={StartScreen} />
            <Stack.Screen name="Auth" component={AuthScreen} />
          </>
        ) : (
          <Stack.Screen name="Home" component={HomeScreen} />
        )}
      </Stack.Navigator>
    </UserContextProvider>
  );
};
