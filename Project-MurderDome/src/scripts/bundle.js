(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
//Example control
Object.defineProperty(exports, "__esModule", { value: true });
//<div>
//  <label for= "Player1" > Player 1 < /label>
//  < select name = "Player1" id = "TestSelect" >
//      <option value="" > --Please choose an option-- < /option>
//      < option value = "attack" > Attack < /option>
//      < option value = "defend" > Defend < /option>
//      < option value = "move" > Move < /option>
//      < option value = "follow" > Follow < /option>
//      < option value = "rest" > Rest < /option>
//      < option value = "wait" > Wait < /option>
//  < /select>
//  <div></div>
//</div>
class Player {
    constructor(parent, playerName) {
        this._parent = parent;
        this._container = document.createElement("div");
        this.name = playerName;
        this._container.appendChild(this._createLabel());
        this._container.appendChild(this._createSelect());
        this._container.appendChild(this._createOutputDiv());
        this._parent.appendChild(this._container);
        return;
    }
    _createLabel() {
        let label = document.createElement('label');
        label.setAttribute('for', this.name);
        label.innerText = this.name;
        return label;
    }
    _createSelect() {
        let select = document.createElement('select');
        select.setAttribute('name', this.name);
        for (let i = 0; i < Player._playerActions.length; i++) {
            select.appendChild(this._createOption(Player._playerActions[i]));
        }
        this.setInputElement(select);
        return select;
    }
    _createOption(action) {
        let option = document.createElement('option');
        option.setAttribute('value', action);
        option.innerText = action;
        return option;
    }
    _createOutputDiv() {
        let output = document.createElement('div');
        this.setOutputElement(output);
        return output;
    }
    _defaultChangeEventHandler() {
        //console.log(["Input", this._selectElement]);
        //console.log(["Output", this._outputElement]);
        if (this._selectElement && this._outputElement && this._selectElement.selectedIndex != -1 && this._selectElement.options.length > 0) {
            let selectedOption = this._selectElement.options.item(this._selectElement.selectedIndex);
            this._outputElement.innerHTML = selectedOption.value;
        }
        return;
    }
    _attachChangeEventHandler() {
        if (this._selectElement && this._changeEventHandler) {
            this._selectElement.addEventListener("change", this._changeEventHandler);
        }
    }
    _detachChangeEventHandler() {
        if (this._selectElement && this._changeEventHandler) {
            this._selectElement.removeEventListener("change", this._changeEventHandler);
        }
    }
    setInputElement(element, handler) {
        this._detachChangeEventHandler();
        this._selectElement = element;
        this.setChangeEventHandler(handler);
    }
    setOutputElement(element) {
        this._outputElement = element;
    }
    setChangeEventHandler(handler) {
        this._detachChangeEventHandler();
        if (handler) {
            this._changeEventHandler = handler;
        }
        else {
            this._changeEventHandler = () => {
                this._defaultChangeEventHandler();
            };
        }
        this._attachChangeEventHandler();
    }
}
exports.Player = Player;
Player._playerActions = ["attack", "defend", "move", "follow", "rest", "wait"];

},{}],2:[function(require,module,exports){
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

},{"../classes/Player":1}]},{},[2]);
