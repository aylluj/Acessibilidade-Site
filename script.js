document.addEventListener('DOMContentLoaded', function(){
    const aumentaFonteBotao = document.getElementById("aumentar-fonte");
    const diminuiFonteBotao = document.getElementById("diminuir-fonte");

    let tamanhoAtualFonte = 1;
    aumentarFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

    diminuirFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

.menu-acessibilidade{
    position: fixed;
    top: 2 rem;
    rigth: 20 px;
    z-index; 1000;
}
   .rotacao-botao{ 
      transform: rotate(-90deg);
      transform-origin: right center;
}
.opcoes-acessibilidade{
    margin-top:10px;
    display: flex;
    flex-direction: column;
}
.opcoes-acessibilidade button{
    margin-bottom: 5px;
}
const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')
botaoDeAcessibilidade.addEventListener('click', function (){
 botaoDeAcessibilidade.classList.toggle('rotacao-botao');
 opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
})
