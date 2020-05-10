    //Example control

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

import { action } from '../types/types.js';
import { Action } from './Action.js';

export class Player {

    private _parent: HTMLDivElement;
    private _container: HTMLDivElement;
    private _selectElement: HTMLSelectElement;
    private _outputElement: HTMLDivElement;
    private _changeEventHandler: EventListener;
    private _selectedAction: action;

    public name: string;
    public index: number;

    constructor(parent: HTMLDivElement, playerName: string) {

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

        return
    }


    private _createLabel(): HTMLLabelElement {

        let label: HTMLLabelElement = document.createElement('label');
        label.classList.add("PlayerLabel");
        label.setAttribute('for', this.name);
        label.innerText = this.name;

        return label;
    }

    private _createSelect(): HTMLSelectElement {

        let select: HTMLSelectElement = document.createElement('select');
        select.setAttribute('name', this.name);

        for (let i=0; i < Action._playerActions.length; i++) {
            select.appendChild(this._createOption(Action._playerActions[i]));
        }
        this.setInputElement(select);

        return select;
    }

    private _createOption(action: string): HTMLOptionElement {

        let option: HTMLOptionElement = document.createElement('option');
        option.setAttribute('value', action);
        option.innerText = action;

        return option;
    }

    private _createOutputDiv(): HTMLDivElement {

        let output: HTMLDivElement = document.createElement('div');

        this.setOutputElement(output)

        return output;
    }

    private _defaultChangeEventHandler(): void {

        if (this._selectElement && this._selectElement.selectedIndex != -1 && this._selectElement.options.length > 0) {

            let selectedOption: HTMLOptionElement = this._selectElement.options.item(this._selectElement.selectedIndex);

            if (Action.isValidAction(selectedOption.value)) {
                this._selectedAction = selectedOption.value as action;
            } else {
                this._selectedAction = undefined;
            }
        }
        return
    }

    private _attachChangeEventHandler(): void {
        if (this._selectElement && this._changeEventHandler) {
            this._selectElement.addEventListener("change", this._changeEventHandler);
        }
    }

    private _detachChangeEventHandler(): void {
        if (this._selectElement && this._changeEventHandler) {
            this._selectElement.removeEventListener("change", this._changeEventHandler);
        }
    }

    public setInputElement(element: HTMLSelectElement, handler?: EventListener): void {
        this._detachChangeEventHandler();
        this._selectElement = element;
        if (this._selectedAction) {
            if (this._selectElement && this._selectElement.selectedIndex != -1 && this._selectElement.options.length > 0) {

                let selectedOption: HTMLOptionElement = this._selectElement.options.item(this._selectElement.selectedIndex);

                if (Action.isValidAction(selectedOption.value)) {
                    this._selectedAction = selectedOption.value as action;
                } else {
                    this._selectedAction = undefined;
                }
            }
        }
        this.setChangeEventHandler(handler);
    }

    public setOutputElement(element: HTMLDivElement): void {
        this._outputElement = element;
    }

    public setChangeEventHandler(handler?: EventListener): void {
        this._detachChangeEventHandler()
        if (handler) {
            this._changeEventHandler = handler;
        } else {
            this._changeEventHandler = () => {
                this._defaultChangeEventHandler();
            };
        }
        this._attachChangeEventHandler()
    }

    public getSelectedAction(): action {
        return this._selectedAction;
    }
}