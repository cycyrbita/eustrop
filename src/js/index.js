window.onload = function () {
    /* Логика бургера начало*/
    var burger = document.getElementById('js-header__burger'),
        nav = document.getElementById('nav');

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


    /*Логика блока table начало*/
    var tabs = document.getElementsByClassName('table_manual-tabs');
    if (tabs != null) {
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].getElementsByTagName('caption')[0].onclick = function () {
                this.parentNode.classList.toggle('visible');
            };
        }
    }    
    /*Логика блока table конец*/

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
        for(var i = 0; i < homeListItem.length; i++) {
            time = getRandomArbitrary(100, 1000);
            setTime(i);
        }
    }

    function removeShowAnimation () {
        for(var i = 0; i < homeListItem.length; i++) {
            time = getRandomArbitrary(100, 1000);
            setTimeRemove(i);
        }
    }

    function setTime(count) {
        setTimeout (function() {
            homeListItem[count].classList.add('show');
        }, time);
    }

    function setTimeRemove(count) {
        setTimeout (function() {
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
        window.onresize = function() {
            addHeight('home__list-item');
            addPaddingHome();
        }
        addHeight('home__list-item');
        addShowAnimation();
        addPaddingHome();
    }

    function hideHome() {
        window.onresize = function() {
            removePaddingHome();
        }
        removeShowAnimation();
        removePaddingHome();
        var home = document.getElementsByClassName('home')[0];
        home.classList.remove('show');
    }

    if (document.getElementsByClassName('home').length) {
        document.getElementsByClassName('home__show')[0].onclick = function() {
            showHome();
            this.remove();
        }
    }
    /*логика блоков(home__list-item) на главной странице конец*/

    var navSpan = document.querySelectorAll('.introList');
    if (navSpan != null) {
        for (var i = 0; i < navSpan.length; i++) {
            navSpan[i].onclick = function(e) {
                e.stopPropagation();
                if(this.classList.contains('open')) {
                    this.classList.remove('open');
                } else {
                    this.classList.add('open');
                }
            };
        }
    }
    
};