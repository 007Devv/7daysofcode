let latciniosCategoria = [];
let congeladosCategoria = [];
let frutasCategoria = [];
let docesCategoria = [];

var nomeUser = prompt("Olá, qual é o seu nome?");

var fazerCompras = prompt(nomeUser+", você gostaria de fazer compras? Responda: Sim ou Não");
    if(fazerCompras == "Sim"){
        while(fazerCompras == "Sim"){
            atribuiAlimento();
            }
        }
    else if(fazerCompras == "Não"){
        console.log("Até mais!");
    }



function atribuiAlimento(){
    var qualAlimento = prompt("Qual alimento você deseja adicionar?");
            var qualCategoria = prompt("A qual categoria esse alimento pertence? As categorias disponíveis são: Laticinios, Congelados, Frutas e Doces");
                switch (qualCategoria){
                    case "Laticinios":
                        latciniosCategoria.push(qualAlimento);
                        break;
                    case "Congelados":
                        congeladosCategoria.push(qualAlimento);
                        break;
                    case "Frutas":
                        frutasCategoria.push(qualAlimento);
                        break;
                    case "Doces":
                        docesCategoria.push(qualAlimento);
                        break;
                    default:
                        console.log("Poxa, que pena, eu não entendo sua resposta. Tente responder com alguma das categorias pré-estabelecidas");
                }
            var querContinuar = prompt("Voce deseja adicionar mais algum alimento? Responda: Sim ou Não");
                if(querContinuar == "Não"){
                    console.log("Sua lista é:"+"\n"+" Laticinios: "+latciniosCategoria+"\n"+"Congelados: "+congeladosCategoria+"\n"+"Frutas: "+frutasCategoria+"\n"+"Doces: "+docesCategoria);
                    fazerCompras = querContinuar;
                }
            }
