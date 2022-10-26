var gTerra = 9.8;
var gMarte = 3.7;
var gJupter = 24.8;

var peso = prompt("Digite o peso do objeto na Terra");

var planeta = prompt("Qual planeta deseja saber o peso (Escolha entre Marte ou Jupter)?");
var pesoFinal;

if(planeta == "marte"){
    pesoFinal = (peso / gTerra) * gMarte;

    document.write("O peso desse objeto em Marte é: " + pesoFinal);
}else if (planeta == "jupter"){
    pesoFinal = (peso / gTerra) * gJupter;

    document.write("O peso desse objeto em jupter é: " + pesoFinal);
}else{
    document.write("Não posso calcular o peso nesse planeta!");
}

