import PopupWithForm from './PopupWithForm';

function ConfirmationPopup({ isOpen, onClose, onConfirm }) {
  function handleSubmit(e) {
    e.preventDefault();

    onConfirm();
  }

  return (
    <PopupWithForm
      name='confirmation'
      title='Вы уверены?'
      buttonText='Да'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
}

export default ConfirmationPopup;
