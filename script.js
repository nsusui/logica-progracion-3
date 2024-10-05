function solicitarNumero() {
    let numero = prompt("Por favor, ingrese un número para calcular su factorial:");
    
    while (true) {
        
        if (numero === null) {
            return; 
        } else if (numero.trim() === "" || isNaN(Number(numero))) {
            alert("Error: Por favor ingrese un número válido.");
            numero = prompt("Por favor, ingrese un número para calcular su factorial:");
        } else {
            break; 
        }
    }
    

    numero = Number(numero);
    
    
    let factorial = calcularFactorial(numero);
    
    
    mostrarResultado(numero, factorial);
}

function calcularFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        let resultado = 1;
        for (let i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

function mostrarResultado(numero, factorial) {
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `Entrada: ${numero}<br>Salida: El factorial de ${numero} es ${factorial}.`;
}