(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class testControl {
    constructor(input, output, handler) {
        this.setChangeEventHandler(handler);
        this.setInputElement(input);
        this.setOutputElement(output);
        return;
    }
    _defaultChangeEventHandler() {
        //console.log(["Input", this._inputElement]);
        //console.log(["Output", this._outputElement]);
        if (this._inputElement && this._outputElement && this._inputElement.selectedIndex != -1 && this._inputElement.options.length > 0) {
            let selectedOption = this._inputElement.options.item(this._inputElement.selectedIndex);
            this._outputElement.innerHTML = selectedOption.value;
        }
        return;
    }
    _attachChangeEventHandler() {
        if (this._inputElement && this._changeEventHandler) {
            this._inputElement.addEventListener("change", this._changeEventHandler);
        }
    }
    _detachChangeEventHandler() {
        if (this._inputElement && this._changeEventHandler) {
            this._inputElement.removeEventListener("change", this._changeEventHandler);
        }
    }
    setInputElement(element, handler) {
        this._detachChangeEventHandler();
        this._inputElement = element;
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
exports.testControl = testControl;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testControl_1 = require("../classes/testControl");
let _testControl = new testControl_1.testControl();
/**
 * Sets all the HTML Elements in _data.
 */
function populateDOMElementVariables() {
    _testControl.setInputElement(document.getElementById("TestSelect"));
    _testControl.setOutputElement(document.getElementById("Output"));
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

},{"../classes/testControl":1}]},{},[2]);
