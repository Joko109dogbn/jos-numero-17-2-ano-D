//Criando/declarando a função tocaSomPom
function tocaSom(){
    document.querySelector(IDaudio).play();
}
//chamando/invocando a função tocaSomPom pelo clique o botão pom
const listaDeTeclas = document.querySelectorAll('.tecla');

//estrutura de repetição while = enquanto
//mudar "while" para "for"
    for(let contador = 0; contador < listaDeTeclas.length; contador++){
       const tecla = listaDeTeclas[contador];
       const efeito = tecla.classList[1]; //acessa o 2° item da classe de teclas
       const IDaudio = `#som_${efeito}` ; //template string
       tecla.onclick = function(){ //cria função anônima para chamar tocaSom
               tocaSom(IDaudio);
          }
    tecla.onkeydown = function(){
        tecla.classList.add('ativa');
        tecla.classList.remove('ativa');
        }
}
