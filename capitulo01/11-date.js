//meses começam do zero!
const dataAniversario = new Date(2020,0,20)
console.log(dataAniversario)

const primeiraDataDoJS = new Date(0)
//console.log(primeiraDataDoJS.getTime())

const hoje = new Date()
//console.log(hoje.toString())
console.log(hoje.toLocaleDateString())
console.log(hoje.toISOString())

const dia = hoje.getDate();
hoje.setDate(dia +5) //+ 5 dias depois de hoje
hoje.setHours(10,30,0)

console.log(
     `Dia: ${hoje.getDate()}
      Mes: ${hoje.getMonth()}
      Ano: ${hoje.getFullYear()}
      Hora: ${hoje.getHours()}
      Minuto: ${hoje.getMinutes()}
      Seconds: ${hoje.getSeconds()}`
)