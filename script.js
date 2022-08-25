function Cadastrar(){
    window.alert("Cadastrado meu fih");
    var qtdInput = document.getElementById("qtd").value;
    var htmlFinal = "";
    for (var i = 0; i < qtdInput; i++){
        htmlFinal += 'Nome: <input> <br/>';
    }
    document.getElementById('nomes').innerHTML = htmlFinal
}
var lista = ['Tomate', 'Queijo', 'Alface']
function PreencherSelect(){
    var htmlFinal = '';
    var tamanhoLista = lista.length;
    for (var i = 0; i < tamanhoLista; i++){
        htmlFinal += "<option>"+lista[i] +"</option>"
    }
    document.getElementById('meuSelect').innerHTML = htmlFinal;
}

function AdicionarItem(){
    var valorInput = document.getElementById('inputItem').value;
    lista.push(valorInput);
    PreencherSelect();
}

function ApagarItem() {
    var valorSelecionado = document.getElementById('meuSelect').value;
    lista.splice(valorSelecionado, 1);
    PreencherSelect();
}