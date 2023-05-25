import { useState } from 'react';

export function useValidation() {
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState('');

  // const inputClassName = `${inputClass} ${isValid ? '' : inputErrorClass}`;

  function validateForm(event) {
    event.persist();

    const { name, validity, validationMessage } = event.target;

    if (!validity.valid) {
      setErrors({
        ...errors,
        [name]: validationMessage,
      });
      setIsValid(false);
    } else {
      setErrors({
        ...errors,
        [name]: '',
      });
      setIsValid(true);
    }
  }

  return { isValid, setIsValid, errors, setErrors, validateForm };
}
