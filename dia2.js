var nomeVar = prompt("Qual é o seu nome?");


var idadeVar = prompt("Qual é a sua idade?");


var linguagemVar = prompt("Qual linguagem de programação você está estudando?");

console.log("Olá "+nomeVar+" voce tem "+idadeVar+" anos de idade e atualmente estuda "+linguagemVar);
var gostaVar = prompt(nomeVar+" você gosta de estudar "+linguagemVar+"? Se sim responda com o numero 1, senão, numero 2");

if(gostaVar == 1){
    console.log("Muito bom, continue estudando e você terá muito sucesso!");
}
if(gostaVar == 2){
    console.log("Ah que pena, já tentou aprender outras linguagens?");
}