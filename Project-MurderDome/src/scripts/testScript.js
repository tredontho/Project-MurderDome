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
//# sourceMappingURL=testScript.js.map