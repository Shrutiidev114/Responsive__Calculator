const display = document.getElementById("display");

// Add numbers and operators
function appendValue(value) {
  if (display.value === "Error") {
    display.value = "0";
  }

  if (display.value === "0" && value !== ".") {
    display.value = value;
  } else {
    display.value += value;
  }

  scrollDisplay();
}

// Automatically move display to the right
function scrollDisplay() {
  display.scrollLeft = display.scrollWidth;
}

// Clear calculator
function clearDisplay() {
  display.value = "0";
  scrollDisplay();
}

// Delete last character
function deleteLast() {
  display.value =
    display.value.length > 1
      ? display.value.slice(0, -1)
      : "0";

  scrollDisplay();
}

// Calculate expression
function calculate() {
  try {
    const expression = display.value;

    // Allow only calculator characters
    if (!/^[0-9+\-*/%.]+$/.test(expression)) {
      throw new Error();
    }

    // Break expression into numbers and operators
    const tokens = expression.match(/\d*\.?\d+|[+\-*/%]/g);

    if (!tokens) {
      throw new Error();
    }

    let numbers = [];
    let operators = [];

    tokens.forEach(token => {
      if (/[+\-*/%]/.test(token)) {
        operators.push(token);
      } else {
        numbers.push(Number(token));
      }
    });

    // Multiplication, division and percentage
    for (let i = 0; i < operators.length; i++) {

      if ("*/%".includes(operators[i])) {

        const a = numbers[i];
        const b = numbers[i + 1];

        if (
          (operators[i] === "/" || operators[i] === "%") &&
          b === 0
        ) {
          throw new Error();
        }

        let result;

        if (operators[i] === "*") {
          result = a * b;
        }

        if (operators[i] === "/") {
          result = a / b;
        }

        if (operators[i] === "%") {
          result = a % b;
        }

        numbers.splice(i, 2, result);
        operators.splice(i, 1);

        i--;
      }
    }

    // Addition and subtraction
    let result = numbers[0];

    for (let i = 0; i < operators.length; i++) {

      if (operators[i] === "+") {
        result += numbers[i + 1];
      }

      if (operators[i] === "-") {
        result -= numbers[i + 1];
      }
    }

    if (!Number.isFinite(result)) {
      throw new Error();
    }

    display.value = result;

    scrollDisplay();

  } catch {
    display.value = "Error";
    scrollDisplay();
  }
}

// Keyboard support
document.addEventListener("keydown", function(event) {

  const key = event.key;

  if ("0123456789.+-*/%".includes(key)) {
    appendValue(key);
  }

  else if (key === "Enter") {
    calculate();
  }

  else if (key === "Escape") {
    clearDisplay();
  }

  else if (key === "Backspace") {
    deleteLast();
  }
});
