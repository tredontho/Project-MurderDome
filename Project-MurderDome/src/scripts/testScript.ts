
import { testControl } from '../classes/testControl';
import { Player } from '../classes/Player';
import { PriorityQueue } from '../classes/PriorityQueue';


//let _testControl: testControl = new testControl();
let players: Player[] = []

let enterBtn: HTMLButtonElement;
let output: HTMLDivElement;

function enterBtnClickHandler() {

    //


}

/**
 * Sets all the HTML Elements in _data.
 */
function populateDOMElementVariables() {

    players.push(new Player(document.getElementById("Player1") as HTMLDivElement, "Player1"));
    players.push(new Player(document.getElementById("Player2") as HTMLDivElement, "Player2"));
    players.push(new Player(document.getElementById("Player3") as HTMLDivElement, "Player3"));
    players.push(new Player(document.getElementById("Player4") as HTMLDivElement, "Player4"));
    players.push(new Player(document.getElementById("Player5") as HTMLDivElement, "Player5"));
    players.push(new Player(document.getElementById("Player6") as HTMLDivElement, "Player6"));
    players.push(new Player(document.getElementById("Player7") as HTMLDivElement, "Player7"));
    players.push(new Player(document.getElementById("Player8") as HTMLDivElement, "Player8"));

    enterBtn = document.getElementById("EnterBtn") as HTMLButtonElement;
    output = document.getElementById("Output") as HTMLDivElement;

    return;
}

/**
 * Adds listeners to the 'change' events of the input fields and the 'click' event of the button.
 */
function setUpInputBindings() {

    enterBtn.addEventListener("click", enterBtnClickHandler);

    return;
}

/**
 * initializes _data and the page for use.
 */
function init() {
    populateDOMElementVariables();
    setUpInputBindings();

    return;
}

window.onload = function () {
    init();

    return;
};




