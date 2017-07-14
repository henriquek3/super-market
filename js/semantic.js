$(document).ready(function () {
    $('.sidebar').first()
        .sidebar('setting','transition','overlay')
        .sidebar('attach events', '#sidebarButton', 'show')
    ;
    $('#sidebarButton')
        .removeClass('disabled')
    ;
});