document.body.style.height="10000px"

const div=document.createElement("div")

    let grow= true
    let size=100
    div.style.width="100%"
    div.style.position="fixed"
    div.style.left=0
    div.style.top=0
    div.style.backgroundColor="green"
    div.style.height=size + "px"
    document.body.style.backgroundColor="grey"

document.body.appendChild(div)


const changeHeight= function(){
   
    if (size >= window.innerHeight/2) {
        grow=false
    } else if (size < 0) {
        grow=true}

    if (grow) {
        size +=40      
        div.style.backgroundColor="green" } else {
        size -=40
        div.style.backgroundColor = "red"}
    
    div.style.height=size + "px"
}

window.addEventListener('scroll', changeHeight)