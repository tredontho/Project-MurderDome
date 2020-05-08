
import { testControl } from '../classes/testControl';


let _testControl: testControl = new testControl();


/**
 * Sets all the HTML Elements in _data.
 */
function populateDOMElementVariables() {

    _testControl.setInputElement(document.getElementById("TestSelect") as HTMLSelectElement);
    _testControl.setOutputElement(document.getElementById("Output") as HTMLDivElement);

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




