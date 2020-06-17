let messages = {
    loading: 'Загрузка',
    success: 'Успех! Скоро с вами свяжутся',
    fail: "Что-то пошло не так"
};

let form = document.querySelector(".main-form");

// let inputPhone = document.querySelector(".popup-form__input");
//Достаем из формы все поля
let inputPhone = form.getElementsByTagName("input");
//Создается новое окно
let statusMessage = document.createElement('div');
statusMessage.classList.add('status');

//событие для отправки формы
//вешается на форму!!!
form.addEventListener('submit', function (event) {
    //Отмена стандартного поведения браузера
    event.preventDefault();
    form.appendChild(statusMessage);

    let request = new XMLHttpRequest();
    request.open("POST", 'server.php');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    //1 - получаем все что отправлено в форме
    let formData = new FormData(form);
    //2 - создаем новый объект в который поместим все данные из формы
    let temp = {};
    //3 - помещаем все данные в temp
    formData.forEach(function (value, key) {
        temp[key] = value;
    });
    //4 - превращаем в Json
    let json = JSON.stringify(temp);
    request.send(json);
//Для наблюдения измененения состояний запроса
    request.addEventListener('readystatechange', function () {
        if (request.readyState < 4) {
            statusMessage.innerHTML = messages.loading;
        } else if (request.readyState === 4 && request.status === 200) {
            statusMessage.innerHTML = messages.success;
        } else {
            statusMessage.innerHTML = messages.fail;
        }
        //Очищаем поля
        for (let i = 0; i < inputPhone.length; i++) {
            inputPhone[i].value = '';
        }
    })
});
