var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    console.log("Acertou");
    elementoResultado.innerHTML = "Você acertou";
  } else if (chute > 10 || chute < 0) {
    console.log("Você deve digitar um número de 0 a 10");
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
  } else {
    console.log("Errou");
    elementoResultado.innerHTML =
      "VocÊ errou, o número secreto era " + numeroSecreto;
  }
}
