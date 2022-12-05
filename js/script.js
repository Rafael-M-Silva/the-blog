let menuHamb = document.querySelector("#menu-hamburguer")
let dropMenu = document.querySelector("ul")

menuHamb.addEventListener("click", ()=>{
    dropMenu.classList.toggle("menu-drop")
})