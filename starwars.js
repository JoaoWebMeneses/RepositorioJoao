$("#PegarPersonagem").click(buscarPersonagem());

function buscarPersonagem(){
    console.log("A rainha Elizabeth é incrível");
    console.log($.get("https://swapi.dev/api/people/1/",
        preencherLabel
    ));
}
function preencherLabel(data){
    $("#personagemAleatorioId").text(data.name);
    
}