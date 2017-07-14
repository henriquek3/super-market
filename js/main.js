$(document).ready(function () {
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
    })
});