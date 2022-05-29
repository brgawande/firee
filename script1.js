let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

document.querySelector("#bookk").onclick = () => {
  document.querySelector(".bookibg-form-container").classList.toggle("active");
};

document.querySelector("#close-bokking-form").onclick = () => {
  document.querySelector(".bookibg-form-container").classList.remove("active");
};
document.querySelector("#bookk8").onclick = () => {
  document.querySelector(".bookibg-form-container").classList.toggle("active");
};

document.querySelector("#close-bokking-form").onclick = () => {
  document.querySelector(".bookibg-form-container").classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 90) {
      $(".header1").addClass("active");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $(".header1").removeClass("active");
    }
  });
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbw_2Y1ZtRHEmKAxGdCTr6kpAiB4U5sLl_PAgo9bBDic9CQzSgH-wcUS5PdsdXgxbE5YRQ/exec";
const form = document.forms["google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thanks for Contacting us..! We Will Contact You Soon...")
    )
    .catch((error) => console.error("Error!", error.message));
});

