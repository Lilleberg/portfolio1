const buttonToTop = document.querySelector(".to-top");

buttonToTop.onclick = function () {
  console.log("click");
  document.documentElement.scrollTo({
    top: 0,
  });
}