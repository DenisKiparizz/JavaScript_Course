function User(name, age) {
    this.name = name;
    this.age = age;
    this.say = function () {
        console.log(`This User ${name} ${age} old`)
    }
}

let user = new User("Denis", 26);
console.log(user.name)
console.log(user.age)
user.say();

function Car(model, price) {
    let carModel = model;
    this.getModel = function () {
        return carModel;
    }

    this.intro = function () {
        console.log(`This  ${this.carModel} old`)
    }
}

let honda = new Car('Honda', 2210);
console.log(honda.model)

class Home {
    constructor(door, table) {
        this._door = door;
        this._table = table;
    }

    get door() {
        return this._door;
    }

    get table() {
        return this._table;
    }
}

let my = new Home('Arm', 'White');
my.door = 'Tree';
console.log(my.door)