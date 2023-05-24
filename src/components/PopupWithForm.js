import { usePopupClose } from '../hooks/usePopupClose';

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
  usePopupClose(isOpen, onClose);

  return (
    <div className={`popup popup_for_${name} ${isOpen && ' popup_opened'}`}>
      <form
        className='popup__container'
        name={name}
        onSubmit={onSubmit}
        noValidate
      >
        <button className='popup__close' type='button' onClick={onClose} />
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
