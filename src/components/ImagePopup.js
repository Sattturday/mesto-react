function ImagePopup({ card, onClose }) {
  return (
    <div
      className={
        'popup popup_for_full-image' + (card !== null && ' popup_opened')
      }
    >
      <figure className='popup__container-image'>
        <button
          className='popup__close'
          type='button'
          onClick={onClose}
        ></button>
        <img
          className='popup__full-image'
          src={card !== null ? card.link : '#'}
          alt={card !== null ? card.name : ''}
        />
        <figcaption className='popup__caption'>
          {card !== null ? card.name : ''}
        </figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
