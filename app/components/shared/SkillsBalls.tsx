import { categorys } from "@/app/helpers/CategorysOptions";
import { styles } from "@/app/theme/appTheme";
import { View, Image } from "react-native";

export const SkillsBalls = ({ category }: { category: categorys }) => {
  return (
    <View>
      <View>
        <View style={[styles.balls, { borderColor: category }]}>
          <Image
            style={styles.imgSkills}
            source={require("../../assets/testImg.png")}
          ></Image>
        </View>
      </View>
    </View>
  );
};
