let more = document.querySelector(".more");
let overlay = document.querySelector(".overlay");
let close = document.querySelector(".popup-close");

// Всплывающее окно
more.addEventListener("click", function () {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    //Запрет на листание страницы при открытом модвльном окне
    document.body.style.overflow = 'hidden';
});

//Крестик для закрытия окна
close.addEventListener("click", function () {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    //отмена запрета на пролистывание страницы
    document.body.style.overflow = '';
});



