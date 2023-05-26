// recuperation element html
const burger = document.querySelector("#burger")
const navBar = document.querySelector(".links")

burger.addEventListener("click", function () {
  navBar.classList.toggle("show-links")
})
