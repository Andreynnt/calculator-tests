import {
    divisionByZeroTests,
    divisionTests,
    minusTests,
    multiplyTests,
    percentTests,
    plusMinusTests,
    plusTests,
    twoOperationsTests
} from "./examples.js";

export default class Tests {
    constructor(calculator, chai) {
        this.calculator = calculator;
        this.calculator.digitButtons = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9
        ];
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
                        let answer = this.calculator.buttonAction(button);
                        this.chai.expect(button).to.be.equal(+answer);
                    });
                });
            });

            describe('Press = on clear screen', () => {
                it('Click on = should be 0', () => {
                    const answer = this.calculator.buttonAction('=');
                    this.chai.expect('0').to.be.equal(answer);
                });
            });

            describe('AC then press on digit', () => {
                it('Should be one digit on screen', () => {
                    this.calculator.buttonAction('AC');
                    const answer = this.calculator.buttonAction(5);
                    this.chai.expect('5').to.be.equal(answer.toString());
                });
            });

            describe('Test clear button', () => {
                it('Click on digit and screen should be 0', () => {
                    this.calculator.buttonAction('2');
                    const answer = this.calculator.buttonAction('AC');
                    this.chai.expect('0').to.be.equal(answer);
                });

                it('Click on / and screen should be 0', () => {
                    this.calculator.buttonAction('/');
                    const answer = this.calculator.buttonAction('AC');
                    this.chai.expect('0').to.be.equal(answer);
                });

                it('Click on % and screen should be 0', () => {
                    this.calculator.buttonAction('%');
                    const answer = this.calculator.buttonAction('AC');
                    this.chai.expect('0').to.be.equal(answer);
                });
            });

            describe('Plus tests', () => {
                plusTests.forEach(example => {
                    it(`${example.first} + ${example.second} = ${example.answer}`, () => {
                        this.calculator.buttonAction(example.first);
                        this.calculator.buttonAction('+');
                        this.calculator.buttonAction(example.second);
                        const answer = this.calculator.buttonAction('=');
                        this.chai.expect(example.answer).to.be.equal(answer.toString());
                    });
                });
            });

            describe('Minus tests', () => {
                minusTests.forEach(example => {
                    it(`${example.first} - ${example.second} = ${example.answer}`, () => {
                        this.calculator.buttonAction(example.first);
                        this.calculator.buttonAction('-');
                        this.calculator.buttonAction(example.second);
                        const answer = this.calculator.buttonAction('=');
                        this.chai.expect(example.answer).to.be.equal(answer.toString());
                    });
                });
            });

            describe('Multiply tests', () => {
                multiplyTests.forEach(example => {
                    it(`${example.first} * ${example.second} = ${example.answer}`, () => {
                        this.calculator.buttonAction(example.first);
                        this.calculator.buttonAction('x');
                        this.calculator.buttonAction(example.second);
                        const answer = this.calculator.buttonAction('=');
                        this.chai.expect(example.answer).to.be.equal(answer.toString());
                    });
                });
            });

            describe('Simple division tests', () => {
                divisionTests.forEach(example => {
                    it(`${example.first} / ${example.second} = ${example.answer}`, () => {
                        this.calculator.buttonAction(example.first);
                        this.calculator.buttonAction('/');
                        this.calculator.buttonAction(example.second);
                        const answer = this.calculator.buttonAction('=');
                        this.chai.expect(example.answer).to.be.equal(answer.toString());
                    });
                });
            });

            describe('Division by 0 tests', () => {
                divisionByZeroTests.forEach(example => {
                    it(`${example.first} / ${example.second} = ${example.answer}`, () => {
                        this.calculator.buttonAction(example.first);
                        this.calculator.buttonAction('/');
                        this.calculator.buttonAction(example.second);
                        const answer = this.calculator.buttonAction('=');
                        this.chai.expect(example.answer).to.be.equal(answer.toString());
                    });
                });
            });

            describe('Percent tests', () => {
                percentTests.forEach(example => {
                    it(`${example.first} % 100 = ${example.answer}`, () => {
                        this.calculator.buttonAction(example.first);
                        const answer = this.calculator.buttonAction('%');
                        this.chai.expect(example.answer).to.be.equal(answer.toString());
                    });
                });
            });

            describe('Plus-minus tests', () => {
                plusMinusTests.forEach(example => {
                    it(`${example.first} +- = ${example.answer}`, () => {
                        this.calculator.buttonAction(example.first);
                        const answer = this.calculator.buttonAction('±');
                        this.chai.expect(example.answer).to.be.equal(answer);
                    });
                });
            });

            describe('Operation after operation', () => {
                twoOperationsTests.forEach(example => {
                    it(`${example.first} + ${example.second} + ${example.third} = ${example.answer}`, () => {
                        this.calculator.buttonAction(example.first);
                        this.calculator.buttonAction('+');
                        this.calculator.buttonAction(example.second);
                        this.calculator.buttonAction('+');
                        this.calculator.buttonAction(example.third);
                        const answer = this.calculator.buttonAction('=');
                        this.chai.expect(example.answer).to.be.equal(answer.toString());
                    });
                });
            });

            describe('Press digit after error', () => {
                it('Press digit after error', () => {
                    this.calculator.buttonAction('1');
                    this.calculator.buttonAction('/');
                    this.calculator.buttonAction('0');
                    this.calculator.buttonAction('=');
                    const answer = this.calculator.buttonAction('8');
                    this.chai.expect('0').to.be.equal(answer);
                });
            });
        });
    }
}
