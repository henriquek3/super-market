$(document).ready(function () {
    var listaMarcas = [];
    
    function setLista(list) {
        var table = '';
        for (var key in list) {
            table += '<tr><td class="twelve wide field">'+ list[key].nome +'</td>';
            table += '<td><button class="mini circular ui icon green button"><i class="edit icon"></i></button></td>';
            table += '<td><button class="mini circular ui icon red button"><i class="edit icon"></i></button></td></tr>';
        }
        $('#tableMarcas').html(table);
    }
    
    function addData() {
        var nome = $('#inputNomeMarca').val();
        listaMarcas.unshift({"nome" : nome});
        setLista(listaMarcas);
    }

    $('#gravar').click(function () {
        addData();
        $('#inputNomeMarca').val('');
    });
    
    setLista(listaMarcas);
});