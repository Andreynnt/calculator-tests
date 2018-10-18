import Calculator from '../public/script.js';
import '../node_modules/chai/chai.js';
import {minusTests, plusTests, multiplyTests, plusMinusTests,
    divisionTests, divisionByZeroTests, percentTests} from './examples.js';

const screen = document.createElement('div');
const calculator = new Calculator(screen);

const digitButtons =[
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
];

const textButtons = [
    ',', 'AC', '/', 'x', '-', '+', '='
];


describe('Calculator tests', () => {
    beforeEach(() => {
        calculator.clearScreen();
    });

    afterEach(() => {
        calculator.clearScreen();
    });

    describe('Click on digit button', () => {
        digitButtons.forEach((button) => {
            it(`Click on ${button} and on screen: ${button}`, () => {
                calculator.buttonAction(button);
                chai.expect(button).to.be.equal(+calculator.getValueOnScreen());
            });
        });
    });

    describe('Test clear button', () => {
        it('Click on digit and screen should be 0', () => {
            calculator.buttonAction('2');
            calculator.buttonAction('AC');
            chai.expect(0).to.be.equal(+calculator.getValueOnScreen());
        });

        it('Click on / and screen should be 0', () => {
            calculator.buttonAction('/');
            calculator.buttonAction('AC');
            chai.expect(0).to.be.equal(+calculator.getValueOnScreen());
        });

        it('Click on % and screen should be 0', () => {
            calculator.buttonAction('%');
            calculator.buttonAction('AC');
            chai.expect(0).to.be.equal(+calculator.getValueOnScreen());
        });
    });

    describe('Plus tests', () => {
        plusTests.forEach(example => {
            it(`${example.first} + ${example.second} = ${example.answer}`, () => {
                calculator.buttonAction(example.first);
                calculator.buttonAction('+');
                calculator.buttonAction(example.second);
                calculator.buttonAction('=');
                chai.expect(example.answer).to.be.equal(calculator.getValueOnScreen());
            });
        });
    });

    describe('Minus tests', () => {
        minusTests.forEach(example => {
            it(`${example.first} - ${example.second} = ${example.answer}`, () => {
                calculator.buttonAction(example.first);
                calculator.buttonAction('-');
                calculator.buttonAction(example.second);
                calculator.buttonAction('=');
                chai.expect(example.answer).to.be.equal(calculator.getValueOnScreen());
            });
        });
    });

    describe('Multiply tests', () => {
        multiplyTests.forEach(example => {
            it(`${example.first} * ${example.second} = ${example.answer}`, () => {
                calculator.buttonAction(example.first);
                calculator.buttonAction('x');
                calculator.buttonAction(example.second);
                calculator.buttonAction('=');
                chai.expect(example.answer).to.be.equal(calculator.getValueOnScreen());
            });
        });
    });

    describe('Simple division tests', () => {
        divisionTests.forEach(example => {
            it(`${example.first} / ${example.second} = ${example.answer}`, () => {
                calculator.buttonAction(example.first);
                calculator.buttonAction('/');
                calculator.buttonAction(example.second);
                calculator.buttonAction('=');
                chai.expect(example.answer).to.be.equal(calculator.getValueOnScreen());
            });
        });
    });

    describe('Division by 0 tests', () => {
        divisionByZeroTests.forEach(example => {
            it(`${example.first} / ${example.second} = ${example.answer}`, () => {
                calculator.buttonAction(example.first);
                calculator.buttonAction('/');
                calculator.buttonAction(example.second);
                calculator.buttonAction('=');
                chai.expect(example.answer).to.be.equal(calculator.getValueOnScreen());
            });
        });
    });

    describe('Percent tests', () => {
        percentTests.forEach(example => {
            it(`${example.first} % 100 = ${example.answer}`, () => {
                calculator.buttonAction(example.first);
                calculator.buttonAction('%');
                chai.expect(example.answer).to.be.equal(calculator.getValueOnScreen());
            });
        });
    });

    describe('Percent tests', () => {
        plusMinusTests.forEach(example => {
            it(`${example.first} +- = ${example.answer}`, () => {
                calculator.buttonAction(example.first);
                calculator.buttonAction('±');
                chai.expect(example.answer).to.be.equal(calculator.getValueOnScreen());
            });
        });
    });
});