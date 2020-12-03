function tareas(){
    ponerTodoEnArray();
    calcularPromedio();
    calcularNumeroMasPequeno();
    calcularNumeroMasGrande();
    calcularNumeroMasFrecuente();
}

function ponerTodoEnArray(){
    const numeros = document.querySelectorAll("li");
    let array = [];
    

    for(i=0; i<numeros.length; i++){
        array.push(Number(numeros[i].innerText));
    }

    return array;
}

function calcularPromedio(){
    const arrayDeNumeros = ponerTodoEnArray();
    let total = 0;
    let promedio = 0;

    for(i=0; i<arrayDeNumeros.length; i++){
        total = total + arrayDeNumeros[i]
        promedio = Math.floor(total / arrayDeNumeros.length)
    }

    return document.querySelector("em1").innerText = `El promedio de estos números es ${promedio}`
}

function calcularNumeroMasPequeno(){
    const arrayDeNumeros = ponerTodoEnArray();
    let numeroMasPequeno = Math.min(...arrayDeNumeros)

    return document.querySelector("em2").innerText = `El numero más pequeño es ${numeroMasPequeno}`
}

function calcularNumeroMasGrande(){
    const arrayDeNumeros = ponerTodoEnArray();
    let numeroMasGrande = Math.max(...arrayDeNumeros);

    return document.querySelector("em3").innerText = `El numero más grande es ${numeroMasGrande}`
}

function calcularNumeroMasFrecuente(){
    const lista = ponerTodoEnArray();
    let comparador = 1;
    let contador = 0;
    let numeroMasFrecuente; 

    for (let i=0; i<lista.length; i++){
        for (let j=0; j<lista.length; j++){
            if (lista[i] === lista[j]){
                contador++;
            }
            if (comparador < contador){
                comparador = contador;
                numeroMasFrecuente = lista[i];
            }    
        }
        contador = 0;
    }
    return document.querySelector("em4").innerText = `El numero que mas se repite es ${numeroMasFrecuente}`    
}

tareas();


