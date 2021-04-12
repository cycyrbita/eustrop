
window.onload = function() {
    /* Логика бургера начало*/
    var burger = document.getElementById('js-header__burger'),
        nav = document.getElementById('nav');

    burger.onclick = function() {
        toggleMenu();
    }

    document.onclick = function(e) {
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
    /* Логика бургера конец*/


    /*Логика блока table начало*/
    var tabs = document.getElementsByClassName('table__title');

    for(var i = 0; i < tabs.length; i++) {
        tabs[i].onclick = function() {
            this.classList.toggle('visible');
        };
    }
    /*Логика блока table конец*/
};