import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';
import { useValidation } from '../hooks/useValidation';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const { isValid, setIsValid, errors, setErrors, validateForm } =
    useValidation();
  const { values, handleChange, setValues } = useForm(validateForm, {});

  useEffect(() => {
    setValues({ name: '', cardLink: '' });
    setIsValid(false);
    setErrors({});
  }, [setValues, setIsValid, setErrors, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace(values);
  }

  return (
    <PopupWithForm
      name='add-card'
      title='Новое место'
      buttonText='Создать'
      loadingText='Создание...'
      onClose={onClose}
      onSubmit={handleSubmit}
      isOpen={isOpen}
      isLoading={isLoading}
      isValid={isValid}
    >
      <input
        className={`popup__input ${
          (errors.name && 'popup__input_type_error') || ''
        }`}
        name='name'
        type='text'
        minLength='2'
        maxLength='30'
        placeholder='Название'
        value={values.name || ''}
        onChange={handleChange}
        required
      />
      <span className='popup__error card-name-error'>{errors.name}</span>
      <input
        className={`popup__input ${
          (errors.cardLink && 'popup__input_type_error') || ''
        }`}
        name='cardLink'
        required
        type='url'
        placeholder='Ссылка на картинку'
        value={values.cardLink || ''}
        onChange={handleChange}
      />
      <span className='popup__error card-link-error'>{errors.cardLink}</span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
