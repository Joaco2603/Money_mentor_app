import { View, Text, Image } from "react-native";
import { styles } from "@/app/theme/appTheme";
import { PrimaryButton } from "@/app/components/shared";
import { UserContext } from "@/app/context/userContext";
import { useContext } from "react";

export const CardProfile = () => {
  const userContext = useContext(UserContext);
  const user = userContext?.user;

  return (
    <View style={[styles.alignItemsCenter]}>
      <View style={[styles.CardProfileContainer]}>
        <View style={[{ marginTop: 70 }, styles.alignItemsCenter]}>
          <View style={{ width: "80%" }}>
            <Image
              style={styles.imgChip}
              source={require("../../../assets/chip.png")}
            ></Image>
            <Text style={[{ fontWeight: "bold" }, styles.textColorWhite]}>
              5000 0000 0000 0000
            </Text>
            <Text style={[styles.h4Size, styles.textColorWhite]}>
              Valid {user?.born?.slice(5)}
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Text style={[styles.textColorWhite]}>
              {`${user?.name?.charAt(0).toUpperCase()}${user?.name?.slice(
                1
              )}` || "null"}
            </Text>
            <Image
              style={styles.imgSponsor}
              source={require("../../../assets/mastercard.png")}
            ></Image>
          </View>
        </View>
      </View>
      <PrimaryButton text="Editar" onPress={() => {}} paddingHorizontal={110} />
    </View>
  );
};
