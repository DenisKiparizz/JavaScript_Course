//End date
let deadLine = '2020-06-19';
let message = document.querySelector(".timer-action");


//Трансформируем время в соответствующий формвт и возвращаем объект
function getTimeRemaining(endTime) {
    //Получаем колличество милисикунд
    let temp = Date.parse(endTime) - Date.parse(new Date());
    //Переводим милесикунды в секунды и оставляем остаток
    let seconds = Math.floor((temp / 1000) % 60);
    let minutes = Math.floor((temp / 1000 / 60) % 60);
    let hours = Math.floor((temp / 1000 / 60 / 60));
    if (seconds <= 0) {
        message.textContent = 'Время вышло';
        return {
            'hours': "00",
            'minutes': "00",
            'seconds': "00"
        };
    } else {
        return {
            'total': temp,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
}

//Связывем Html(получаем все элементы таймера) со страницы
function setClock(id, endTime) {
    let timer = document.getElementById(id);
    let timeInterval = setInterval(updateClock, 1000);
    let hours = timer.querySelector(".hours");
    let minutes = timer.querySelector(".minutes");
    let seconds = timer.querySelector(".seconds");

    //
    function updateClock() {
        let temp = getTimeRemaining(endTime);
        hours.textContent = temp.hours;
        minutes.textContent = temp.minutes;
        seconds.textContent = temp.seconds;

        if (temp.total === 0) {
            clearInterval(timeInterval);
        }
    }
}

setClock('timer', deadLine);