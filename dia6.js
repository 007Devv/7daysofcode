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
                querContinuar = prompt("Deseja adicionar ou remover um produto? R: Sim ou Não");
                if(querContinuar == "Não"){
                    console.log("Sua lista é:"+"\n"+" Laticinios: "+latciniosCategoria+"\n"+"Congelados: "+congeladosCategoria+"\n"+"Frutas: "+frutasCategoria+"\n"+"Doces: "+docesCategoria);
                    fazerCompras = querContinuar;
                }
                else if(querContinuar == "Sim"){
                    adicionaRemove = prompt("Deseja adicionar ou remover? R: Adicionar ou Remover");
                        if(adicionaRemove == "Adicionar"){
                            fazerCompras = "Sim";
                        }
                        else if(adicionaRemove == "Remover"){
                            qualRemover = prompt("Qual produto deseja remover?");
                            qualCategoriaRemover();
                        }
                }
                
                function qualCategoriaRemover (){
                    var selecionaCategoria = prompt("A qual categoria esse alimento pertence? As categorias disponíveis são: Laticinios, Congelados, Frutas e Doces");
                                switch (selecionaCategoria){
                                    case "Laticinios":
                                        var posicaoAlimento = latciniosCategoria.indexOf(qualRemover);
                                        var removerAlimento = latciniosCategoria.splice(posicaoAlimento, 1);
                                        console.log(removerAlimento);
                                        break;
                                    case "Congelados":
                                        var posicaoAlimento = congeladosCategoria.indexOf(qualRemover);
                                        var removerAlimento = congeladosCategoria.splice(posicaoAlimento, 1);
                                        console.log(removerAlimento);
                                        break;
                                    case "Frutas":
                                        var posicaoAlimento = frutasCategoria.indexOf(qualRemover);
                                        var removerAlimento = frutasCategoria.splice(posicaoAlimento, 1);
                                        console.log(removerAlimento);
                                        break;
                                    case "Doces":
                                        var posicaoAlimento = docesCategoria.indexOf(qualRemover);
                                        var removerAlimento = docesCategoria.splice(posicaoAlimento, 1);
                                        console.log(removerAlimento);
                                        break;
                                    default:
                                        console.log("Poxa, que pena, eu não entendo sua resposta. Tente responder com alguma das categorias pré-estabelecidas");
                                }
                            var querContinuar = prompt("Voce deseja adicionar ou remover algum produto da lista? Responda: Sim ou Não");
                                if(querContinuar == "Não"){
                                    console.log("Sua lista é:"+"\n"+" Laticinios: "+latciniosCategoria+"\n"+"Congelados: "+congeladosCategoria+"\n"+"Frutas: "+frutasCategoria+"\n"+"Doces: "+docesCategoria);
                                    fazerCompras = querContinuar;
                    }
                }
            }