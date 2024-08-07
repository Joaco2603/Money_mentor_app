import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./routes/StackNavigator";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

export default function Layout() {
  return (
    <QueryClientProvider client={client}>
      <NavigationContainer independent={true}>
        <StackNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
