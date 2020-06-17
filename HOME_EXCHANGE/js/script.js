let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');


function getResult() {
    inputRub.addEventListener('input', () => {
        let request = new XMLHttpRequest();
        let temp = {};
        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();

        function post() {
            return new Promise(function (resolve, reject) {
                request.onreadystatechange = function () {
                    if (request.readyState === 4 && request.status === 200) {
                        toJson(temp)
                    } else {
                        reject();
                    }
                };
            });
        }

        function toJson(t) {
            t = JSON.parse(request.response);
            usd.value = rub.value / t.usd;
        }


        post()
            .catch(() => inputUsd.value = "Что-то пошло не так!")

    })
}

getResult();


