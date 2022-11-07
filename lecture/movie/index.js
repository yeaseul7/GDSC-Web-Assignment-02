const seats = document.querySelectorAll(".js-seat");
const select = document.querySelector(".js-select");

const CN_SELECTED = "selected";
const CN_OCCUPIED = "occupied";

const seatClickHandler = (event) => {
  // 구조분해할당, destructuring
  const { target } = event;
  const { classList } = target;

  if (classList.contains(CN_OCCUPIED)) {
    return;
  }

  if (classList.contains(CN_SELECTED)) {
    classList.remove(CN_SELECTED);
  } else {
    classList.add(CN_SELECTED);
  }
};

const selectChangeHandler = (event) => {
  console.log(event.target.value);
};

const init = () => {
  seats.forEach((seat) => {
    seat.addEventListener("click", seatClickHandler);
  });

  select.addEventListener("change", selectChangeHandler);
};

init();
