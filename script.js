'use strict'

var namePlayer1, namePlayer2, namePlayer3, namePlayer4;
var divOneHitP1, divTwoHitP1, divThreeHitP1, divHealthP1;
var divOneHitP2, divTwoHitP2, divThreeHitP2, divHealthP2;
var divOneHitP3, divTwoHitP3, divThreeHitP3, divHealthP3;
var divOneHitP4, divTwoHitP4, divThreeHitP4, divHealthP4;

var textOneHitP1, textTwoHitP1, textThreeHitP1, textHealthP1;
var textOneHitP2, textTwoHitP2, textThreeHitP2, textHealthP2;
var textOneHitP3, textTwoHitP3, textThreeHitP3, textHealthP3;
var textOneHitP4, textTwoHitP4, textThreeHitP4, textHealthP4;
var rbPlayer1, rbPlayer2, rbPlayer3, rbPlayer4;

window.addEventListener('load', () => {
    setTitlePlayers();
    setDivs();
    setTexts();
    setRadios();

    //Set Titles
    namePlayer1.innerHTML = "Player 1";
    namePlayer2.innerHTML = "Player 2";
    namePlayer3.innerHTML = "Player 3";
    namePlayer4.innerHTML = "Player 4";

    document.getElementById("player1").style.backgroundImage = "url('player1.jpg')";
    document.getElementById("player2").style.backgroundImage = "url('player2.jpg')";
    document.getElementById("player3").style.backgroundImage = "url('player3.jpg')";
    document.getElementById("player4").style.backgroundImage = "url('player4.jpg')";
    //Comenzamos
    NewRound();
});

/*Valores a variables de los elementos*/
function setTitlePlayers(){
    //Locate element
    namePlayer1 = document.getElementById("player1").querySelector(".namePlayer");
    namePlayer2 = document.getElementById("player2").querySelector(".namePlayer");
    namePlayer3 = document.getElementById("player3").querySelector(".namePlayer");
    namePlayer4 = document.getElementById("player4").querySelector(".namePlayer");
}

function setDivs(){
    //Div de valores
    divOneHitP1 = document.getElementById("player1").querySelector("#divOneHit");
    divTwoHitP1 = document.getElementById("player1").querySelector("#divTwoHit");
    divThreeHitP1 = document.getElementById("player1").querySelector("#divThreeHit");
    divHealthP1 = document.getElementById("player1").querySelector("#divHealth");

    divOneHitP2 = document.getElementById("player2").querySelector("#divOneHit");
    divTwoHitP2 = document.getElementById("player2").querySelector("#divTwoHit");
    divThreeHitP2 = document.getElementById("player2").querySelector("#divThreeHit");
    divHealthP2 = document.getElementById("player2").querySelector("#divHealth");

    divOneHitP3 = document.getElementById("player3").querySelector("#divOneHit");
    divTwoHitP3 = document.getElementById("player3").querySelector("#divTwoHit");
    divThreeHitP3 = document.getElementById("player3").querySelector("#divThreeHit");
    divHealthP3 = document.getElementById("player3").querySelector("#divHealth");

    divOneHitP4 = document.getElementById("player4").querySelector("#divOneHit");
    divTwoHitP4 = document.getElementById("player4").querySelector("#divTwoHit");
    divThreeHitP4 = document.getElementById("player4").querySelector("#divThreeHit");
    divHealthP4 = document.getElementById("player4").querySelector("#divHealth");
}

