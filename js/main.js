$(document).ready(function () {
    $('.sidebar.item').css({fontSize : '+=10'});
    $('#content').load('views/home/home.html');

    $('.item .button').click(function () {
        var urli = '';
        urli = $(this).attr('href');
        var request = $.ajax({
            method: "GET",
            url : urli,
            dataType : 'html'
        });
        request.done(function (response) {            
            $('#content').html(response);
        });
        request.fail(function () {
            $('#content').html("O Request Falhou!");
        });
        return false;
    });

    $('.item').click(function () {
        return false;
    });

    $('#sair').click(function () {
        //onsole.log('sair');
        navigator.app.exitApp();
    });
});