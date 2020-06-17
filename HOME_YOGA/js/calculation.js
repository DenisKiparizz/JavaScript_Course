let persons = document.querySelectorAll(".counter-block-input")[0];
let restDays = document.querySelectorAll(".counter-block-input")[1];
let place = document.getElementById('select');
let totalValue = document.getElementById("total");

let personsSum = 0;
let daysSum = 0;
let total = 0;

totalValue.innerHTML = 0;

persons.addEventListener('change', function () {
    personsSum = +this.value;
    total = (daysSum + personsSum) * 300;

    if (restDays.value === '' || persons.value === '') {
        totalValue.innerHTML = 0;
    } else {
        totalValue.innerHTML = total;
    }
});

restDays.addEventListener('change', function () {
    daysSum = +this.value;
    total = (daysSum + personsSum) * 300;

    if (restDays.value === '' || persons.value === '') {
        totalValue.innerHTML = 0;
    } else {
        totalValue.innerHTML = total;
    }
});

place.addEventListener('change', function () {
    if (restDays.value === '' || persons.value === '') {
        totalValue.innerHTML = 0;
    } else {
        let temp = total;
        totalValue.innerHTML = temp * this.options[this.selectedIndex].value;
    }
})
