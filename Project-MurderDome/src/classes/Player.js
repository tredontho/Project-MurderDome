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
//# sourceMappingURL=Player.js.map