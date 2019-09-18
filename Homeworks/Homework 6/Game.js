import Board from "./Board.js";
import Player from "./Player.js";
import Buff from "./Buff.js";

let game = 1;
let p1Wins = 0;
let p2Wins = 0;
let nGame = document.querySelector("#pGame");
let pnumTurn = document.querySelector("#pnumTurn");
let p1Act = document.querySelector("#p1Act");
let p2Act = document.querySelector("#p2Act");
let p1wins = document.querySelector("#p1wins");
let p2wins = document.querySelector("#p2wins");
let pTurn = document.querySelector("#pTurn");
let pBuff = document.querySelector("#pBuff");
let p1name = prompt("Inserte el nombre del jugador 1: ");//Pregunta por el nombre del jugador 1
let p2name = prompt("Inserte el nombre del jugador 2: ");//Pregunta por el nombre del jugador 2
reviewNames();
let turn = true;//Variable que asigna el turno del jugador (true=Player1. false=Player2)
let numTurn = 1;//Contador de progreso que marca el turno que se ha jugado
let board = new Board(50);//Tamaño del tablero
let player1 = new Player(p1name);//Instancia jugador 1
let player2 = new Player(p2name);//Instancia jugador 2
let buffs = [//Vector que guarda serpientes y escaleras
    new Buff(4, 10),//Escalera en la posicion 4 que aumenta 3 casillas
    new Buff(8, 5),//Escalera en la posicion 11 que aumenta 9 casillas
    new Buff(12, 10),//Escalera en la posicion 17 que aumenta 7 casillas
    new Buff(17, 7),//Escalera en la posicion 29 que aumenta 3 casillas
    new Buff(21, 10),//Escalera en la posicion 40 que aumenta 1 casillas
    new Buff(26, 10),//Escalera en la posicion 43 que aumenta 5 casillas
    new Buff(33, 10),//Escalera en la posicion 40 que aumenta 1 casillas
    new Buff(37, 7),//Escalera en la posicion 40 que aumenta 1 casillas
    new Buff(11, -6),//Serpiente en la posicion 12 que reduce 11 casillas
    new Buff(20, -17),//Serpiente en la posicion 18 que reduce 13 casillas
    new Buff(28, -13),//Serpiente en la posicion 21 que reduce 13 casillas
    new Buff(34, -15),//Serpiente en la posicion 38 que reduce 16 casillas
    new Buff(41, -18),//Serpiente en la posicion 44 que reduce 9 casillas
    new Buff(45, -43),//Serpiente en la posicion 49 que reduce 22 casillas
    new Buff(48, -47),//Serpiente en la posicion 12 que reduce 11 casillas
    new Buff(49, -24),//Serpiente en la posicion 12 que reduce 11 casillas
];
document.querySelector("#p1").textContent = p1name;
document.querySelector("#p2").textContent = p2name;
document.querySelector("#btnTurn").addEventListener("click", playTurn);//Boton que permite jugar un turno a la vez
document.querySelector("#btnFullGame").addEventListener("click", playFullGame);//Boton que automatiza todo el juego hasta encontrar un ganador

function playFullGame(){//Funcion que automatiza todos los turnos hasta encontrar un ganador
    while(player1.position<board.large && player2.position<board.large){
        if(turn == true){//Revision de turno
            player1.moveAlong();//Se mueve el jugador 1
            console.log(player1.stringMove());
    
            if(findBuff(player1.position)==true){//Revisa si se ha caido en un potenciador
                if(powerBuff(player1.position)>0){//Revisa si el potenciador es una escalera
                    player1.position += powerBuff(player1.position);//Aplica efecto escalera
                    console.log(player1.stringStair());
                }else{
                    player1.position += powerBuff(player1.position);//Aplica efecto sepiente
                    console.log(player1.stringSnake());
                }
            }

            turn = false;//Cambio de turno
            numTurn++;//Aumento del contador numero de turno
        }else{
            player2.moveAlong();//Se mueve el jugador 2
            console.log(player2.stringMove());
    
            if(findBuff(player2.position)==true){//Revisa si se ha caido en un potenciador
                if(powerBuff(player2.position)>0){//Revisa si el potenciador es una escalera
                    player2.position += powerBuff(player2.position);//Aplica efecto escalera
                    console.log(player2.stringStair());
                }else{
                    player2.position += powerBuff(player2.position);//Aplica efecto sepiente
                    console.log(player2.stringSnake());
                }
            }
            turn = true;//Cambio de turno
            numTurn++;//Aumento del contador numero de turno
        }
    }
    p1Act.textContent = player1.position;
    p2Act.textContent = player2.position;
    alert(gameOver());//Finaliza la partida
}

