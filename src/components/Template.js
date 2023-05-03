function Template() {
  return (
    <template className='card-template'>
      <li className='cards__item'>
        <img className='cards__image' src='#' alt='' />
        <button className='cards__delete' type='button'></button>
        <div className='cards__info'>
          <h2 className='cards__title'>Название места</h2>
          <div className='cards__like'>
            <button className='cards__like-icon' type='button'></button>
            <p className='cards__like-counter'>9</p>
          </div>
        </div>
      </li>
    </template>
  );
}

export default Template;
