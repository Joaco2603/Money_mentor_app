import { Logo } from "@/app/components/shared/Logo";
import { styles } from "@/app/theme/appTheme";
import { FlatList, SafeAreaView, Text } from "react-native";
import { StartCourseCard } from "./components/StartCourseCard";
import { CardDescriptionsCourses } from "./components/CardDescriptionsCourses";
import { ModuleOneData } from "@/app/constants/ModuleOneData";
import { useSubTopicQuery } from "@/app/hooks/useSubTopicQuery";

export const HomeScreen = () => {
  const { isPending, data } = useSubTopicQuery;

  return (
    <SafeAreaView>
      {isPending ? (
        <FlatList
          ListHeaderComponent={
            <>
              <Logo />
              <Text style={[styles.h2Size, styles.alignTextCenter]}>
                Bienvenido
              </Text>
              <StartCourseCard />
            </>
          }
          data={data}
          renderItem={({ item, index, separators }) => (
            <CardDescriptionsCourses
              title={item.name_business_sub_topic}
              desc={item.description_business_sub_topic}
              img={""}
            />
          )}
        ></FlatList>
      ) : (
        <>
          <Text>Cargando...</Text>
        </>
      )}
    </SafeAreaView>
  );
};
