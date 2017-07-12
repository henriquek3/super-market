$(document).ready(function () {
    $('#content').load('views/home/home.html');

    var urli = '';

    $('.button').click(function () {
        urli = $(this).attr('href');
        $.ajax({
            method : "POST",
            url : urli,
            dataType : 'html'

        })
            .done(function (response) {
            $('#content').html(response);
        })
            .fail(function () {
            $('#content').html("O Request Falhou!");
        });
        return false;
    });
    $('.item').click(function () {
        return false;
    })
});