// Получить кнопку "Начать расчет" через id
let startCalculateBtm = document.getElementById("start");
//Получить все блоки в правой части программы через классы (которые имеют класс название-value, начиная с
//  и заканчивая

let budget = document.querySelector(".budget-value");
let dailyBadgetValue = document.querySelector(".daybudget-value");
let levelValue = document.querySelector(".level-value");
let expensesValue = document.querySelector(".expenses-value");
let optionalValue = document.querySelector(".optionalexpenses-value");
let incomeValue = document.querySelector(".income-value");
let monthsavings = document.querySelector(".monthsavings-value");
let yearsavings = document.querySelector(".yearsavings-value");

// Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
let optionalSellect = document.querySelectorAll(".optionalexpenses-item");
let incomeAdd = document.querySelector(".choose-income");
let chooseSum = document.querySelector(".choose-sum");

let checkSavings = document.querySelector("#savings");
let sum = document.querySelector("#sum");
let percent = document.querySelector("#percent");


let year = document.querySelector(".year-value");
let month = document.querySelector(".month-value");
let day = document.querySelector(".day-value");

//  Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
let expensesMustHave = document.getElementsByClassName("expenses-item");

let accept1Btn = document.querySelector('.expenses-item-btn');
let accept2Btn = document.querySelector('.optionalexpenses-btn');
let countBtn = document.querySelector('.count-budget-btn');


let money, time;

//1
//Привязываем к кнопке старта функцию
startCalculateBtm.addEventListener("click", function () {
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Введите ежемесячный доход?");
    while (isNaN(money) || money == "" || money == null) {
        money = prompt("Ошибка. Повторите ввод ежемесячного дохода???");
    }
    //Записываем результат в объект appData
    appData.budget = money;
    appData.dateTime = time;
    // ПРисваеваем к глобальной переменной с округлением до целого числа
    budget.textContent = money.toFixed();
    //Присваиваем к глобальным переменным введённые значения
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();
});

//2
//Свяываем поля с обязательными расходами
accept1Btn.addEventListener("click", function () {
    let sum = 0;
    //Нечетные - текстовые поля , четные  - расходы
    for (let i = 0; i < expensesMustHave.length; i++) {
        let exp = expensesMustHave[i].value;
        let exp2 = +expensesMustHave[++i].value;
        if (typeof exp === 'string' && typeof exp != null && typeof exp2 != null &&
            exp !== '' && exp2 !== '' && exp.length < 50) {
            //Сообщение об успешности
            console.log("correct");
            //Присваиваем объекту appData ввенные значения
            appData.expenses[exp] = exp2;
            sum += +exp2;
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;
});

//3
accept2Btn.addEventListener("click", function () {
    for (let i = 0; i < optionalSellect.length; i++) {
        let opt = optionalSellect[i].value;
        appData.dontHaveToExp[i] = opt;
        optionalValue.textContent += optionalSellect[i].value + ' ';
    }
});

//4
countBtn.addEventListener("click", function () {
    calculateIncomeLavel();
});

//5
//Input event
//Change event
incomeAdd.addEventListener("change", function () {
    let quest = incomeAdd.value;
    appData.overIncome = quest.split(',');
    incomeValue.textContent = appData.overIncome;
})

//6
checkSavings.addEventListener("click", function () {
    if (appData.savings === true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSum.addEventListener("input", function () {
    calculateYearOrMonthBenefits();
});

percent.addEventListener("input", function () {
    calculateYearOrMonthBenefits();
});

function calculateIncomeLavel() {
    if (appData.budget !== undefined) {
        appData.moneyOnOneDay = +(appData.budget / 30).toFixed(2);
        dailyBadgetValue.textContent = appData.moneyOnOneDay;
        if (appData.moneyOnOneDay <= 40) {
            levelValue.textContent = 'Плохой уровень дохода';
        } else if (appData.moneyOnOneDay > 40 && appData.moneyOnOneDay < 100) {
            levelValue.textContent = "Средний уровень дохода"
        } else if (appData.moneyOnOneDay >= 100) {
            levelValue.textContent = "Высокий уровень дохода";
        }
    } else {
        levelValue.textContent = "Что то пошло не так";
    }
}

function calculateYearOrMonthBenefits() {
    let sumTemp, persentTemp;
    if (appData.savings === true) {
        sumTemp = +sum.value;
        persentTemp = +percent.value;
        appData.monthIncome = +sumTemp / 100 / 12 * persentTemp;
        appData.yearIncome = +sumTemp / 100 * persentTemp;
        monthsavings.textContent = appData.monthIncome.toFixed(1);
        yearsavings.textContent = appData.yearIncome.toFixed(1);
    }
}

let appData = {
    budget: money,
    dateTime: time,
    expenses: {},
    dontHaveToExp: {},
    overIncome: [],
    savings: false,
}

