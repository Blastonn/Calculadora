function soma(op = "+",...numeros){
    const resultado = numeros.reduce((total,atual) => {
        if(op  === "+") return total + atual;
    },0);
    return resultado;
}

function subtracao(op = "-",...numeros){
    const resultado = numeros.reduce((total,atual) => {
        if(op  === "-") return total - atual;
    });
    return resultado;
}

function multiplicacao(op = "*",...numeros){
    const resultado = numeros.reduce((total,atual) => {
        if(op  === "*") return total * atual;
    });
    return resultado;
}

function divisao(op = "/",...numeros){
    const resultado = numeros.reduce((total,atual) => {
        if(op  === "/") return total / atual;
    });
    return resultado;
}

function operacao(oper, num, num2){
   if(oper === "+"){
        const resultadoSoma = soma(oper,num,num2);
        return resultadoSoma;
   }else if(oper === "-"){
        const resultadoSub = subtracao(oper,num,num2);
        return resultadoSub;
   }else if(oper === "*"){
        const resultadoMult = multiplicacao(oper,num,num2);
        return resultadoMult
   }else if(oper === "/"){
        const resultadoDivi = divisao(oper,num,num2);
        return resultadoDivi;
   }
}

const botoes = document.querySelectorAll(".botoes-grid button");
const botaoLimpar = document.querySelector(".botoes-grid .limpar");

const display = document.querySelector(".display-box")


function atualizarDisplay(){
    botoes.forEach((button) => {
        button.addEventListener("click", () => {
            const content = document.createElement("p");

            content.classList.add("display-text");
            if(button.textContent != "CE"){
                content.textContent = button.textContent;
                display.appendChild(content);
            }
        });
    })
}

function limparDisplay(){
    botaoLimpar.addEventListener("click", () =>{
        const textDisplay = document.querySelectorAll(".display-text");
        textDisplay.forEach((texts) =>{
            texts.remove();
        })
    });
}

limparDisplay();
atualizarDisplay();


