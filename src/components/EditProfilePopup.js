import { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name='edit-profile'
      title='Редактировать профиль'
      buttonText='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className='popup__input popup__input_name'
        type='text'
        minLength='2'
        maxLength='40'
        required
        name='userName'
        placeholder='Имя'
        id='user-name'
        value={name}
        onChange={handleChangeName}
      />
      <span className='popup__error user-name-error'></span>
      <input
        className='popup__input popup__input_job'
        type='text'
        minLength='2'
        maxLength='200'
        required
        name='userJob'
        placeholder='Род деятельности'
        id='user-job'
        value={description}
        onChange={handleChangeDescription}
      />
      <span className='popup__error user-job-error'></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
