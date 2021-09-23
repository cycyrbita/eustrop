window.onload = function () {
    /* Логика бургера начало*/
    var burger = document.getElementById('CTUIH_header__burger'),
        nav = document.getElementById('nav__dropdown');

    if (burger != null && nav != null) {
        burger.onclick = function () {
            toggleMenu();
        }

        document.onclick = function (e) {
            var its_menu = e.target == nav || nav.contains(e.target);
            var its_btnMenu = e.target == burger;
            var menu_is_active = nav.classList.contains('visible');

            if (!its_menu && !its_btnMenu && menu_is_active) {
                toggleMenu();
            }
        };

        function toggleMenu() {
            nav.classList.toggle('visible');
            burger.classList.toggle('visible');
        }
    }
    /* Логика бургера конец*/

    /*Логика блока content начало*/
    var $open = document.getElementsByClassName('tabs__open');
    if ($open != null) {
        for (var i = 0; i < $open.length; i++) {
            $open[i].onclick = function () {
                this.parentNode.classList.toggle('visible');
            };
        }
    }
    /*Логика блока content конец*/

    /*Форма регистрации начало*/
    var register = document.getElementById('register'),
        registerClose = document.getElementById('register-close'),
        registerOpen = document.getElementById('register-open');

    if (registerOpen != null && registerClose != null && register != null) {
        registerOpen.onclick = function (e) {
            e.preventDefault();
            register.classList.add('visible');
            document.body.classList.add('hidden');
        }

        registerClose.onclick = function (e) {
            e.preventDefault();
            register.classList.remove('visible');
            document.body.classList.remove('hidden');
        }
    }
    /*Форма регистрации конец*/

    /*логика блоков(home__list-item) на главной странице*/
    function addHeight(param) {
        var home = document.getElementsByClassName('home')[0];
        home.classList.add('show');
        var item = document.getElementsByClassName(param);
        var itemHeight = item[0].offsetWidth;
        for (var i = 0; i < item.length; i++) {
            item[i].style.height = itemHeight + 'px';
        }
    }

    var homeListItem = document.getElementsByClassName('home__list-item');
    var time = 100;

    function addShowAnimation() {
        for (var i = 0; i < homeListItem.length; i++) {
            time = getRandomArbitrary(100, 1000);
            setTime(i);
        }
    }

    function removeShowAnimation() {
        for (var i = 0; i < homeListItem.length; i++) {
            time = getRandomArbitrary(100, 1000);
            setTimeRemove(i);
        }
    }

    function setTime(count) {
        setTimeout(function () {
            homeListItem[count].classList.add('show');
        }, time);
    }

    function setTimeRemove(count) {
        setTimeout(function () {
            homeListItem[count].classList.remove('show');
        }, time);
    }

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    function addPaddingHome() {
        var homeBody = document.getElementsByClassName('home__body')[0];
        var homeHeader = document.getElementsByClassName('home__header')[0].offsetHeight;
        var homeFooter = document.getElementsByClassName('home__footer')[0].offsetHeight;
        homeBody.style.paddingTop = homeHeader + "px";
        homeBody.style.paddingBottom = homeFooter + "px";
    }

    function removePaddingHome() {
        var homeBody = document.getElementsByClassName('home__body')[0];
        homeBody.style.paddingTop = "0px";
        homeBody.style.paddingBottom = "0px";
    }

    function showHome() {
        window.onresize = function () {
            addHeight('home__list-item');
            addPaddingHome();
        }
        addHeight('home__list-item');
        addShowAnimation();
        addPaddingHome();
    }

    function hideHome() {
        window.onresize = function () {
            removePaddingHome();
        }
        removeShowAnimation();
        removePaddingHome();
        var home = document.getElementsByClassName('home')[0];
        home.classList.remove('show');
    }

    if (document.getElementsByClassName('home').length) {
        document.getElementsByClassName('home__show')[0].onclick = function () {
            showHome();
            this.remove();
        }
    }
    /*логика блоков(home__list-item) на главной странице конец*/

    var navSpan = document.querySelectorAll('.CTUIH__navDropDown');
    if (navSpan != null) {
        for (var i = 0; i < navSpan.length; i++) {
            navSpan[i].onclick = function (e) {
                e.stopPropagation();
                if (this.classList.contains('open')) {
                    this.classList.remove('open');
                } else {
                    this.classList.add('open');
                }
            };
        }
    }

    const anchors = document.querySelectorAll('a.docs__media-point');
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            let $items = document.querySelectorAll('.docs__item');
            for (var i = 0; i < $items.length; i++) {
                $items[i].classList.remove('docs__item_active');
            };

            for (var i = 0; i < anchors.length; i++) {
                if (anchors[i].classList.contains('docs__media-point_active')) {
                    anchors[i].classList.remove('docs__media-point_active');
                }
            };

            e.preventDefault();
            anchor.classList.add('docs__media-point_active');
            const blockID = anchor.getAttribute('href');
            document.querySelector(blockID).classList.add('docs__item_active');
            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        })
    }
};

