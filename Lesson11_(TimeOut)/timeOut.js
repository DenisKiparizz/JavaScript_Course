// let timerId = setTimeout(sayHello, 3000);
// //Bad practise
// // let timerIntervalId = setInterval(sayHello, 3000);
// function sayHello() {
//     console.log("Hello Denis")
// }
//
//
// // Recursion
// let timeO = setTimeout(function log() {
//     console.log("Hello Everyone");
//     setTimeout(log, 2000);
// });
//
//
// //Stop timerId;
// clearTimeout();

let query = document.querySelector(".btn");
let box = document.querySelector(".box");

function myAnimation() {
    let position = 0;
    let id = setInterval(frame, 10);

    function frame() {
        if (position === 300) {
            clearInterval(id);
        } else {
            position++;
            box.style.top = position + 'px';
            box.style.left = position + 'px';
        }
    }
}

query.addEventListener("click", myAnimation);

// Делегирование
let allBlocks = document.querySelector(".btn-block");
let allButtons = document.getElementsByTagName("button");

//Usfull!!!!
allBlocks.addEventListener("click", function (event) {
    if (event.target && event.target.classList.contains("first")) {
        console.log("Hello")
    }else if(event.target && event.target.matches("button.second")){
        console.log("Second ")
    }
});





