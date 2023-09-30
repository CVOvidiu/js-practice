import data from "./data.js";
import { capitalize } from "./helpers.js";

const menu = document.querySelector(".menu");

//* Dynamically load data from 'data.js' when page loads

data.forEach((mi) => {
  const itemTitle = capitalize(mi.title);

  const menuItem = `<div class="mi" id="${mi.id}">
        <img
          src="${mi.img}"
          alt="menu item ${mi.id}"
        />
        <div class="mi--content">
          <div class="header">
            <span class="title">${itemTitle}</span>
            <span class="price">$${mi.price}</span>
          </div>
          <hr />
          <div class="desc">
            ${mi.desc}
          </div>
        </div>
      </div>`;

  menu.insertAdjacentHTML("beforeend", menuItem);
});
