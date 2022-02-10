let num = getElementById('number') //input#number
let list = getElementById('list') //select#list
let resultado = getElementById('resultado') //div#resultado

let valores = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumber(num.value) && !inList(num.value, valores)) {
        window.alert('ok')
    } else {
        alert('valor inválido ou já adicionado na lista.')
    }
}

//number.value > 100 && number.value.length == 0)alert('Não foi possível efetuar essa operação!')
//let listaNumeros = [ ] num.value.push()