function soma(...numeros){
    const resultado = numeros.reduce((total,atual) => total + atual,0);
    console.log(resultado);
}

function subtracao(...numeros){
    const resultado = numeros.reduce((total,atual) => total - atual,0);
    console.log(resultado);
}

function multiplicacao(...numeros){
    const resultado = numeros.reduce((total,atual) => total * atual);
    console.log(resultado);
}

function divisao(...numeros){
    const resultado = numeros.reduce((total,atual) => total / atual);
    console.log(resultado);
}
