// Load first review when app starts

import reviews from "./reviews.js";

const firstReview = reviews[0];

document.querySelector(".user__name").textContent = firstReview.name;
document.querySelector(".user__pfp").setAttribute("src", firstReview.pfp);
document.querySelector(".user__title").textContent = firstReview.title;
document.querySelector(".user__review").textContent = firstReview.review;
