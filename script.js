//document.querySelector("a").style.display = "none"

const hi = document.querySelector(".intro div:nth-child(1)")
const iAm = document.querySelector(".intro div:nth-child(2)")
const nav = document.querySelector("nav")
const content = document.querySelector(".container")

hi.style.animation = "fade-in-intro 3s linear 2s"

setTimeout( () => {
    hi.style.display = "none"
    iAm.style.display = "flex"
    nav.style.display = "flex"
    //makeSticky(nav)
    
}, 1000) //5

setTimeout( () => {
    content.style.display = "flex"
}, 1000) //8




