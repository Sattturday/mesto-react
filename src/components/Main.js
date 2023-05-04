function Main(props) {
  return (
    <main className='content'>
      <section className='profile' aria-label='Профиль'>
        <div className='profile__info'>
          <div className='profile__avatar'>
            <button
              className='profile__avatar-edit'
              type='button'
              onClick={props.onEditAvatar}
            ></button>
            <img className='profile__avatar-image' src='#' alt='Аватар' />
          </div>
          <h1 className='profile__info-name'>Жак-Ив Кусто</h1>
          <button
            className='profile__button profile__button_edit'
            type='button'
            onClick={props.onEditProfile}
          ></button>
          <p className='profile__info-job'>Исследователь океана</p>
        </div>
        <button
          className='profile__button profile__button_add'
          type='button'
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className='elements' aria-label='Места'>
        <ul className='cards'></ul>
      </section>
    </main>
  );
}

export default Main;
