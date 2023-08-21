// Credits: John Smilga (https://www.youtube.com/watch?v=3PHXvlpOkf4)

// Helper functions

function getRandomNumber(length) {
  return Math.trunc(Math.random() * length);
}

// Simple mode

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const randomIndex = getRandomNumber(colors.length);
  document.body.style.backgroundColor = colors[randomIndex];
  color.textContent = colors[randomIndex];
});
