var numeroSecreto = 0;
function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var elementoResultado2 = document.getElementById("resultado2");

  numeroSecreto = Math.floor(Math.random() * 10 + 1);
  var valorChute = parseInt(document.getElementById("valor").value);
  console.log(valorChute);
  if (numeroSecreto == valorChute) {
    console.log("Acertou");
    elementoResultado.innerHTML = "Acertou";
    elementoResultado2.innerHTML = " ";
  } else if (valorChute > 10 || valorChute < 0) {
    console.log("O numero digitado não está entre 0 a 10");
    elementoResultado.innerHTML = "O numero digitado não está entre 0 a 10";
    elementoResultado2.innerHTML = " ";
  } else {
    console.log("Errou");
    console.log("O numero secreto era : " + numeroSecreto);
    elementoResultado.innerHTML = "Errou";
    elementoResultado2.innerHTML = "O numero secreto era : " + numeroSecreto;
  }
}