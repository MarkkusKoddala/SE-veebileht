/* switcheri idee ja css, html ja javasripti koodi sain youtube videost https://www.youtube.com/watch?v=N3-K5G2qFDM, kus on ka link allikani´https://github.com/lashaNoz/Dark-Mode */

const container = document.querySelector(".navbar");/* loob konstanti, mis saab väärtuseks elemendi, millega matchivad ".navbar" selectorid*/
const container2 = document.querySelector(".toggle");/* kordub sama*/
const toggle = document.querySelector(".toggle");/* kordub sama*/

toggle.addEventListener("click", () => { /*spetsiifilise eventi korral funktsioon käivitub ja vastavad väärtused .css failis muudetakse (värvid) */
  container.classList.toggle("dark")
  container2.classList.toggle("dark")
    ? (toggle.firstElementChild.className = "fa-solid fa-brush")
    : (toggle.firstElementChild.className = "fa-solid fa-brush");
});