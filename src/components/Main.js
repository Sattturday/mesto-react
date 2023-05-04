import Card from './Card';

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  userName,
  userDescription,
  userAvatar,
  cards,
  onCardClick,
}) {
  return (
    <main className='content'>
      <section className='profile' aria-label='Профиль'>
        <div className='profile__info'>
          <div className='profile__avatar'>
            <button
              className='profile__avatar-edit'
              type='button'
              onClick={onEditAvatar}
            ></button>
            <img
              className='profile__avatar-image'
              src={userAvatar}
              alt='Аватар'
            />
          </div>
          <h1 className='profile__info-name'>{userName}</h1>
          <button
            className='profile__button profile__button_edit'
            type='button'
            onClick={onEditProfile}
          ></button>
          <p className='profile__info-job'>{userDescription}</p>
        </div>
        <button
          className='profile__button profile__button_add'
          type='button'
          onClick={onAddPlace}
        ></button>
      </section>

      <section className='elements' aria-label='Места'>
        <ul className='cards'>
          {cards.map((card) => (
            <li key={card._id}>
              <Card card={card} onCardClick={onCardClick} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
