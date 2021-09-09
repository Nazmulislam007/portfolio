const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");
const arrow = document.querySelector(".upArrow");
const nav = document.querySelector(".upArrow");

hamburger.addEventListener("click", () => {
  ul.classList.toggle("active");

  li.forEach((element) => {
    element.addEventListener("click", (e) => {
      ul.classList.remove("active");
    });
  });
});

const onScroll = () => {
  if (window.pageYOffset > 100) {
    nav.classList.add("change");
    arrow.classList.add("active");
  } else {
    nav.classList.remove("change");
    arrow.classList.remove("active");
  }
  if (arrow.classList.contains("active")) {
    setTimeout(() => {
      arrow.classList.remove("active");
    }, 6000);
  }
};

window.onscroll = () => {
  onScroll();
};
