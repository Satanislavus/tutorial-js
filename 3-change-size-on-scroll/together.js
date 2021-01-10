document.body.style.height="10000px";

let size= 20
let grow=true

const square = document.createElement('div')
    square.style.width="100%"
    square.style.position="fixed"
    square.style.top="0%"
    square.style.left="0%"
    square.style.backgroundColor="green"
    square.style.height=size + "px"
document.body.appendChild(square)

const changeHeight= function(){
    if (size >= window.innerHeight/2) {
        grow=false
    } 

    else if (size < 0)
        grow=true
    

    if (grow) {
        size ++
        square.style.backgroundColor="green"
    }

    else {
        size --
        square.style.backgroundColor="red"
    }
    square.style.height=size + "px"
}


window.addEventListener("scroll", changeHeight)



