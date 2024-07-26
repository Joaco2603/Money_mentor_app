import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const HomeScreen = () => {

  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <Pressable onPress={()=>{

      }}>
        <Text>Home Screen</Text>
      </Pressable>
    </SafeAreaView>
  );
};
