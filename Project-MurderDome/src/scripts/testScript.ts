
import { Player } from '../classes/Player';
import { Action } from '../classes/Action';
import { PriorityQueue } from '../classes/PriorityQueue';

let players: Player[] = []

let enterBtn: HTMLButtonElement;
let output: HTMLDivElement;
let actionsList: PriorityQueue;

function enterBtnClickHandler() {

    actionsList = new PriorityQueue(Action.comparator);

    console.log(actionsList);

    players.forEach(function (player, index) {
        actionsList.push(player.getSelectedAction());
    });

    //console.log(actionsList);


    actionsList.pop();
    //console.log(actionsList.pop());
    //console.log(actionsList.pop());


    //console.log(actionsList);

    //let actionLog: string = "";
    //while (!actions.isEmpty()) {

    //    console.log(actions.pop());
    //    //let curAction: Action = actions.pop();
    //    //console.log(curAction);
    //    //actionLog += curAction.owner + ": " + curAction.action + "<br/>";
    //}


//    output.innerHTML = actionLog;

}

function createPlayers() {

    players.push(new Player(document.getElementById("Player1") as HTMLDivElement, "Player1"));
    players.push(new Player(document.getElementById("Player2") as HTMLDivElement, "Player2"));
    players.push(new Player(document.getElementById("Player3") as HTMLDivElement, "Player3"));
    players.push(new Player(document.getElementById("Player4") as HTMLDivElement, "Player4"));
    players.push(new Player(document.getElementById("Player5") as HTMLDivElement, "Player5"));
    players.push(new Player(document.getElementById("Player6") as HTMLDivElement, "Player6"));
    //players.push(new Player(document.getElementById("Player7") as HTMLDivElement, "Player7"));
    //players.push(new Player(document.getElementById("Player8") as HTMLDivElement, "Player8"));

    return;
}

function setUpEnterBtn() {

    enterBtn = document.getElementById("EnterBtn") as HTMLButtonElement;
    output = document.getElementById("Output") as HTMLDivElement;

    enterBtn.addEventListener("click", enterBtnClickHandler);

    return;
}

function init() {
    createPlayers();
    setUpEnterBtn();

    return;
}

window.onload = function () {
    init();

    return;
};




