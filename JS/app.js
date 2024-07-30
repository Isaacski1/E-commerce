// Hamburger Section Start
let hamburger = document.querySelector(".hamburger");
let navmenu = document.querySelector(".nav__menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navmenu.classList.toggle("active");
});
// Hamburger Section End

// Sticky Navigation Start

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 200);
});
// Sticky Navigation ENd

// Automatic Show Popup Dialog Start
const popup = document.querySelector(".popup-container");
const close = document.querySelector(".close");

window.onload = function () {
  setTimeout(function () {
    popup.style.display = "block";
  }, 5000);
};

close.addEventListener("click", () => {
  popup.style.display = "none";
});

// Automatic Show Popup Dialog End

// Pre Loading Page Start
setTimeout(function () {
  $("#loading-container").fadeToggle();
}, 2500);

// Pre Loading Page End

// Cosmetic Pick Up Cart Start
let count = 1;
const value = document.querySelector(".value");
const signs = document.querySelectorAll(".sign");

signs.forEach(function (signs) {
  signs.addEventListener("click", function (e) {
    let tap = e.currentTarget.classList;
    if (tap.contains("minus")) {
      count--;
    } else if (tap.contains("plus")) {
      count++;
    }
    value.textContent = count;
  });
});
// Cosmetic Pick Up Cart End
