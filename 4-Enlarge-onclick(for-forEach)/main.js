const btn=document.querySelectorAll("button")
const litems=document.querySelectorAll("li")
let size=9

const changeSize=function(){
    size++
    for (i=0; i<litems.length;i++){
        litems[i].style.display="block"
        litems[i].style.fontSize=size+"px"}
}

document.addEventListener("click", changeSize)