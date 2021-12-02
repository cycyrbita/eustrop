
window.addEventListener("load", function () {
    var language = {
        "RU": [
            {
                "QR-code": "QR-code",
                "Participants": "Участники",
                "QR-Generator": "QR-Генератор",
                "Ranges": "Диапазоны",
                "Map": "Карта",
                "Help": "Помощь",
                "Registration": "Регистрация",
                "Specifications": "Характеристики",
                "Service": "Обслуживание",
                "Open registration form": "Открыть форму регистрации",
                "Qxyz home page": "Главная страница qxyz",
                "entrance": "Вход",
                "Squares": "Квадратики",
                "Lang": "Язык",
                "qrcode": "qrcode"
            }
        ],
        "EN": [
            {
                "QR-code": "QR-code",
                "Участники": "Participants",
                "QR-Генератор": "QR-Generator",
                "Диапазоны": "Ranges",
                "Карта": "Map",
                "Помощь": "Help",
                "Регистрация": "Registration",
                "Характеристики": "Specifications",
                "Обслуживание": "Service",
                "Открыть форму регистрации": "Open registration form",
                "Главная страница qxyz": "Qxyz home page",
                "Вход": "entrance",
                "Квадратики": "Squares",
                "Язык": "Lang",
                "qrcode": "qrcode"
            }
        ],
        // "ES": [
        //     {
        //         "QR-code": "QR-code",
        //         "Участники": "Participantes",
        //         "QR-Генератор": "Generador de QR",
        //         "Диапазоны": "Rangos",
        //         "Карта": "Mapa",
        //         "Помощь": "Ayudar",
        //         "Регистрация": "registro",
        //         "Характеристики": "Especificaciones",
        //         "Обслуживание": "Servicio",
        //         "Открыть форму регистрации": "Formulario de registro abierto",
        //         "Главная страница qxyz": "Página de inicio de Qxyz",
        //         "Вход": "Entrada",
        //         "Квадратики": "Cuadrícula",
        //         "Язык": "Idioma",
        //         "qrcode": "qrcode"
        //     }
        // ]
    }

    var lang = document.getElementById('language');
    lang.addEventListener('change', function() {

        for (let key in language) {
            if (language.hasOwnProperty(key)) {
                if(this.value.toLowerCase() == key.toLowerCase()) {

                    var newObj = {};

                    for (let key2 in language[key][0]) {
                        newObj[key2] = language[key][0][key2];
                    }

                    var elms = document.getElementsByTagName("*"),
                    len = elms.length;

                    for(var ii = 0; ii < len; ii++) {
                        var myChildred = elms[ii].childNodes;
                        
                        len2 = myChildred.length;

                        for (var jj = 0; jj < len2; jj++) {
                            if(myChildred[jj].nodeType === 3) {

                                for (let key3 in newObj) {
                                    if(myChildred[jj].nodeValue == key3) {
                                        myChildred[jj].nodeValue = myChildred[jj].nodeValue.replace(myChildred[jj].nodeValue, newObj[key3]);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    });
});