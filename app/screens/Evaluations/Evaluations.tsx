import { FlatList, SafeAreaView, ScrollView } from "react-native";
import { Logo } from "@/app/components/shared";
import React from "react";
import { Instructions, Questions } from "./Components";

export const Evaluations = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Logo />
        <Instructions />
        <Questions />
      </ScrollView>
    </SafeAreaView>
  );
};
