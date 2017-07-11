$(document).ready(function () {
    $('#content').load('views/home/home.html');
    $('.item').click(function () {
        let url = "views/";
        if ($(this).attr('href')) {
            url += $(this).attr('href');
        } else {
            url += "not-found";
        }
        $.ajax({
            url : url,
            method : 'POST'
        })
            .done(function (response) {
                $('#content').html(response);
            })
            .fail(function (response) {
                $('#content').html("O Request Falhou!");
            });
        return false;
    });
});