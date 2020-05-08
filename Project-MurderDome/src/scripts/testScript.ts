
import { testControl } from '../classes/testControl';
import { Player } from '../classes/Player';


//let _testControl: testControl = new testControl();
let players: Player[] = []

/**
 * Sets all the HTML Elements in _data.
 */
function populateDOMElementVariables() {

    //_testControl.setInputElement(document.getElementById("TestSelect") as HTMLSelectElement);
    //_testControl.setOutputElement(document.getElementById("Output") as HTMLDivElement);

    players.push(new Player(document.getElementById("Player1") as HTMLDivElement, "Player1"));
    players.push(new Player(document.getElementById("Player2") as HTMLDivElement, "Player2"));
    players.push(new Player(document.getElementById("Player3") as HTMLDivElement, "Player3"));
    players.push(new Player(document.getElementById("Player4") as HTMLDivElement, "Player4"));
    players.push(new Player(document.getElementById("Player5") as HTMLDivElement, "Player5"));
    players.push(new Player(document.getElementById("Player6") as HTMLDivElement, "Player6"));
    players.push(new Player(document.getElementById("Player7") as HTMLDivElement, "Player7"));
    players.push(new Player(document.getElementById("Player8") as HTMLDivElement, "Player8"));

    return;
}

/**
 * Adds listeners to the 'change' events of the input fields and the 'click' event of the button.
 */
function setUpInputBindings() {

    //Called when setting the input field
    //_data.attachChangeEventHandler();

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




