const resultButton = document.querySelector(".result-btn");
const resetButton = document.querySelector(".reset-btn");

const element = document.getElementById('result');
const display= document.getElementById('record');

let init_num = 0;


const result = ()=>{
    display.innerHTML += eval(element.innerHTML)
}
const reset = ()=>{
    element.innerHTML = ' ';
}
const init = () => {

    resultButton.addEventListener("click",result);
    resetButton.addEventListener("click", reset);
  };
  init();

const myTableElement = document.querySelector("#myTable");

myTableElement.addEventListener('click',(e) => {
    console.log(e.target, e.target.innerHTML);
    element.innerHTML += e.target.innerHTML;
});
  