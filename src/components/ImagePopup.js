function ImagePopup() {
  return (
    <div className='popup popup_for_full-image'>
      <figure className='popup__container-image'>
        <button className='popup__close' type='button'></button>
        <img className='popup__full-image' src='#' alt='' />
        <figcaption className='popup__caption'></figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
