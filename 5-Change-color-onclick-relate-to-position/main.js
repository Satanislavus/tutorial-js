let header=document.createElement("h1")
document.body.appendChild(header)


const displayPostion = document.addEventListener("click", function(event){
    header.textContent=event.clientX + ", " + event.clientY
    let x = event.clientX%2
    let y = event.clientY%2
    
    // (x==0 && y==0) ? document.style.backgroundColor = "red" :
    // (x>0 && y==0 || x==0 && y>0) ? document.style.backgroundColor="green" :
    // document.style.backgroundColor="blue"

    if (x>0 && y>0) {document.body.style.backgroundColor="red"}

    else if (x==0 && y>0 || x>0 && y==0) {document.body.style.backgroundColor="green"}
    
    else if (x==0 && y==0) {document.body.style.backgroundColor="blue"}
 

})


// let header=document.createElement("h1")
// document.body.appendChild(header)


// const displayPostion = document.addEventListener("click", function(event){
//     header.textContent=event.clientX + ", " + event.clientY
//     let x = event.clientX%2
//     let y = event.clientY%2
//     let color = (x==0 && y==0) ?  "red" :
//     (x>0 && y==0 || x==0 && y>0) ? "green" :
//     "blue"

//     // if (x>0 && y>0) {"red"}

//     // else if (x==0 && y>0 || x>0 && y==0) {document.body.style.backgroundColor="green"}
    
//     // else if (x==0 && y==0) {document.body.style.backgroundColor="blue"}
 
//     document.body.style.backgroundColor=color
// })