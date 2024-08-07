import { Text, ScrollView, SafeAreaView } from "react-native";
import { Suspense, lazy } from "react";
import { LoadingVideos, Logo } from "@/app/components/shared/";
import { styles } from "@/app/theme/appTheme";

const Videos = lazy(() => import("@/app/components/shared/Videos"));

export const CourseScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Logo />
        <Text style={[styles.alignTextLeft, styles.h2Size]}>Mentalidad</Text>
        <Text style={styles.alignTextLeft}>
          La mentalidad en negocios es una combinación de creencias, actitudes y
          enfoques que influyen en cómo gestionas y creces tu empresa.
        </Text>
        <Suspense fallback={<LoadingVideos />}>
          <Videos />
        </Suspense>
        <Text style={styles.h3Size}>Lorem</Text>
        <Text>
          La mentalidad en negocios es una combinación de creencias, actitudes y
          enfoques que influyen en cómo gestionas y creces tu empresa.
        </Text>
        <Text style={[styles.alignTextRight, styles.h3Size]}>Lorem</Text>
        <Text style={styles.alignTextRight}>
          La mentalidad en negocios es una combinación de creencias, actitudes y
          enfoques que influyen en cómo gestionas y creces tu empresa.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
