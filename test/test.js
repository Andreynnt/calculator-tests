import Calculator from '../dist/script.js';
var chai = require('chai');

class Screen {
    constructor() {
        this.innerHTML = '';
    }
}

const screen = new Screen();
const calculator = new Calculator(screen);

import Tests from './Tests.js';
const tests = new Tests(calculator, screen, chai);
tests.runTests();