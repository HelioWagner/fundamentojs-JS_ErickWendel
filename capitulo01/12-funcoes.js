function nomeDaFuncao(parametro1){

}

function queDiaEhoje(){
      const data = new Date()
      console.log(`Hoje é dia: ${data.getDate()}`)
}

queDiaEhoje()


function soma(valor1,valor2){
       console.log(`A soma de ${valor1}+${valor2} é`,valor1+valor2)
}

soma(10,30)
soma(1,1)

//funcoes podem retornar valores
function soma(valor1,valor2){
      return valor1 + valor2
}

const idade = 20
const tamanho = 80
const resultado = soma(idade,tamanho)
console.log('resultado',resultado)

function multiplicar(valor1,valor2){
       const resultado = valor1 * valor2
       return resultado
}

console.log(`O resultado da multiplicação é: `,multiplicar(10,30))

const funcionario1 = {
      nome: 'Helio',
      desconto: 0.2,
      salarioBruto: 2000,
      salarioLiquido:0
}

const funcionario2 = {
      nome: 'Nataly',
      desconto: 0.1,
      salarioBruto: 2000,
      salarioLiquido:0
}


function calcularDesconto(salarioBruto,desconto){
       return salarioBruto -(salarioBruto *desconto)
}

funcionario1.salarioLiquido = calcularDesconto(funcionario1.salarioBruto,funcionario1.desconto)
funcionario2.salarioLiquido = calcularDesconto(funcionario2.salarioBruto,funcionario2.desconto)

console.log(
      `Salario funcionario1: ${funcionario1.salarioLiquido}
      Salario funcionario1: ${funcionario2.salarioLiquido}`
)