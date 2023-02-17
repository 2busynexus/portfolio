//document.querySelector("a").style.display = "none"

const hi = document.querySelector(".intro div:nth-child(1)")
const iAm = document.querySelector(".intro div:nth-child(2)")
const nav = document.querySelector("nav")
const content = document.querySelector(".container")
const intro = document.querySelector(".intro")

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




document.addEventListener("scroll", () => {
    // Check if the nav element is now sticky
    console.log(window.scrollY)

    if (window.scrollY >= 600) {
        nav.style.position = "fixed"
        nav.style.left = "300px"
      console.log("nav is now stuck");
    } else {
        nav.style.position = "sticky"
        nav.style.left = "0"
      console.log("nav is not stuck");
    }
  });
