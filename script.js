// function greeting(name) {
//     console.log(`Hello ${name}`);
// }

// function alertName(name) {
//     alert(`Hello ${name}`);
// }

// function inputName(callback) {
//     let name = prompt("Input your name");
//     callback(name);
// }

// inputName(alertName);

let timer = document.getElementById("timer");
let seconds = 10;
timer.textContent = seconds;

function timerUpdate() {
    seconds--;
    timer.textContent = seconds;
    if(seconds === 0) {
        timer.textContent = "Time is up!";
        clearInterval(timerout);
    }
}

let timerout = setInterval(timerUpdate, 1000);

let button1 = document.querySelector("#myButton");
let button2 = document.querySelector("#myButtonBlue");
let header = document.querySelector("#header");

// console.log(button);
button1.addEventListener("click", function() {
    // alert("Button click!");
    // console.dir(document.body);
    header.style.color = "red";
});

button2.addEventListener("click", function() {
    // alert("Button click!");
    // console.dir(document.body);
    header.style.color = "blue";
});
let p = document.querySelector(".pteg");
p.classList.add("newClass");
p.classList.add("newClass2");
p.classList.remove("pteg");
p.classList.toggle("newClass3");
console.log(p.classList);
p.classList.toggle("newClass3");
console.log(p.classList);
p.classList.toggle("newClass3");
console.log(p.classList);

let obj = {name: "Oleh",
age: 35,
hobbis: ["coding", "garding", "driving"]};
console.log(obj);
let json = JSON.stringify(obj);
console.log(json);
console.log(JSON.parse(json));

// showMessage(); видає помилку черех те що функциональний вираз ще не оголошено
// якщо оголосити функцію то вона піднімається за рахунок hoisting
const showMessage = function() {
    console.log("It is a message");
};
showMessage();


import {add, extract, multipltiplication, divide} from "./math.js";
// import * as math from "./math.js";
// math.add math.extract



let result1 = add(1,2);
console.log(result1);


let result2 = extract(5,2);
console.log(result2);


let result3 = multipltiplication(4,2);
console.log(result3);


let result4 = divide(10,2);
console.log(result4);