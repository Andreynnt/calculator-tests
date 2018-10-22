let buttons, screen;

if (typeof window === 'undefined') {
    class Screen {
        constructor() {
            this.innerHTML = '';
        }
    }
    screen = new Screen();
} else {
    buttons = document.querySelectorAll('.calculator__button');
    screen = document.querySelector('.calculator__answer');
}

export default class Calculator {
    constructor(screen) {
        this.screen = screen;
        this.state = {
            savedValue: 0,
            valueOnScreen: 0,
            performingMath: false
        }
    }

    buttonAction(buttonValue) {
        if (this.state.performingMath) {
            this.performMath(buttonValue);
        } else {
            this.onButtonPressed(buttonValue);
        }
    };

    onButtonPressed(buttonValue) {
        const buttonInt = parseInt(buttonValue);
        if (!isNaN(buttonInt)) {
            this.onDigitPressed(buttonValue);
        } else {
            this.onActionPressed(buttonValue);
        }
    }

    onDigitPressed(buttonValue) {
        if (this.screen.innerHTML === 'Error') {
            this.screen.innerHTML = 0;
            return;
        }

        let valueOnScreen = parseInt(this.screen.innerHTML);
        if (valueOnScreen === 0) {
            this.screen.innerHTML = buttonValue;
            return;
        }
        this.screen.innerHTML += buttonValue;
    }

    onActionPressed(buttonValue) {
        if (buttonValue === 'AC') {
            this.screen.innerHTML = '0';
            return;
        }

        if (buttonValue === '=') {
            this.screen.innerHTML = '0';
            return;
        }

        if (buttonValue === '±') {
            let valueOnScreen = this.screen.innerHTML;

            if (this.screen.innerHTML === 'Error') return;

            if (valueOnScreen.length > 0 && valueOnScreen[0] === '-') {
                this.screen.innerHTML = valueOnScreen.slice(1);
            } else if (valueOnScreen.length > 0){
                this.screen.innerHTML = '-' + valueOnScreen;
            }
            return;
        }

        if (buttonValue === '%') {
            if (this.screen.innerHTML === 'Error') return;
            const result = +this.screen.innerHTML / 100;
            this.screen.innerHTML = result;
            this.state.savedValue = result;
            return;
        }

        const valueOnScreen = parseFloat(this.screen.innerHTML);
        if (!isNaN(valueOnScreen)) {
            this.state.savedValue = parseFloat(this.screen.innerHTML);
        }
        this.state.savedOperation = buttonValue;
        this.screen.innerHTML = buttonValue;
        this.state.performingMath = true;
    }

    performMath(buttonValue) {
        const buttonInt = parseInt(buttonValue);
        if (!isNaN(buttonInt)) {
            // нажали на цифру
            this.screen.innerHTML += buttonValue;
        } else if (buttonValue === '=') {
            if (this.screen.innerHTML === '=') return;

            const valueOnScreen = parseInt(this.screen.innerHTML.slice(1));
            if (isNaN(valueOnScreen)) return;

            this.count(valueOnScreen);
        } else if (buttonValue === 'AC') {
            this.screen.innerHTML = '0';
            this.state.savedValue = 0;
            this.state.performingMath = false;
        } else {
            // сразу нажали на новую операцию
            this.count(parseInt(this.screen.innerHTML.slice(1)));
            this.state.savedOperation = buttonValue;
            this.onButtonPressed(buttonValue);
        }
    }

    count(value) {
        let result;

        if (this.state.savedOperation === '+') {
            result = this.state.savedValue + value;
        } else if (this.state.savedOperation === '-') {
            result = this.state.savedValue - value;
        } else if (this.state.savedOperation === 'x') {
            result = this.state.savedValue * value;
        } else if (this.state.savedOperation === '/') {
            if (value !== 0) {
                result = this.state.savedValue / value;
            } else {
                this.state.savedValue = 0;
                result = 'Error';
            }
        }
        this.screen.innerHTML = result;
        this.state.performingMath = false;
    };

    clearScreen() {
        this.screen.innerHTML = '';
    }

    getValueOnScreen() {
        return this.screen.innerHTML;
    }
}

const calculator = new Calculator(screen);

switch (typeof window) {
    case 'undefined':
        break;
    /* istanbul ignore next */
    case 'object': // really difficult to enter in a unit test for some reason
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                calculator.buttonAction(button.innerHTML);
            });
        });

        break;
}
