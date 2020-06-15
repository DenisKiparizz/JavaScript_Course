let box = document.getElementById("box");
let btn = document.getElementsByTagName("button");
let circle = document.getElementsByClassName("circle");
let heart = document.querySelectorAll(".heart");
let oneHeart = document.querySelector(".heart");

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%'
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

for (let i = 0; i < heart.length; i++) {
    heart[i].style.backgroundColor = 'yellow';
}

heart.forEach(function (item) {
    item.style.backgroundColor = 'green';
})

// console.log(box);
// console.log(btn);
// console.log(btn[0]);
// console.log(circle[2]);
// console.log(heart);
// console.log(oneHeart);

/////////////////////////////////////////

let div = document.createElement("div");
let text = document.createTextNode("hello Denis")
div.classList.add("black");
// document.body.appendChild(div);

console.log(div);
console.log(text);

let wrapper = document.querySelector(".wrapper");
wrapper.appendChild(div)
// document.body.insertBefore(div, circle[0]);

div.innerHTML = "<h3>Hello Denis</h3>h1>"


