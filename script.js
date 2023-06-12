const storing = document.querySelector(".describe");
const main = document.querySelector(".imp__main");
main.addEventListener("click", function () {
  storing.classList.toggle("active");
  main.classList.toggle("highLight");
  main.classList.toggle("mainHover");
});
