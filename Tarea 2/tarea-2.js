document.querySelector("#boton").onclick=function(){
    
    const nombre = document.querySelector("#nombre-usuario").value;
    const segundoNombre = document.querySelector("#segundo-nombre-usuario").value;
    const apellido = document.querySelector("#apellido-usuario").value;
    const edad = document.querySelector("#edad-usuario").value;
    
    document.querySelector("#resultado").innerText = `Vos te llamas ${nombre} ${segundoNombre} ${apellido} y tenes ${edad}`;
    document.querySelector("h1").innerText = `Bienvenido ${nombre}`;

    return false;
}