function setTexts(){
    //Texto de valores
    textOneHitP1 = document.getElementById("player1").querySelector("#textHitOne");
    textTwoHitP1 = document.getElementById("player1").querySelector("#textHitTwo");
    textThreeHitP1 = document.getElementById("player1").querySelector("#textHitThree");
    textHealthP1 = document.getElementById("player1").querySelector("#textHealth");

    textOneHitP2 = document.getElementById("player2").querySelector("#textHitOne");
    textTwoHitP2 = document.getElementById("player2").querySelector("#textHitTwo");
    textThreeHitP2 = document.getElementById("player2").querySelector("#textHitThree");
    textHealthP2 = document.getElementById("player2").querySelector("#textHealth");

    textOneHitP3 = document.getElementById("player3").querySelector("#textHitOne");
    textTwoHitP3 = document.getElementById("player3").querySelector("#textHitTwo");
    textThreeHitP3 = document.getElementById("player3").querySelector("#textHitThree");
    textHealthP3 = document.getElementById("player3").querySelector("#textHealth");

    textOneHitP4 = document.getElementById("player4").querySelector("#textHitOne");
    textTwoHitP4 = document.getElementById("player4").querySelector("#textHitTwo");
    textThreeHitP4 = document.getElementById("player4").querySelector("#textHitThree");
    textHealthP4 = document.getElementById("player4").querySelector("#textHealth");
}

function setRadios(){
    //Radio buttons
    rbPlayer1 = document.getElementById("rbPlayer1");
    rbPlayer2 = document.getElementById("rbPlayer2");
    rbPlayer3 = document.getElementById("rbPlayer3"); 
    rbPlayer4 = document.getElementById("rbPlayer4");
}

/*Nueva ronda*/
function NewRound(){
    let playerSelected = getPlayerSelect();
    prepareShowRound(playerSelected);
    let valuesRound = getValuesRound();
    setValuesNewRound(playerSelected, valuesRound);
}

/*Preparacion para la nueva ronda*/
function getPlayerSelect() {
    let playerSelect = 0;
    if(rbPlayer1.checked) playerSelect = 1;
    if(rbPlayer2.checked) playerSelect = 2;
    if(rbPlayer3.checked) playerSelect = 3;
    if(rbPlayer4.checked) playerSelect = 4;
    return playerSelect;
}

function prepareShowRound(playerSelected) {
    showAll();
    console.log(playerSelected)
    if(playerSelected == 1){
        divOneHitP1.style.visibility = "hidden";
        divTwoHitP1.style.visibility = "hidden";
        divThreeHitP1.style.visibility = "hidden";
        divHealthP2.style.visibility = "hidden";
        divHealthP3.style.visibility = "hidden";
        divHealthP4.style.visibility = "hidden";
    }
    if(playerSelected == 2){
        divHealthP1.style.visibility = "hidden";    
        divOneHitP2.style.visibility = "hidden";
        divTwoHitP2.style.visibility = "hidden";
        divThreeHitP2.style.visibility = "hidden";
        divHealthP3.style.visibility = "hidden";
        divHealthP4.style.visibility = "hidden";
    }
    if(playerSelected == 3){
        divHealthP1.style.visibility = "hidden";
        divHealthP2.style.visibility = "hidden";    
        divOneHitP3.style.visibility = "hidden";
        divTwoHitP3.style.visibility = "hidden";
        divThreeHitP3.style.visibility = "hidden";
        divHealthP4.style.visibility = "hidden";
    }
    if(playerSelected == 4){
        divHealthP1.style.visibility = "hidden";
        divHealthP2.style.visibility = "hidden";
        divHealthP3.style.visibility = "hidden";    
        divOneHitP4.style.visibility = "hidden";
        divTwoHitP4.style.visibility = "hidden";
        divThreeHitP4.style.visibility = "hidden";
    }
}

function showAll(){
    divOneHitP1.style.visibility = "visible";
    divTwoHitP1.style.visibility = "visible";
    divThreeHitP1.style.visibility = "visible";
    divHealthP1.style.visibility = "visible";

    divOneHitP2.style.visibility = "visible";
    divTwoHitP2.style.visibility = "visible";
    divThreeHitP2.style.visibility = "visible";
    divHealthP2.style.visibility = "visible";

    divOneHitP3.style.visibility = "visible";
    divTwoHitP3.style.visibility = "visible";
    divThreeHitP3.style.visibility = "visible";
    divHealthP3.style.visibility = "visible";

    divOneHitP4.style.visibility = "visible";
    divTwoHitP4.style.visibility = "visible";
    divThreeHitP4.style.visibility = "visible";
    divHealthP4.style.visibility = "visible";
}

