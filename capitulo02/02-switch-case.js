const { Console } = require('console')
const readLine = require('readline')
const terminal = readLine.createInterface({
    //definir o modo de entrada via terminal
    input: process.stdin,
    //todo testo de saida sairá no terminal
    output: process.stdout
})
//texto do menu
const textoMenu = `
Olá, seja bem vindo ao sistema de media
Digite 1 para acessar o menu inicial
Digite 2 para acessar o menu Herois
Digite 3 para acessar o menu Guerreiras
Digite 0 para sair
`
console.log('textoMenu', textoMenu)
/*const opcao = 2
switch (opcao) {
    case 1:
    console.log('pressionou 1')
    break;
    case 2:
    console.log('pressionou 2')
    break;
    default:
    console.log('opcao invalida')
    break;
}
terminal.question('QUal é seu nome?',(msg) =>{
   console.log('voce escreveu',msg)
   terminal.close()
})
*/
switch (true) {

case 1 > 2:

console.log('1 > 2')

break;

case 1 === 1:

console.log('1 === 1')

break;

default:

console.log('nenhum deles!');

break;

}


switch (true) {

    case 1 < 2:
    
    console.log('1 < 2')
    
    
    case 1 === 1:
    
    console.log('1 === 2')
    
    
    default:
    
    console.log('pode ter mais de uma opção')
    
    }


    switch(0) {

        case 0:
        
        console.log('Hello World');
        
        case 1:
        
        console.log('Segunda Opção');
        
        }
