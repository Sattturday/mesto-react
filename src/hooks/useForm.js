import { useState } from 'react';

export function useForm(validateForm, inputValues = {}) {
  const [values, setValues] = useState(inputValues);

  const handleChange = (event) => {
    validateForm(event);
    const { value, name } = event.target;

    setValues({ ...values, [name]: value });
  };

  return {
    values,
    handleChange,
    setValues,
  };
}
