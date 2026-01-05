function convertTemperature() {
    const tempInput = document.getElementById("temperature").value;
    const from = document.getElementById("fromUnit").value;
    const to = document.getElementById("toUnit").value;
    const result = document.getElementById("result");

    if (tempInput === "") {
        result.innerHTML = "❌ Please enter a temperature";
        return;
    }

    if (isNaN(tempInput)) {
        result.innerHTML = "❌ Enter a valid number";
        return;
    }

    let temp = parseFloat(tempInput);

    // Convert to Celsius
    if (from === "F") temp = (temp - 32) * 5 / 9;
    if (from === "K") temp = temp - 273.15;

    // Convert from Celsius to target
    if (to === "F") temp = (temp * 9 / 5) + 32;
    if (to === "K") temp = temp + 273.15;

    result.innerHTML = `${temp.toFixed(2)} °${to}`;
}

function swapUnits() {
    const from = document.getElementById("fromUnit");
    const to = document.getElementById("toUnit");

    [from.value, to.value] = [to.value, from.value];
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}
