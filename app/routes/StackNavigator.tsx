import { createStackNavigator } from "@react-navigation/stack";
import { StartScreen } from "../screens/StartScreen";
import { AuthScreen } from "../screens/Auth/AuthScreen";
import { UserContextProvider } from "../context/userContext";

export type RootStackParams = {
  Start: undefined;
  Auth: undefined;
  //   Product: { id: number; name: string };
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
      </Stack.Navigator>
    </UserContextProvider>
  );
};
