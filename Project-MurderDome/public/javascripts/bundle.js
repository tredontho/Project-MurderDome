(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Action {
    constructor(action) {
        this._action = action;
        this._setPriorityFromAction();
    }
    _setPriorityFromAction() {
        switch (this._action) {
            case ("attack"):
                this._priority = 1;
                break;
            case ("defend"):
                this._priority = 2;
                break;
            case ("move"):
                this._priority = 3;
                break;
            case ("follow"):
                this._priority = 4;
                break;
            case ("rest"):
                this._priority = 5;
                break;
            case ("wait"):
                this._priority = 6;
                break;
            default:
                this._priority = 1000;
                break;
        }
    }
    static comparator(a, b) {
        return a._priority < b._priority;
    }
    static isValidAction(action) {
        let isValid = false;
        switch (action) {
            case ("attack"):
            case ("defend"):
            case ("move"):
            case ("follow"):
            case ("rest"):
            case ("wait"):
                isValid = true;
                break;
            default:
                isValid = false;
                break;
        }
        return isValid;
    }
}
exports.Action = Action;
Action._playerActions = ["attack", "defend", "move", "follow", "rest", "wait"];

},{}],2:[function(require,module,exports){
"use strict";
//Example control
Object.defineProperty(exports, "__esModule", { value: true });
const Action_js_1 = require("./Action.js");
class Player {
    constructor(parent, playerName) {
        this._parent = parent;
        this._parent.classList.add("PlayerControl");
        this._container = document.createElement("div");
        this._container.classList.add("PlayerContainer");
        this._selectedAction = undefined;
        this.name = playerName;
        this._container.appendChild(this._createLabel());
        this._container.appendChild(this._createSelect());
        //this._container.appendChild(this._createOutputDiv());
        this._parent.appendChild(this._container);
        return;
    }
    _createLabel() {
        let label = document.createElement('label');
        label.classList.add("PlayerLabel");
        label.setAttribute('for', this.name);
        label.innerText = this.name;
        return label;
    }
    _createSelect() {
        let select = document.createElement('select');
        select.setAttribute('name', this.name);
        for (let i = 0; i < Action_js_1.Action._playerActions.length; i++) {
            select.appendChild(this._createOption(Action_js_1.Action._playerActions[i]));
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
        if (this._selectElement && this._selectElement.selectedIndex != -1 && this._selectElement.options.length > 0) {
            let selectedOption = this._selectElement.options.item(this._selectElement.selectedIndex);
            if (Action_js_1.Action.isValidAction(selectedOption.value)) {
                this._selectedAction = selectedOption.value;
            }
            else {
                this._selectedAction = undefined;
            }
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
        if (this._selectedAction) {
            if (this._selectElement && this._selectElement.selectedIndex != -1 && this._selectElement.options.length > 0) {
                let selectedOption = this._selectElement.options.item(this._selectElement.selectedIndex);
                if (Action_js_1.Action.isValidAction(selectedOption.value)) {
                    this._selectedAction = selectedOption.value;
                }
                else {
                    this._selectedAction = undefined;
                }
            }
        }
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
    getSelectedAction() {
        return this._selectedAction;
    }
}
exports.Player = Player;

},{"./Action.js":1}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = require("../classes/Player");
//let _testControl: testControl = new testControl();
let players = [];
let enterBtn;
let output;
function enterBtnClickHandler() {
    //
}
/**
 * Sets all the HTML Elements in _data.
 */
function populateDOMElementVariables() {
    players.push(new Player_1.Player(document.getElementById("Player1"), "Player1"));
    players.push(new Player_1.Player(document.getElementById("Player2"), "Player2"));
    players.push(new Player_1.Player(document.getElementById("Player3"), "Player3"));
    players.push(new Player_1.Player(document.getElementById("Player4"), "Player4"));
    players.push(new Player_1.Player(document.getElementById("Player5"), "Player5"));
    players.push(new Player_1.Player(document.getElementById("Player6"), "Player6"));
    players.push(new Player_1.Player(document.getElementById("Player7"), "Player7"));
    players.push(new Player_1.Player(document.getElementById("Player8"), "Player8"));
    enterBtn = document.getElementById("EnterBtn");
    output = document.getElementById("Output");
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

},{"../classes/Player":2}]},{},[3]);
