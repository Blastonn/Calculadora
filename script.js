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

let numero1 = "";
let numero2 = "";
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
            numero1 = "";
            numero2 = "";
            operador = "";
            texts.remove();
        })
        resultado.forEach((texts) =>{
            numero1 = "";
            numero2 = "";
            operador = "";
            texts.remove();
        })
    });
}

function escolhaCalculos(){
    botoes.forEach((botao) =>{
        botao.addEventListener("click", () =>{
            const buttonValue = botao.textContent;
            if (botao.classList.contains("number")) {
                if (operador === "") {
                    numero1 += buttonValue; 
                } else {
                    numero2 += buttonValue; 
                }
            }
                if (botao.classList.contains("operacao")) { 
                    operador = buttonValue;  
                }

                if(botao.classList.contains("calcular")){

                    const resultado = operacao(operador, parseInt(numero1), parseInt(numero2));
                    console.log(resultado);
                    atualizarResultado(resultado);
                    numero1 = resultado;
                    numero2 = "";
                    limparDisplay();


                }

       
        })
    });


    
}


function atualizarResultado(resul){
    const resultado = document.createElement("p");

    resultado.classList.add("resultado");
    const textDisplay = document.querySelectorAll(".display-text-number1");
    textDisplay.forEach((text)=> {
        text.remove();
    })
    resultado.textContent = resul;

    display.appendChild(resultado);

}

function limparResultado(resul){
    const textDisplayResultado = document.querySelectorAll(".resultado");

}


escolhaCalculos();
limparDisplay();
atualizarDisplay();


