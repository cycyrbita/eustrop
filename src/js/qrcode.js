window.addEventListener("load", function () {
    activeNav('qrcode');
    activeType();
    let infoForm = [];
    dataForm('qrcode', infoForm);
    

    // делаем активными пункты меню
    function activeNav(idForm) {
        // чистим форму
        let myForm = document.getElementById(idForm);

        // собираем информацию с формы
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

                let fields = document.querySelectorAll(`#${idForm} input, #${idForm} textarea, #${idForm} select`);

                for(let g = 0; g < fields.length; g++) {
                    if(fields[g].name != 'qr_nav' && fields[g].name != 'qr_size' && fields[g].name != 'qr_weight' && fields[g].name != 'qr_type') {
                        fields[g].value = '';
                        document.getElementById('qrcode__result').innerHTML = '';
                        document.getElementById('qrcode__info').innerHTML = '';
                    }
                }
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

                let qr_type = '',
                    qr_size = '',
                    qr_info = '';

                for(let i = 0; i < arr.length; i++) {
                    if(arr[i][0] == 'qr_type') {
                        qr_type = arr[i][1];
                    }
                    if(arr[i][0] == 'qr_size') {
                        qr_size = arr[i][1];
                        if(qr_size < 0) {
                            qr_size = 0;
                        } else if(qr_size > 40) {
                            qr_size = 40;
                        }
                    }

                    if(arr[i][0] != 'qr_type' && arr[i][0] != 'qr_size' && arr[i][0] != 'qr_nav') {
                        qr_info = qr_info + "\n" + arr[i][1];
                    }
                }

                let qr = qrcode(0, qr_type);
                qr.addData(qr_info);
                qr.make();
                document.getElementById('qrcode__result').innerHTML = qr.createImgTag(qr_size, 0);
                document.getElementById('qrcode__info').innerHTML = '<div>'+qr_info+'</div>';
                arr = [];
            }
        }
    }
})
