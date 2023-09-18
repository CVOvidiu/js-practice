import reviews from "./modules/reviews.js";
import "./modules/startup.js";

const user = {
  name: document.querySelector(".user__name"),
  pfp: document.querySelector(".user__pfp"),
  title: document.querySelector(".user__title"),
  review: document.querySelector(".user__review"),
};

// For negative array indexes
const checkIndex = (index) => {
  if (index > reviews.length - 1) return 0;
  if (index < 0) return reviews.length - 1;
  return index;
};

// Initialize review
const initReview = (index) => {
  user.name.textContent = reviews[index].name;
  user.pfp.setAttribute("src", reviews[index].pfp);
  user.title.textContent = reviews[index].title;
  user.review.textContent = reviews[index].review;
};

let currentUserIndex = 0;

// Generate random number for random review
const randNum = () => {
  let randomNum = Math.trunc(Math.random() * reviews.length);
  // Don't generate the same number twice
  while (randomNum === currentUserIndex)
    randomNum = Math.trunc(Math.random() * reviews.length);

  return randomNum;
};

const cardActions = document.querySelector(".card__actions");

cardActions.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn--left")) {
    currentUserIndex = checkIndex(--currentUserIndex);
    initReview(currentUserIndex);
  }

  if (e.target.classList.contains("btn--right")) {
    currentUserIndex = checkIndex(++currentUserIndex);
    initReview(currentUserIndex);
  }

  if (e.target.classList.contains("btn--random")) {
    currentUserIndex = randNum();
    initReview(currentUserIndex);
  }
});
