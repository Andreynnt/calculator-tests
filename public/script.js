let buttons;
import Calculator from './calculator.js';

switch (typeof window) {
    case 'undefined':
        break;
    /* istanbul ignore next */
    case 'object':
        buttons = document.querySelectorAll('.calculator__button');
        screen = document.querySelector('.calculator__answer');
        break;
}

const calculator = new Calculator();

switch (typeof window) {
    case 'undefined':
        break;
    /* istanbul ignore next */
    case 'object': // really difficult to enter in a unit test for some reason
        let answer = '';
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                answer = calculator.buttonAction(button.innerHTML);
                screen.innerHTML = answer;
            });
        });
        break;
}
