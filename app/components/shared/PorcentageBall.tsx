import { styles } from "@/app/theme/appTheme";
import { View, Text } from "react-native";

export const PorcentageBall = ({ porcentage = 0 }: { porcentage?: number }) => {
  return (
    <View
      style={[
        styles.ballsPorcentage,
        styles.alignItemsCenter,
        styles.marginTen,
      ]}
    >
      <Text
        style={[
          styles.alignItemsCenter,
          styles.marginTen,
          styles.h4Size,
          { marginTop: 15 },
        ]}
      >
        {porcentage}%
      </Text>
    </View>
  );
};
