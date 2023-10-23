document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("inp");
    const buttons = document.querySelectorAll("input[type='button']");
    let currentInput = "";
    let history = "";
  
    // Function to update the display
    function updateDisplay() {
      display.value = currentInput || "0";
    }
  
    // Function to handle button clicks
    function handleButtonClick(value) {
      if (!isNaN(value) || value === ".") {
        // If it's a number or ".", add it to the current input
        currentInput += value;
      } else if (value === "=") {
        // If it's "=", evaluate the expression
        try {
          currentInput = eval(currentInput).toString();
        } catch (error) {
          currentInput = "Error";
        }
      } else if (value === "AC") {
        // If it's "AC", clear the current input and history
        currentInput = "";
        history = "";
      } else if (value === "DE") {
        // If it's "DE", delete the last character from the current input
        currentInput = currentInput.slice(0, -1);
      } else {
        // Otherwise, it's an operator (+, -, *, /)
        currentInput += value;
      }
  
      // Update the history with the current input
      history = currentInput;
  
      updateDisplay();
    }
  
    // Add click event listeners to all buttons
    buttons.forEach((button) => {
      button.addEventListener("click", function (e) {
        const value = e.target.value;
        handleButtonClick(value);
      });
    });
  });
  