let contadorTentativas = 0;
let certoUser;

var nomeUser = prompt("Olá, qual é o seu nome?");
var idadeUser = prompt(nomeUser+", qual é a sua idade?");

var numerRandom = Math.floor(Math.random() * (7 - 0 + 1) + 0);

var querJogar = prompt(nomeUser+", você gostaria de jogar um jogo de advinhação? Responda: Sim ou Não");
    if(querJogar == "Sim"){
        while(contadorTentativas < 3 && certoUser != numerRandom){
            fazerJogar();
            }
        }
    console.log("O número a ser advinhado era o: "+numerRandom);

function fazerJogar (){
    var chuteUser = prompt(nomeUser+", escolha um numero entre 0 e 7 e digite-o");
        if(chuteUser == numerRandom){
            console.log("Parabéns "+nomeUser+", você acertou na mosca!");
            certoUser = numerRandom;
        }
        else if(chuteUser != numerRandom && chuteUser <= 7){
            console.log("Que pena, você errou");
            contadorTentativas ++;
        }
        else{
            console.log("Ah que pena, não consigo entender sua resposta, tente responder com um numero entre 0 e 7");
            contadorTentativas ++;
        }
}