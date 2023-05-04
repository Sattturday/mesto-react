import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import api from '../utils/api';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(null);
  const [user, setUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then(setUser)
      .catch((err) => console.error(err));
    api
      .getInitialCards()
      .then(setCards)
      .catch((err) => console.error(err));
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <>
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        userName={user.name}
        userDescription={user.about}
        userAvatar={user.avatar}
        cards={cards}
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopupWithForm
        name='edit-profile'
        title='Редактировать профиль'
        buttonText='Сохранить'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          required
          minLength='2'
          maxLength='40'
          type='text'
          className='popup__input popup__input_name'
          name='userName'
          placeholder='Имя'
          value=''
          id='user-name'
        />
        <span className='popup__error user-name-error'></span>

        <input
          required
          minLength='2'
          maxLength='200'
          type='text'
          className='popup__input popup__input_job'
          name='userJob'
          placeholder='Род деятельности'
          value=''
          id='user-job'
        />
        <span className='popup__error user-job-error'></span>
      </PopupWithForm>

      <PopupWithForm
        name='add-card'
        title='Новое место'
        buttonText='Создать'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className='popup__input popup__input_card-name'
          required
          type='text'
          minLength='2'
          maxLength='30'
          name='cardName'
          placeholder='Название'
          value=''
          id='card-name'
        />
        <span className='popup__error card-name-error'></span>

        <input
          className='popup__input popup__input_card-link-image'
          required
          type='url'
          name='cardLink'
          placeholder='Ссылка на картинку'
          value=''
          id='card-link'
        />
        <span className='popup__error card-link-error'></span>
      </PopupWithForm>

      <PopupWithForm
        name='add-avatar'
        title='Обновить аватар'
        buttonText='Сохранить'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className='popup__input popup__input_avatar-link'
          required
          type='url'
          name='avatarLink'
          placeholder='https://somewebsite.com/someimage.jpg'
          value=''
          id='avatar-link'
        />
        <span className='popup__error avatar-link-error'></span>
      </PopupWithForm>

      <PopupWithForm
        name='confirmation'
        title='Вы уверены?'
        buttonText='Да'
        onClose={closeAllPopups}
      />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </>
  );
}

export default App;