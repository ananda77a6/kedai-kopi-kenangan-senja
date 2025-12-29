const menuHam = document.querySelector(".menu-ham")
const menu = document.querySelector(".menu")

menuHam.addEventListener("click", () => {
  menu.classList.toggle("active")
})

menuHam.addEventListener("click", () => {
  menuHam.classList.toggle("on")
})