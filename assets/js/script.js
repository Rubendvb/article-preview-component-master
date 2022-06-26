let btn = document.querySelector(".containerInformacoes__btn");
let icones = document.querySelector(".iconesContainer");
let teste = document.getElementById("teste");

btn.addEventListener("click", () => {
  icones.classList.toggle("active");
  btn.classList.toggle("bg");
});
