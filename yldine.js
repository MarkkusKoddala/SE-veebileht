/* switcheri idee ja css, html ja javasripti koodi sain youtube videost https://www.youtube.com/watch?v=N3-K5G2qFDM, kus on ka link allikani´https://github.com/lashaNoz/Dark-Mode */

const container = document.querySelector(".navbar");
const container2 = document.querySelector(".toggle");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
  container.classList.toggle("dark")
  container2.classList.toggle("dark")
    ? (toggle.firstElementChild.className = "fa-solid fa-brush")
    : (toggle.firstElementChild.className = "fa-solid fa-brush");
});