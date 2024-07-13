import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import type { RootStackParams } from "../routes/StackNavigator.tsx";

export const StartScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View>
      <View style={styles.ballDecoratorAbove}></View>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.image}
            source={require("../assets/startImage.png")}
          ></Image>
          <Text style={styles.textAuthor}>Joaquin Pappa</Text>
          <View style={styles.containerTitle}>
            <Text style={[styles.titleInfo, styles.underlined]}>Money </Text>
            <Text style={styles.titleInfo}>Mentor</Text>
          </View>
          <Text style={styles.textInfo}>
            La primera aplicación de aprendizaje acerca de negocio
          </Text>
        </View>
        <Pressable onPress={() => navigation.navigate("Auth" as never)}>
          <LinearGradient
            colors={["#A430AB", "#7744CD"]}
            style={styles.primaryButton}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0.5 }}
          >
            <Text style={styles.textPrimaryButton}>Comenzar</Text>
          </LinearGradient>
        </Pressable>
      </View>
      <View style={styles.ballDecoratorBelow}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    width: "70%",
    height: "100%",
    marginBottom: 10,
  },
  cardInfo: {
    flex: 1,
  },
  textAuthor: {
    alignSelf: "flex-end",
    fontSize: 13,
  },
  containerTitle: {
    flexDirection: "row",
    justifyContent: "center",
  },
  underlined: {
    color: "#C87FCB",
  },
  titleInfo: {
    fontSize: 24,
    fontWeight: "bold",
  },
  textInfo: {
    alignSelf: "center",
    textAlign: "center",
    letterSpacing: 1,
  },
  ballDecoratorAbove: {
    backgroundColor: "#83228A",
    position: "relative",
    right: 130,
    top: -140,
    width: 300,
    height: 300,
    borderRadius: 200,
  },
  ballDecoratorBelow: {
    backgroundColor: "#84AFD6",
    flexDirection: "row",
    alignSelf: "flex-end",
    position: "relative",
    left: 80,
    top: 100,
    width: 250,
    height: 250,
    borderRadius: 200,
  },
  image: {
    flex: 1,
    width: "100%",
  },
  primaryButton: {
    padding: 15,
    paddingHorizontal: 50,
    borderRadius: 15,
  },
  textPrimaryButton: {
    color: "white",
    fontWeight: "bold",
  },
});
