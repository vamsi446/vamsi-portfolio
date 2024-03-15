





document.addEventListener('DOMContentLoaded',function(event){

    
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

    /**
 * Home type effect
 * 
 */
    const typed = select('.typed')
    if (typed) {
      let typed_strings = typed.getAttribute('data-typed-items')
      typed_strings = typed_strings.split(',')
      new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }

    
  
});

/**
 * Easy selector helper function
 */
const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}
