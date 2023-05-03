import PopupWithForm from './PopupWithForm';

function Main() {
  function handleEditAvatarClick() {
    document
      .querySelector('.popup_for_add-avatar')
      .classList.add('popup_opened');
  }
  function handleEditProfileClick() {
    document
      .querySelector('.popup_for_edit-profile')
      .classList.add('popup_opened');
  }
  function handleAddPlaceClick() {
    document.querySelector('.popup_for_add-card').classList.add('popup_opened');
  }

  return (
    <main className='content'>
      <section className='profile' aria-label='Профиль'>
        <div className='profile__info'>
          <div className='profile__avatar'>
            <button
              className='profile__avatar-edit'
              type='button'
              onClick={handleEditAvatarClick}
            ></button>
            <img className='profile__avatar-image' src='#' alt='Аватар' />
          </div>
          <h1 className='profile__info-name'>Жак-Ив Кусто</h1>
          <button
            className='profile__button profile__button_edit'
            type='button'
            onClick={handleEditProfileClick}
          ></button>
          <p className='profile__info-job'>Исследователь океана</p>
        </div>
        <button
          className='profile__button profile__button_add'
          type='button'
          onClick={handleAddPlaceClick}
        ></button>
      </section>

      <section className='elements' aria-label='Места'>
        <ul className='cards'></ul>
      </section>

      <PopupWithForm name='edit-profile' title='Редактировать профиль'>
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

        <button type='submit' className='popup__button'>
          Сохранить
        </button>
      </PopupWithForm>

      <div className='popup popup_for_add-card'>
        <form className='popup__container' name='cardAddForm'>
          <button className='popup__close' type='button'></button>
          <p className='popup__title'>Новое место</p>
          <fieldset className='popup__items'>
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

            <button className='popup__button' type='submit'>
              Создать
            </button>
          </fieldset>
        </form>
      </div>

      <div className='popup popup_for_add-avatar'>
        <form
          className='popup__container popup__container_avatar'
          name='avatarForm'
        >
          <button className='popup__close' type='button'></button>
          <p className='popup__title'>Обновить аватар</p>
          <fieldset className='popup__items'>
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

            <button className='popup__button' type='submit'>
              Сохранить
            </button>
          </fieldset>
        </form>
      </div>

      <div className='popup popup_for_full-image'>
        <figure className='popup__container-image'>
          <button className='popup__close' type='button'></button>
          <img className='popup__full-image' src='#' alt='' />
          <figcaption className='popup__caption'></figcaption>
        </figure>
      </div>

      <div className='popup popup_for_confirmation'>
        <div className='popup__container popup__container_confirmation'>
          <button className='popup__close' type='button'></button>
          <p className='popup__title'>Вы уверены?</p>
          <button className='popup__button' type='submit'>
            Да
          </button>
        </div>
      </div>
    </main>
  );
}

export default Main;
