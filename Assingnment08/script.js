// Get references to DOM elements
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let expression = ""; // To store the full expression

// Add event listeners to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");
    const operator = button.getAttribute("data-operator");
    const isControl = button.classList.contains("control");

    if (isControl) {
      // Handle control buttons (clear and backspace)
      if (button.id === "clear") {
        expression = "";
        display.innerHTML = "0";
      } else if (button.id === "backspace") {
        expression = expression.slice(0, -1);
        display.innerHTML = expression || "0";
      } else if (button.id === "percent") {
        // Handle percentage calculation
        const lastNumberMatch = expression.match(/(\d+\.?\d*)$/);
        if (lastNumberMatch) {
          const lastNumber = parseFloat(lastNumberMatch[0]);
          const percentageValue = lastNumber / 100;
          expression = expression.replace(/(\d+\.?\d*)$/, percentageValue);
          display.innerHTML = expression;
        }
      }
    } else if (operator) {
      // Handle operators
      expression += ` ${operator} `;
      display.innerHTML = expression;
    } else if (button.id === "equals") {
      // Evaluate the expression on equals
      try {
        const result = eval(expression.replace("÷", "/").replace("×", "*"));
        display.innerHTML = `${expression} = ${result}`;
        expression = result.toString(); // Set expression to result for chaining calculations
      } catch {
        display.innerHTML = "Error";
        expression = "";
      }
    } else {
      // Handle digit and decimal point buttons
      const digit = button.getAttribute("data-value") || button.innerText;
      expression += digit;
      display.innerHTML = expression;
    }
  });
});
