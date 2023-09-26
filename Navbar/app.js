const menuBtn = document.querySelector(".menu");
const linkBtns = document.querySelector(".link-btns");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("menu--active");
  linkBtns.classList.toggle("link-btns--hidden");
});
