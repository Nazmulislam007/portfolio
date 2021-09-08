const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");

hamburger.addEventListener("click", () => {
  ul.classList.toggle("active");

  li.forEach((element) => {
    element.addEventListener("click", (e) => {
      ul.classList.remove("active");
    });
  });
});
