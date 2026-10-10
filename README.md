🧮 Responsive Calculator

A modern and responsive calculator built using HTML5, CSS3, and JavaScript. The calculator features a dark glassmorphism-inspired interface, gold accents, a black-and-white background image, keyboard support, responsive design, horizontal display scrolling, and a custom expression evaluator without using JavaScript's eval() or Function() methods.

✨ Features

🔢 Basic arithmetic operations

Addition +

Subtraction −

Multiplication ×

Division ÷

Modulus %

🔢 Decimal number support

🧹 AC button to clear the calculator

⌫ DEL button to delete the last character

⌨️ Keyboard support

📱 Responsive design for desktop, tablet, and mobile devices

🖼️ Custom black-and-white background image

✨ Glassmorphism-inspired calculator interface

🏆 Dark and gold color theme

↔️ Automatic horizontal scrolling for long expressions

➗ Operator precedence for multiplication, division, and modulus

⚠️ Error handling for invalid calculations and division by zero

🔐 No eval() or Function() used for expression evaluation

🎨 Button hover and click animations

🚀 Live Demo

🔗 Live Demo:(https://shrutiidev114.github.io/Responsive__Calculator/)


🛠️ Technologies Used
Technology	Purpose
HTML5	Calculator structure and buttons
CSS3	Styling, responsive layout, animations, and glassmorphism effects
JavaScript	Calculator functionality, keyboard support, and expression evaluation
📁 Project Structure
calculator/
│
├── index.html
├── style.css
├── script.js
│
└── image/
    └── background image.jpeg

🚀 How to Run
1. Clone the repository
git clone https://github.com/Shrutiidev114/CALCULATOR-PROJECT-.git

2. Open the project directory
cd calculator

3. Check the background image

Make sure your background image is located at:

image/background image.jpeg

4. Run the calculator

Open index.html in any modern web browser.

No frameworks, packages, or additional dependencies are required.

That's it! 🎉

🎮 Keyboard Controls
Key	Action
0-9	Enter numbers
+	Addition
-	Subtraction
*	Multiplication
/	Division
%	Modulus
.	Decimal point
Enter	Calculate result
Backspace	Delete the last character
Escape	Clear the calculator
🧮 How Calculation Works

The calculator does not use JavaScript's eval() or Function() methods.

Instead, the JavaScript code:

Validates the entered expression.

Breaks the expression into numbers and operators.

Processes multiplication, division, and modulus first.

Processes addition and subtraction afterward.

Checks for invalid results and division or modulus by zero.

Displays the final result.

For example:

10 + 5 * 2


is processed as:

10 + (5 * 2)


and produces:

20


This provides basic mathematical operator precedence while avoiding direct execution of JavaScript code.

🔐 Security

This calculator intentionally avoids:

eval()


and:

Function()


Instead, it uses a custom expression-processing approach to handle supported calculator operations.

The calculator also checks the expression format and prevents division or modulus by zero from producing invalid results.

Note: Avoiding eval() does not automatically make every expression parser secure. The calculator is designed to accept only the limited set of characters and operations required for this project.

🎨 Design

The calculator uses a modern dark interface with gold accents.

Design elements include:

🌑 Dark calculator panel

🏆 Gold operator and equals buttons

🔴 Red clear button

🪟 Glass-inspired styling

🌄 Black-and-white background image

✨ Gold glow effects

🎯 Rounded buttons and display

🖱️ Hover animations

👆 Button click animations

📱 Responsive mobile layout

📱 Responsive Design

The calculator automatically adjusts its size on smaller screens using CSS media queries.

Supported devices

💻 Desktop

💻 Laptop

📱 Tablet

📱 Mobile

On screens smaller than 400px, the calculator reduces its width, display size, button height, and font sizes to provide a better mobile experience.

📐 Calculator Layout

The calculator uses a CSS Grid layout with four columns.

The 0 button spans two columns to create a familiar calculator layout.

┌─────┬─────┬─────┬─────┐
│ AC  │ DEL │  %  │  ÷  │
├─────┼─────┼─────┼─────┤
│  7  │  8  │  9  │  ×  │
├─────┼─────┼─────┼─────┤
│  4  │  5  │  6  │  −  │
├─────┼─────┼─────┼─────┤
│  1  │  2  │  3  │  +  │
├───────────┼─────┼─────┤
│     0     │  .  │  =  │
└───────────┴─────┴─────┘

📚 What I Learned

Building this project helped me practice:

Creating responsive layouts with CSS Grid

Using CSS media queries

Manipulating the DOM with JavaScript

Handling button events

Handling keyboard events

Processing mathematical expressions

Implementing operator precedence

Handling calculation errors

Working with regular expressions

Creating CSS hover and click animations

Creating glassmorphism-inspired interfaces

Building a project without external JavaScript libraries

Preparing a frontend project for public deployment

🔮 Future Improvements

Possible future improvements include:

🧪 Scientific calculator functions

📜 Calculation history

🌓 Dark/light theme switching

📋 Copy result button

💾 Memory functions

M+

M-

MR

MC

🔢 Improved large-number precision

📐 Advanced mathematical operations

⌨️ More advanced keyboard interactions

🧹 Improved validation for malformed expressions

📊 Calculation history stored using local storage

🌐 Deployment

This project can be deployed easily using static hosting platforms such as:

GitHub Pages

Netlify

Vercel

Because the project uses only HTML, CSS, JavaScript, and an image, no backend server is required.

👨‍💻 Author

SHRUTI KUMARI

GitHub: https://github.com/Shrutiidev114

If you found this project useful or interesting, consider giving the repository a ⭐!

📄 License

This project is available under the MIT License.

You are free to use, modify, and distribute the project according to the terms of the license.
