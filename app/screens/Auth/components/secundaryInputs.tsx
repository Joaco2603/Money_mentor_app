import { Alert, Button, Modal, StyleSheet, Text, View } from "react-native";
import { PrimaryButton, SecundaryInput } from "@/app/components/shared";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { moneyMentorApi } from "@/app/api/apiMoneyMentorAxios";
import { useState } from "react";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { colors } from "@/app/theme/appTheme";

export const SecundaryInputs = () => {
  const onSubmit = async (newUser: Object) => {
    return await moneyMentorApi.post("/user/singUp", newUser);
  };

  const mutation = useMutation({
    mutationFn: onSubmit,
    onSuccess: async () => {
      console.log("I'm first!");
    },
    onSettled: async () => {
      console.log("I'm second!");
    },
  });

  const [date, setDate] = useState<Date>(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    console.log(typeof selectedDate);
    setDate(currentDate);
  };

  const { control, handleSubmit } = useForm();

  return (
    <>
      <SecundaryInput
        namePlaceholder="Nombre"
        type="text"
        control={control}
        name="name"
      />
      <SecundaryInput
        namePlaceholder="Apellido"
        type="text"
        control={control}
        name="last_name"
      />
      <SecundaryInput
        namePlaceholder="Correo"
        type="email"
        control={control}
        name="email"
      />
      <SecundaryInput
        namePlaceholder="Contraseña"
        type="text"
        secure={true}
        control={control}
        name="password"
      />

      <View style={{ alignItems: "center" }}>
        <Button
          title={"Fecha de nacimiento"}
          color={"white"}
          onPress={() => setShowPicker(true)}
        />
        <Text style={styles.text}>{date.toDateString()}</Text>
        {showPicker && (
          <Modal
            transparent={true}
            animationType="slide"
            style={{ alignItems: "center" }}
          >
            <View style={styles.modal}>
              <DateTimePicker
                value={date}
                mode="date"
                display="spinner"
                onChange={onChange}
                textColor="white"
              />
              <Button
                title="Close"
                color={colors.light.primaryColorButton}
                onPress={() => setShowPicker(false)}
              />
            </View>
          </Modal>
        )}
      </View>

      <PrimaryButton text="Incribirse" onPress={handleSubmit(onSubmit)} />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "white",
    marginTop: 10,
    fontWeight: "bold",
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
