import { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef();

  useEffect(() => {
    avatarRef.current.value = '';
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name='add-avatar'
      title='Обновить аватар'
      buttonText='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className='popup__input popup__input_avatar-link'
        required
        type='url'
        name='avatarLink'
        placeholder='https://somewebsite.com/someimage.jpg'
        id='avatar-link'
        ref={avatarRef}
      />
      <span className='popup__error avatar-link-error'></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
