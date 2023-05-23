import { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name,
      link,
    });
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
        type='text'
        minLength='2'
        maxLength='30'
        required
        name='cardName'
        placeholder='Название'
        id='card-name'
        value={name}
        onChange={handleChangeName}
      />
      <span className='popup__error card-name-error'></span>
      <input
        className='popup__input popup__input_card-link-image'
        required
        type='url'
        name='cardLink'
        placeholder='Ссылка на картинку'
        id='card-link'
        value={link}
        onChange={handleChangeLink}
      />
      <span className='popup__error card-link-error'></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
