export default class Calculator {
    constructor() {
        this.valueOnScreen = '';
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
        return this.valueOnScreen;
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
        if (this.valueOnScreen === 'Error') {
            this.valueOnScreen = '0';
            return;
        }

        let valueOnScreen = parseInt(this.valueOnScreen);
        if (valueOnScreen === 0) {
            this.valueOnScreen = buttonValue;
            return;
        }
        this.valueOnScreen += buttonValue;
        //this.screen.innerHTML += buttonValue;
    }

    onActionPressed(buttonValue) {
        if (buttonValue === 'AC') {
            this.valueOnScreen = '0';
            this.state.performingMath = false;
            return;
        }

        if (buttonValue === '=') {
            this.valueOnScreen = '0';
            return;
        }

        if (buttonValue === '±') {
            let valueOnScreen = this.valueOnScreen;

            if (this.valueOnScreen === 'Error') return;

            if (valueOnScreen.length > 0 && valueOnScreen[0] === '-') {
                this.valueOnScreen = valueOnScreen.slice(1);
                //this.screen.innerHTML = valueOnScreen.slice(1);
            } else if (valueOnScreen.length > 0){
                this.valueOnScreen = '-' + valueOnScreen;
                //this.screen.innerHTML = '-' + valueOnScreen;
            }
            return;
        }

        if (buttonValue === '%') {
            if (this.valueOnScreen === 'Error') return;
            const result = +this.valueOnScreen / 100;
            this.valueOnScreen = result;
            this.state.savedValue = result;
            return;
        }

        const valueOnScreen = parseFloat(this.valueOnScreen);
        if (!isNaN(valueOnScreen)) {
            this.state.savedValue = parseFloat(this.valueOnScreen);
        }
        this.state.savedOperation = buttonValue;
        this.valueOnScreen = buttonValue;
        this.state.performingMath = true;
    }

    performMath(buttonValue) {
        const buttonInt = parseInt(buttonValue);
        if (!isNaN(buttonInt)) {
            // нажали на цифру
            this.valueOnScreen += buttonValue;
        } else if (buttonValue === '=') {
            const valueOnScreen = parseInt(this.valueOnScreen.slice(1));
            this.count(valueOnScreen);
        } else if (buttonValue === 'AC') {
            this.valueOnScreen = '0';
            this.state.savedValue = 0;
            this.state.performingMath = false;
        } else {
            // сразу нажали на новую операцию
            this.count(parseInt(this.valueOnScreen.slice(1)));
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
        this.valueOnScreen = result;
        this.state.performingMath = false;
    };

    clearScreen() {
        this.valueOnScreen = '';
    }
}
