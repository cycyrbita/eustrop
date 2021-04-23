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

    var myTooltip = new Tooltip({
        selector: 'span, a, b, i, strong, div',
        tooltipClass: 'tooltip',
        margin: 10,
        position: 'top-center',
    });
};