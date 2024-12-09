// Function to convert temperature based on selected units
function convertTemperature() {
    const tempInput = parseFloat(document.getElementById("tempInput").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;

    let result;

    // Convert temperature based on fromUnit and toUnit
    if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") {
            result = (tempInput * 9/5) + 32; // Celsius to Fahrenheit
        } else if (toUnit === "kelvin") {
            result = tempInput + 273.15; // Celsius to Kelvin
        } else {
            result = tempInput; // Celsius to Celsius
        }
    } else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
            result = (tempInput - 32) * 5/9; // Fahrenheit to Celsius
        } else if (toUnit === "kelvin") {
            result = ((tempInput - 32) * 5/9) + 273.15; // Fahrenheit to Kelvin
        } else {
            result = tempInput; // Fahrenheit to Fahrenheit
        }
    } else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
            result = tempInput - 273.15; // Kelvin to Celsius
        } else if (toUnit === "fahrenheit") {
            result = ((tempInput - 273.15) * 9/5) + 32; // Kelvin to Fahrenheit
        } else {
            result = tempInput; // Kelvin to Kelvin
        }
    }

    // Display the result
    document.getElementById("resultValue").innerText = result.toFixed(2);
}

// Event listener for convert button
document.getElementById("convertBtn").addEventListener("click", convertTemperature);
