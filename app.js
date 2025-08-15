
//      Declaración inicialización de Variables

let amigos = [];        //Arreglo en el cual se guardaran los nombres añadidos
let amigoSecreto = 0;   //Numero con el cual se sorteara el amigo secreto




//      Funciones


//Función para añadir los valores al arreglo de amigos
function agregarAmigo(){
    
    amigos.push(document.getElementById(`amigo`).value);
    //limpiarCaja();
        
    if (amigos[amigos.length-1] == "" | !isNaN(parseFloat(amigos[amigos.length-1]))){  //Validamos que lo añadido si sea un nombre, no sea un numero o esta vacio
        amigos.pop();   //en caso de que sea un numero o este vacio borramos ese ultimo dato añadido
        alert(`Por favor, inserte un nombre.`)
        limpiarCaja();
        return;
    }else{
        limpiarCaja();
    }

    mostrarListaAmigos(amigos);
    return;
}


//Función para limpiar la caja de entrada
function limpiarCaja(){
    document.querySelector(`#amigo`).value = ``;  //Asigamos el valor de vacio a la caja de texto de entrada
    return;
}


//Función para mostar los nombres en la lista inferior
function mostrarListaAmigos(listaAmigos){
    
    let lista = document.getElementById(`listaAmigos`);     //Seleccionamos el elemento lista que se mostrara en la pagina
    
    let nuevoElemento = document.createElement(`li`);       //Creamos la lista donde estaran los valores

    nuevoElemento.textContent = listaAmigos[listaAmigos.length-1];      

    lista.appendChild(nuevoElemento);       //Mostramos los valores conforme son añadidos al arreglo amigos
    return;
}

//Función para sortear un ganador
function sortearAmigo(){
    
    if(amigos.length == 0){     //Validamos que existan nombres para sortear (asi sea solo 1 nombre)
        alert(`Por favor añade nombres antes de sortear.`);


    }else{
        //console.log(`El arreglo tiene ${amigos.length} elementos`)
        amigoSecreto = Math.floor(Math.random()*amigos.length);     //Generamos un numero al "azar" entre 0 y el numero maximo de nombres en el arreglo amigos
        let resultado = document.getElementById(`resultado`);       //Seleccionamos el elemento que mostrara el amigo secreto
        resultado.innerHTML = `El amigo secreto sorteado es: ${amigos[amigoSecreto]}`;      //Mostramos el amigo secreto
    }

    return;
}