console.log(123);
const btnClose = document.querySelector(".overlay-close");
btnClose.addEventListener("click", (e) => {
  const overlay = document.querySelector(".overlay.overlay-scale");
  overlay.classList.remove("open");
});

const btnNavbar = document.querySelector("#trigger-overlay");
btnNavbar.addEventListener("click", (e) => {
  const overlay = document.querySelector(".overlay.overlay-scale");
  overlay.classList.add("open");
  console.log(overlay);
});
