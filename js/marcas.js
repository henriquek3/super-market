$(document).ready(function () {
    $('.ui.modal')
        .modal('setting', 'closable', false)
        .modal('attach events', '#modalShow', 'show')
    ;
    var listaMarcas = [{
        "nome" : "jean"
    }];
    
    function setLista(list) {
        var table = '';
        for (var key in list) {
            var jean = "jean";
            table += '<tr><td class="twelve wide field">'+ list[key].nome +'</td>';
            table += '<td><button id="editListaMarcas" class="mini circular ui icon green button"><i class="edit icon"></i></button></td>';
            table += '<td><button onclick="deleteData(' + key + ')" class="mini circular ui icon red button"><i class="remove icon"></i></button></td></tr>';
        }
        $('#tableMarcas').html(table);
    }
    
    function addData() {
        var nome = $('#inputNomeMarca').val();
        listaMarcas.unshift({"nome" : nome});
        setLista(listaMarcas);
        saveStorage(listaMarcas);
    }

    function saveStorage(obj) {
        var jsonStr = JSON.stringify(obj);
        localStorage.setItem("listaMarcas", jsonStr);
    }

    function initStorage() {
        var lista = localStorage.getItem("listaMarcas");
        if (lista) {
            listaMarcas = JSON.parse(lista);
        }
        setLista(listaMarcas);
    }

    function deleteData(id){
        if (id === listaMarcas.length -1) {
            listaMarcas.pop();
        } else if (id === 0) {
            listaMarcas.shift();
        } else {
            var arrAuxIni = listaMarcas.slice(0,id);
            var arrAuxEnd = listaMarcas.slice(id + 1);
            listaMarcas = arrAuxIni.concat(arrAuxEnd);
        }
        setLista(listaMarcas);
        saveStorage(listaMarcas);
    };

    $('#gravar').click(function () {
        addData();
        $('#inputNomeMarca').val('');
    });

    initStorage();
});