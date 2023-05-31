const entradaA1 = document.querySelector("#entradaA1");
const entradaA2 = document.querySelector("#entradaA2");
const entradaA3 = document.querySelector("#entradaA3");
const entradaA4 = document.querySelector("#entradaA4");
const resultado = document.querySelector("#mediaFinal");
const media = document.querySelector("#media");
const aviso = document.querySelector("#aviso");
const escondido = document.querySelector("#resultado");
const form = document.querySelector(".form");
let mediaFinal = "";

const enviar = document.querySelector("#calcular");

enviar.addEventListener("click", function (e) {
  e.preventDefault();
  
  if (
    entradaA1.value == "" ||
    entradaA2.value == "" ||
    entradaA3.value == "" ||
    entradaA4.value == ""
  ) {
    alert("Preencha todos os campos");
  } else {
     mediaFinal =
    (
      (Number(entradaA1.value) * 0.15) +
      (Number(entradaA2.value) * 0.15) +
      (Number(entradaA3.value) * 0.4) +
      (Number(entradaA4.value) * 0.3)
    ).toFixed(2)
    escondido.classList.remove("oculto");
    removeContent()
    
  }

  if (mediaFinal < 7){
    media.style.color = "#FF0000";
    resultado.innerText = `${mediaFinal}`;
    resultado.style.color = "#FF0000";
    aviso.innerHTML = `Você está <strong>REPROVADO</strong>`
    aviso.style.color = "#FF0000";

  } else{
    media.style.color = "#0c6140";
    resultado.innerText = `${mediaFinal}`;
    resultado.style.color = "#0c6140";
    aviso.innerHTML = `Você está <strong>APROVADO</strong>`;
    aviso.style.color = "#0c6140";
  }
});

const removeContent = () => {
  enviar.classList.add("oculto")
  form.classList.add("oculto");
}
