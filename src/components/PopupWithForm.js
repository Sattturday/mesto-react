function PopupWithForm(props) {
  return (
    <div className={`popup popup_for_${props.name}`}>
      <form className='popup__container' name={props.name} noValidate>
        <button type='button' className='popup__close'></button>
        <p className='popup__title'>{props.title}</p>
        <fieldset className='popup__items'>{props.children}</fieldset>
      </form>
    </div>
  );
}

export default PopupWithForm;
