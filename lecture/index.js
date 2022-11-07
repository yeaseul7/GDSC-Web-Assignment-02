const number = document.querySelector(".js-number");
const upButton = document.querySelector(".js-ub-btn");
const downButton = document.querySelector(".js-down-btn");
const resetButton = document.querySelector(".js-reset-btn");

const INIT_NUM = 25;

const CN_ODD = "odd";

const setNumber = (num) => {
  number.innerHTML = num;

  if (num % 2 === 1) {
    number.classList.add(CN_ODD);
  } else {
    number.classList.remove(CN_ODD);
  }
};

const getNumber = () => {
  return Number(number.innerHTML);
};

const addNumber = () => {
  const nextNum = getNumber() + 1;
  setNumber(nextNum);
};

const resetNumber = () => {
  setNumber(INIT_NUM);
};

const init = () => {
  setNumber(INIT_NUM);

  upButton.addEventListener("click", addNumber);
  downButton.addEventListener("click", () => {
    const nextNum = getNumber() - 1;
    setNumber(nextNum);
  });

  resetButton.addEventListener("click", resetNumber);
};

init();
