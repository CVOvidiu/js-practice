// Helper functions

const getRandomNumber = (length) => {
  return Math.trunc(Math.random() * length);
};

// Hex mode

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let generatedHex = "#";

  for (i = 1; i <= 6; i++) {
    generatedHex += hex[getRandomNumber(hex.length)];
  }

  document.body.style.backgroundColor = generatedHex;
  color.textContent = generatedHex;
});
