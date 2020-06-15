let array = [1, 2, 3, 4, 5];
//delete from end
array.pop();
//add to end
array.push("Hello");
//Delete from start
array.shift();
//Add to start
array.unshift("Azaza");

//0
for (let i = 0; i < array.length; i++) {
    console.log("Element " + i + " is: " + array[i]);
}

console.log(array);
console.log(array.length)
//1
array.forEach(function (item, i, arr) {
    console.log(i + ": " + item + " (array: " + arr + " )");
})
//2
array.forEach(function (item, i) {
    console.log(i + ": " + item)
})

//Only values
let arr = [1, 3, 4, 5, 8, 9];
for (let key of arr) {
    console.log(key)
}

//Split
let answer = prompt("", "");
let arrayOb = [];
arrayOb = answer.split(",");

console.log(arrayOb);
//Sort Join
let randomArr = ["hello", " monkey ", "like", " banana ", "!"];
let str = randomArr.sort().join();

console.log(str);

console.log("=======")
//Object
let soldier = {
    health: 400,
    armer: 50
}

let josh = {
    health: 100
}

josh.__proto__ = soldier;
console.log(josh);
console.log(josh.armer);

