document.getElementById("acceptCookies").addEventListener("click", function() {
  document.getElementById("cookieid").classList.add("hidden");
});

// ---- burger ---- //

const burger = document.getElementById("burger");
const panel = document.querySelector(".right_panel");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  panel.classList.toggle("active");


  if (panel.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});
