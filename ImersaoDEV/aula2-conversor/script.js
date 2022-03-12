function Converter() {
    var valorElemento = document.getElementById("valor"); //pega o elemento com id=valor
    var valor = valorElemento.value; // pega apenas o valor
    var valorEmDolar = parseFloat(valor); // converte string para float
    console.log(valorEmDolar);
    var valorEmDolarDireto = parseFloat(document.getElementById("valor").value);
    var valorEmReal = valorEmDolar * 5;
    document.getElementById("titulo").innerHTML =
      "Descubra os valores em real R$";
    var elementoConvertido=document.getElementById("valorConvertido");
    elementoConvertido.innerHTML ="O valor em dolar é : " + valorEmReal + " U$";
  }
  