function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className='cards__item' onClick={handleClick}>
      <img className='cards__image' src={card.link} alt={card.name} />
      <button className='cards__delete' type='button'></button>
      <div className='cards__info'>
        <h2 className='cards__title'>{card.name}</h2>
        <div className='cards__like'>
          <button className='cards__like-icon' type='button'></button>
          <p className='cards__like-counter'>{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
