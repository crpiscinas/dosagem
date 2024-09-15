let resultado_piscina = document.getElementById("resultado-piscina");
const formulario_piscina = document.getElementById("formulario_piscina");

let resultado_prainha = document.getElementById("resultado-prainha");
const formulario_prainha = document.getElementById("formulario_prainha");

let resultado_m3 = document.getElementById("resultado-m3");

function calculoPiscina() {
  resultado_piscina.innerHTML = (
    +formulario_piscina[0].value.replace(",", ".") *
    +formulario_piscina[1].value.replace(",", ".") *
    +formulario_piscina[2].value.replace(",", ".")
  ).toFixed(1);
  resultado_prainha.innerHTML = (
    +formulario_prainha[0].value.replace(",", ".") *
    +formulario_prainha[1].value.replace(",", ".") *
    +formulario_prainha[2].value.replace(",", ".")
  ).toFixed(1);

  resultado_m3.innerText = (
    +resultado_piscina.innerText + +resultado_prainha.innerText
  ).toFixed(1);
  ///Produtos

  //Alcalinidade
  let resultadoFinal = resultado_m3.innerText;
  let alcalinidade = document.getElementById("alcalinidade");
  let resultadoAlcalinidade = document.getElementById("resultado-alcalinidade");

  resultadoAlcalinidade.innerHTML =
    15 * +resultadoFinal * +alcalinidade.value.replace(",", ".");

  //Alcalinidade
  let resultadoAlcalinidade2 = document.getElementById(
    "resultado-alcalinidade2"
  );

  resultadoAlcalinidade2.innerHTML =
    +alcalinidade.value.replace(",", ".") - 100;

  //Clarificante
  let clarificante = document.getElementById("clarificante");
  let resultadoClarificante = document.getElementById("resultado-clarificante");

  resultadoClarificante.innerHTML =
    10 * +resultadoFinal * +clarificante.value.replace(",", ".");

  //ph mais
  let phMais = document.getElementById("ph-mais");
  let resultadoPHMais = document.getElementById("resultado-ph-mais");

  resultadoPHMais.innerHTML =
    10 * +resultadoFinal * +phMais.value.replace(",", ".");

  //ph menos
  let phMenos = document.getElementById("ph-mais");
  let resultadoPHMenos = document.getElementById("resultado-ph-menos");

  resultadoPHMenos.innerHTML =
    10 * +resultadoFinal * +phMenos.value.replace(",", ".");

  //cloro HTH
  let cloro = document.getElementById("cloro");
  let resultadoCloro = document.getElementById("resultado-cloro");

  resultadoCloro.innerHTML = +resultadoFinal * +cloro.value.replace(",", ".");

  //cloro Estabilizado

  let resultadoCloroEstabilizado = document.getElementById(
    "resultado-cloro-estabilizado"
  );
  resultadoCloroEstabilizado.innerHTML =
    +resultadoFinal * +cloro.value.replace(",", ".");

  //Algicida

  let algicida = document.getElementById("algicida");
  let resultadoAlgicida = document.getElementById("resultado-algicida");

  resultadoAlgicida.innerHTML =
    +resultadoFinal * +algicida.value.replace(",", ".");

  //Sulfato de aluminio genco
  let resultadoAluminio = document.getElementById("resultado-aluminio");

  resultadoAluminio.innerHTML = +resultadoFinal * 20;

  //Sulfato de aluminio genco
  let resultadoAluminioOutras = document.getElementById(
    "resultado-aluminio-outras"
  );

  resultadoAluminioOutras.innerHTML = +resultadoFinal * 40;

  //Dureza

  let dureza = document.getElementById("dureza");
  let resultadoDureza = document.getElementById("resultado-dureza");

  resultadoDureza.innerHTML =
    +resultadoFinal * +dureza.value.replace(",", ".") * 1.5;

  //Acido Cianurico

  let acido = document.getElementById("acido");
  let resultadoAcido = document.getElementById("resultado-cianurico");

  resultadoAcido.innerHTML = +resultadoFinal - acido.value.replace(",", ".");

  //Genquest

  let genquest = document.getElementById("genquest");
  let resultadoGenquest = document.getElementById("resultado-genquest");

  resultadoGenquest.innerHTML =
    +resultadoFinal * genquest.value.replace(",", ".");
}
setInterval(calculoPiscina, 1000);

// let produtos = document.querySelectorAll(".prod");

// produtos.forEach((e) => {
//   console.log(e);
// });
