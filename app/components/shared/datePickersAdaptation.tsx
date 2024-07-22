import { useState } from "react";
import { View, Text, Pressable, Platform } from "react-native";
import { styles } from "@/app/theme/appTheme";
import { Control, useController } from "react-hook-form";
import DateTimePicker from "@react-native-community/datetimepicker";

interface Props {
  name: string;
  control: Control;
}

export const DatePickersAdaptation = ({ control, name }: Props) => {
  const { field } = useController({
    control,
    defaultValue: new Date(),
    name,
  });

  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (date: {
    date: Date | undefined;
  }) => {
    const currentDate = date || field.value;
    field.onChange(currentDate);
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
          onChange={(evt, date) => handleDateChange({date})}
          mode="date"
          display="compact"
          textColor="white"
          accentColor="white"
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
              onChange={field.onChange}
              mode="date"
              display="spinner"
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
