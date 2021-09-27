window.onload = function () {
    activeNav();
    activeType();

    // делаем активными пункты меню
    function activeNav() {
        let elem = document.querySelectorAll('.qrcode__nav label input');
        let label = document.querySelectorAll('.qrcode__nav label');

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
}