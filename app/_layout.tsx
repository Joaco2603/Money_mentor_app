import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackNavigator } from "./routes/StackNavigator";
import { TabNavigator } from "./routes/TabNavigator";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

export default function Layout() {
  return (
    <QueryClientProvider client={client}>
      <NavigationContainer independent={true}>
        <StackNavigator />
        {/* <TabNavigator /> */}
      </NavigationContainer>
    </QueryClientProvider>
  );
}
