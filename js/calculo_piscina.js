function formatarNumeroComPontos(numero) {
  let numeroStr = numero.toString();
  let resultado = "";
  let contador = 0;

  // Itera sobre o número de trás para frente
  for (let i = numeroStr.length - 1; i >= 0; i--) {
    resultado = numeroStr[i] + resultado;
    contador++;
    // Insere o ponto a cada 3 dígitos, mas não no início
    if (contador % 3 === 0 && i > 0) {
      resultado = "." + resultado;
    }
  }

  return resultado;
}

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

  if (alcalinidade.value < 100) {
    resultadoAlcalinidade.innerHTML = formatarNumeroComPontos(
      Math.abs(
        (+alcalinidade.value.replace(",", ".") - 100) * 15 * resultadoFinal
      )
    );
  } else {
    resultadoAlcalinidade.innerHTML = 0;
  }

  //Alcalinidade redutor
  let resultadoAlcalinidade2 = document.getElementById(
    "resultado-alcalinidade2"
  );

  if (alcalinidade.value >= 100) {
    resultadoAlcalinidade2.innerHTML = formatarNumeroComPontos(
      (+alcalinidade.value.replace(",", ".") - 100) * 15 * resultadoFinal
    );
  } else {
    resultadoAlcalinidade2.innerHTML = 0;
  }

  //Clarificante
  let clarificante = document.getElementById("clarificante");
  let resultadoClarificante = document.getElementById("resultado-clarificante");

  resultadoClarificante.innerHTML = formatarNumeroComPontos(
    10 * +resultadoFinal * +clarificante.value.replace(",", ".")
  );

  //ph mais
  let phMais = document.getElementById("ph-mais");
  let resultadoPHMais = document.getElementById("resultado-ph-mais");

  resultadoPHMais.innerHTML = formatarNumeroComPontos(
    10 * +resultadoFinal * +phMais.value.replace(",", ".")
  );

  //ph menos
  let phMenos = document.getElementById("ph-mais");
  let resultadoPHMenos = document.getElementById("resultado-ph-menos");

  resultadoPHMenos.innerHTML = formatarNumeroComPontos(
    10 * +resultadoFinal * +phMenos.value.replace(",", ".")
  );

  //cloro HTH
  let cloro = document.getElementById("cloro");
  let resultadoCloro = document.getElementById("resultado-cloro");

  resultadoCloro.innerHTML = formatarNumeroComPontos(
    +resultadoFinal * +cloro.value.replace(",", ".")
  );

  //cloro Estabilizado

  let resultadoCloroEstabilizado = document.getElementById(
    "resultado-cloro-estabilizado"
  );
  resultadoCloroEstabilizado.innerHTML = formatarNumeroComPontos(
    +resultadoFinal * +cloro.value.replace(",", ".")
  );

  //Algicida

  let algicida = document.getElementById("algicida");
  let resultadoAlgicida = document.getElementById("resultado-algicida");

  resultadoAlgicida.innerHTML = formatarNumeroComPontos(
    +resultadoFinal * +algicida.value.replace(",", ".")
  );

  //Sulfato de aluminio genco
  let resultadoAluminio = document.getElementById("resultado-aluminio");

  resultadoAluminio.innerHTML = formatarNumeroComPontos(+resultadoFinal * 20);

  //Sulfato de aluminio genco
  let resultadoAluminioOutras = document.getElementById(
    "resultado-aluminio-outras"
  );

  resultadoAluminioOutras.innerHTML = formatarNumeroComPontos(
    +resultadoFinal * 40
  );

  //Dureza

  let dureza = document.getElementById("dureza");
  let resultadoDureza = document.getElementById("resultado-dureza");

  resultadoDureza.innerHTML = formatarNumeroComPontos(
    +dureza.value.replace(",", ".") * 15 * resultadoFinal
  );

  //Acido Cianurico

  let acido = document.getElementById("acido");
  let resultadoAcido = document.getElementById("resultado-cianurico");

  resultadoAcido.innerHTML = formatarNumeroComPontos(
    +resultadoFinal * acido.value.replace(",", ".") * 10
  );

  //Genquest

  let genquest = document.getElementById("genquest");
  let resultadoGenquest = document.getElementById("resultado-genquest");

  resultadoGenquest.innerHTML = formatarNumeroComPontos(
    +resultadoFinal * genquest.value.replace(",", ".")
  );
}
setInterval(calculoPiscina, 1000);

// let produtos = document.querySelectorAll(".prod");

// produtos.forEach((e) => {
//   console.log(e);
// });
