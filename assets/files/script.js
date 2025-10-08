document.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > window.innerHeight * 0.8) {
    navbar.classList.remove("transparent");
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    navbar.classList.add("transparent");
  }
});
