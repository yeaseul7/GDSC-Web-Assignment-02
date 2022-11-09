const left_parButton = document.querySelector(".left-parentheses");
const right_parButton = document.querySelector(".right-parentheses");
const remainButton = document.querySelector(".remainder-btn");
const resetButton = document.querySelector(".reset-btn");
const divButton = document.querySelector(".divide-btn");
const mulButton = document.querySelector(".mul-btn");
const minButton = document.querySelector(".minus-btn");
const decButton = document.querySelector(".decimal-btn");
const resultButton = document.querySelector(".result-btn");
const plusButton = document.querySelector(".plus-btn");
const numberButton0 = document.querySelector(".js-number0");
const numberButton1 = document.querySelector(".js-number1");
const numberButton2 = document.querySelector(".js-number2");
const numberButton3 = document.querySelector(".js-number3");
const numberButton4 = document.querySelector(".js-number4");
const numberButton5 = document.querySelector(".js-number5");
const numberButton6 = document.querySelector(".js-number6");
const numberButton7 = document.querySelector(".js-number7");
const numberButton8 = document.querySelector(".js-number8");
const numberButton9 = document.querySelector(".js-number9");

const element = document.getElementById('result');
const display= document.getElementById('record');

let init_num = 0;


let n = element.innerHTML;
const writeNumber0 = ()=>{
    element.innerHTML += numberButton0.innerHTML;
}
const writeNumber1 = ()=>{
    element.innerHTML += numberButton1.innerHTML;
}
const writeNumber2 = ()=>{
    element.innerHTML += numberButton2.innerHTML;
}
const writeNumber3 = ()=>{
    element.innerHTML += numberButton3.innerHTML;
}
const writeNumber4 = ()=>{
    element.innerHTML += numberButton4.innerHTML;
}
const writeNumber5 = ()=>{
    element.innerHTML += numberButton5.innerHTML;
}
const writeNumber6 = ()=>{
    element.innerHTML += numberButton6.innerHTML;
}
const writeNumber7 = ()=>{
    element.innerHTML += numberButton7.innerHTML;
}
const writeNumber8 = ()=>{
    element.innerHTML += numberButton8.innerHTML;
}
const writeNumber9 = ()=>{
    element.innerHTML += numberButton9.innerHTML;
}

const add = ()=>{
    element.innerHTML += plusButton.innerHTML;
}
const minus = ()=>{
    element.innerHTML += minButton.innerHTML;
}
const mul = ()=>{
    element.innerHTML += mulButton.innerHTML;
}
const remain = ()=>{
    element.innerHTML += remainButton.innerHTML;
}
const left_par = ()=>{
    element.innerHTML += left_parButton.innerHTML;
}
const right_par = ()=>{
    element.innerHTML += right_parButton.innerHTML;
}
const divide = ()=>{
    element.innerHTML += divButton.innerHTML;
}
const decimal =()=>{
    element.innerHTML += decButton.innerHTML;
}
const result = ()=>{
    display.innerHTML += eval(element.innerHTML)
}
const reset = ()=>{
    element.innerHTML = ' ';
}
const init = () => {
    numberButton0.addEventListener("click", writeNumber0);
    numberButton1.addEventListener("click", writeNumber1);
    numberButton2.addEventListener("click", writeNumber2);
    numberButton3.addEventListener("click", writeNumber3);
    numberButton4.addEventListener("click", writeNumber4);
    numberButton5.addEventListener("click", writeNumber5);
    numberButton6.addEventListener("click", writeNumber6);
    numberButton7.addEventListener("click", writeNumber7);
    numberButton8.addEventListener("click", writeNumber8);
    numberButton9.addEventListener("click", writeNumber9);
    plusButton.addEventListener("click", add);
    minButton.addEventListener("click", minus);
    mulButton.addEventListener("click", mul);
    decButton.addEventListener("click", decimal);
    divButton.addEventListener("click", divide);
    remainButton.addEventListener("click", remain);
    left_parButton.addEventListener("click", left_par);
    right_parButton.addEventListener("click", right_par);
    resultButton.addEventListener("click",result);
    resetButton.addEventListener("click", reset);
  };
  init();
