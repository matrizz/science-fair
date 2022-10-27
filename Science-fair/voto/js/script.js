const fs = require('fs');
const users = require('./data');


////////////////////////////////////////////////////////////
const btn = document.querySelector('#verify')

const $name = document.getElementById('name')
const $date = document.getElementById('date')
const $cpf =  document.getElementById('cpf')

function verifica() {


    const dataArray = $date.value.split('-')
    

    let ano = dataArray[0]
    let mes = dataArray[1]
    let dia = dataArray[2]

const date = new Date()
let anoAtual = date.getFullYear()
let mesAtual = date.getMonth() +1;
let diaAtual = date.getDate()
let resultAno
let resultMes
let resultDia

    function calcula() {

        //teste auxiliar
        resultAno = anoAtual - ano
        resultMes = mesAtual - mes
        resultDia = diaAtual - dia

        //teste necessario
        if (resultAno < 16) {
        alert("Você ainda não pode votar!")
        }
        else if (resultAno == 16) {
            if (mes == mesAtual) {
                if (dia == diaAtual) {
                    alert("você já pode votar!")
                }
                else if (dia < diaAtual) {
                    alert("Você já pode votar!")
                }
                else if (dia > diaAtual) {
                    alert("Você ainda não pode votar!")
                }
            }
            else if (mes < mesAtual) {
                alert("Você já pode votar!")
            }
            else if (mes > mesAtual) {
                alert("Você ainda não pode votar!")
            }
        }
        else if (resultAno == 17) {
            alert("Você já pode votar!")
        }
        else if (resultAno == 18) {
            if (mes < mesAtual) {
                alert("Votar já é obrigatório!")
            }
            else if (mes > mesAtual) {
                alert("Você já pode votar!")
            }
            else if (mes == mesAtual) {
                if (dia == diaAtual) {
                    alert("Votar já é obrigatório!")
                }
                else if (dia < diaAtual) {
                    alert("Votar já é obrigatório!")
                }
                else if (dia > diaAtual) {
                    alert("Você já pode votar!")
                }
            }
        }
        else if (resultAno > 69) {
            if (mes < mesAtual) {
                alert("Votar já não é obrigatório!")
            }
            else if (mes > mesAtual) {
                alert("Votar já é obrigatório!")
            }
            else if (mes == mesAtual) {
                if (dia == diaAtual) {
                    alert("Votar já não é obrigatório!")
                }
                else if (dia < diaAtual) {
                    alert("Votar já não é obrigatório!")
                }
                else if (dia > diaAtual) {
                    alert("Votar já é obrigatório!")
                }
            }
        }



    /*    console.log(resultAno) 
        console.log(mesAtual - mes)
        console.log(diaAtual - dia)*/
    }
calcula()
test()
}




let user = {
    "nome": "luiz",
    "data_nasc": 27,
    "cpf": 500
}


function test() {
    users.push(user)
    fs.writeFile("data.json", JSON.stringify(users))
}

/* 20 10 2022
   27 05 2006
   -7 5    16

   20 10 2022
   27 04 1976
   -7 6  0046

   */