$('.ui.modal').modal('setting', 'closable', false);

$('#modalShow').click(function () {
    $('#inputNomeMarca').val('');
    $('.ui.modal').modal('show');
    $('#alterar').hide();
    $('#gravar').show();
    $('.modal .header').text('Incluir');
});
    
var listaMarcas = [{
    "nome" : "jean"
}];
var idMarca = '';

function setLista(list) {
    var table = '';
    for (var key in list) {
        var jean = "jean";
        table += '<tr><td class="twelve wide field">'+ list[key].nome +'</td>';
        table += '<td><button onclick="modal(' + key + ');" class="mini circular ui icon green button"><i class="edit icon"></i></button></td>';
        table += '<td><button onclick="deleteData(' + key + ')" class="mini circular ui icon red button"><i class="remove icon"></i></button></td></tr>';
    }
    $('#tableMarcas').html(table);
}

function addData() {
    var nome = $('#inputNomeMarca').val();
    listaMarcas.unshift({"nome" : nome});
    setLista(listaMarcas);
    saveStorage(listaMarcas);
    $('#inputNomeMarca').val('');
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
}

function alterData(id, nome) {
    listaMarcas[id].nome = nome;
    setLista(listaMarcas);
    saveStorage(listaMarcas);
    $('#inputNomeMarca').val('');
}

function modal(id) {
    $('#gravar').hide();
    $('#alterar').show();
    var nome = listaMarcas[id].nome;
    idMarca = id;
    $('#inputNomeMarca').val(nome);
    $('.ui.modal').modal('show');
    $('.modal .header').text('Alterar');
}

$('#alterar').click(function () {
    /* Act on the event */
    var nome = $('#inputNomeMarca').val();
    alterData(idMarca, nome);
});


$('#gravar').click(function () {
    addData();    
});

initStorage();