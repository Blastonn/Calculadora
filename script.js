function soma(op = "+",...numeros){
    const resultado = numeros.reduce((total,atual) => {
        if(op  === "+") return total + atual;
        return total;
    },0);
    return resultado;
}

function subtracao(op = "-",...numeros){
    const resultado = numeros.reduce((total,atual) => {
        if(op  === "-") return total - atual;
        return total;
    });
    return resultado;
}

function multiplicacao(op = "*",...numeros){
    const resultado = numeros.reduce((total,atual) => {
        if(op  === "*") return total * atual;
        return total;
    });
    return resultado;
}

function divisao(op = "/",...numeros){
    const resultado = numeros.reduce((total,atual) => {
        if(op  === "/") return total / atual;
        return total;
    });
    return resultado;
}

function operacao(oper,...numeros){
   if(oper === "+"){
        const resultadoSoma = soma(oper,...numeros);
        return resultadoSoma;
   }else if(oper === "-"){
        const resultadoSub = subtracao(oper,...numeros);
        return resultadoSub;
   }else if(oper === "*"){
        const resultadoMult = multiplicacao(oper,...numeros);
        return resultadoMult
   }else if(oper === "/"){
        const resultadoDivi = divisao(oper,...numeros);
        return resultadoDivi;
   }
}

const botoes = document.querySelectorAll(".botoes-grid button");
const botaoLimpar = document.querySelector(".botoes-grid .limpar");
const botoesOperacao = document.querySelectorAll(".botoes-grid .operacao")

const display = document.querySelector(".display-box")

let numero1 = 0;
let numero2 = 0;
let operador = "";
function atualizarDisplay(){
    botoes.forEach((button) => {
        button.addEventListener("click", () => {
            const content1 = document.createElement("p");

            content1.classList.add("display-text-number1");
            if(button.textContent != "CE" && button.textContent != "="){
                content1.textContent = button.textContent;
                display.appendChild(content1);
            }
        });

    })
}


function limparDisplay(){
    botaoLimpar.addEventListener("click", () =>{
        const textDisplay = document.querySelectorAll(".display-text-number1");
        const resultado = document.querySelectorAll(".resultado");
        textDisplay.forEach((texts) =>{
            texts.remove();
        })
        resultado.forEach((texts) =>{
            texts.remove();
        })
        numero1 = 0;
        numero2 = 0;
        operador = "";
    });
}

function escolhaCalculos(){
    botoes.forEach((botao) =>{
        botao.addEventListener("click", () =>{
            let flagOp = false;

            const buttonValue = botao.textContent;

            if (botao.classList.contains("number")){
                if (operador === ""){
                    flagOp = true;
                    limparResultado();
                    numero1 = (numero1 * 10) + parseInt(buttonValue);
                }else{
                    flagOp = true;
                    numero2 = (numero2 * 10) + parseInt(buttonValue);
                }
            }
                if (botao.classList.contains("operacao")) { 
                    if (numero2 !== 0) {
                        const resultado = operacao(operador, numero1, numero2);

                        numero1 = resultado;
                        numero2 = 0;
                        atualizarResultado(resultado);
                        
                        const textDisplay = document.querySelectorAll(".display-text-number1");
                        textDisplay.forEach((text) => text.remove());
                    }
                    operador = buttonValue; 
                }

                if(botao.classList.contains("calcular")){
                if (numero1 !== undefined && numero2 !== undefined && operador !== "") {

                    const resultado = operacao(operador, parseInt(numero1), parseInt(numero2));
                    atualizarResultado(resultado);

                    numero1 = resultado;

                    if(numero1 === Infinity){
                        atualizarResultado("Divisao por 0");
                    }
                    numero2 = 0;
                    operador = "";

                    limparNumeros();
                    let historicoTexto = `${resultado}`;

                    if(operador === "/" && numero2 === 0){
                        historicoTexto = "0";
                        numero1 = 0;
                        numero2 = 0;
                        operador = "";
                    }

    

                    historico(historicoTexto);  
                }else if(flagOp != true){
                    atualizarResultado("Digite uma operacao!");
                    historicoTexto = "0";
                    numero1 = 0;
                    numero2 = 0;
                    operador = "";
                }
            }
        })
    });
    
}

function limparNumeros(){
    const textDisplay = document.querySelectorAll(".display-text-number1");
    return textDisplay.forEach((text) => text.remove());
}

function limparResultado(){
    const textResu = document.querySelectorAll(".resultado");
    textResu.forEach((text)=> {
        text.innerText = "";
    })
}

function atualizarResultado(resul){
    const resultado = document.createElement("p");

    resultado.classList.add("resultado");
    const textDisplay = document.querySelectorAll(".display-text-number1");
    textDisplay.forEach((text)=> {
        text.remove();
    })
    const textResu = document.querySelectorAll(".resultado");
    textResu.forEach((text)=> {
        text.remove();
    })
    resultado.textContent = resul;

    display.appendChild(resultado);
    

}

function historico(num){
    const historico = document.createElement("p");
    historico.classList.add("historico");


    historico.textContent = num;
    
    const display = document.querySelector(".display-historico");
    display.prepend(historico);
}

escolhaCalculos();
limparDisplay();
atualizarDisplay();



