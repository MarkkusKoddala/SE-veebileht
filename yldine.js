const container = document.querySelector(".navbar");
const container2 = document.querySelector(".toggle");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
  container.classList.toggle("dark")
  container2.classList.toggle("dark")
    ? (toggle.firstElementChild.className = "fa-solid fa-brush")
    : (toggle.firstElementChild.className = "fa-solid fa-brush");
});