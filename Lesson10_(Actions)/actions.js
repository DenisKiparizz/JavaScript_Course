//Get buttom
let btn = document.getElementsByTagName("button");
//Bad practice
// btn[0].onmouseenter = function () {
//     alert('You have pressed on the first the button!!!');
// };


btn[0].addEventListener("click", function () {
    alert('You have pressed on the first the button!!!');
});
btn[0].addEventListener("click", function () {
    alert('You have pressed on the first the button! one more time!!');
});

btn[1].addEventListener("click", function () {
    alert('You have pressed on the second the button!!!');
});

//Event hide button
btn[2].addEventListener("click", function (event) {
    let target = event.target;
    target.style.display = "none";
    // console.log("Event's happened: " + event.type + " on element " + event.target);
});

let button = document.getElementsByTagName("button");
let wrapper = document.querySelector(".wrapper");
wrapper.addEventListener("click", function () {
    console.log("Event's happened: " + event.type + " on element " + event.target);
})

// Отменяет стандартное поведение
let link = document.querySelector("a");
link.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("You have pressed on youtube link");
})

//Show information just on mouse enter
// btn[0].addEventListener("mouseenter", function () {
//     alert("Ready to press???");
// });

//Foreach for each class '.se'
let arr = document.querySelectorAll('.se');
arr.forEach(function (item) {
    item.addEventListener('mouseleave', function () {
        console.log('Mouse is react');
    })
})