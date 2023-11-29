//Criando/declarando a função tocasom com parâmetro idElementoAudio 
function tocaSom (idElementoAudio){
     //1 else elemento operadores comparação 
         const elemento = document.querySelector(idElementoAudio); 
         if(elemento && elemento.localName === 'audio'){ 
            elemento.play(); 
         }else{ 
         console.log("Elemento não encontrado"); 
         }
} 
//criando referência constante listaDeTeclas buscando //todos os itens pela classe. tecla 
const listaDeTeclas = document.querySelectorAll('.tecla'); 
//estrutura de repetição "while" significa  
//"enquanto algo acontecer" mudou while para "for" 
for(let contador = 0; contador < listaDeTeclas.length;contador++) { 
    const tecla listaDeTeclas [contador]; 
    const efeito tecla.classList[1]; //acessa o 2º item da classe de teclas 
    const idAudio #som $(efeito); //template string 
    tecla.onclick = function(){ //cria função anónima para chamar tocaSom ]
        tocaSom(idAudio);
    }
        tecla.onkeydown = function(evento) { 
            if(evento.code === 'Space' || evento.code === 'Enter'){   
            tecla.classList.add('ativa"); 
            }
        }
            tecla. onkeyup=function(){ 
                tecla.classList.remove('ativa');
            }
    }