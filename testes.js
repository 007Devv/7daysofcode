var nomeUser = prompt("Olá, qual é o seu nome?");
var fazerContas = prompt(nomeUser+", você gostaria de fazer contas com uma calculadora? Responda: Sim ou Não");
    if(fazerContas == "Sim"){
        while(fazerContas == "Sim"){
            var qualOperacao = prompt("Qual operação deseja realizar? R: Soma, Subtração, Multiplicação, Divisão ou Sair");
                if(qualOperacao == "Sair"){
                    fazerContas = "Não";
                    console.log("Até a próxima!");
                    break;
                }
                    var primeiroNumero = prompt("Qual é o primeiro número?");
                    var segundoNumero = prompt("Qual é o segundo número?");
                        switch(qualOperacao){
                            case "Soma":
                                somarNumeros();
                                break;
                            case "Subtração":
                                subtrairNumeros();
                                break;
                            case "Multiplicação":
                                multiplicarNumeros();
                                break;
                            case "Divisão":
                                dividirNumeros();
                                break;
                            default:
                                console.log("Tente usar uma das operações disponíveis");
                }
            }
        }
    
    else if(fazerContas == "Não"){
        console.log("Até a próxima");
    }

    function somarNumeros(){
        var decimal = 10;
        var resultadoConta = parseInt (primeiroNumero, decimal) + parseInt(segundoNumero, decimal);
        console.log(nomeUser+", o resultado da sua conta é: "+resultadoConta);
    }
    
    function subtrairNumeros(){
        var decimal = 10;
        var resultadoConta = parseInt (primeiroNumero, decimal) - parseInt(segundoNumero, decimal);
        console.log(nomeUser+", o resultado da sua conta é: "+resultadoConta);
    }

    function multiplicarNumeros(){
        var decimal = 10;
        var resultadoConta = parseInt (primeiroNumero, decimal) * parseInt(segundoNumero, decimal);
        console.log(nomeUser+", o resultado da sua conta é: "+resultadoConta);
    }

    function dividirNumeros(){
        var decimal = 10;
        var resultadoConta = parseInt (primeiroNumero, decimal) / parseInt(segundoNumero, decimal);
        console.log(nomeUser+", o resultado da sua conta é: "+resultadoConta);
    }