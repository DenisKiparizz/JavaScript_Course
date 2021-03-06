let money, date;

let appData = {
    budget: money,
    dateTime: date,
    expenses: {},
    dontHaveToExp: {},
    overIncome: [],
    saving: true,
    choseIncime: function () {
        let quest;
        while (!isNaN(quest) || quest == null || quest == '') {
            quest = prompt("What can bring income", "");
        }
        appData.overIncome = quest.split(',');
        appData.overIncome.push(prompt("Something else ?"));
        console.log('Additional income:');
        appData.overIncome.forEach(function (item, i) {
            console.log(i + ": " + item);
        })
    }
}

start();
checkExpences();
getDailyBudget();
detectLevel();
checkSavings();
optionalBills();


function start() {
    date = prompt("Input date in this format YYYY-MM-DD");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("How much money do you spent in one month?");
    }
}

function necessaryBills() {
    let exp = prompt("Necessary bills");
    let exp2 = +prompt("How much does this bills cost?");

    return {exp, exp2};
}

function optionalBills() {
    let opt = prompt("Optional bills");
    appData.optionalMoney = {
        1: opt,
    }
}
//This case have a problem
function checkExpences() {
    for (let i = 0; i < 1; i++) {
        let {exp, exp2} = necessaryBills();
        if (typeof exp === 'string' && typeof exp != null && typeof exp2 != null &&
            exp !== '' && exp2 !== '' && exp.length < 50) {
            console.log("done")
            appData.expenses.exp = exp2;
        } else {
            checkExpences();
        }
    }
}


function getDailyBudget() {
    appData.moneyOnOneDay = (money / 30).toFixed(2);
    alert("Daily budget : " + appData.moneyOnOneDay);
}

function detectLevel() {
    if (appData.moneyOnOneDay < 40) {
        console.log("Bad")
    } else if (appData.moneyOnOneDay === 40) {
        console.log("Nice");
    } else if (appData.moneyOnOneDay > 40) {
        console.log("Great");
    } else {
        console.log("Something bad");
    }
}

function checkSavings() {
    if (appData.saving) {
        let save = +prompt("How mach did you save?");
        let persent = +prompt("What the persent?");
        appData.monthIncome = +(save / 100 / 12) * persent;
        alert("Your income will be: " + appData.monthIncome);
    }
}

console.log(appData);
console.log("AppData include:")
for (let key in appData) {
    console.log(key)
}
