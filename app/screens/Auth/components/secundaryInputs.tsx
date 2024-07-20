import { PrimaryButton, SecundaryInput } from "@/app/components/shared";
import { FieldValues, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { moneyMentorApi } from "@/app/api/apiMoneyMentorAxios";
import { DatePickersAdaptation } from "./index";

export const SecundaryInputs = () => {
  const onSubmit = async (newUser: FieldValues) => {
    return await moneyMentorApi.post("/user/signUp", JSON.stringify(newUser));
  };

  const mutation = useMutation({
    mutationFn: onSubmit,
    onSuccess: async () => {
      console.log("I'm first!");
    },
    onError: (error) => {
      console.log("Error during mutation:", error);
    },
    onSettled: async () => {
      console.log("I'm second!");
    },
  });

  const { control, handleSubmit } = useForm();

  const handleFormSubmit = async (data: FieldValues) => {
    try {
      await mutation.mutateAsync(data);
    } catch (error) {
      console.log("Form submit error:", error);
    }
  };

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
      <DatePickersAdaptation control={control} name="born" />
      <PrimaryButton
        text="Inscribirse"
        onPress={handleSubmit(handleFormSubmit)}
      />
    </>
  );
};
