const buttonToTop = document.querySelector(".to-top");
const buttonMenu = document.querySelector(".hamb-menu");
const nav = document.querySelector("nav");

buttonToTop.onclick = function () {
  document.documentElement.scrollTo({
    top: 0,
  });
}

buttonMenu.onclick = function () {
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}

document.querySelector("main").onclick = function () {
  if (nav.style.display === "block") {
    nav.style.display = "none";
  }
}