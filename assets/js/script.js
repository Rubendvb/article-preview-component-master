let btn = document.querySelector(".containerInformaçoes__btn");
let icones = document.querySelector(".iconesContainer");

btn.addEventListener("click", () => {
  icones.classList.toggle("active");
  btn.classList.toggle("bg");
});
