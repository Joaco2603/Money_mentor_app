import { PrimaryButton, SecundaryInput } from "@/app/components/shared";
import { DatePickersAdaptation } from "@/app/components/shared/datePickersAdaptation";
import { useFormHandler } from "@/app/hooks/useFormHandler";
import { useSignUpMutation } from "@/app/hooks/useSignUpMutation";

export const SecundaryInputs = () => {
  const signUpMutation = useSignUpMutation();
  const { control, handleSubmit, handleFormSubmit } = useFormHandler(signUpMutation);

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
