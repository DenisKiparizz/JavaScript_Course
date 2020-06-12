// Циклы
let num = 45;
while (num <= 50) {
    console.log(num);
    num++;
}
console.log("Do while");
let num2 = 55;
do {
    console.log(num2);
    num2++;
} while (num2 <= 60);

console.log("for");
for (let i = 0; i < 10; i++) {
    if (i === 5 || i === 6) {
        continue;
    }
    if (i === 8) {
        break;
    }
    console.log(i);
}