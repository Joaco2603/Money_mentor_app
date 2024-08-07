import { View } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { styles } from "@/app/theme/appTheme";

export const LoadingVideos = () => {
  return (
    <View style={[styles.alignItemsCenter, { marginTop: 100 }]}>
      <ActivityIndicator animating={true} color={MD2Colors.purple50} />
    </View>
  );
};
