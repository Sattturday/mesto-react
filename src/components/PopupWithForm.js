function PopupWithForm({ name, title, buttonText, isOpen, onClose, children }) {
  return (
    <div className={`popup popup_for_${name}` + (isOpen && ' popup_opened')}>
      <form className='popup__container' name={name} noValidate>
        <button
          type='button'
          className='popup__close'
          onClick={onClose}
        ></button>
        <p className='popup__title'>{title}</p>
        <fieldset className='popup__items'>
          {children}
          <button type='submit' className='popup__button'>
            {buttonText}
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default PopupWithForm;
