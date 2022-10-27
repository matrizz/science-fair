const peso = document.getElementById('inpt_peso')
const altura = document.getElementById('inpt_altura')
const button = document.getElementById('btn')
const display = document.getElementById('result')
const resultado = document.getElementById('resultado')
const comparacao = document.getElementById('comparacao')
const conclusao = document.getElementById('conclusao')

button.onclick = function calculate() {
    let h = altura.value
    let w = peso.value
    let r = h * h
    let resposta = (w/r)
    const imc = resposta.toFixed(1)
    console.log(imc)
    show(imc)
}

function show(imc) {
    let resposta = (`Seu IMC é ${imc}`)
    //resposta
    const abaixo18 = (`Abaixo de 18.8`)
    const abaixo24 = (`Abaixo de 24.9`)
    const abaixo = (`Abaixo do peso`)
    const normal = (`Peso normal`)

    // comparação
    const entre25_29 = (`IMC entre 25.0 e 29.9`)
    const entre30_34 = (`IMC entre 30.0 e 34.9`)
    const entre35_39 = (`IMC entre 35.0 e 39.9`)
    const peso40 = (`IMC de 40.0`)
    const acima40 = (`IMC acima de 40.0`)
    
    //conclusão
    const sobrepeso = (`Sobrepeso`)
    const obesidadeI =  (`Obesidade de grau I`)
    const obesidadeII =  (`Obesidade de grau II`)
    const obesidadeIII =  (`Obesidade de grau III`)

    if (imc <= 18.5) {
        resultado.innerText = resposta
        comparacao.innerText = abaixo18
        conclusao.innerText = abaixo
    }
    else if (imc > 18.5 && imc < 24.9) {
        resultado.innerText = resposta
        comparacao.innerText = abaixo24
        conclusao.innerText = normal
    }
    else if (imc >= 25.0 && imc <= 29.9) {
        resultado.innerText = resposta
        comparacao.innerText = entre25_29
        conclusao.innerText = sobrepeso
    }
    else if (imc >= 30.0 && imc <= 34.9) {
        resultado.innerText = resposta
        comparacao.innerText = entre30_34
        conclusao.innerText = obesidadeI
    }
    else if (imc >= 35.0 && imc <= 39.9) {
        resultado.innerText = resposta
        comparacao.innerText = entre35_39
        conclusao.innerText = obesidadeII
    }
    else if (imc == 40.0) {
        resultado.innerText = resposta
        comparacao.innerText = peso40
        conclusao.innerText = obesidadeIII
    }
    else if (imc > 40.0) {
        resultado.innerText = resposta
        comparacao.innerText = acima40
        conclusao.innerText = obesidadeIII
    }

    display.style.display = 'block'

}

