import { View, Text } from "react-native";
import { styles } from "@/app/theme/appTheme";
import {
  SkillsBalls,
  PorcentageBall,
  PrimaryButton,
} from "@/app/components/shared/";
import { categorys } from "@/app/helpers/CategorysOptions";

interface Prop {
  title: string;
  desc: string;
  img?: string;
  porcentage?: number;
  link?: string;
}

export const CardDescriptionsCourses = ({
  title,
  desc,
  img,
  porcentage,
  link,
}: Prop) => {
  return (
    <View
      style={{ flex: 2, alignItems: "center", columnGap: 10, marginBottom: 30 }}
    >
      <View style={styles.cardsDescriptionsSubTopics}>
        <View style={styles.cardBorder}>
          <View style={[{ marginLeft: 12 }]}>
            <Text style={styles.h3Size}>{title}</Text>
            <Text>{desc}</Text>
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
