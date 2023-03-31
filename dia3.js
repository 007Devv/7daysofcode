var nomeUser = prompt("Olá, qual é o seu nome?");
var idadeUser = prompt(nomeUser+", qual é a sua idade?");

var qualStack = prompt(nomeUser+", você deseja seguir para qual área, front-end ou back-end? Responda: Back ou Front");
    if(qualStack == "Back"){
        var qualLang = prompt(nomeUser+", você escolheu back-end, muito legal! Dentro dessa área você prefere aprender C# ou Java? Responda: C# ou Java");
            if(qualLang == "C#"){
                prompt("Ótimo "+nomeUser+", C# é uma lingagem muito valorizada!");
            }
            else if(qualLang == "Java"){
                prompt("Ótimo "+nomeUser+", Java é uma linguagem muito completa!");
            }
            else{
                prompt(nomeUser+" ah que pena, não pude entender sua resposta. Tente responder com C# ou Java");
            }
    }
    else if(qualStack == "Front"){
        var qualLang = prompt(nomeUser+" você escolheu front-end, muito legal! Dentro dessa área você prefere aprender Vue ou React? Responda: Vue ou React");
            if(qualLang == "Vue"){
                console.log("Ótimo "+nomeUser+", Vue é uma lingagem muito valorizada!");
            }
            else if(qualLang == "React"){
                console.log("Ótimo "+nomeUser+", React é uma linguagem muito completa!");
            }
            else{
                console.log(nomeUser+" ah que pena, não pude entender sua resposta. Tente responder com Back ou Front");
            }
    }
var seraFullstack = prompt(nomeUser+", você pretende continuar se especializando nessa tecnologia, ou pretende se desenvolver como fullstack? Responda: Especializar ou Fullstack");
    if(seraFullstack == "Especializar"){
        console.log("Entendi "+nomeUser+" sem dúvidas você se tornará um desenvolvedor(a) muito bom(a)!");
    }
    else if(seraFullstack == "Fullstack"){
        console.log("Entendi "+nomeUser+" sem dúvidas você se tornará um desenvolvedor(a) muito bom(a)!");
    }
    else{
        console.log(nomeUser+" ah que pena, não pude entender sua resposta. Tente responder com Especializar ou Fullstack")
    }
    
var newTech = prompt(nomeUser+", você gostaria de se especializar ou aprender uma nova tecnologia? Responda: Sim ou Não");
    if(newTech == "Sim"){
        while(newTech == "Sim"){
            var respUser = prompt(nomeUser+", Qual?");
                console.log("Excelente"+nomeUser+", a tecnologia "+respUser+" é muito valorizada!");
                var maisAlg = prompt(nomeUser+", tem mais alguma? Responda: Sim ou Não");
                if(maisAlg == "Sim"){
                newTech = maisAlg;
                }
                else if(maisAlg == "Não"){
                console.log(nomeUser+", entendi, bons estudos então!");
                newTech = maisAlg;
                }
                else{
                console.log(nomeUser+", ah que pena, não entendi sua resposta. Tente responder com Sim ou Não");
                }
            }
    }
    else if(newTech == "Não"){
        console.log(nomeUser+", estudar é sempre importante, continue se esforçando!");
    }
    else{
        console.log(nomeUser+", ah que pena, não entendi sua resposta. Tente responder com Sim ou Não");
    }