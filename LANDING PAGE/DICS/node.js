const mainMenu = document.querySelector(".main-menu")
const menu = document.querySelector(".menu")

mainMenu.addEventListener("click", () => {
    menu.classList.toggle("active")
})
mainMenu.addEventListener("click", () => {
    mainMenu.classList.toggle("on")
})
