//bad
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log('Hello ' + this.name);
    }
}

User.prototype.exit = function (name) {
    console.log('User ' + this.name + " go away");
}

let ivan = new User('Ivan', 1);
let max = new User('Maxim', 2);

console.log(ivan);
console.log(max);

//Good
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }

    getModel() {
        console.log('Car ' + this.model + ' there is');
    }

    getPrice() {
        console.log('Car cost ' + this.price);
    }
}

let honda = new Car('Honda', 4200);
let acura = new Car('Acura', 1000);
console.log(honda);
console.log(acura);

//Контекст вызова

