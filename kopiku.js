const menu = document.querySelector('#menu')
const lisNav = document.querySelector('.list-nav')

menu.addEventListener("click", () => {
    lisNav.classList.toggle("active")
})

document.addEventListener("click", function (e) {
    if(!menu.contains(e.target) && !lisNav.contains(e.target)) {
        lisNav.classList.remove("active")
    }
})
