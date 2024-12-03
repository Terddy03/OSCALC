function appendToDisplay(value) {
    let display = document.getElementById("display");
    display.value += value; // Append value to display
}

function clearDisplay() {
    let display = document.getElementById("display");
    display.value = ""; // Clear the display
}

function calculate() {
    let display = document.getElementById("display");
    let expression = display.value;
    let result;

    try {
        // Convert trigonometric function inputs from degrees to radians
        expression = expression.replace(/sin\(/g, 'sin(' + Math.PI / 180 + '*');
        expression = expression.replace(/cos\(/g, 'cos(' + Math.PI / 180 + '*');
        expression = expression.replace(/tan\(/g, 'tan(' + Math.PI / 180 + '*');

        result = math.evaluate(expression);
        display.value = result;

        // Show notification with the specified message
        showNotification("Inocentes, Florencio, Espiritu (2024)");
    } catch (error) {
        display.value = "Error";
        // Optionally show a different notification for errors
        showNotification("Error in calculation!");
    }
}

function showNotification(message) {
    const notification = document.getElementById("notification");
    notification.textContent = message; // Set the message
    notification.classList.remove("hidden"); // Remove the hidden class
    notification.classList.add("show"); // Add the show class

    // Hide the notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove("show"); // Remove the show class
        notification.classList.add("hidden"); // Add the hidden class
    }, 3000);
}
// Show notification on page load
document.addEventListener("DOMContentLoaded", () => {
    showNotification("Inocentes, Florencio, Espiritu (2024)");
});

// Keyboard event listener
document.addEventListener("keydown", (event) => {
    const key = event.key;

    // Handle number keys
    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    }
    
    // Handle operators
    if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    }

    // Handle clear
    if (key === 'c' || key === 'C') {
        clearDisplay();
    }

    // Handle calculation
    if (key === '=' || key === 'Enter') {
        calculate();
    }

    // Handle backspace
    if (key === 'Backspace') {
        backspace();
    }
});

function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}