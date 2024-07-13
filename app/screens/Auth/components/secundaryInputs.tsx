import { Alert, Button } from "react-native";
import { PrimaryButton, SecundaryInput } from "@/app/components/shared";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { moneyMentorApi } from "@/app/api/apiMoneyMentorAxios";
import { useState } from "react";

export const SecundaryInputs = () => {

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)


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

      <PrimaryButton text="Incribirse" onPress={handleSubmit(onSubmit)} />
    </>
  );
};
