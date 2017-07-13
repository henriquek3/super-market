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
        saveStorage(list);
    }
    
    function addData() {
        var nome = $('#inputNomeMarca').val();
        listaMarcas.unshift({"nome" : nome});
        setLista(listaMarcas);
        saveStorage(listaMarcas);
    }


    function saveStorage(obj) {
        var jsonStr = JSON.stringify(obj);
        localStorage.setItem("listaMarcas", "jsonStr");
    }

    function initStorage() {
        var lista = localStorage.getItem("listaMarcas");
        if (lista) {
            list = JSON.parse(lista);
        }
        setLista(list);
    }

    $('#gravar').click(function () {
        addData();
        $('#inputNomeMarca').val('');
    });
    initStorage();
});