import '../node_modules/chai/chai.js';
import Calculator from '../public/script.js';
const screen = document.createElement('div');
const calculator = new Calculator(screen);

import Tests from './Tests.js';
const tests = new Tests(calculator, screen, chai);
tests.runTests();