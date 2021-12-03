
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
        "ES": [
            {
                "QR-code": "QR-code",
                "Участники": "Participantes",
                "QR-Генератор": "Generador de QR",
                "Диапазоны": "Rangos",
                "Карта": "Mapa",
                "Помощь": "Ayudar",
                "Регистрация": "registro",
                "Характеристики": "Especificaciones",
                "Обслуживание": "Servicio",
                "Открыть форму регистрации": "Formulario de registro abierto",
                "Главная страница qxyz": "Página de inicio de Qxyz",
                "Вход": "Entrada",
                "Квадратики": "Cuadrícula",
                "Язык": "Idioma",
                "qrcode": "qrcode"
            }
        ]
    }

    lang("*", 'lt', true);

    function lang(tagName, className, log) {
        // складываем весь текст на странице в объект
        var tagName = document.body.getElementsByTagName(tagName);

        // тут будет лежать весь текст который найдем
        var pageContent = {};
        
        // класс который будем добавлять всем текстам у которых есть текст
        var lt = className;

        // префикс для класса
        var count = 0;

        for(var i = 0; i < tagName.length; i++) {
            // исключаем теги
            if(tagName[i].tagName != 'SCRIPT' && tagName[i].tagName != 'STYLE') {
                // проверяем есть ли текст
                if(tagName[i].innerHTML) {
                    // узнаем есть ли текст внутри элемента(все дочерние теги отсеиваем)
                    for(var k = 0; k < tagName[i].childNodes.length; k++) {
                        // узнаем что содержится внутри тега(текст или тег)
                        if(tagName[i].childNodes[k].nodeType === 3 && tagName[i].childNodes[k].nodeValue != 0) {
                            // чистим классс
                            lt = className;

                            // переписываем префикс
                            count++;

                            // добавляем класс тегам
                            tagName[i].classList.add(className);

                            // заполняем объект контентом
                            pageContent[lt + count] = tagName[i].childNodes[k].nodeValue;
                        }
                    }
                }
            }
        }

        // выводим содержимое в консоль
        if(log) {
            console.log(pageContent);
        }
    }
});