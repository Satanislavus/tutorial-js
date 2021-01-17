let red=100
let green=100
let blue=100

document.body.style.backgroundColor=`rgb(${red}, ${green}, ${blue})`

const changeColor =  (e) => {
    if(e.keyCode ===38 && red<256) {
    red+=2
    green+=2
    blue+=2
    document.body.style.backgroundColor=`rgb(${red}, ${green}, ${blue})`
    } else if (e.keyCode===40 && red>0) {
        red-=2
        green-=2
        blue-=2
        document.body.style.backgroundColor=`rgb(${red}, ${green}, ${blue})`
    }
}

window.addEventListener('keydown', changeColor)