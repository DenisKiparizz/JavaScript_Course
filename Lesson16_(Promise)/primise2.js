//Promise
//Обещания
//With promises
let drink = 0;

function shoot(arrow) {
    console.log("Вы сделали выстрел");
    //Создание promise
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > .5 ? resolve({}) : reject("Вы промахнулись");
        }, 3000);
    });
    return promise;
}

function win() {
    console.log('Вы победили');
    (drink === 1) ? byeBear() : giveMoney();
}

function lose() {
    console.error("Вы проиграли")
}

function byeBear() {
    console.log("Вам купили пива");
}

function giveMoney() {
    console.log("Вам дали денег");
}

shoot({})
    .then(mark => console.log("Вы попали в цель"))
    .then(win)
    .catch(lose);