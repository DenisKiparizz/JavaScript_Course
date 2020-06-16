let name = 'Ivan';
let age = 22;
let email = 'email@123.ru';

// document.write("User " + name + " and " + age + " years old have an email " + email);
//Интерполяция
document.write(`User ${name} and ${age} years old have an email ${email}`);

//Стрелочные функции
//1 - Нельзя задать имя
//1 - Стрелочная функция не имеет своего контекста. Она берет его у родителя
let fun = () => console.log("Hello");
fun();

let btn = document.querySelector("button");
btn.addEventListener("click", function () {
    let show = () => {
        console.log(this);
        this.style.backgroundColor = 'red';
    }
    show();
});

//Параметры по умолчанию4

function calcOrDouble(num, double = 2) {
//проверка на наличие переменной double
//ES5
//     double = double || 2;
    console.log(`double equals ${double}`)
    console.log(num * double);
}

calcOrDouble(2, 4);
calcOrDouble(2);

//Классы с параметрами по умолчанию

class Rectangle {
    constructor(height = 5, width = 5) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);
console.log(square.calcArea());

//Spread оператор

let search = ['Google', 'Yahoo', 'Safari'];
let resources = ['YouTube', 'Onliner', 'TUT.by'];
let internet = [...search, ...resources, 'vk'];
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a + b + c);
}

let numbers = [5, 2, 7];
log(...numbers);
