function BTitulo(){
    var valTitulo = document.getElementById("ititulo").value;
    document.getElementById("titulo").innerHTML = valTitulo
    document.getElementById("titulo").style.fontSize = "50px";
}

function AParagrafo(){
    var valParagrafo = document.getElementById("paragrafo").value;
    document.getElementById("lugar").innerHTML = valParagrafo;
    document.getElementById("lugar").style.fontSize = "15px";
}

function AImagem(){
    var valImagem = document.getElementById("pimagem").value;
    document.getElementById("aimagem").innerHTML = valImagem;
}
