const container = document.querySelector(".navbar");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
  container.classList.toggle("dark")
    ? (toggle.firstElementChild.className = "far fa-moon")
    : (toggle.firstElementChild.className = "far fa-sun");
});