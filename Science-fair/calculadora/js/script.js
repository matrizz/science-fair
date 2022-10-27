
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

