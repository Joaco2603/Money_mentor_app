import { View, Text, Pressable, Platform } from "react-native";
import { useState } from "react";
import { styles } from "@/app/theme/appTheme";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Control, useController } from "react-hook-form";

interface Props {
  name: string;
  control: Control;
}

const [showPicker, setShowPicker] = useState(false);

export const DatePickersAdaptation = ({ control, name }: Props) => {
  const { field } = useController({
    control,
    defaultValue: new Date(),
    name,
  });

  const onChange = (event, selectedDate) => {
    setShowPicker(true);
  };

  return (
    <>
      <Text
        style={[styles.h3Size, styles.alignTextLeft, styles.textColorWhite]}
      >
        Fecha de nacimiento
      </Text>
      {Platform.OS === "ios" ? (
        <DateTimePicker
          value={field.value}
          mode="date"
          display="compact"
          onChange={onChange}
          textColor="white"
        />
      ) : (
        <View>
          <Pressable
            onPress={() => {
              setShowPicker(!showPicker);
            }}
          >
            <Text style={{ color: "white" }}>{field.value.toDateString()}</Text>
          </Pressable>
          {showPicker && (
            <DateTimePicker
              value={field.value}
              mode="date"
              display="spinner"
              onChange={onChange}
              minuteInterval={10}
              textColor="white"
              positiveButton={{ label: "Continue", textColor: "black" }}
              negativeButton={{ label: "Close", textColor: "black" }}
            />
          )}
        </View>
      )}
    </>
  );
};
