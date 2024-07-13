import { PrimaryInput, PrimaryButton } from "@/app/components/shared";
import { Alert } from "react-native";
import { useForm } from "react-hook-form";

export const PrimaryInputs = () => {
  const onSubmit = (data: Object) => {
    Alert.alert(JSON.stringify(data));
  };

  const { control, handleSubmit } = useForm();

  return (
    <>
      <PrimaryInput
        namePlaceholder="Correo"
        type="email"
        control={control}
        name="email"
      />
      <PrimaryInput
        namePlaceholder="Contraseña"
        type="text"
        secure={true}
        control={control}
        name="password"
      />

      <PrimaryButton
        text="Incribirse"
        onPress={handleSubmit(onSubmit)}
      />
    </>
  );
};
