const sidebarBtn = document.querySelector(".sidebar-btn-overlay");
const closeBtn = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar--hidden");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.add("sidebar--hidden");
});
