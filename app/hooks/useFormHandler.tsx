import { useForm } from 'react-hook-form';

export const useFormHandler = (mutation: any) => {
  const { control, handleSubmit } = useForm();

  const handleFormSubmit = async (data: any) => {
    try {
      await mutation.mutateAsync(data);
    } catch (error) {
      console.log("Form submit error:", error);
    }
  };

  return {
    control,
    handleSubmit,
    handleFormSubmit,
  };
};
