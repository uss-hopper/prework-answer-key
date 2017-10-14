window.onload = function() {
  init();
}


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

function changeBGColor(element, red, green, blue) {
  rgbVal = [red, green, blue].join(',') 
  element.style.backgroundColor = 'rgb(' + rgbVal + ')';
}

function changeValueDisplay(red, green, blue){
    let redVal = document.getElementById("redVal");
    let greenVal = document.getElementById("greenVal");
    let blueVal = document.getElementById("blueVal");

    redVal.innerText = red;
    greenVal.innerText = green;
    blueVal.innerText = blue;
}
