function ImagePopup({ card, onClose }) {
  const checkCard = card !== null;

  function handleClickOverlay(e) {
    if (e.currentTarget === e.target) {
      onClose();
    }
  }

  return (
    <div
      className={'popup popup_for_full-image' + (checkCard && ' popup_opened')}
      onMouseDown={handleClickOverlay}
    >
      <figure className='popup__container-image'>
        <button
          className='popup__close'
          type='button'
          onClick={onClose}
        ></button>
        <img
          className='popup__full-image'
          src={checkCard ? card.link : '#'}
          alt={checkCard ? card.name : ''}
        />
        <figcaption className='popup__caption'>
          {checkCard ? card.name : ''}
        </figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