$(document).ready(function() {
    // $('.qrcode').on('click', '.qrcode__menu-item', function () {
    //     $('.qrcode__form').not($('.qrcode__form').eq($(this).index()).addClass('active')).removeClass('active');
    //     $('.qrcode__menu-item').not($(this).addClass('active')).removeClass('active');
    // })

    // $('.test').on('change', 'input', function () {
    //     // узнаем текст
    //     var info = $('.test__text').val();
    //     // узнаем номер(0-40)
    //     var typeNumber = $('.test__size').val();
    //     if(typeNumber < 0) {
    //         typeNumber = 0;
    //     } else if(typeNumber > 40) {
    //         typeNumber = 40;
    //     }
    //     // узнаем размер(L,M,Q,H)
    //     var errorCorrectionLevel = $('input[type="radio"]:checked').val();
    //     // узнаем размер картинки(qrcode)
    //     var cellSize = $('.test__width').val();
        
    //     var qr = qrcode(typeNumber, errorCorrectionLevel);

    //     qr.addData(info);

    //     qr.make();

    //     $('.test__result').html(qr.createImgTag(cellSize, 0));
    // })

    let items = $('.qrcode__menu-item.active').attr("data-items");

    // активный элемент меню
    $('body').on('click', '.qrcode__menu-item', function() {
        $('.qrcode__menu-item').not($(this).addClass('active')).removeClass('active');
        items = $(this).attr("data-items");
        $('.qrcode__body-item').not($('.qrcode__body-item').eq($(this).index()).addClass('visible')).removeClass('visible')
    })

    // активный элемент qr-type
    $('input[name="qr-type"]:checked').parents('.qrcode__type-label').addClass('active')
    $('body').on('change', 'input[name="qr-type"]', function() {
        $('input[name="qr-type"]').parents('.qrcode__type-label').removeClass('active')
        $('input[name="qr-type"]:checked').parents('.qrcode__type-label').addClass('active')
    })

    $('.qrcode__form').submit(function(e) {
        e.preventDefault();

        // узнаем тип(L,M,Q,H)
        let type = $('input[name="qr-type"]:checked').val();

        // узнаем размер картинки(qrcode)
        let width = $('input[name="qr-widht"]').val();

        // узнаем жирность(0-40)
        let size = $('input[name="qr-size"]').val();
        if(size < 0) {
            size = 0;
        } else if(size > 40) {
            size = 40;
        }

        if(items == 'qr1') {
            qr1(type, width, size);
        } else if(items == 'qr2') {
            qr2(type, width, size);
        } else if(items == 'qr3') {
            qr3(type, width, size);
        } else if(items == 'qr4') {
            qr4(type, width, size);
        }
    })

    function qr1(type, width, size) {
        let text = $('textarea[name="qr1-text"]').val();
        let qr = qrcode(size, type);
        qr.addData(text);
        qr.make();
        $('.qrcode__result').html(qr.createImgTag(width, 0));
    }

    function qr2(type, width, size) {
        let text = $('input[name="qr2-url"]').val();
        let qr = qrcode(size, type);
        qr.addData(text);
        qr.make();
        $('.qrcode__result').html(qr.createImgTag(width, 0));
    }

    function qr3(type, width, size) {
        let text = $('input[name="qr3-name"]').val(),
            surname = $('input[name="qr3-surname"]').val(),
            phone = $('input[name="qr3-phone"]').val(),
            email = $('input[name="qr3-email"]').val(),
            organization = $('input[name="qr3-organization"]').val(),
            position = $('input[name="qr3-position"]').val(),
            address = $('input[name="qr3-address"]').val(),
            site = $('input[name="qr3-site"]').val(),
            metka = $('input[name="qr3-metka"]').val(),
            result = text + surname + phone + email + organization + position + address + site + metka;

        let qr = qrcode(size, type);
        qr.addData(result);
        qr.make();
        $('.qrcode__result').html(qr.createImgTag(width, 0));
    }

    function qr4(type, width, size) {
        let text = $('input[name="qr4-phone"]').val();
        text = text + $('textarea[name="qr4-sms"]').val();
        
        let qr = qrcode(size, type);
        qr.addData(text);
        qr.make();
        $('.qrcode__result').html(qr.createImgTag(width, 0));
    }
});