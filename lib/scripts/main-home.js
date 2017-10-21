var email = document.querySelector('.cn-home__homeMenuImage--email');
var modalX = document.querySelector('.modal__content__x');
var modal = document.querySelector('.modal');
var modalContent = document.querySelector('.modal__content');
var modalSignup = document.querySelector('#cn-emailForm__modalSignup');

email.addEventListener('click', handleEmailClick);
modalX.addEventListener('click', handleCloseClick, false);
modal.addEventListener('click', handleCloseClick, false);
modalContent.addEventListener('click', handleModalClick, false);
modalSignup.addEventListener('click', handleCloseClick, false);

function handleEmailClick() {
  if ( navigator.userAgent.indexOf('Mobi') > -1 ) {
    modal.classList.add('modal--active');
  }
}

function handleCloseClick(event) {
  modal.classList.remove('modal--active');
}

function handleModalClick(event) {
  event.stopPropagation();
}
