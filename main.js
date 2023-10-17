//Criando/declarando a função tocaSomPom
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}
//chamando/invocando a função tocaSomPom pelo clique o botão pom
document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
}
document.querySelector('.tecla_clap').onclick = tocaSomClap;