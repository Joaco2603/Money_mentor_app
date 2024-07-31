import { PrimaryInput, PrimaryButton } from "@/app/components/shared";
import { useFormHandler } from "@/app/hooks/useFormHandler";
import { useLoginMutation } from "@/app/hooks/useLoginMutation";

export const PrimaryInputs = () => {
  const signUpMutation = useLoginMutation();
  const { control, handleSubmit, handleFormSubmit } =
    useFormHandler(signUpMutation);

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
        onPress={handleSubmit(handleFormSubmit)}
      />
    </>
  );
};
