function tareas(){
    tareaSumarSegundos();
    tareaSumarMinutos();
    tareaSumarHoras();
    tareaConvertirTodoEnSegundos();
    tareaMostrarResultados();
}
    
function tareaSumarSegundos(){
        
    const $segundosClase1= Number(document.querySelector("#segundos-clase1").value);
    const $segundosClase2= Number(document.querySelector("#segundos-clase2").value);
    const $segundosClase3= Number(document.querySelector("#segundos-clase3").value);
    const $segundosClase4= Number(document.querySelector("#segundos-clase4").value);
    const $segundosClase5= Number(document.querySelector("#segundos-clase5").value);
        
    let segundos;
    segundos = $segundosClase1 + $segundosClase2 + $segundosClase3 + $segundosClase4 + $segundosClase5
    return segundos
}

function tareaSumarMinutos(){
        
    const $minutosClase1= Number(document.querySelector("#minutos-clase1").value);
    const $minutosClase2= Number(document.querySelector("#minutos-clase2").value);
    const $minutosClase3= Number(document.querySelector("#minutos-clase3").value);
    const $minutosClase4= Number(document.querySelector("#minutos-clase4").value);
    const $minutosClase5= Number(document.querySelector("#minutos-clase5").value);

    let minutos;
    minutos = $minutosClase1 + $minutosClase2 + $minutosClase3 + $minutosClase4 + $minutosClase5
    return minutos
}

function tareaSumarHoras(){
    const $horasClase1= Number(document.querySelector("#horas-clase1").value);
    const $horasClase2= Number(document.querySelector("#horas-clase2").value);
    const $horasClase3= Number(document.querySelector("#horas-clase3").value);
    const $horasClase4= Number(document.querySelector("#horas-clase4").value);
    const $horasClase5= Number(document.querySelector("#horas-clase5").value);

    let horas;
    horas = $horasClase1 + $horasClase2 + $horasClase3 + $horasClase4 + $horasClase5
    return horas
}

function tareaConvertirTodoEnSegundos(){
    let segundos = tareaSumarSegundos();
    let minutos =  tareaSumarMinutos();
    let horas = tareaSumarHoras();

    let HorasAsegundos = horas * 3600;
    let minutosAsegundos = minutos * 60;
    let SegundosSumados = HorasAsegundos + minutosAsegundos + segundos;
        
    let horasTotales = Math.floor(SegundosSumados / 3600);
    let minutosTotales = Math.floor(SegundosSumados % 3600 / 60 );
    let segundosTotales = Math.floor(SegundosSumados % 3600 % 60);

    return tiempoTotal = [horasTotales, minutosTotales, segundosTotales];
}

function tareaMostrarResultados(){
    let tiempo = tareaConvertirTodoEnSegundos();
    let horas = tiempo[0];
    let minutos = tiempo[1];
    let segundos = tiempo[2];

    return document.querySelector("strong").innerText = `${horas} horas ${minutos} minutos ${segundos} segundos`
}

//ejecuta el código
document.querySelector("#boton").onclick= function(){
    tareas();
    return false
}