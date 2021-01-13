let size = 10;
let orderElement = 1;

const init = () => {
    const btn=document.createElement("button")
    btn.textContent="dodaj element"
    document.body.appendChild(btn)
    btn.onclick=createLiElements}
        


const createLiElements = () => {
    
    for (i=0; i<10; i++) {
        const bulletPoint=document.createElement("li")
        bulletPoint.textContent="Nowy element " + orderElement++
        bulletPoint.style.fontSize=size+"px"
        document.body.appendChild(bulletPoint)
        size++}
        
}

init()


