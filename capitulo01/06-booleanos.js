const podeDirigir = true
if (podeDirigir) {
    console.log('Ela pode Dirigir')
}

const saldoEmConta = 1
if (!!saldoEmConta) {
    console.log('não tem saldo')
}

const boolComString = "ae hackerzão!!"
//força o valor a true ou false
//de acordo com a tabela
console.log('boolComString',!!boolComString)

//Negação
console.log('boolComString',!boolComString)

//negacao + forçar a bool
console.log('negação + forçar bool',!(!!boolComString))