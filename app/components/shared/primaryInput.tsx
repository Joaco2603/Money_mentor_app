import { InputModeOptions, Text, TextInput, View } from "react-native";
import { colors, styles } from "@/app/theme/appTheme";
import { Control, useController } from "react-hook-form";

interface Props {
  namePlaceholder: string;
  type: InputModeOptions;
  control: Control | undefined;
  name: string;
  secure?: boolean;
}

export const PrimaryInput = ({
  namePlaceholder = "undefined",
  type,
  secure = false,
  control = undefined,
  name,
}: Props) => {
  const { field } = useController({
    control,
    defaultValue: "",
    name,
    rules: { required: true },
  });

  return (
    <View style={{ width: "80%" }}>
      <Text
        style={[styles.h3Size, styles.alignTextLeft, styles.textColorBlack]}
      >
        {namePlaceholder}
      </Text>
      <View style={styles.alignItemsCenter}>
        <TextInput
          keyboardType="default"
          autoCapitalize="words"
          autoCorrect={true}
          inputMode={type}
          secureTextEntry={secure}
          style={[styles.input, styles.textColorBlack]}
          value={field.value}
          onChangeText={field.onChange}
        />
      </View>
    </View>
  );
};
