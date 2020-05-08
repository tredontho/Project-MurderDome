

export class testControl {

    private _parent: HTMLDivElement;
    private _container: HTMLDivElement;
    private _inputElement: HTMLSelectElement;
    private _outputElement: HTMLDivElement;
    private _changeEventHandler: EventListener;

    public name: string;
    public index: number;

    constructor(parent: HTMLDivElement, playerName: string) {

        this._parent = parent;
        this._container = document.createElement("div");
        let input: HTMLSelectElement = document.createElement("select", )
        let output: HTMLDivElement

        this.setInputElement(input);
        this.setOutputElement(output);

        this._parent.appendChild(this._container);

        return
    }


    private _defaultChangeEventHandler(): void {
        //console.log(["Input", this._inputElement]);
        //console.log(["Output", this._outputElement]);
        if (this._inputElement && this._outputElement && this._inputElement.selectedIndex != -1 && this._inputElement.options.length > 0) {

            let selectedOption: HTMLOptionElement = this._inputElement.options.item(this._inputElement.selectedIndex);

            this._outputElement.innerHTML = selectedOption.value;
        }
        return
    }

    private _attachChangeEventHandler(): void {
        if (this._inputElement && this._changeEventHandler) {
            this._inputElement.addEventListener("change", this._changeEventHandler);
        }
    }

    private _detachChangeEventHandler(): void {
        if (this._inputElement && this._changeEventHandler) {
            this._inputElement.removeEventListener("change", this._changeEventHandler);
        }
    }

    public setInputElement(element: HTMLSelectElement, handler?: EventListener): void {
        this._detachChangeEventHandler();
        this._inputElement = element;
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