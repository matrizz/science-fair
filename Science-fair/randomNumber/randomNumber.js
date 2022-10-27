const display = document.getElementById('display')

let show
let showed = `numbers <br/>`


function random() {
    for (let i = 6; i > 0; i--) {
        show =  Math.floor(Math.random() * 60)
        showed += `${show} <br />`
        display.innerHTML = showed
    }
}


function sort() {
    random()
///show = display.innerText
}

sort()