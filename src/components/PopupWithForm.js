function PopupWithForm({
  name,
  title,
  buttonText,
  isOpen,
  onClose,
  onSubmit,
  children,
  isLoading,
  loadingText,
}) {
  function handleClickOverlay(e) {
    if (e.currentTarget === e.target) {
      onClose();
    }
  }

  return (
    <div
      className={`popup popup_for_${name} ${isOpen && ' popup_opened'}`}
      onMouseDown={handleClickOverlay}
    >
      <form
        className='popup__container'
        name={name}
        noValidate
        onSubmit={onSubmit}
      >
        <button
          type='button'
          className='popup__close'
          onClick={onClose}
        ></button>
        <p className='popup__title'>{title}</p>
        <fieldset className='popup__items'>
          {children}
          <button type='submit' className='popup__button'>
            {isLoading ? loadingText : buttonText}
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default PopupWithForm;
