let count = 0;

const value = document.querySelector("#value");

// I've done this project using Event Delegation
document.querySelector(".button-container").addEventListener("click", (e) => {
  if (e.target.classList.contains("button-container")) return;

  if (e.target.classList.contains("decrease")) count--;
  if (e.target.classList.contains("increase")) count++;
  if (e.target.classList.contains("reset")) count = 0;

  value.textContent = count.toString();

  if (count < 0) value.style.color = "red";
  if (count === 0) value.style.color = "black";
  if (count > 0) value.style.color = "green";
});
