function showMessage(text) {
    alert(text);
}

showMessage("Hello Denis")


function calculator(a, b) {
    return a + b;
}

console.log(calculator(10, 2));


let cal = function (a, b) {
    return a * b;
}
console.log(cal(2, 12));

//Стрелочная функция
let divide = (a, b) => a / b;
console.log(divide(100, 20));

let n = "13.345";
console.log(Math.round(n));

let p = "12.12px";
console.log(parseInt(p));
console.log(parseFloat(p));