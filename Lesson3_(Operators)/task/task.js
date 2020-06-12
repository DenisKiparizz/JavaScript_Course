let money = +prompt("How much money do you spent in one month?");
let date = prompt("Input date in this format YYYY-MM-DD");
let exp = prompt("Mandatory expense item");
let exp2 = prompt("How much does it cost?");
let expenses = {
    exp,
    exp2
}

let dontHaveToExp = {};
let overIncome = [];
let saving = false;

console.log("Task2");
let appData = {
    money,
    date,
    expenses,
    dontHaveToExp,
    overIncome,
    saving
}
console.log(appData)
alert(money / 30);