/*Valores para la nueva ronda*/
function getValuesRound() {
    let values = [];
    let valuesPlayer;

    //player
    values.push(getRandomNumber());

    //player
    valuesPlayer = getValuesRoundPlayer();
    valuesPlayer.forEach(e => values.push(e));

    //player
    valuesPlayer = getValuesRoundPlayer();
    valuesPlayer.forEach(e => values.push(e));

    //player
    valuesPlayer = getValuesRoundPlayer();
    valuesPlayer.forEach(e => values.push(e));

    return values;
}

function getValuesRoundPlayer() {
    let values = [];
    let value1, value2, value3;

    value1 = getRandomNumber();

    do{
        value2 = getRandomNumber();
    }while(value2 == value1);

    do{
        value3 = getRandomNumber();
    }while(value3 == value1 || value3 == value2);

    values.push(value1);
    values.push(value2);
    values.push(value3);

    return values;
}

function getRandomNumber() {
    let min = 1;
    let max = 21;
    return Math.floor(Math.random() * (max - min)) + min;
}

function setValuesNewRound(playerSelected, valuesRound){
    if(playerSelected == 1){
        textHealthP1.innerHTML = valuesRound[0];
        textOneHitP2.innerHTML = valuesRound[1]; 
        textTwoHitP2.innerHTML = valuesRound[2]; 
        textThreeHitP2.innerHTML = valuesRound[3]; 
        textOneHitP3.innerHTML = valuesRound[4]; 
        textTwoHitP3.innerHTML = valuesRound[5]; 
        textThreeHitP3.innerHTML = valuesRound[6];
        textOneHitP4.innerHTML = valuesRound[7];
        textTwoHitP4.innerHTML = valuesRound[8];
        textThreeHitP4.innerHTML = valuesRound[9]; 
    }
    if(playerSelected == 2){
        textOneHitP1.innerHTML = valuesRound[1]; 
        textTwoHitP1.innerHTML = valuesRound[2]; 
        textThreeHitP1.innerHTML = valuesRound[3];         
        textHealthP2.innerHTML = valuesRound[0];
        textOneHitP3.innerHTML = valuesRound[4]; 
        textTwoHitP3.innerHTML = valuesRound[5]; 
        textThreeHitP3.innerHTML = valuesRound[6];
        textOneHitP4.innerHTML = valuesRound[7];
        textTwoHitP4.innerHTML = valuesRound[8];
        textThreeHitP4.innerHTML = valuesRound[9];
    }
    if(playerSelected == 3){
        textOneHitP1.innerHTML = valuesRound[1]; 
        textTwoHitP1.innerHTML = valuesRound[2]; 
        textThreeHitP1.innerHTML = valuesRound[3]; 
        textOneHitP2.innerHTML = valuesRound[4]; 
        textTwoHitP2.innerHTML = valuesRound[5]; 
        textThreeHitP2.innerHTML = valuesRound[6]; 
        textHealthP3.innerHTML = valuesRound[0];
        textOneHitP4.innerHTML = valuesRound[7];
        textTwoHitP4.innerHTML = valuesRound[8];
        textThreeHitP4.innerHTML = valuesRound[9]; 
    }
    if(playerSelected == 4){
        textOneHitP1.innerHTML = valuesRound[1]; 
        textTwoHitP1.innerHTML = valuesRound[2]; 
        textThreeHitP1.innerHTML = valuesRound[3]; 
        textOneHitP2.innerHTML = valuesRound[4]; 
        textTwoHitP2.innerHTML = valuesRound[5]; 
        textThreeHitP2.innerHTML = valuesRound[6]; 
        textOneHitP3.innerHTML = valuesRound[7]; 
        textTwoHitP3.innerHTML = valuesRound[8]; 
        textThreeHitP3.innerHTML = valuesRound[9];
        textHealthP4.innerHTML = valuesRound[0];
    }
}

/*Abrir Reglas*/
function OpenRules(){
    window.open("Reglas.pdf");
}