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


export class Player {

    private static _playerActions: string[] = ["attack", "defend", "move", "follow", "rest", "wait"];

    private _parent: HTMLDivElement;
    private _container: HTMLDivElement;
    private _selectElement: HTMLSelectElement;
    private _outputElement: HTMLDivElement;
    private _changeEventHandler: EventListener;

    public name: string;
    public index: number;

    constructor(parent: HTMLDivElement, playerName: string) {

        this._parent = parent;
        this._container = document.createElement("div");
        this.name = playerName;

        this._container.appendChild(this._createLabel());
        this._container.appendChild(this._createSelect());
        this._container.appendChild(this._createOutputDiv());

        this._parent.appendChild(this._container);

        return
    }


    private _createLabel(): HTMLLabelElement {

        let label: HTMLLabelElement = document.createElement('label');
        label.setAttribute('for', this.name);
        label.innerText = this.name;

        return label;
    }

    private _createSelect(): HTMLSelectElement {

        let select: HTMLSelectElement = document.createElement('select');
        select.setAttribute('name', this.name);

        for (let i=0; i < Player._playerActions.length; i++) {
            select.appendChild(this._createOption(Player._playerActions[i]));
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
        //console.log(["Input", this._selectElement]);
        //console.log(["Output", this._outputElement]);
        if (this._selectElement && this._outputElement && this._selectElement.selectedIndex != -1 && this._selectElement.options.length > 0) {

            let selectedOption: HTMLOptionElement = this._selectElement.options.item(this._selectElement.selectedIndex);

            this._outputElement.innerHTML = selectedOption.value;
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
}