window.addEventListener("DOMContentLoaded", function () {
    'use strict';
    //Все заголовки
    let tab = document.querySelectorAll(".info-header-tab");
    // Эта переменная содержит все tab-ы
    let info = document.querySelector(".info-header");
    // Переменная содержит все описание
    let tabContent = document.querySelectorAll(".info-tabcontent");

    //Скрываем все , кроме первого или любоо другого tabContent
    hideTabContent(1);

    //Данна функция манипулирует css функциями
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener("click", function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target === tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    })
});