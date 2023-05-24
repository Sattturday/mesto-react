import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const { values, handleChange, setValues } = useForm({});

  useEffect(() => {
    setValues({ name: '', link: '' });
  }, [setValues, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace(values);
  }

  return (
    <PopupWithForm
      name='add-card'
      title='Новое место'
      buttonText='Создать'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      loadingText='Создание...'
    >
      <input
        className='popup__input popup__input_card-name'
        name='name'
        type='text'
        minLength='2'
        maxLength='30'
        placeholder='Название'
        value={values.name || ''}
        onChange={handleChange}
        required
      />
      <span className='popup__error card-name-error'></span>
      <input
        className='popup__input popup__input_card-link-image'
        name='link'
        required
        type='url'
        placeholder='Ссылка на картинку'
        value={values.link || ''}
        onChange={handleChange}
      />
      <span className='popup__error card-link-error'></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
