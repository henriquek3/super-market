$('.ui.modal').modal('setting', 'closable', false);

$('#modalShow').click(function () {
    $('#inputNomeUnidade').val('');
    $('#inputsiglaunidade').val('');
    $('.ui.modal').modal('show');
    $('#alterar').hide();
    $('#gravar').show();
    $('.modal .header').text('Incluir');
});

var listaUnidades = [{}];
var idUnidade = '';

function setLista(list) {
    var table = '';
    for (var key in list) {
        var jean = "jean";
        table += '<tr><td class="four wide field">' + list[key].nome + '</td>';
        table += '<td class="four wide field">' + list[key].sigla + '</td>';
        table += '<td><button onclick="modal(' + key + ');" class="mini circular ui icon green button"><i class="edit icon"></i></button></td>';
        table += '<td><button onclick="deleteData(' + key + ')" class="mini circular ui icon red button"><i class="remove icon"></i></button></td></tr>';
    }
    $('#tableUnidades').html(table);
}

function addData() {
    var nome = $('#inputNomeUnidade').val();
    var sigla = $('#inputSiglaUnidade').val();
    listaUnidades.unshift({"nome": nome, "sigla" : sigla});
    setLista(listaUnidades);
    saveStorage(listaUnidades);
    $('#inputNomeUnidade').val('');
    $('#inputSiglaUnidade').val('');
}

function saveStorage(obj) {
    var jsonStr = JSON.stringify(obj);
    localStorage.setItem("listaUnidades", jsonStr);
}

function initStorage() {
    var lista = localStorage.getItem("listaUnidades");
    if (lista) {
        listaUnidades = JSON.parse(lista);
    }
    setLista(listaUnidades);
}

function deleteData(id) {
    if (id === listaUnidades.length - 1) {
        listaUnidades.pop();
    } else if (id === 0) {
        listaUnidades.shift();
    } else {
        var arrAuxIni = listaUnidades.slice(0, id);
        var arrAuxEnd = listaUnidades.slice(id + 1);
        listaUnidades = arrAuxIni.concat(arrAuxEnd);
    }
    setLista(listaUnidades);
    saveStorage(listaUnidades);
};

function alterData(id, nome, sigla) {
    listaUnidades[id].nome = nome;
    listaUnidades[id].sigla = sigla;
    setLista(listaUnidades);
    saveStorage(listaUnidades);
    $('#inputNomeUnidade').val('');
    $('#inputSiglaUnidade').val('');
}

function modal(id) {
    $('#gravar').hide();
    $('#alterar').show();
    var nome = listaUnidades[id].nome;
    var sigla = listaUnidades[id].sigla;
    idUnidade = id;
    $('#inputNomeUnidade').val(nome);
    $('#inputSiglaUnidade').val(sigla);
    $('.ui.modal').modal('show');
    $('.modal .header').text('Alterar');
};

$('#alterar').click(function () {
    /* Act on the event */
    var nome = $('#inputNomeUnidade').val();
    var sigla = $('#inputSiglaUnidade').val();
    alterData(idUnidade, nome, sigla);
});


$('#gravar').click(function () {
    addData();
});

initStorage();