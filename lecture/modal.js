const openButton = document.querySelector(".js-open-btn");
const closeButton = document.querySelector(".js-close-btn");
const modal = document.querySelector('.js-modal');

const CN_HIDE = 'hide';

const openButtonHandler = () => {
  modal.classList.remove(CN_HIDE);
};

const closeButtonHandler = () => {
  modal.classList.add(CN_HIDE);
};

const modalInit = () => {
  openButton.addEventListener("click", openButtonHandler);
  closeButton.addEventListener("click", closeButtonHandler);
};

modalInit();
