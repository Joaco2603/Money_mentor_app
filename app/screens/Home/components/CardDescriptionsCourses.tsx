import { View, Text } from "react-native";
import { styles } from "@/app/theme/appTheme";
import {
  SkillsBalls,
  PorcentageBall,
  PrimaryButton,
} from "@/app/components/shared/";
import { categorys } from "@/app/helpers/CategorysOptions";

export const CardDescriptionsCourses = () => {
  return (
    <View style={{ flex: 2, alignItems: "center" }}>
      <View style={styles.cardsDescriptionsSubTopics}>
        <View style={styles.cardBorder}>
          <View style={[{ marginLeft: 12 }]}>
            <Text style={styles.h3Size}>Mentalidad</Text>
            <Text>El principio de todo millonario es su mentalidad</Text>
            <Text style={styles.h4Size}>Habilidades a adquirir</Text>
            <View style={styles.VerticalOrganizationWrap}>
              <SkillsBalls category={categorys.principles} />
              <SkillsBalls category={categorys.mindset} />
              <SkillsBalls category={categorys.laws} />
              <SkillsBalls category={categorys.laws} />
              <PorcentageBall />
              <PrimaryButton text="Empezar" onPress={() => {}} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
