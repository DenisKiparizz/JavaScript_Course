//Slides
let slideIndex = 1;
let sliders = document.querySelectorAll(".slider-item");
//Кнопки
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
//Точки
let dotsWrap = document.querySelector(".slider-dots");
let dots = document.querySelectorAll(".dot");


function showSlides(n) {
    if (n > sliders.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = sliders.length;
    }
    //Скрываем все слайды добавлением с помощью добавления стиля display
    sliders.forEach((item) => item.style.display = 'none');
    //Удаляем маркер активной кнопки из класса
    dots.forEach((item) => item.classList.remove('dot-active'));
    //Показывем конкретный слайд
    sliders[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add('dot-active')
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
// Кнопка вперёд
prev.addEventListener("click", function () {
    plusSlides(-1);
});
// Кнопка назад
next.addEventListener("click", function () {
    plusSlides(1)
})

dotsWrap.addEventListener("click", function (event) {
    for (let i = 0; i < dots.length + 1; i++) {
        if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
            currentSlide(i);
        }
    }
})

showSlides(slideIndex);


