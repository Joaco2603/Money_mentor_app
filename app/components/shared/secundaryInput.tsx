import { InputModeOptions, Text, TextInput, View } from "react-native";
import { styles } from "@/app/theme/appTheme";
import { Control, useController } from "react-hook-form";

interface Props {
  namePlaceholder: string;
  type: InputModeOptions;
  control: Control | undefined;
  name: string;
  secure?: boolean;
}

export const SecundaryInput = ({
  namePlaceholder = "undefined",
  type,
  control = undefined,
  name,
  secure = false,
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
        style={[styles.h3Size, styles.alignTextLeft, styles.textColorWhite]}
      >
        {namePlaceholder}
      </Text>
      <View style={styles.alignItemsCenter}>
        <TextInput
          keyboardType="default"
          autoCapitalize="words"
          autoCorrect={true}
          style={[styles.secundaryInput]}
          inputMode={type}
          secureTextEntry={secure}
          value={field.value}
          onChangeText={field.onChange}
        />
      </View>
    </View>
  );
};
