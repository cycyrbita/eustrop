window.onload = function () {
    var language = {
        "Русский": [
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
        ]
    }

    var elms = document.getElementsByTagName("*"),
        len = elms.length;

    for(var ii = 0; ii < len; ii++) {
        var myChildred = elms[ii].childNodes;
        
        len2 = myChildred.length;

        for (var jj = 0; jj < len2; jj++) {
            if(myChildred[jj].nodeType === 3) {
                console.log(myChildred[jj].nodeValue);

                // example on update a text node's value
                // myChildred[jj].nodeValue = myChildred[jj].nodeValue.replace(myChildred[jj].nodeValue, "123");
            }
        }
    }

}