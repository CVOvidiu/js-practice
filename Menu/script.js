import { filter } from "./processes.js";

const filters = document.querySelector(".filters");

filter();

filters.addEventListener("click", (e) => {
  if (e.target.id == "all") filter();
  else filter(e.target.id);
});
