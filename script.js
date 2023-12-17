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