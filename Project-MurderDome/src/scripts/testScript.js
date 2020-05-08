"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = require("../classes/Player");
//let _testControl: testControl = new testControl();
let players = [];
/**
 * Sets all the HTML Elements in _data.
 */
function populateDOMElementVariables() {
    //_testControl.setInputElement(document.getElementById("TestSelect") as HTMLSelectElement);
    //_testControl.setOutputElement(document.getElementById("Output") as HTMLDivElement);
    players.push(new Player_1.Player(document.getElementById("Player1"), "Player1"));
    players.push(new Player_1.Player(document.getElementById("Player2"), "Player2"));
    players.push(new Player_1.Player(document.getElementById("Player3"), "Player3"));
    players.push(new Player_1.Player(document.getElementById("Player4"), "Player4"));
    players.push(new Player_1.Player(document.getElementById("Player5"), "Player5"));
    players.push(new Player_1.Player(document.getElementById("Player6"), "Player6"));
    players.push(new Player_1.Player(document.getElementById("Player7"), "Player7"));
    players.push(new Player_1.Player(document.getElementById("Player8"), "Player8"));
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
//# sourceMappingURL=testScript.js.map