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
//# sourceMappingURL=Player.js.map