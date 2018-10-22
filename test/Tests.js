import {
    divisionByZeroTests,
    divisionTests,
    minusTests,
    multiplyTests,
    percentTests,
    plusMinusTests,
    plusTests
} from "./examples.js";

export default class Tests {
    constructor(calculator, screen, chai) {
        this.calculator = calculator;
        this.calculator.digitButtons = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9
        ];
        this.screen = screen;
        this.chai = chai
    }

    runTests() {
        describe('Calculator tests', () => {
            beforeEach(() => {
                this.calculator.clearScreen();
            });

            afterEach(() => {
                this.calculator.clearScreen();
            });

            describe('Click on digit button', () => {
                this.calculator.digitButtons.forEach((button) => {
                    it(`Click on ${button} and on screen: ${button}`, () => {
                        this.calculator.buttonAction(button);
                        this.chai.expect(button).to.be.equal(+this.calculator.getValueOnScreen().toString());
                    });
                });
            });

            describe('Test clear button', () => {
                it('Click on digit and screen should be 0', () => {
                    this.calculator.buttonAction('2');
                    this.calculator.buttonAction('AC');
                    this.chai.expect('0').to.be.equal(this.calculator.getValueOnScreen());
                });

                it('Click on / and screen should be 0', () => {
                    this.calculator.buttonAction('/');
                    this.calculator.buttonAction('AC');
                    this.chai.expect('0').to.be.equal(this.calculator.getValueOnScreen());
                });

                it('Click on % and screen should be 0', () => {
                    this.calculator.buttonAction('%');
                    this.calculator.buttonAction('AC');
                    this.chai.expect('0').to.be.equal(this.calculator.getValueOnScreen());
                });
            });

            describe('Plus tests', () => {
                plusTests.forEach(example => {
                    it(`${example.first} + ${example.second} = ${example.answer}`, () => {
                        this.calculator.buttonAction(example.first);
                        this.calculator.buttonAction('+');
                        this.calculator.buttonAction(example.second);
                        this.calculator.buttonAction('=');
                        this.chai.expect(example.answer).to.be.equal(this.calculator.getValueOnScreen().toString());
                    });
                });
            });

            describe('Minus tests', () => {
                minusTests.forEach(example => {
                    it(`${example.first} - ${example.second} = ${example.answer}`, () => {
                        this.calculator.buttonAction(example.first);
                        this.calculator.buttonAction('-');
                        this.calculator.buttonAction(example.second);
                        this.calculator.buttonAction('=');
                        this.chai.expect(example.answer).to.be.equal(this.calculator.getValueOnScreen().toString());
                    });
                });
            });

            describe('Multiply tests', () => {
                multiplyTests.forEach(example => {
                    it(`${example.first} * ${example.second} = ${example.answer}`, () => {
                        this.calculator.buttonAction(example.first);
                        this.calculator.buttonAction('x');
                        this.calculator.buttonAction(example.second);
                        this.calculator.buttonAction('=');
                        this.chai.expect(example.answer).to.be.equal(this.calculator.getValueOnScreen().toString());
                    });
                });
            });

            describe('Simple division tests', () => {
                divisionTests.forEach(example => {
                    it(`${example.first} / ${example.second} = ${example.answer}`, () => {
                        this.calculator.buttonAction(example.first);
                        this.calculator.buttonAction('/');
                        this.calculator.buttonAction(example.second);
                        this.calculator.buttonAction('=');
                        this.chai.expect(example.answer).to.be.equal(this.calculator.getValueOnScreen().toString());
                    });
                });
            });

            describe('Division by 0 tests', () => {
                divisionByZeroTests.forEach(example => {
                    it(`${example.first} / ${example.second} = ${example.answer}`, () => {
                        this.calculator.buttonAction(example.first);
                        this.calculator.buttonAction('/');
                        this.calculator.buttonAction(example.second);
                        this.calculator.buttonAction('=');
                        this.chai.expect(example.answer).to.be.equal(this.calculator.getValueOnScreen().toString());
                    });
                });
            });

            describe('Percent tests', () => {
                percentTests.forEach(example => {
                    it(`${example.first} % 100 = ${example.answer}`, () => {
                        this.calculator.buttonAction(example.first);
                        this.calculator.buttonAction('%');
                        this.chai.expect(example.answer).to.be.equal(this.calculator.getValueOnScreen().toString());
                    });
                });
            });

            describe('Plus-minus tests', () => {
                plusMinusTests.forEach(example => {
                    it(`${example.first} +- = ${example.answer}`, () => {
                        this.calculator.buttonAction(example.first);
                        this.calculator.buttonAction('±');
                        this.chai.expect(example.answer).to.be.equal(this.calculator.getValueOnScreen().toString());
                    });
                });
            });
        });
    }
}
