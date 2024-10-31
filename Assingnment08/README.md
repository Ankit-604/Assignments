
# Calculator App

This is a simple calculator built with HTML, CSS, and JavaScript (DOM Manipulation). It performs basic arithmetic operations like addition, subtraction, multiplication, division, percentage calculation, and includes a clear, backspace, and equals button.

## Features

- Basic arithmetic operations: addition (+), subtraction (-), multiplication (×), division (÷)
- Clear (`C`) button to reset the calculator
- Backspace button to remove the last entered digit
- Percentage (`%`) calculation
- Full expression display (e.g., `8 * 5 = 40`)
- Styled using CSS for a modern look, with circular buttons and hover effects
- Responsive design with CSS Grid for button layout
- Footer displaying the author's name

## Screenshots

### Calculator Interface
![Calculator without operation](first_without_any_operation.png)

### Calculator in Use
![Calculator with operation](working.png)

## Technologies Used

- **HTML**: Structure of the calculator and buttons
- **CSS**: Styling of the calculator, including hover effects, colors, and button shapes
- **JavaScript**: Logic for calculations, handling button clicks, and dynamically updating the display using DOM methods like `document.querySelector()` and `innerHTML`

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/calculator-app.git
   ```
2. Open `index.html` in your browser to use the calculator.

## Code Overview

- **HTML (`index.html`)**: Defines the structure of the calculator, including buttons, display area, and footer.
- **CSS (`styles.css`)**: Styles the calculator for a user-friendly interface with circular buttons and a responsive grid layout.
- **JavaScript (`script.js`)**: Manages calculator functionality through DOM manipulation, including arithmetic operations, percentage calculations, and updating the display in real-time.

## How to Use

- Click on numbers and operators to build your expression.
- Use the `%` button to calculate percentages.
- Press `=` to get the result, which will show the full expression (e.g., `8 * 5 = 40`).
- Use `C` to clear the display or backspace to remove the last digit.
- The footer displays "Made by Ankit Kumar Sharma."

## Example Expressions

- `8 * 5 = 40`
- `50 % = 0.5`
- `10 + 25 % = 10.25`

## Author

- **Ankit Kumar Sharma**
