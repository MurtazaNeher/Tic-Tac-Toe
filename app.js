const turn = document.querySelector("#turn");
const xScore = document.querySelector("#x-score");
const xScoreHead = document.querySelector(".x-score");
const oScore = document.querySelector("#o-score");
const oScoreHead = document.querySelector(".o-score");
const totalMatches = document.querySelector("#total-matches");
const drawMatches = document.querySelector("#draw-matches");
const b1 = document.querySelector("#box-1");
const b3 = document.querySelector("#box-3");
const b4 = document.querySelector("#box-4");
const b2 = document.querySelector("#box-2");
const b5 = document.querySelector("#box-5");
const b6 = document.querySelector("#box-6");
const b7 = document.querySelector("#box-7");
const b8 = document.querySelector("#box-8");
const b9 = document.querySelector("#box-9");
const clearBtn = document.querySelector("#clear-btn");
const resetBtn = document.querySelector("#reset-btn");
const multiplayerDiv = document.querySelector("#multiplayer-div");

let chance = 0;
let gameStart = 0;
let xScoreVar = 0;
let oScoreVar = 0;
let numberOfGamesPlayed = 0;
let numberOfMatchesDrawn = 0;
turn.innerHTML = "Turn : o";

function boxClickHAndler() {

    if (this.innerHTML != "x" && this.innerHTML != "o") {
        if (chance === 0) {
            this.innerHTML = "o";
            chance = 1;
            turn.innerHTML = "Turn : x";

        } else if (chance === 1) {
            this.innerHTML = "x";
            chance = 0;
            turn.innerHTML = "Turn : o";
        }
    }
    if (checkWin()) {
        chance--;
        if (chance == 0) {
            turn.style.color = "royalblue";
            turn.innerHTML = " o wins the game";
            oScoreVar++;
            numberOfGamesPlayed++;
            showScore();

        } else if (chance == -1) {
            turn.style.color = "royalblue";
            turn.innerHTML = " x wins the game";
            xScoreVar++;
            numberOfGamesPlayed++;
            showScore();
        }
        chance = 2;

    } else if (checkDraw()) {
        turn.style.color = "royalblue";
        turn.innerHTML = "Game Draw";
        numberOfGamesPlayed++;
        numberOfMatchesDrawn++;
        showScore();
    }
}

function checkWin() {
    if ((b1.innerHTML == b2.innerHTML && b1.innerHTML == b3.innerHTML && b1.innerHTML == "o") ||
        (b1.innerHTML == b2.innerHTML && b1.innerHTML == b3.innerHTML && b1.innerHTML == "x")) {
        b1.style.color = "royalblue";
        b2.style.color = "royalblue";
        b3.style.color = "royalblue";
        return true;

    } else if (
        (b1.innerHTML == b4.innerHTML && b1.innerHTML == b7.innerHTML && b1.innerHTML == "o") ||
        (b1.innerHTML == b4.innerHTML && b1.innerHTML == b7.innerHTML && b1.innerHTML == "x")) {

        b1.style.color = "royalblue";
        b4.style.color = "royalblue";
        b7.style.color = "royalblue";
        return true;

    } else if (
        (b1.innerHTML == b5.innerHTML && b1.innerHTML == b9.innerHTML && b1.innerHTML == "o") ||
        (b1.innerHTML == b5.innerHTML && b1.innerHTML == b9.innerHTML && b1.innerHTML == "x")) {

        b1.style.color = "royalblue";
        b5.style.color = "royalblue";
        b9.style.color = "royalblue";
        return true;

    } else if (
        (b3.innerHTML == b6.innerHTML && b3.innerHTML == b9.innerHTML && b3.innerHTML == "o") ||
        (b3.innerHTML == b6.innerHTML && b3.innerHTML == b9.innerHTML && b3.innerHTML == "x")) {

        b6.style.color = "royalblue";
        b9.style.color = "royalblue";
        b3.style.color = "royalblue";
        return true;

    } else if (
        (b3.innerHTML == b5.innerHTML && b3.innerHTML == b7.innerHTML && b3.innerHTML == "o") ||
        (b3.innerHTML == b5.innerHTML && b3.innerHTML == b7.innerHTML && b3.innerHTML == "x")) {

        b7.style.color = "royalblue";
        b5.style.color = "royalblue";
        b3.style.color = "royalblue";
        return true;

    } else if (
        (b2.innerHTML == b5.innerHTML && b2.innerHTML == b8.innerHTML && b2.innerHTML == "o") ||
        (b2.innerHTML == b5.innerHTML && b2.innerHTML == b8.innerHTML && b2.innerHTML == "x")) {

        b2.style.color = "royalblue";
        b5.style.color = "royalblue";
        b8.style.color = "royalblue";
        return true;

    } else if (
        (b4.innerHTML == b5.innerHTML && b4.innerHTML == b6.innerHTML && b4.innerHTML == "o") ||
        (b4.innerHTML == b5.innerHTML && b4.innerHTML == b6.innerHTML && b4.innerHTML == "x")) {

        b4.style.color = "royalblue";
        b5.style.color = "royalblue";
        b6.style.color = "royalblue";
        return true;

    } else if (

        (b7.innerHTML == b8.innerHTML && b7.innerHTML == b9.innerHTML && b7.innerHTML == "x") ||
        (b7.innerHTML == b8.innerHTML && b7.innerHTML == b9.innerHTML && b7.innerHTML == "o")) {
        b7.style.color = "royalblue";
        b8.style.color = "royalblue";
        b9.style.color = "royalblue";
        return true;
    } else {
        return false;
    }
}

