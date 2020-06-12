//Общение с пользователем
//alert
alert("Hello");

//confirm
let answer = confirm("Are you ok?");
console.log(answer);

//prompt
let age = prompt("What is your age?", "Yes");
console.log(age);

console.log(typeof (answer));
console.log(typeof (age));

//Операторы
let nomber = +prompt("You can input everything", "");
console.log(nomber);
console.log(typeof (nomber));

let incr = 10;
let decr = 10;
    
console.log(decr++);//10
console.log(incr--);//10

incr = 10;
decr = 10;

console.log(--incr);//9
console.log(++decr);//11