function activateTab(tab) {
    var tabs = document.querySelectorAll('.content-item');
    var tabsPane = document.querySelectorAll('.tab-pane');

    tabs.forEach(function(tab) {
        tab.classList.remove('active-tab');
    });

    tabsPane.forEach(function(pane) {
        pane.classList.remove('active');
    });

    tab.classList.add('active-tab');

    var tabId = tab.getAttribute('data-tab-id');
    var activePane = document.getElementById(tabId);
    activePane.classList.add('active');
}
