document.addEventListener("DOMContentLoaded", function (event) {
  const nav = document.querySelector(".nav"),
    navOpenBtn = document.querySelector(".navOpenBtn"),
    navCloseBtn = document.querySelector(".navCloseBtn");

  navOpenBtn.addEventListener("click", () => {
    nav.classList.add("openNav");
    nav.classList.remove("openSearch");
  });
  navCloseBtn.addEventListener("click", () => {
    nav.classList.remove("openNav");
  });
  const typed = select(".typed");
  if (typed) {
    let typed_strings = typed.getAttribute("data-typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typed", {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }
});

const select = (el, all = false) => {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};

var container = document.getElementById("hero-lottie-container");

fetch("./assests/Animation - 1710783778640.json")
  .then((response) => response.json())
  .then((animationData) => {
    var anim = lottie.loadAnimation({
      container: container,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  })
  .catch((error) => {
    console.error("Error loading animationData.json:", error);
  });
