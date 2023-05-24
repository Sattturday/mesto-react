import { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useForm } from '../hooks/useForm';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, setValues } = useForm({});

  useEffect(() => {
    setValues({
      name: currentUser.name,
      about: currentUser.about,
    });
  }, [setValues, currentUser, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser(values);
  }

  return (
    <PopupWithForm
      name='edit-profile'
      title='Редактировать профиль'
      buttonText='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      loadingText='Сохранение...'
    >
      <input
        className='popup__input popup__input_name'
        name='name'
        type='text'
        minLength='2'
        maxLength='40'
        placeholder='Имя'
        value={values.name || ''}
        onChange={handleChange}
        required
      />
      <span className='popup__error user-name-error'></span>
      <input
        className='popup__input popup__input_job'
        name='about'
        type='text'
        minLength='2'
        maxLength='200'
        placeholder='Род деятельности'
        value={values.about || ''}
        onChange={handleChange}
        required
      />
      <span className='popup__error user-job-error'></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
