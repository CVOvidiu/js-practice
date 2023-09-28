const content = document.querySelector(".content");

// Last button
let last = undefined;

// Response attached to button
const res = (btn) => {
  return btn.closest(".q").querySelector(".q-res");
};

content.addEventListener("click", (e) => {
  if (e.target.classList.contains("q-btn")) {
    const plusIcon = "assets/square-plus-regular.svg";
    const minusIcon = "assets/square-minus-solid.svg";

    // Toggle current response
    res(e.target).classList.toggle("hidden");

    // Change button appearance
    if (e.target.getAttribute("src") === plusIcon)
      e.target.setAttribute("src", minusIcon);
    else e.target.setAttribute("src", plusIcon);

    // Untoggle last response
    if (
      last !== undefined &&
      last !== e.target &&
      !res(last).classList.contains("hidden")
    ) {
      /*
        1) last button push occured
        2) last button was not the current button
        3) last button response was toggled
      */

      // Hide response
      res(last).classList.add("hidden");

      // Change button appearance
      last.setAttribute("src", "assets/square-plus-regular.svg");
    }
    last = e.target;
  }
});
