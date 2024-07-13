import { createStackNavigator } from "@react-navigation/stack";
import { StartScreen } from "../screens/StartScreen";
import { AuthScreen } from "../screens/Auth/AuthScreen";

export type RootStackParams = {
  Start: undefined;
  Auth: undefined;
  //   Product: { id: number; name: string };
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
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
  );
};
