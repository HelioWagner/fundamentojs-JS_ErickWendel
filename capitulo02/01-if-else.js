
//const item = "0"
//console.log(!!item)
const item = (0 ? "2a" : "3b")
console.log(item)

//obter valores do terminal
//const args = process.args
//const saldo = args[args.length - 1]
//console.log('args', args)
//console.log('saldo', saldo)

const resultado = 1 ? (null || ((1 != '1') ? "Hello world!": "Hackerzao")) : "não zero";
console.log(resultado)

if (!0)
{
    console.log('entro') 
}
console.log((0!==0)) 

nome = "teste"
if(!!1 === 0) 
   console.log('entro 3') 
else
  console.log('entro 4') 

  valor = "ABC"
  if(valor < 2 || valor > 4) {

    console.log('entro 3') 
} else if(valor < 5) {

    console.log('entro 2') 

}

else {

    console.log('entro 1') 

}


const item2 = "abc"; 
console.log(isNaN(item2) ? "Hey jude" : "Hey Julia");


const item3 = "0"; 
console.log(!!item3);

  