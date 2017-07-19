$('.ui.modal').modal('setting', 'closable', false);

var listaProdutos;
var listaUnidades;
var listaMarcas;
var idProduto = '';

function initStorage() {
    var produtos = localStorage.getItem("listaProdutos");
    if (produtos) {
        listaProdutos = JSON.parse(produtos);
    }
    var marcas = localStorage.getItem("listaMarcas");
    if (marcas) {
        listaMarcas = JSON.parse(marcas);
    }
    var unidades = localStorage.getItem("listaUnidades");
    if (unidades) {
        listaUnidades = JSON.parse(unidades);
    }
    setLista(listaProdutos);
}
initStorage();

function setLista(list) {
    var table = '';
    for (var key in list) {
        table += '<tr><td class="six wide field">' + list[key].nome + '</td>';
        table += '<td class="four wide field">' + listaMarcas[list[key].marca].nome + '</td>';
        table += '<td class="four wide field">' + listaUnidades[list[key].unidade].sigla + '</td>';
        table += '<td><button onclick="modal(' + key + ');" class="mini circular ui icon green button"><i class="edit icon"></i></button>';
        table += '<td><button onclick="deleteData(' + key + ')" class="mini circular ui icon red button"><i class="remove icon"></i></button></td></tr>';
        /*
        console.log(listaMarcas[list[key].marca].nome);
        console.log(list[key].marca);
        */
    }
    $('#tableProdutos').html(table);
}


function setTableMarcas(list) {
    var option = '<option selected>Marcas</option>';
    for (var key in list) {
        option += '<option value="' + key + '">' + list[key].nome + '</option>';
    }
    $('#marcas').html(option);
}

function setTableUnidades(list) {
    var option = '<option selected>Marcas</option>';
    for (var key in list) {
        option += '<option class="optunidades" value="' + key + '">' + list[key].nome + '</option>';
    }
    $('#unidades').html(option);
}

function addData() {
    var nome = $('#inputNomeProduto').val();
    var marca = $('#marcas').val();
    var unidade = $('#unidades').val();
    /*
console.log(nome+"|"+marca+"|"+unidade);
    console.log(listaProdutos);
*/
    listaProdutos.unshift({"nome": nome, "marca": marca, "unidade": unidade});
    /*console.log("nome: " + nome + "| Marca: " + marca + "| unidade: " + unidade);*/
    setLista(listaProdutos);
    saveStorage(listaProdutos);
    $('#inputNomeProduto').val('');
}

function saveStorage(obj) {
    var jsonStr = JSON.stringify(obj);
    localStorage.setItem("listaProdutos", jsonStr);
}

function deleteData(id) {
    if (id === listaProdutos.length - 1) {
        listaProdutos.pop();
    } else if (id === 0) {
        listaProdutos.shift();
    } else {
        var arrAuxIni = listaProdutos.slice(0, id);
        var arrAuxEnd = listaProdutos.slice(id + 1);
        listaProdutos = arrAuxIni.concat(arrAuxEnd);
    }
    setLista(listaProdutos);
    saveStorage(listaProdutos);
}

function alterData(id, nome) {
    listaProdutos[id].nome = nome;
    setLista(listaProdutos);
    saveStorage(listaProdutos);
    $('#inputNomeProduto').val('');
}

function modal(id) {
    $('#gravar').hide();
    $('#alterar').show();
    var nome = listaProdutos[id].nome;
    var marca = listaProdutos[id].marca;
    var unidade = listaProdutos[id].unidade;
    idProduto = id;
    $('#inputNomeProduto').val(nome);
    $('.ui.modal').modal('show');
    $('.modal .header').text('Alterar');
    setTableUnidades(listaUnidades);
    setTableMarcas(listaMarcas);
    $('.ui.modal').find('#marcas').val(marca);
    $('.ui.modal').find('#unidades').val(unidade);
}

$('#alterar').click(function () {
    /* Act on the event */
    var nome = $('#inputNomeProduto').val();
    alterData(idProduto, nome);
});


$('#gravar').click(function () {
    addData();
});



$('#modalShow').click(function () {
    $('#inputNomeProduto').val('');
    $('.ui.modal').modal('show');
    $('#alterar').hide();
    $('#gravar').show();
    $('.modal .header').text('Incluir');
    setTableUnidades(listaUnidades);
    setTableMarcas(listaMarcas);
});