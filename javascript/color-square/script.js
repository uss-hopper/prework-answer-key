window.onload = function() {
  init();
}

/**
 * Initialize the references to HTML values.
 */
function init() {
  let colorBox = document.getElementById("color-box");
  let rgb = {
      red: document.getElementById("red"),
      green: document.getElementById("green"),
      blue: document.getElementById("blue"),
  };
  let colorPickers = document.getElementsByClassName("picker");

  setBGColorChangeListeners(colorBox, rgb, colorPickers);
}

/**
 * Sets the change listeners onto the input elements passed in order to change the background color.
 * @param Element backgroundElement: An HTML element that has a background-color style element
 * @param {red: obj, green: obj, blue: obj} colors: an object of 3 objects [red, green, blue] that have a value property
 * @param HTMLCollection pickerElements: An array of input elementRefs that are able to accept some kind 
 *   of number input value, i.e. number, range, text, etc...
 */
function setBGColorChangeListeners(backgroundElement, colors, pickerElements) {
  let classLen = pickerElements.length;
  for (let i = 0; i < classLen; i++) {
    pickerElements[i].addEventListener('change', () => {
        r = colors.red.value;
        g = colors.green.value;
        b = colors.blue.value;
        changeBGColor(backgroundElement, r, g, b);
        changeValueDisplay(r, g, b);
    });
  }
}

/**
 * Change the background-color style property of an HTML element, given 3 values.
 * @param Element element: an HTML element that has a background-color property
 * @param Number red: a number between 0-255
 * @param Number green: a number between 0-255
 * @param Number blue: a number between 0-255
 */
function changeBGColor(element, red, green, blue) {
  rgbVal = [red, green, blue].join(',') 
  element.style.backgroundColor = 'rgb(' + rgbVal + ')';
}

/**
 * Changes the innerText of 3 elements with the ids redVal, greenVal, blueVal
 * @param Number red: a number between 0-255
 * @param Number green: a number between 0-255
 * @param Number blue: a number between 0-255
 */
function changeValueDisplay(red, green, blue){
    let redVal = document.getElementById("redVal");
    let greenVal = document.getElementById("greenVal");
    let blueVal = document.getElementById("blueVal");

    redVal.innerText = red;
    greenVal.innerText = green;
    blueVal.innerText = blue;
}
