function onLoad() {
   // console.log('Carregou a tela!',Tela,JogoDaMemoria)
//    const heroi = {
//        //sempre relativo ao index.html
//        img: './arquivos/batman.png',
//        nome: 'batman'
//    }
//  //  const codigoHtml = Tela.obterCodigoHtml(heroi)
//   // Tela.alterarConteudoHTML(codigoHtml.concat(codigoHtml))

    const dependencias = {
        tela: Tela, //a classe Tela é Global
        util: Util
    }

    const jogoDaMemoria = new JogoDaMemoria(dependencias)
    jogoDaMemoria.inicializar()

}

window.onload = onLoad