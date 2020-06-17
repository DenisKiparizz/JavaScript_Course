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
function sendForm(elem) {
    elem.addEventListener('submit', function (event) {
        //Отмена стандартного поведения браузера
        event.preventDefault();
        elem.appendChild(statusMessage);
        let formData = new FormData(elem);

        //Использование Promise в новой функции
        function postData() {
            return new Promise(function (resolve, reject) {
                let request = new XMLHttpRequest();
                request.open("POST", 'server.php');
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                request.onreadystatechange = function () {
                    if (request.readyState < 4) {
                        resolve();
                    } else if (request.readyState === 4 && request.status === 200) {
                        resolve();
                    } else {
                        reject();
                    }
                }
                request.send(toJson(formData));
            })
        }

        function toJson(temp) {
            formData.forEach(function (value, key) {
                temp[key] = value;
            });
            return JSON.stringify(temp);
        }

        function clearInput() {
            for (let i = 0; i < inputPhone.length; i++) {
                inputPhone[i].value = '';
            }
        }

        postData(formData)
            .then(() => statusMessage.innerHTML = messages.loading)
            // .then(() => statusMessage.innerHTML = messages.success)
            .then(() => {statusMessage.innerHTML = messages.success;})
            .catch(() => statusMessage.innerHTML = messages.fail)
            .then(clearInput)

//WITHOUT PROMISE

//         let request = new XMLHttpRequest();
//         request.open("POST", 'server.php');
//         request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//         //1 - получаем все что отправлено в форме
//         let formData = new FormData(form);
//         //2 - создаем новый объект в который поместим все данные из формы
//         let temp = {};
//         //3 - помещаем все данные в temp
//         formData.forEach(function (value, key) {
//             temp[key] = value;
//         });
//         //4 - превращаем в Json
//         let json = JSON.stringify(temp);
//         request.send(json);
// //Для наблюдения измененения состояний запроса
//         request.addEventListener('readystatechange', function () {
//             if (request.readyState < 4) {
//                 statusMessage.innerHTML = messages.loading;
//             } else if (request.readyState === 4 && request.status === 200) {
//                 statusMessage.innerHTML = messages.success;
//             } else {
//                 statusMessage.innerHTML = messages.fail;
//             }
//             //Очищаем поля
//             for (let i = 0; i < inputPhone.length; i++) {
//                 inputPhone[i].value = '';
//             }
//         })
    });
}

sendForm(form);

