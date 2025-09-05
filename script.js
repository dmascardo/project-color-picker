document.addEventListener("DOMContentLoaded", initColorPicker);

function initColorPicker() {
    const colorBox = document.getElementById("color-box");
    const rgb = {
        red: document.getElementById("red"),
        green: document.getElementById("green"),
        blue: document.getElementById("blue"),
    };

    const labels = {
        red: document.getElementById("red-value"),
        green: document.getElementById("green-value"),
        blue: document.getElementById("blue-value"),
    };

    if (!colorBox || !rgb.red || !rgb.green || !rgb.blue) {
        console.error("Color picker setup aborted: missing element(s). Expected ids: #color-box, #red, #green, #blue");
        return;
    }

    setColorPickerEventListeners(colorBox, rgb, labels);
    updateColor(colorBox, rgb, labels);
}

function setColorPickerEventListeners(colorBox, rgb, labels) {
    const handler = () => updateColor(colorBox, rgb, labels);

    setBoxBGColor(colorBox, 150, 150, 150);

    rgb.red.addEventListener("input", handler);
    rgb.green.addEventListener("input", handler);
    rgb.blue.addEventListener("input", handler);
}

function setBoxBGColor(colorBox, red, green, blue) {
    const rgbVal = [red, green, blue].join(",");
    colorBox.style.backgroundColor = `rgb(${rgbVal})`;
    console.log(`rgb(${rgbVal})`);
}

function updateColor(colorBox, rgb, labels) {
    const r = Number(rgb.red.value || 0);
    const g = Number(rgb.green.value || 0);
    const b = Number(rgb.blue.value || 0);

    setBoxBGColor(colorBox, r, g, b);

    labels.red.textContent = r;
    labels.green.textContent = g;
    labels.blue.textContent = b;
}
