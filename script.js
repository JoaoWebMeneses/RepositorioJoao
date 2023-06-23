function Calcular(){
    var galtura = document.getElementById("altura").value;
    var gpeso = document.getElementById("peso").value;
    var caltura = galtura / 100;
    var imc = gpeso / (caltura * caltura);
    document.getElementById('imc1').innerHTML = imc.toFixed(2);
    if (galtura <= 0 || gpeso <= 0){
        document.getElementById('imc1').innerHTML = '0.00';
        document.getElementById('res').innerHTML = `Valor inválido!`;
    }
    if (imc < 18.5){
        document.getElementById('res').innerHTML = `Você está com magreza!`;
    }
    else if (imc >= 18.5 && imc < 25){
        document.getElementById('res').innerHTML = `Você está com peso normal!`;
    }
    else if (imc >= 25 && imc < 30){
        document.getElementById('res').innerHTML = `Você está com sobrepeso!`;
    }
    else if (imc >= 30 && imc < 40){
        document.getElementById('res').innerHTML = `Você está com obesidade!`;
    }
    else if (imc >= 40){
        document.getElementById('res').innerHTML = `Você está com obesidade grave!`;
    }
}

function Limpar(){
    document.getElementById("altura").value = '';
    document.getElementById("peso").value = '';
}