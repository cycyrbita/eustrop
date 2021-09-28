window.onload = function () {
    activeNav();
    activeType();
    let infoForm = [];
    dataForm('qrcode', infoForm);
    

    // делаем активными пункты меню
    function activeNav() {
        let elem = document.querySelectorAll('.qrcode__nav label input');
        let label = document.querySelectorAll('.qrcode__nav label');
        let indexField = document.querySelectorAll('.qrcode__body > div');
        

        for(let i = 0; i < elem.length; i++) {
            elem[i].addEventListener('change', function() {
                for(let k = 0; k < label.length; k++) {
                    if(label[k].classList.contains('active')) {
                        label[k].classList.remove('active');
                    }
                }
                for(let j = 0; j < indexField.length; j++) {
                    if(indexField[j].classList.contains('visible')) {
                        indexField[j].classList.remove('visible');
                    }
                }
                elem[i].closest('label').classList.add('active');
                indexField[i].classList.add('visible');
            });
        }
    }

    // делаем активными пункты меню
    function activeType() {
        let elem = document.querySelectorAll('.qrcode__settings label input');
        let label = document.querySelectorAll('.qrcode__settings label');

        for(let i = 0; i < elem.length; i++) {
            elem[i].addEventListener('change', function() {
                for(let k = 0; k < label.length; k++) {
                    if(label[k].classList.contains('active')) {
                        label[k].classList.remove('active');
                    }
                }
                elem[i].closest('label').classList.add('active');
            });
        }
    }

    // получаем данные с формы
    function dataForm(idForm, arr) {
        // кладем форму в переменную
        idForm = document.getElementById(idForm);

        // проверка на наличие формы
        if(idForm) {
            // событие отправки формы
            idForm.onsubmit = function(e) {
                // отменяем отправку формы
                e.preventDefault();

                // собираем информацию с формы
                let formData = new FormData(idForm);

                // пробегаемся по ключам
                for (var key of formData.entries()) {
                    // если значение ключа не пустое то пушим его в массив
                    if(key[1] != '') {
                        arr.push(key);
                    }
                }
            }
        }
    }
}