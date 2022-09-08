function R(){
    var Fig = document.getElementById("fig").value;
    var Rep = document.getElementById("rep").value;
    if (Fig <= -1 || Rep <= -1){
        alert("Valor inválido!")
    }
    else if (Fig >= 671){
        alert("Você já completou o álbum e têm figurinhas a mais coladas!")
    }
    else if (Fig <= 670 && Fig >= 0 && Rep >= 0){
        porcentagem = ((Fig * 1) / 670) * 100;
        minGasto1 = (Fig * 0.8) + (Rep * 0.8);
        minGasto2 = 670 * 0.8;
        minGastoT = minGasto1 + minGasto2;
        document.getElementById("respor").innerHTML = porcentagem;
        document.getElementById("g").innerHTML = minGastoT;
    }
}