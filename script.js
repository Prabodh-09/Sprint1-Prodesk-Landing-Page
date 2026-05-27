const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const themeButtons = document.querySelectorAll(".theme-toggle");

themeButtons.forEach((button) => {

  button.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    themeButtons.forEach((btn) => {

      if(document.body.classList.contains("dark-mode")){
        btn.textContent = "Light Mode";
      } else {
        btn.textContent = "Dark Mode";
      }

    });

  });

});