function playTurn(){//Funcion que permite mover un turno a la vez
    if(turn == true){//Revision de turno
        pBuff.textContent = "...";
        player1.moveAlong();//Se mueve el jugador 1
        pTurn.textContent = player1.stringMove();

        if(findBuff(player1.position)==true){//Revisa si se ha caido en un potenciador
            if(powerBuff(player1.position)>0){//Revisa si el potenciador es una escalera
                player1.position += powerBuff(player1.position);//Aplica efecto escalera
                pBuff.textContent = player1.stringStair();
            }else{
                player1.position += powerBuff(player1.position);//Aplica efecto sepiente
                pBuff.textContent =  player1.stringSnake();
            }
        }

        numTurn++;
        pnumTurn.textContent = "Turno: " + numTurn;
        p1Act.textContent = player1.position;
        turn = false;//Cambio de turno
    }else{
        pBuff.textContent = "...";
        player2.moveAlong();//Se mueve el jugador 2
        pTurn.textContent = player2.stringMove();

        if(findBuff(player2.position)==true){//Revisa si se ha caido en un potenciador
            if(powerBuff(player2.position)>0){//Revisa si el potenciador es una escalera
                player2.position += powerBuff(player2.position);//Aplica efecto escalera
                pBuff.textContent = player2.stringStair();
            }else{
                player2.position += powerBuff(player2.position);//Aplica efecto sepiente
                pBuff.textContent =  player2.stringSnake();
            }
        }

        numTurn++;
        pnumTurn.textContent = "Turno: " + numTurn;
        p2Act.textContent = player2.position;
        turn = true;//Cambio de turno
    }
    
    if(player1.position>=board.large || player2.position>=board.large){//Revisa si existe un ganador
        alert(gameOver());//Finaliza la partida
    }
}

function findBuff(location){//Funcion que busca un potenciador en la posicion del jugador (location)
    let c = 0;//Indicador de potenciador (0 potenciador no encontrado, 1 potenciador encontrado)

    for(let i = 0; i<buffs.length; i++){//Ciclo que revisa el vector de potenciadores
        if(buffs[i].bPosition == location){//Comparacion posicion de jugador - posicion de potenciador
            c++;//Incrementa el indicador al encontrar el potenciador
            break;//Frena el ciclo
        }
    }

    if(c==1){//Comparacion de indicadore de potenciador encontrado
        return true;//Potenciador encontrado
    }else{
        return false;//Potenciador no encontrado
    }
}

function powerBuff(location){//Funcion que retorna el valor a aplicar del potenciador
    for(let i = 0; i<buffs.length; i++){//Ciclo que revisa el vector de potenciadores
        if(buffs[i].bPosition == location){//Comparacion posicion de jugador - posicion de potenciador
            return buffs[i].bEffect;//Retorna la cantidad del efecto del potenciador para ser aplicada
        }
    }
}

function winner(){//Funcion que identifica el ganador
    if(player1.position >= board.large){//Revisa si el ganador ha sido el jugador1
        let p1Winner = "¡¡¡" + player1.name + " ha ganado la partida!!!";//String de la victoria para jugador 1
        p1Wins++;
        p1wins.textContent = p1Wins;
        return p1Winner;
    }else{
        let p2Winner = "¡¡¡" + player2.name + " ha ganado la partida!!!";;//String de la victoria para jugador 2
        p2Wins++;
        p2wins.textContent = p2Wins;
        return p2Winner;
    }
}

function restartPosition(){//Funcion que restablece la posicion de ambos jugadores y el numero de turno
    player1.position = 1;//Posicion inicial del jugador 1
    player2.position = 1;//Posicion inicial del jugador 2
    p1Act.textContent = player1.position;
    p2Act.textContent = player2.position;
    pTurn.textContent = "...";
    numTurn = 1;//Numero de turno inicial
    pnumTurn.textContent = "Turno: " + numTurn;
    return;
}

function gameOver(){//Funcion que anuncia ganador y restablece posiciones
    game++;
    nGame.textContent = "Partida: " + game;
    let w =  winner();//Guarda al ganador en una variable antes de restablecer posiciones
    restartPosition();//Restablece posiciones
    return w;//Retorna el ganador
}

function reviewNames(){
    if(p1name == ""){//Asigna nombre por defecto al jugador 1
        p1name = "Jugador 1";
    }
    
    if(p2name == ""){//Asigna nombre por defecto al jugador 2
        p2name = "Jugador 2";
    }
    
    if(p1name == "" && p2name == ""){//Asigna nombre por defecto a ambos jugadores
        p1name = "Jugador 1";
        p2name = "Jugador 2";
    }
}