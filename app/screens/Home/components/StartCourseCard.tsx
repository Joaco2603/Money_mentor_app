import { SecundaryButton } from "@/app/components/shared";
import { styles } from "@/app/theme/appTheme";
import { View, Image } from "react-native";

export const StartCourseCard = () => {
  return (
    <View style={[styles.containerRow]}>
      <View style={styles.boxContainer}>
        <Image
          style={styles.imgCourseStart}
          source={require("../../../assets/startCourseImg.png")}
        ></Image>
      </View>
      <View style={[styles.boxContainerButton, styles.marginTopSix]}>
        <SecundaryButton
          text="Empezar"
          onPress={() => {}}
          paddingHorizontal={0}
        />
      </View>
    </View>
  );
};
