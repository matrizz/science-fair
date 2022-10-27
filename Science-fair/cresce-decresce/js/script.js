//------------------------animation-----------------------------\\
function getValue() {
    let colorValue = document.getElementById("pickColor")
    let newColor = colorValue.value
    console.log(newColor)
    changeColor(newColor)
}

function changeColor(Color) {
    document.getElementById("b1").style.backgroundColor = Color;
}

function toDark() {
$('body').toggleClass('global-body')
}

function paragraphArea() {
    let area0 = document.getElementById('n1')
    let area1 = document.getElementById('n2')
    let areaTxt0 = area0.value;
    let areaTxt1 = area1.value;

    if (areaTxt0 == "" || areaTxt1 == "") {
        console.log("error: 004 -> null input area!")
    }
    else {
    $('.paragraph').addClass('paragraphAfter')
    }
}
//-------------------operational functions--------------------------\\
    
    
function decresce() {
    let valor1 = document.getElementById('n1').value;
    let valor2 = document.getElementById('n2').value;
    let resposta = "";
    
    if (valor1 > valor2) {
        for (let i = valor1; i >= valor2; i--) {
            resposta+= "<br>" +i;
            $("#p0").html(resposta)
        }
    }
    else {
        for (let i = valor2; i >= valor1; i--) {
            resposta+= "<br>" +i;
            $("#p0").html(resposta)
        }
    }                    
}

function cresce() {
    let valor1 = document.getElementById('n1').value;
    let valor2 = document.getElementById('n2').value;
    let resposta = "";

    if (valor1 < valor2) {
        for (let i = valor1; i <= valor2; i++) {
            resposta+= "<br>" +i;
            $("#p0").html(resposta)
        }
    }
    else {
        for (let i = valor2; i <= valor1; i++) {
            resposta+= "<br>" +i;
            $("#p0").html(resposta)
        }
    }
}
