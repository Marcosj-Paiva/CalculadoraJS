function insert(num){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado + num;
}

function clean(){
    document.getElementById('resultado').innerHTML = "";
}

function del(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    let conta = document.getElementById('resultado').innerHTML;
    let operador;
    let indice;

    for(i=0; i<conta.length; i++){
        if(conta[i] === '+' || conta[i] === '-' || conta[i] === '*' || conta[i] === '/'){
            operador = conta[i];
            indice = i;
            break;
        }
    }

    let num1 = Number(conta.substring(0,indice));
    let num2 = Number(conta.substring(indice + 1));
    let resultado;

    switch(operador){
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num2 !== 0 ? num1 / num2 : 'Erro (divisão por zero)';
            break;
    }

    document.getElementById('resultado').innerHTML = resultado;
}

function calcular2(){
    let conta = document.getElementById('resultado').innerHTML;

    let match = conta.match(/^(\d+)([\+\-\*\/])(\d+)$/);

    let num1 = Number(match[1]);
    let operador = match[2];
    let num2 = Number(match[3]);
    
    switch(operador){
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num2 !== 0 ? num1 / num2 : 'Erro (divisão por zero)';
            break;
    }

    document.getElementById('resultado').innerHTML = resultado;
}

function calcular3() {
    let conta = document.getElementById('resultado').innerHTML;

    let resultado = eval(conta);
    document.getElementById('resultado').innerHTML = resultado;
}