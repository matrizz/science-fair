
function insert(id) {
   let number = document.getElementById('displayCalc').innerHTML
   document.getElementById('displayCalc').innerHTML = number + id;
}

function delet() {
    let number = document.getElementById('displayCalc').innerHTML; 
    document.getElementById('displayCalc').innerHTML = number.substring(0, number.length -1);
}

function calculate() {
    let number = document.getElementById('displayCalc').innerHTML;
    
    if (number) {
        document.getElementById('displayCalc').innerHTML = eval(number);
    }
}

function reset() {
    document.getElementById('displayCalc').innerHTML = "";
}

let refresh = setTimeout(function() {
    window.location.href = "logonPage.html"
}, 5000);

for (let i = 0; i = 0; i + 0) {
    refresh
}