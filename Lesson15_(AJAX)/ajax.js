let rub = document.getElementById("rub");
let usd = document.getElementById("usd");

rub.addEventListener('input', () => {
    //Обязательное создание объекта
    let request = new XMLHttpRequest();
    // request.open(method, url, async, login, passsword)
    request.open('GET', 'curent.json');
    request.setRequestHeader('Content-type', 'application-json; charset=utf-8');
    request.send();

    // request.addEventListener("load", function () {
    request.addEventListener("readystatechange", function () {
        if (request.readyState === 4 && request.status === 200) {
            let data = JSON.parse(request.response);
            usd.value = rub.value / data.usd;
        }else{
            usd.value = "Что-то пошло не так";
        }
    });
})