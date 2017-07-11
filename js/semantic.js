$(document).ready(function () {
    $('#sidebar').first()
        .sidebar('attach events', '#sidebarButton', 'show')
    ;
    $('#sidebarButton')
        .removeClass('disable')
    ;
});