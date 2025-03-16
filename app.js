// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let Amigos = [];

let IdAmigos = "amigo";

function AgregarAmigo(arrayNombres, id){

    let nombre = document.getElementById(id).value;

    if (nombre === ""){
        alert("Por favor, inserte un nombre.");
    }
    else
    {
        arrayNombres.push(nombre);
        document.getElementById(id).innerHTML = "";
        alert("Nombre Añadido");
    }  
    
    LlenarLista(arrayNombres);
}


function LlenarLista(arrayAmigos){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < arrayAmigos.length; i++){

        let li = document.createElement("li");
        li.textContent = arrayAmigos[i];
        listaAmigos.appendChild(li);
    }
}

function Sortear(ArrayAmigos){
    if(ArrayAmigos.length === 0){
        alert("No hay nombres en lista");
    }
    else
    {
        let numeroSorteo = Math.floor(Math.random() * ArrayAmigos.length);

        let nombreGanador = ArrayAmigos[numeroSorteo];

        document.getElementById("resultado").innerHTML = nombreGanador;
    }
}



