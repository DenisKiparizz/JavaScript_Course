let money = +prompt("How much money do you spent in one month?");
let date = prompt("Input date in this format YYYY-MM-DD");

let appData = {
    budget: money,
    dateTime: date,
    expenses: {},
    dontHaveToExp: {},
    overIncome: [],
    saving: false
}

function questions() {
    let exp = prompt("Mandatory expense item");
    let exp2 = +prompt("How much does it cost?");
    return {exp, exp2};
}

function setFields() {
    for (let i = 0; i < 1; i++) {
        let {exp, exp2} = questions();
        if (typeof exp === 'string' && typeof exp != null && typeof exp2 != null &&
            exp !== '' && exp2 !== '' && exp.length < 50) {
            console.log("done")
            appData.expenses.exp = exp2;
        } else {
            setFields();
        }
    }
}

setFields();

appData.moneyOnOneDay = money / 30;
alert("Daily budget : " + appData.moneyOnOneDay);

if (appData.moneyOnOneDay < 40) {
    console.log("Bad")
} else if (appData.moneyOnOneDay === 40) {
    console.log("Nice");
} else if (appData.moneyOnOneDay > 40) {
    console.log("Great");
} else {
    console.log("Something bad");
}

console.log(appData);

