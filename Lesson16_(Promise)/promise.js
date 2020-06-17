//Promise
//Обещания
//Without promises
let drink = 0;

function shoot(arrow, headshot, fail) {
    console.log("Вы сделали выстрел");
    setTimeout(function () {
        Math.random() > .5 ? headshot({}) : fail("Вы промахнулись");
    }, 3000)
}

function win() {
    console.log('Вы победили');
    (drink === 1) ? byeBear() : giveMoney();
}

function lose() {
    console.log("Вы проиграли")
}

function byeBear() {
    console.log("Вам купили пива");
}

function giveMoney() {
    console.log("Вам дали денег");
}

shoot({},
    function (mark) {
        console.log("Вы попали в цель")
        win(mark, byeBear, giveMoney);
    },
    function (miss) {
        console.error(miss)
        lose();
    });