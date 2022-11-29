import { useState } from "react";

type FormValues = {
  name: string;
  email: string;
  password: string;
  code: string;
  redirect: boolean;
  error: boolean;
  errorText: string;
  disabled: boolean;
};

export function useForm(inputValues: FormValues) {
  const [values, setValues] = useState(inputValues);

  const handleChange = (event: { target: { value: string; name: string } }) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  };
  return { values, handleChange, setValues };
}