function checkDraw() {
    if (
        (b1.innerHTML == "o" || b1.innerHTML == "x") &&
        (b2.innerHTML == "o" || b2.innerHTML == "x") &&
        (b3.innerHTML == "o" || b3.innerHTML == "x") &&
        (b4.innerHTML == "o" || b4.innerHTML == "x") &&
        (b5.innerHTML == "o" || b5.innerHTML == "x") &&
        (b6.innerHTML == "o" || b6.innerHTML == "x") &&
        (b7.innerHTML == "o" || b7.innerHTML == "x") &&
        (b8.innerHTML == "o" || b8.innerHTML == "x")) {
        return true;
    }
    return false;
}

function clear() {

    b1.innerHTML = b2.innerHTML = b3.innerHTML = b4.innerHTML = b5.innerHTML = b6.innerHTML = b7.innerHTML = b8.innerHTML = b9.innerHTML = "";

    if (gameStart == 0) {
        gameStart = 1;
        chance = 1;
        turn.style.color = "white";
        turn.innerHTML = "Turn : x";
    } else if (gameStart == 1) {
        gameStart = 0;
        chance = 0;
        turn.style.color = "white";
        turn.innerHTML = "Turn : o";
    }

    b1.style.color = "white";
    b2.style.color = "white";
    b3.style.color = "white";
    b4.style.color = "white";
    b5.style.color = "white";
    b6.style.color = "white";
    b7.style.color = "white";
    b8.style.color = "white";
    b9.style.color = "white";

}

function showScore() {
    totalMatches.innerHTML = numberOfGamesPlayed;
    xScore.innerHTML = xScoreVar;
    oScore.innerHTML = oScoreVar;
    drawMatches.innerHTML = numberOfMatchesDrawn;
}

function reset() {
    clear();
    chance = 0;
    gameStart = 0;
    xScoreVar = 0;
    oScoreVar = 0;
    numberOfGamesPlayed = 0;
    numberOfMatchesDrawn = 0;
    turn.style.color = "white";
    turn.innerHTML = "Turn : o";
    showScore();
}

b1.addEventListener("click", boxClickHAndler);
b2.addEventListener("click", boxClickHAndler);
b3.addEventListener("click", boxClickHAndler);
b4.addEventListener("click", boxClickHAndler);
b5.addEventListener("click", boxClickHAndler);
b6.addEventListener("click", boxClickHAndler);
b7.addEventListener("click", boxClickHAndler);
b8.addEventListener("click", boxClickHAndler);
b9.addEventListener("click", boxClickHAndler);
clearBtn.addEventListener("click", clear);
resetBtn.addEventListener("click", reset);