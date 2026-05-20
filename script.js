let tablero = ["","","","","","","","",""];

let juegoTerminado = false;

let puntosX = 0;
let puntosO = 0;

function jugar(celda, posicion){

    if(tablero[posicion] != "" || juegoTerminado){
        return;
    }

    tablero[posicion] = "X";

    celda.innerHTML = "X";

    if(verificarGanador("X")){

        document.getElementById("resultado").innerHTML =
        "🎉 ¡Ganaste!";

        puntosX++;

        document.getElementById("puntosX").innerHTML =
        puntosX;

        juegoTerminado = true;

        return;
    }

    computadora();

}

function computadora(){

    let posicionesLibres = [];

    for(let i = 0; i < tablero.length; i++){

        if(tablero[i] == ""){
            posicionesLibres.push(i);
        }

    }

    if(posicionesLibres.length == 0){
        return;
    }

    let posicionAleatoria =
    posicionesLibres[
        Math.floor(Math.random() * posicionesLibres.length)
    ];

    tablero[posicionAleatoria] = "O";

    let celdas =
    document.getElementsByClassName("celda");

    celdas[posicionAleatoria].innerHTML = "O";

    if(verificarGanador("O")){

        document.getElementById("resultado").innerHTML =
        "😢 Ganó la computadora";

        puntosO++;

        document.getElementById("puntosO").innerHTML =
        puntosO;

        juegoTerminado = true;

    }

}

function verificarGanador(jugador){

    let combinaciones = [

        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6]

    ];

    for(let i = 0; i < combinaciones.length; i++){

        let a = combinaciones[i][0];
        let b = combinaciones[i][1];
        let c = combinaciones[i][2];

        if(
            tablero[a] == jugador &&
            tablero[b] == jugador &&
            tablero[c] == jugador
        ){
            return true;
        }

    }

    return false;

}

function reiniciar(){

    tablero = ["","","","","","","","",""];

    juegoTerminado = false;

    let celdas =
    document.getElementsByClassName("celda");

    for(let i = 0; i < celdas.length; i++){

        celdas[i].innerHTML = "";

    }

    document.getElementById("resultado").innerHTML = "";

}