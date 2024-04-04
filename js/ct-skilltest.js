// pane function
function activateTab(tab) {
    var tabs = document.querySelectorAll('.content-item');
    var tabsPane = document.querySelectorAll('.tab-pane');

    tabs.forEach(function (tab) {
        tab.classList.remove('active-tab');
    });

    tabsPane.forEach(function (pane) {
        pane.classList.remove('active');
    });

    tab.classList.add('active-tab');

    var tabId = tab.getAttribute('data-tab-id');
    var activePane = document.getElementById(tabId);
    activePane.classList.add('active');
}

// nav function
document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function (navLink) {
        var dropdownMenu = navLink.querySelector('.dropdown-menu');
        var subDropMenus = navLink.querySelectorAll('.sub-drop-menu');
        var anchorTag = navLink.querySelector('a');

        navLink.addEventListener('mouseenter', function () {
            dropdownMenu.classList.add('show');
            anchorTag.classList.add('link-active');
        });

        navLink.addEventListener('mouseleave', function () {
            dropdownMenu.classList.remove('show');
            anchorTag.classList.remove('link-active');
        });

        subDropMenus.forEach(function (subDropMenu) {
            subDropMenu.parentNode.addEventListener('mouseenter', function () {
                subDropMenu.classList.add('show');
            });

            subDropMenu.parentNode.addEventListener('mouseleave', function () {
                subDropMenu.classList.remove('show');
            });
        });
    });
});


