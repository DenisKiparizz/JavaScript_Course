//Контекст вызова
//1)
function showThis(a, b) {
    console.log(this);

    function sum() {
        console.log(this);
        // return this.a + this.b;
        return a + b;
    }

    console.log(sum())
}

showThis(4, 4);
//2)

let obj = {
    a: 1,
    b: 10,
    c: function () {
        console.log(this);
    }
}
obj.c();

//3)
let person = {
    name: 'Josn'
}

function introduction(surname) {
    console.log(this);
    console.log(this.name + ' ' + surname);
}

//для одного (принимает аргументы в виде строки)
console.log(introduction.call(person, 'Smith'));
// Для нескольких (пригимает аргументы в виде массива)
console.log(introduction.apply(person, ['Smith']));

//bind вс1 что передается в bind заменяет значение this
function count(number) {
    return this + number;
}

//Жёстко хардкодим 2
let double = count.bind(2);
//2+3
console.log(double(3))
// Указание конкретного контекста - call / apply / bind

let btn = document.querySelector('button');

btn.addEventListener('click', function () {
    console.log(this);
    // При нажатии кнопка становится красной
    this.style.backgroundColor = 'red'
})


